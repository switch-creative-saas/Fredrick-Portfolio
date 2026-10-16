import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
import { site } from '@/content/site';
import { DEFAULT_TOPIC, isContactTopic, topicLabel, topicPhrase, type ContactTopic } from '@/content/contact';
import {
  cleanHeader,
  contactConfirmationEmail,
  contactNotificationEmail,
  type ContactSubmission,
  type EmailContent,
} from '@/lib/email/contactEmails';

interface ContactRequestBody {
  name?: string;
  email?: string;
  message?: string;
  topic?: string;
  /** Honeypot field. Real visitors never see it, so any value means a bot. */
  company?: string;
}

const ipCache = new Map<string, { count: number; expires: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  if (ipCache.size > 500) {
    for (const [key, val] of ipCache.entries()) {
      if (now > val.expires) {
        ipCache.delete(key);
      }
    }
  }
  const record = ipCache.get(ip);
  if (!record || now > record.expires) {
    ipCache.set(ip, { count: 1, expires: now + 15 * 60 * 1000 });
    return false;
  }
  if (record.count >= 5) {
    return true;
  }
  record.count += 1;
  return false;
}

interface ResendEmail extends EmailContent {
  from: string;
  to: string;
  replyTo: string;
}

/** Sends one email through the Resend API. Returns an error message, or null on success. */
async function sendWithResend(apiKey: string, email: ResendEmail): Promise<string | null> {
  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: email.from,
        to: [email.to],
        reply_to: email.replyTo,
        subject: email.subject,
        html: email.html,
        text: email.text,
      }),
    });
    if (res.ok) return null;
    return `Resend ${res.status}: ${await res.text()}`;
  } catch (error) {
    return `Resend request failed: ${error instanceof Error ? error.message : String(error)}`;
  }
}

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || '127.0.0.1';

  if (isRateLimited(ip)) {
    return NextResponse.json(
      {
        success: false,
        error: 'Too many requests. Please try again later.',
      },
      { status: 429 }
    );
  }

  let name = '';
  let email = '';
  let message = '';
  let topic: ContactTopic = DEFAULT_TOPIC;
  let honeypot = '';

  try {
    const body = (await request.json()) as ContactRequestBody;
    name = body.name || '';
    email = body.email || '';
    message = body.message || '';
    topic = isContactTopic(body.topic) ? body.topic : DEFAULT_TOPIC;
    honeypot = typeof body.company === 'string' ? body.company : '';
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: 'Invalid JSON request body',
      },
      {
        status: 400,
      },
    );
  }

  // Pretend success so bots get no signal, but send nothing.
  if (honeypot.trim()) {
    return NextResponse.json({ success: true, message: 'Thank you! Your message has been sent successfully.' });
  }

  try {
    if (!name || !email || !message)
      return NextResponse.json(
        {
          success: false,
          error: 'All fields are required',
        },
        {
          status: 400,
        },
      );

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email))
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid email format',
        },
        {
          status: 400,
        },
      );

    const disposableDomains = [
      'tempmail.com',
      'guerrillamail.com',
      '10minutemail.com',
      'mailinator.com',
      'yopmail.com',
      'throwaway.email',
      'fakeinbox.com',
      'maildrop.cc',
      'temp-mail.org',
      'getnada.com',
      'trashmail.com',
      'sharklasers.com',
      'grr.la',
      'mintemail.com',
      'test.com',
      'example.com',
      'fake.com',
      'spam4.me',
      'emailondeck.com',
    ];

    const parts = email.split('@');
    if (parts.length < 2) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }

    const domain = parts[1].toLowerCase();
    if (disposableDomains.includes(domain))
      return NextResponse.json(
        {
          success: false,
          error: 'Disposable emails are not allowed',
        },
        {
          status: 400,
        },
      );

    const username = parts[0];
    if (username.length < 1 || username.length > 64)
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid email format',
        },
        {
          status: 400,
        },
      );

    const trimmedName = name.trim();
    if (trimmedName.length < 2) {
      return NextResponse.json(
        { success: false, error: 'Name must be at least 2 characters long' },
        { status: 400 }
      );
    }
    if (!/[a-zA-Z]/.test(trimmedName)) {
      return NextResponse.json(
        { success: false, error: 'Name must contain at least one letter' },
        { status: 400 }
      );
    }

    const trimmedMessage = message.trim();
    if (trimmedMessage.length < 30) {
      return NextResponse.json(
        { success: false, error: 'Please enter a meaningful message (at least 30 characters)' },
        { status: 400 }
      );
    }

    const submission: ContactSubmission = {
      name: trimmedName,
      email: cleanHeader(email.trim()),
      topicLabel: topicLabel(topic),
      topicPhrase: topicPhrase(topic),
      message: trimmedMessage,
    };
    const notification = contactNotificationEmail(submission);
    // Where form messages are delivered, and the address visitors' confirmations come from.
    const inbox = process.env.CONTACT_EMAIL || site.contactEmail;

    const resendKey = process.env.RESEND_API_KEY?.trim();
    if (resendKey) {
      const notifyError = await sendWithResend(resendKey, {
        ...notification,
        from: `Portfolio contact form <${site.contactEmail}>`,
        to: inbox,
        replyTo: submission.email,
      });

      if (!notifyError) {
        // The visitor's confirmation is a courtesy: if it fails, the message still reached the inbox.
        const confirmError = await sendWithResend(resendKey, {
          ...contactConfirmationEmail(submission),
          from: `${site.name} <${site.contactEmail}>`,
          to: submission.email,
          replyTo: inbox,
        });
        if (confirmError) console.error('Contact form confirmation email failed:', confirmError);

        return NextResponse.json({
          success: true,
          message: 'Thank you! Your message has been sent, and a confirmation is on its way to your inbox.',
        });
      }
      console.error('Contact form notification via Resend failed:', notifyError);
    }

    if (!process.env.GMAIL_APP_PASSWORD) {
      if (process.env.NODE_ENV === 'development') {
        const logDir = process.cwd();
        const logFile = path.join(logDir, 'messages.txt');
        const timestamp = new Date().toLocaleString('en-US', { timeZone: site.timeZone });
        const logEntry = `\n======================================\nDate: ${timestamp} ${site.timeZoneLabel}\nSubject: ${notification.subject}\nTopic: ${topicLabel(topic)}\nName: ${name}\nEmail: ${email}\nMessage: ${message}\n======================================\n`;
        fs.appendFileSync(logFile, logEntry, 'utf8');

        return NextResponse.json({
          success: true,
          message: 'Thank you! Your message has been sent successfully.',
        });
      }

      return NextResponse.json(
        {
          success: false,
          error: 'Server email configuration error.',
        },
        {
          status: 500,
        },
      );
    }

    // Fallback: Gmail SMTP. Signs in as GMAIL_USER (defaults to the published address).
    const gmailUser = process.env.GMAIL_USER || site.email;
    const cleanAppPassword = (process.env.GMAIL_APP_PASSWORD || '').replace(/\s+/g, '');

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: cleanAppPassword,
      },
      connectionTimeout: 4000,
      greetingTimeout: 4000,
      socketTimeout: 4000,
    });

    await transporter.sendMail({
      from: `"Portfolio contact form" <${gmailUser}>`,
      to: inbox,
      replyTo: submission.email,
      subject: notification.subject,
      html: notification.html,
      text: notification.text,
    });

    return NextResponse.json({
      success: true,
      message: 'Thank you! Your message has been sent successfully.',
    });
  } catch (error: any) {
    console.error('Contact form SMTP error:', error);

    if (process.env.NODE_ENV === 'development') {
      try {
        const logDir = process.cwd();
        const logFile = path.join(logDir, 'messages.txt');
        const timestamp = new Date().toLocaleString('en-US', { timeZone: site.timeZone });
        const logEntry = `\n======================================\nDate: ${timestamp} ${site.timeZoneLabel}\nTopic: ${topicLabel(topic)}\nName: ${name}\nEmail: ${email}\nMessage: ${message}\n======================================\n`;
        fs.appendFileSync(logFile, logEntry, 'utf8');

        return NextResponse.json({
          success: true,
          message: 'Thank you! Your message has been sent successfully.',
        });
      } catch (fsError) {
        console.error('Failed to write message to fallback file:', fsError);
      }
    }

    return NextResponse.json(
      {
        success: false,
        error: 'Failed to send message. Please try again later.',
      },
      {
        status: 500,
      },
    );
  }
}
