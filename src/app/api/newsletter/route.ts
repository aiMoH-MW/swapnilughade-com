import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/db/supabase';
import { sendEmail } from '@/lib/email';
import { addNewsletterSubscriber } from '@/lib/store';

export async function POST(req: NextRequest) {
  try {
    let email = '';
    let source = 'website';

    const contentType = req.headers.get('content-type') || '';
    if (contentType.includes('application/json')) {
      const body = await req.json();
      email = body.email;
      source = body.source || 'website';
    } else if (contentType.includes('application/x-www-form-urlencoded') || contentType.includes('multipart/form-data')) {
      const formData = await req.formData();
      email = formData.get('email')?.toString() || '';
      source = formData.get('source')?.toString() || 'website';
    }

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email is required.' }, { status: 400 });
    }

    // 1. Store in local persistent storage
    const subscriber = await addNewsletterSubscriber(email, source);

    // 2. Insert into Supabase if configured
    try {
      await supabaseAdmin
        .from('newsletter_subscribers')
        .upsert({ email: subscriber.email, source: subscriber.source, status: 'active' }, { onConflict: 'email' });
    } catch (dbError: any) {
      console.warn('Supabase subscription warning:', dbError.message);
    }

    // 3. Send Welcome Email (fail-safe)
    try {
      await sendEmail({
        to: email,
        subject: 'Welcome to The Letter by Swapnil Ughade',
        html: `
          <div style="font-family: Georgia, serif; color: #1F1420; max-width: 600px; margin: 0 auto; padding: 24px; background: #F5EFE3;">
            <h2 style="font-size: 24px; color: #4B1F8C; margin-bottom: 16px;">Welcome to The Letter</h2>
            <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
              Thank you for subscribing. You will receive long-form notes every second Sunday on AI-first marketing, platform consultation, and the founder's operating thesis.
            </p>
            <p style="font-size: 14px; color: #7C6E68;">
              Reply to this email anytime to reach me directly.<br/><br/>
              <strong>Swapnil Ughade</strong><br/>
              Founder & MD, MagicWorks IT Solutions Pvt. Ltd. · Ideovate Research
            </p>
          </div>
        `,
      });
    } catch (mailErr) {
      console.warn('Email sending skipped:', mailErr);
    }

    // If submitted via standard HTML form POST, redirect back with query param or return JSON
    if (contentType.includes('application/x-www-form-urlencoded') || contentType.includes('multipart/form-data')) {
      return NextResponse.redirect(new URL('/?subscribed=true#the-letter', req.url));
    }

    return NextResponse.json({ success: true, message: 'Subscribed successfully', subscriber });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 });
  }
}
