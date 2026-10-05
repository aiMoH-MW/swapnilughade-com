import { NextRequest, NextResponse } from 'next/server';
import { sendEmail, getAdminNotificationEmail } from '@/lib/email';
import { addContactInquiry, addSpeakingInquiry } from '@/lib/store';
import {
  contactSchema,
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
      console.info('[Contact] Bot caught by honeypot. Returning silent fake-success.');
      return NextResponse.json({
        success: true,
        message: 'Thank you. Your message has been dispatched to Swapnil Ughade.',
      });
    }

    // 2. Validate input schema with Zod
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      const issue = parsed.error.issues[0]?.message || 'Invalid form input.';
      return NextResponse.json({ error: issue }, { status: 400 });
    }

    const { name, email: rawEmail, purpose, message, token, _rendered_at } = parsed.data;

    // 3. Server-side Cloudflare Turnstile token verification
    const turnstileResult = await verifyTurnstileToken(token, clientIp);
    if (!turnstileResult.success) {
      return NextResponse.json({ error: turnstileResult.error || 'CAPTCHA verification failed.' }, { status: 400 });
    }

    // 4. Rate Limiting (max 3 submissions / IP / hour)
    const rateLimit = await checkRateLimit(clientIp, 'contact', 3);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: 'Too many submissions. Please wait a bit before sending another inquiry.' },
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
    const gibberishCheck = isGibberishName(name);
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

    // 6. Store in contacts table (Supabase + local backup)
    const contact = await addContactInquiry({
      name,
      email: normalizedEmailAddress,
      purpose,
      message,
      isSpam,
      spamReason: spamReasonStr,
    });

    // If inquiry purpose is speaking, also record in speaking_inquiries table
    if (purpose === 'speaking') {
      try {
        await addSpeakingInquiry({
          eventName: 'Direct Speaking Inquiry',
          locationOrVirtual: 'TBD',
          topicInterest: 'Keynotes & Briefings',
          contactName: name,
          contactEmail: normalizedEmailAddress,
          additionalNotes: message,
          isSpam,
          spamReason: spamReasonStr,
        });
      } catch (spkErr) {
        console.warn('Speaking inquiry record warning:', spkErr);
      }
    }

    // 7. Send Emails ONLY if not flagged as spam
    if (!isSpam) {
      // Alert Admin / Site Owner via SMTP
      try {
        await sendEmail({
          to: getAdminNotificationEmail(),
          replyTo: normalizedEmailAddress,
          subject: `[swapnilughade.com] Inbound Inquiry from ${name} (${purpose || 'General'})`,
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #1F1420; max-width: 600px; padding: 24px; border: 1px solid #D9D0BE; background: #FAF7F2; border-radius: 6px;">
              <div style="border-bottom: 2px solid #C89B3C; padding-bottom: 12px; margin-bottom: 20px;">
                <h2 style="color: #4B1F8C; margin: 0; font-size: 20px;">New Inbound Inquiry</h2>
                <p style="color: #7C6E68; font-size: 13px; margin: 4px 0 0;">Contact Form · swapnilughade.com</p>
              </div>
              <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 20px;">
                <tr>
                  <td style="padding: 8px 0; color: #7C6E68; width: 120px;"><strong>Name:</strong></td>
                  <td style="padding: 8px 0; color: #1F1420; font-weight: 600;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #7C6E68;"><strong>Email:</strong></td>
                  <td style="padding: 8px 0; color: #1F1420;"><a href="mailto:${normalizedEmailAddress}" style="color: #4B1F8C; font-weight: 600;">${normalizedEmailAddress}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #7C6E68;"><strong>Purpose:</strong></td>
                  <td style="padding: 8px 0; color: #1F1420;">${purpose || 'General'}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #7C6E68;"><strong>Timestamp:</strong></td>
                  <td style="padding: 8px 0; color: #1F1420;">${new Date().toISOString()}</td>
                </tr>
              </table>
              <div style="background: #EDE3CE; padding: 16px; border-left: 4px solid #C89B3C; border-radius: 4px;">
                <div style="font-weight: 600; font-size: 13px; color: #4B1F8C; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.05em;">Message:</div>
                <div style="white-space: pre-wrap; font-size: 14.5px; line-height: 1.6; color: #1F1420;">${message}</div>
              </div>
            </div>
          `,
        });
      } catch (mailErr) {
        console.warn('[Contact] Admin notification email skipped:', mailErr);
      }

      // Confirmation to Sender
      try {
        await sendEmail({
          to: normalizedEmailAddress,
          subject: 'Thank you for reaching out · Swapnil Ughade',
          html: `
            <div style="font-family: Georgia, serif; color: #1F1420; max-width: 600px; padding: 24px; background: #F5EFE3; border-radius: 4px;">
              <h3 style="font-size: 20px; color: #4B1F8C;">Note Received</h3>
              <p style="font-size: 16px; line-height: 1.6;">
                Hi ${name},<br/><br/>
                Thank you for your note. I review all speaking, consulting, and media inquiries personally and will respond promptly.
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
        console.warn('[Contact] Sender confirmation email skipped:', mailErr);
      }
    } else {
      console.info(`[Contact] Flagged suspicious inquiry from "${name}" (${spamReasonStr}) - saved without sending emails.`);
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you. Your message has been dispatched to Swapnil Ughade.',
      contact,
    });
  } catch (error: any) {
    console.error('[Contact] Error processing inquiry:', error);
    return NextResponse.json({ error: error.message || 'Server error' }, { status: 500 });
  }
}
