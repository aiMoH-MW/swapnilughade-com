import nodemailer from 'nodemailer';
import { Resend } from 'resend';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

export interface EmailPayload {
  to: string;
  subject: string;
  html: string;
  text?: string;
  from?: string;
  replyTo?: string;
}

export function getAdminNotificationEmail(): string {
  return process.env.ADMIN_NOTIFICATION_EMAIL || 'swapnil@swapnilughade.com';
}

export async function sendEmail({ to, subject, html, text, from, replyTo }: EmailPayload) {
  const provider = process.env.EMAIL_PROVIDER || 'smtp';
  const defaultFrom =
    from ||
    process.env.SMTP_FROM ||
    process.env.EMAIL_FROM ||
    'Swapnil Ughade <contact@swapnilughade.com>';

  // 1. Resend Provider
  if (provider === 'resend' && process.env.RESEND_API_KEY) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const result = await resend.emails.send({
      from: defaultFrom,
      to,
      subject,
      html,
      text: text || html.replace(/<[^>]+>/g, ''),
      replyTo: replyTo,
    });
    return { success: true, provider: 'resend', id: result.data?.id };
  }

  // 2. Amazon SES Provider (Direct AWS SDK)
  if (provider === 'ses' && process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY) {
    const ses = new SESClient({
      region: process.env.AWS_REGION || 'ap-south-1',
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      },
    });

    const command = new SendEmailCommand({
      Source: defaultFrom,
      Destination: { ToAddresses: [to] },
      ReplyToAddresses: replyTo ? [replyTo] : undefined,
      Message: {
        Subject: { Data: subject },
        Body: {
          Html: { Data: html },
          Text: { Data: text || html.replace(/<[^>]+>/g, '') },
        },
      },
    });

    const response = await ses.send(command);
    return { success: true, provider: 'ses', messageId: response.MessageId };
  }

  // 3. SMTP Transport via Nodemailer (Amazon SES / SMTP with STARTTLS on port 587)
  if (process.env.SMTP_HOST && process.env.SMTP_USER) {
    const port = Number(process.env.SMTP_PORT) || 587;
    const isSecure = port === 465;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: isSecure, // false for port 587
      requireTLS: !isSecure, // Enforces STARTTLS upgrade on port 587 for Amazon SES
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: true,
        minVersion: 'TLSv1.2',
      },
    });

    const info = await transporter.sendMail({
      from: defaultFrom,
      to,
      replyTo,
      subject,
      html,
      text: text || html.replace(/<[^>]+>/g, ''),
    });

    return { success: true, provider: 'smtp', messageId: info.messageId };
  }

  // Fallback logging for local testing without active credentials
  console.log(`[Email Mock Dispatch -> ${provider}] To: ${to} | Subject: ${subject}`);
  return { success: true, provider: 'mock_console' };
}
