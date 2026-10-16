import { BRAND } from '@/lib/brand';
import { site } from '@/content/site';

/**
 * Emails sent by the contact form. Both are plain table HTML with inline styles so they
 * render the same in Gmail, Outlook and Apple Mail, plus a text version for every client.
 */

export interface ContactSubmission {
  name: string;
  email: string;
  topicLabel: string;
  /** Completes "getting in touch about ..."; empty for no specific topic. */
  topicPhrase: string;
  message: string;
}

export interface EmailContent {
  subject: string;
  html: string;
  text: string;
}

export function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/** Strips line breaks so user input can never inject extra headers into a subject line. */
export function cleanHeader(input: string): string {
  return input.replace(/[\r\n]/g, '').trim();
}

const FONT = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

/** Shared outer frame: ink header with the name, cream body card, small footer. */
function layout({ preheader, body }: { preheader: string; body: string }): string {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light">
<title>${escapeHtml(site.name)}</title>
</head>
<body style="margin:0;padding:0;background:${BRAND.cream};">
<span style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(preheader)}</span>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${BRAND.cream};">
  <tr>
    <td align="center" style="padding:32px 16px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;">
        <tr>
          <td style="background:${BRAND.ink};border-radius:16px 16px 0 0;padding:28px 32px;">
            <p style="margin:0;font-family:${FONT};font-size:20px;font-weight:700;letter-spacing:-0.3px;color:${BRAND.cream};">
              ${escapeHtml(site.firstName)} <span style="color:${BRAND.accent};">${escapeHtml(site.lastName)}</span>
            </p>
          </td>
        </tr>
        <tr>
          <td style="background:#FFFFFF;border-radius:0 0 16px 16px;padding:32px;font-family:${FONT};font-size:16px;line-height:1.6;color:${BRAND.ink};">
            ${body}
          </td>
        </tr>
        <tr>
          <td style="padding:20px 32px;font-family:${FONT};font-size:12px;line-height:1.5;color:#4A4B63;text-align:center;">
            <a href="${site.url}" style="color:#4A4B63;">${escapeHtml(site.url.replace(/^https?:\/\//, ''))}</a>
            &nbsp;·&nbsp; ${escapeHtml(site.location)}
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`;
}

function quotedMessage(message: string): string {
  return `<div style="margin:16px 0 0;padding:16px 20px;border-left:3px solid ${BRAND.accent};background:${BRAND.cream};border-radius:8px;white-space:pre-wrap;">${escapeHtml(
    message
  )}</div>`;
}

/** Sent to Fredrick when someone submits the form. Reply-to is the visitor. */
export function contactNotificationEmail(s: ContactSubmission): EmailContent {
  const subject = `[Portfolio · ${s.topicLabel}] ${cleanHeader(s.name)}`;
  const row = (label: string, value: string) =>
    `<tr><td style="padding:6px 16px 6px 0;color:#4A4B63;font-size:13px;text-transform:uppercase;letter-spacing:1px;white-space:nowrap;vertical-align:top;">${label}</td><td style="padding:6px 0;">${value}</td></tr>`;

  const body = `
    <p style="margin:0 0 20px;font-size:18px;font-weight:700;">New message from the contact form</p>
    <table role="presentation" cellpadding="0" cellspacing="0">
      ${row('Topic', escapeHtml(s.topicLabel))}
      ${row('Name', escapeHtml(s.name))}
      ${row('Email', `<a href="mailto:${escapeHtml(s.email)}" style="color:${BRAND.accent};">${escapeHtml(s.email)}</a>`)}
    </table>
    ${quotedMessage(s.message)}
    <p style="margin:20px 0 0;font-size:13px;color:#4A4B63;">Reply to this email to answer ${escapeHtml(s.name)} directly.</p>`;

  const text = [
    'New message from the contact form',
    '',
    `Topic: ${s.topicLabel}`,
    `Name: ${s.name}`,
    `Email: ${s.email}`,
    '',
    s.message,
  ].join('\n');

  return { subject, html: layout({ preheader: `${s.name}: ${s.message.slice(0, 80)}`, body }), text };
}

/** Sent to the visitor to confirm their message arrived. Reply-to is Fredrick. */
export function contactConfirmationEmail(s: ContactSubmission): EmailContent {
  const firstName = cleanHeader(s.name).split(/\s+/)[0] || cleanHeader(s.name);
  const subject = `Got your message, ${firstName}`;
  const aboutTopic = s.topicPhrase ? ` about ${s.topicPhrase}` : '';

  const body = `
    <p style="margin:0 0 16px;">Hi ${escapeHtml(firstName)},</p>
    <p style="margin:0 0 16px;">Thanks for getting in touch${escapeHtml(aboutTopic)}. Your message has reached me, and I will reply to you personally at this email address.</p>
    <p style="margin:0 0 16px;">If you want to add anything, just reply to this email.</p>
    <p style="margin:24px 0 0;font-size:13px;text-transform:uppercase;letter-spacing:1px;color:#4A4B63;">What you sent</p>
    ${quotedMessage(s.message)}
    <p style="margin:28px 0 0;">${escapeHtml(site.name)}</p>
    <p style="margin:2px 0 0;font-size:14px;color:#4A4B63;">Founder, VitaLink &nbsp;·&nbsp; Public Health, Miva Open University</p>`;

  const text = [
    `Hi ${firstName},`,
    '',
    `Thanks for getting in touch${aboutTopic}. Your message has reached me, and I will reply to you personally at this email address.`,
    '',
    'If you want to add anything, just reply to this email.',
    '',
    'What you sent:',
    s.message,
    '',
    site.name,
    'Founder, VitaLink · Public Health, Miva Open University',
    site.url,
  ].join('\n');

  return {
    subject,
    html: layout({ preheader: 'Your message reached me. I will reply personally.', body }),
    text,
  };
}
