import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/db/supabase';
import { sendEmail } from '@/lib/email';
import { addContactInquiry } from '@/lib/store';

export async function POST(req: NextRequest) {
  try {
    const { name, email, purpose, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 });
    }

    // 1. Store in persistent store (handles both Supabase and local backup)
    const contact = await addContactInquiry({
      name,
      email,
      purpose,
      message,
    });

    // 2. Alert Admin Email (fail-safe)
    try {
      await sendEmail({
        to: process.env.ADMIN_NOTIFICATION_EMAIL || 'swapnil@magicworksitsolutions.com',
        subject: `[swapnilughade.com] Inbound Inquiry from ${name} (${purpose || 'General'})`,
        html: `
          <div style="font-family: sans-serif; color: #1F1420; padding: 20px;">
            <h3 style="color: #4B1F8C;">New Inbound Inquiry on swapnilughade.com</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Purpose:</strong> ${purpose || 'General'}</p>
            <p><strong>Message:</strong></p>
            <p style="background: #EDE3CE; padding: 12px; border-left: 3px solid #C89B3C;">${message}</p>
          </div>
        `,
      });
    } catch (mailErr) {
      console.warn('Admin notification email skipped:', mailErr);
    }

    // 4. Confirmation to Sender (fail-safe)
    try {
      await sendEmail({
        to: email,
        subject: 'Thank you for reaching out · Swapnil Ughade',
        html: `
          <div style="font-family: Georgia, serif; color: #1F1420; max-width: 600px; padding: 24px; background: #F5EFE3;">
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
