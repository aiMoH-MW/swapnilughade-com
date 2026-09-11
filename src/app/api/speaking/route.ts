import { NextRequest, NextResponse } from 'next/server';
import { sendEmail, getAdminNotificationEmail } from '@/lib/email';
import { addSpeakingInquiry } from '@/lib/store';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const contactName = body.contactName || body.name;
    const contactEmail = body.contactEmail || body.email;
    const eventName = body.eventName || body.event_name || 'Speaking Engagement';
    const eventDate = body.eventDate || body.event_date;
    const locationOrVirtual = body.locationOrVirtual || body.location || 'TBD';
    const expectedAttendees = body.expectedAttendees ? Number(body.expectedAttendees) : undefined;
    const topicInterest = body.topicInterest || body.topic || 'Keynotes & Briefings';
    const additionalNotes = body.additionalNotes || body.message || body.notes || '';

    if (!contactName || !contactEmail) {
      return NextResponse.json(
        { error: 'Contact name and email are required.' },
        { status: 400 }
      );
    }

    // 1. Save to Supabase speaking_inquiries table (+ local backup)
    const inquiry = await addSpeakingInquiry({
      eventName,
      eventDate,
      locationOrVirtual,
      expectedAttendees,
      topicInterest,
      contactName,
      contactEmail,
      additionalNotes,
    });

    // 2. Alert Admin / Site Owner via SMTP (Amazon SES)
    try {
      await sendEmail({
        to: getAdminNotificationEmail(),
        replyTo: contactEmail,
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
                <td style="padding: 8px 0; color: #1F1420;"><a href="mailto:${contactEmail}" style="color: #4B1F8C; font-weight: 600;">${contactEmail}</a></td>
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
      console.warn('Admin speaking notification skipped:', mailErr);
    }

    // 3. Send Confirmation to Organizer (fail-safe)
    try {
      await sendEmail({
        to: contactEmail,
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
      console.warn('Sender speaking confirmation skipped:', mailErr);
    }

    return NextResponse.json({
      success: true,
      message: 'Speaking inquiry submitted successfully',
      inquiry,
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
