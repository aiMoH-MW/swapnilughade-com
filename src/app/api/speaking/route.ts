import { NextRequest, NextResponse } from 'next/server';
import { sendEmail, getAdminNotificationEmail } from '@/lib/email';
import { addSpeakingInquiry } from '@/lib/store';
import {
  speakingSchema,
  verifyTurnstileToken,
  normalizeEmail,
  isDisposableEmail,
  hasExcessiveDots,
  isGibberishName,
  isValidTimeDelta,
  checkRateLimit,
  extractClientIp,
} from '@/lib/security/validation';

export async function POST(req: NextRequest) {
  try {
    const clientIp = extractClientIp(req.headers);
    const body = await req.json();

    // 1. Honeypot check: If filled by automated bot, return fake success
    if (body.website_url_hp && body.website_url_hp.trim() !== '') {
      console.info('[Speaking] Bot caught by honeypot. Returning silent fake-success.');
      return NextResponse.json({
        success: true,
        message: 'Speaking inquiry submitted successfully',
      });
    }

    // 2. Validate input schema with Zod
    const payload = {
      contactName: body.contactName || body.name,
      contactEmail: body.contactEmail || body.email,
      eventName: body.eventName || body.event_name,
      eventDate: body.eventDate || body.event_date,
      locationOrVirtual: body.locationOrVirtual || body.location,
      expectedAttendees: body.expectedAttendees ? Number(body.expectedAttendees) : undefined,
      topicInterest: body.topicInterest || body.topic,
      additionalNotes: body.additionalNotes || body.message || body.notes,
      website_url_hp: body.website_url_hp,
      token: body.token,
      _rendered_at: body._rendered_at,
    };

    const parsed = speakingSchema.safeParse(payload);
    if (!parsed.success) {
      const issue = parsed.error.issues[0]?.message || 'Invalid form input.';
      return NextResponse.json({ error: issue }, { status: 400 });
    }

    const {
      contactName,
      contactEmail: rawEmail,
      eventName,
      eventDate,
      locationOrVirtual,
      expectedAttendees,
      topicInterest,
      additionalNotes,
      token,
      _rendered_at,
    } = parsed.data;

    // 3. Server-side Cloudflare Turnstile verification
    const turnstileResult = await verifyTurnstileToken(token, clientIp);
    if (!turnstileResult.success) {
      return NextResponse.json({ error: turnstileResult.error || 'CAPTCHA verification failed.' }, { status: 400 });
    }

    // 4. Rate Limiting (max 3 submissions / IP / hour)
    const rateLimit = await checkRateLimit(clientIp, 'speaking', 3);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: 'Too many submissions. Please wait before submitting another speaking inquiry.' },
        { status: 429 }
      );
    }

    // 5. Spam heuristic checks
    let isSpam = false;
    const spamReasons: string[] = [];

    // Speed check
    const timeCheck = isValidTimeDelta(_rendered_at, 3);
    if (!timeCheck.isValid && _rendered_at) {
      isSpam = true;
      spamReasons.push(`Inhuman speed (${timeCheck.elapsedSeconds.toFixed(1)}s)`);
    }

    // Gibberish / bot name check
    const gibberishCheck = isGibberishName(contactName);
    if (gibberishCheck.isSpam) {
      isSpam = true;
      spamReasons.push(gibberishCheck.reason || 'Gibberish name pattern');
    }

    // Disposable email check
    if (isDisposableEmail(rawEmail)) {
      isSpam = true;
      spamReasons.push('Disposable email domain');
    }

    // Excessive Gmail dot padding check
    if (hasExcessiveDots(rawEmail)) {
      isSpam = true;
      spamReasons.push('Excessive dot patterns in Gmail address');
    }

    const normalizedEmailAddress = normalizeEmail(rawEmail);
    const spamReasonStr = spamReasons.length > 0 ? spamReasons.join('; ') : null;

    // 6. Save to Supabase speaking_inquiries table (+ local backup)
    const inquiry = await addSpeakingInquiry({
      eventName,
      eventDate,
      locationOrVirtual,
      expectedAttendees,
      topicInterest,
      contactName,
      contactEmail: normalizedEmailAddress,
      additionalNotes,
      isSpam,
      spamReason: spamReasonStr,
    });

    // 7. Send Emails ONLY if not flagged as spam
    if (!isSpam) {
      // Alert Admin / Site Owner via SMTP
      try {
        await sendEmail({
          to: getAdminNotificationEmail(),
          replyTo: normalizedEmailAddress,
          subject: `[swapnilughade.com] Speaking Inquiry: ${contactName} - ${eventName}`,
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #1F1420; max-width: 600px; padding: 24px; border: 1px solid #D9D0BE; background: #FAF7F2; border-radius: 6px;">
              <div style="border-bottom: 2px solid #C89B3C; padding-bottom: 12px; margin-bottom: 20px;">
                <h2 style="color: #4B1F8C; margin: 0; font-size: 20px;">New Speaking Inquiry</h2>
                <p style="color: #7C6E68; font-size: 13px; margin: 4px 0 0;">Speaking &amp; Keynotes · swapnilughade.com</p>
              </div>
              <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 20px;">
                <tr>
                  <td style="padding: 8px 0; color: #7C6E68; width: 140px;"><strong>Contact Name:</strong></td>
                  <td style="padding: 8px 0; color: #1F1420; font-weight: 600;">${contactName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #7C6E68;"><strong>Contact Email:</strong></td>
                  <td style="padding: 8px 0; color: #1F1420;"><a href="mailto:${normalizedEmailAddress}" style="color: #4B1F8C; font-weight: 600;">${normalizedEmailAddress}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #7C6E68;"><strong>Event Name:</strong></td>
                  <td style="padding: 8px 0; color: #1F1420;">${eventName}</td>
                </tr>
                ${eventDate ? `<tr><td style="padding: 8px 0; color: #7C6E68;"><strong>Event Date:</strong></td><td style="padding: 8px 0; color: #1F1420;">${eventDate}</td></tr>` : ''}
                <tr>
                  <td style="padding: 8px 0; color: #7C6E68;"><strong>Location:</strong></td>
                  <td style="padding: 8px 0; color: #1F1420;">${locationOrVirtual}</td>
                </tr>
                ${expectedAttendees ? `<tr><td style="padding: 8px 0; color: #7C6E68;"><strong>Attendees:</strong></td><td style="padding: 8px 0; color: #1F1420;">${expectedAttendees}</td></tr>` : ''}
                <tr>
                  <td style="padding: 8px 0; color: #7C6E68;"><strong>Topic Interest:</strong></td>
                  <td style="padding: 8px 0; color: #1F1420;">${topicInterest}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #7C6E68;"><strong>Timestamp:</strong></td>
                  <td style="padding: 8px 0; color: #1F1420;">${new Date().toISOString()}</td>
                </tr>
              </table>
              ${additionalNotes ? `
                <div style="background: #EDE3CE; padding: 16px; border-left: 4px solid #C89B3C; border-radius: 4px;">
                  <div style="font-weight: 600; font-size: 13px; color: #4B1F8C; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.05em;">Notes &amp; Context:</div>
                  <div style="white-space: pre-wrap; font-size: 14.5px; line-height: 1.6; color: #1F1420;">${additionalNotes}</div>
                </div>
              ` : ''}
            </div>
          `,
        });
      } catch (mailErr) {
        console.warn('[Speaking] Admin speaking notification skipped:', mailErr);
      }

      // Send Confirmation to Organizer
      try {
        await sendEmail({
          to: normalizedEmailAddress,
          subject: 'Speaking Inquiry Received · Swapnil Ughade',
          html: `
            <div style="font-family: Georgia, serif; color: #1F1420; max-width: 600px; padding: 24px; background: #F5EFE3; border-radius: 4px;">
              <h3 style="font-size: 20px; color: #4B1F8C;">Speaking Inquiry Received</h3>
              <p style="font-size: 16px; line-height: 1.6;">
                Hi ${contactName},<br/><br/>
                Thank you for considering me for <strong>${eventName}</strong>. I review all keynote invitations personally and will get back to you with my availability and topic details shortly.
              </p>
              <p style="font-size: 14px; color: #7C6E68; margin-top: 24px;">
                Warmly,<br/>
                <strong>Swapnil Ughade</strong><br/>
                Pune, India
              </p>
            </div>
          `,
        });
      } catch (mailErr) {
        console.warn('[Speaking] Sender speaking confirmation skipped:', mailErr);
      }
    } else {
      console.info(`[Speaking] Flagged suspicious speaking inquiry from "${contactName}" (${spamReasonStr}) - saved without sending emails.`);
    }

    return NextResponse.json({
      success: true,
      message: 'Speaking inquiry submitted successfully',
      inquiry,
    });
  } catch (error: any) {
    console.error('[Speaking] Error processing speaking inquiry:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
