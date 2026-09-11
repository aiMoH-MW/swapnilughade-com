import { NextRequest, NextResponse, after } from 'next/server';
import { sendEmail, getAdminNotificationEmail } from '@/lib/email';
import { addNewsletterSubscriber } from '@/lib/store';

// Helper function executed in the background (fire-and-forget)
async function sendBackgroundNewsletterEmails(email: string, source: string) {
  // 1. Alert Admin / Site Owner via SMTP
  try {
    await sendEmail({
      to: getAdminNotificationEmail(),
      subject: `[swapnilughade.com] New Newsletter Subscriber: ${email}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #1F1420; max-width: 600px; padding: 24px; border: 1px solid #D9D0BE; background: #FAF7F2; border-radius: 6px;">
          <div style="border-bottom: 2px solid #C89B3C; padding-bottom: 12px; margin-bottom: 20px;">
            <h2 style="color: #4B1F8C; margin: 0; font-size: 20px;">New Newsletter Subscription</h2>
            <p style="color: #7C6E68; font-size: 13px; margin: 4px 0 0;">The Letter · swapnilughade.com</p>
          </div>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 8px 0; color: #7C6E68; width: 120px;"><strong>Subscriber:</strong></td>
              <td style="padding: 8px 0; color: #1F1420;"><a href="mailto:${email}" style="color: #4B1F8C; font-weight: 600;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #7C6E68;"><strong>Source:</strong></td>
              <td style="padding: 8px 0; color: #1F1420;">${source}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #7C6E68;"><strong>Timestamp:</strong></td>
              <td style="padding: 8px 0; color: #1F1420;">${new Date().toISOString()}</td>
            </tr>
          </table>
        </div>
      `,
    });
  } catch (mailErr) {
    console.warn('[Newsletter] Admin notification skipped / logged silently:', mailErr);
  }

  // 2. Send Welcome Email to Subscriber
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
    console.warn('[Newsletter] Subscriber welcome email skipped / logged silently:', mailErr);
  }
}

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

    // 1. Store in persistent store / Supabase (synchronous requirement for success)
    const subscriber = await addNewsletterSubscriber(email, source);

    // 2. Trigger emails in background (fire-and-forget, non-blocking)
    if (typeof after === 'function') {
      after(async () => {
        await sendBackgroundNewsletterEmails(email, source);
      });
    } else {
      sendBackgroundNewsletterEmails(email, source).catch((err) => {
        console.warn('[Newsletter] Background email failed silently:', err);
      });
    }

    // 3. Respond immediately with success
    if (contentType.includes('application/x-www-form-urlencoded') || contentType.includes('multipart/form-data')) {
      const referer = req.headers.get('referer');
      let targetUrl: URL;
      if (referer) {
        try {
          targetUrl = new URL(referer);
          targetUrl.searchParams.set('subscribed', 'true');
          targetUrl.hash = 'the-letter';
        } catch {
          targetUrl = new URL('/?subscribed=true#the-letter', req.url);
        }
      } else {
        targetUrl = new URL('/?subscribed=true#the-letter', req.url);
      }
      return NextResponse.redirect(targetUrl, 303);
    }

    return NextResponse.json({ success: true, message: 'Subscribed successfully', subscriber });
  } catch (error: any) {
    console.error('[Newsletter] Database save error:', error);
    return NextResponse.json({ error: error.message || 'Subscription failed. Please try again.' }, { status: 500 });
  }
}
