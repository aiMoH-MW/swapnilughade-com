import nodemailer from 'nodemailer';
import { Resend } from 'resend';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

interface EmailPayload {
  to: string;
  subject: string;
  html: string;
  text?: string;
  from?: string;
}

export async function sendEmail({ to, subject, html, text, from }: EmailPayload) {
  const provider = process.env.EMAIL_PROVIDER || 'smtp';
  const defaultFrom = from || process.env.EMAIL_FROM || 'Swapnil Ughade <contact@swapnilughade.com>';

  // 1. Resend Provider
  if (provider === 'resend' && process.env.RESEND_API_KEY) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const result = await resend.emails.send({
      from: defaultFrom,
      to,
      subject,
      html,
      text: text || html.replace(/<[^>]+>/g, ''),
    });
    return { success: true, provider: 'resend', id: result.data?.id };
  }

  // 2. Amazon SES Provider
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

  // 3. Custom SMTP (Default)
  if (process.env.SMTP_HOST && process.env.SMTP_USER) {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const info = await transporter.sendMail({
      from: defaultFrom,
      to,
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
