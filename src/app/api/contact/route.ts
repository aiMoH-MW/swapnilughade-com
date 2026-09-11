import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/db/supabase';
import { sendEmail, getAdminNotificationEmail } from '@/lib/email';
import { addContactInquiry, addSpeakingInquiry } from '@/lib/store';

export async function POST(req: NextRequest) {
  try {
    const { name, email, purpose, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 });
    }

    // 1. Store in contacts table (Supabase + local backup)
    const contact = await addContactInquiry({
      name,
      email,
      purpose,
      message,
    });

    // If inquiry purpose is speaking, also record in speaking_inquiries table
    if (purpose === 'speaking') {
      try {
        await addSpeakingInquiry({
          eventName: 'Direct Speaking Inquiry',
          locationOrVirtual: 'TBD',
          topicInterest: 'Keynotes & Briefings',
          contactName: name,
          contactEmail: email,
          additionalNotes: message,
        });
      } catch (spkErr) {
        console.warn('Speaking inquiry record warning:', spkErr);
      }
    }

    // 2. Alert Admin / Site Owner via SMTP (fail-safe)
    try {
      await sendEmail({
        to: getAdminNotificationEmail(),
        replyTo: email,
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
                <td style="padding: 8px 0; color: #1F1420;"><a href="mailto:${email}" style="color: #4B1F8C; font-weight: 600;">${email}</a></td>
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
      console.warn('Admin notification email skipped:', mailErr);
    }

    // 3. Confirmation to Sender (fail-safe)
    try {
      await sendEmail({
        to: email,
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
      console.warn('Sender confirmation email skipped:', mailErr);
    }

    return NextResponse.json({ success: true, message: 'Inquiry received successfully', contact });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Server error' }, { status: 500 });
  }
}
