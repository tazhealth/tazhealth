import { socials } from '../data/site';

export type ContactSubmission = {
  name: string;
  email: string;
  message: string;
  topic?: string;
  page?: string;
};

const topicLabels: Record<string, string> = {
  volunteer: 'Volunteering',
  partner: 'Partnership',
  donate: 'Donation'
};

export const topicLabel = (topic?: string) => topic && topicLabels[topic] || 'General enquiry';

const escape = (s: string) =>
s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');

const formatDate = (d: Date) =>
d.toLocaleString('en-NG', {
  timeZone: 'Africa/Lagos',
  weekday: 'short',
  day: 'numeric',
  month: 'short',
  year: 'numeric',
  hour: 'numeric',
  minute: '2-digit'
});

export function contactEmailSubject(s: ContactSubmission) {
  return `${topicLabel(s.topic)} · New message from ${s.name}`;
}

export function contactEmailText(s: ContactSubmission, sentAt = new Date()) {
  return [
  `New message from the TAZhealth website`,
  ``,
  `Topic: ${topicLabel(s.topic)}`,
  `Name: ${s.name}`,
  `Email: ${s.email}`,
  `Received: ${formatDate(sentAt)} (WAT)`,
  ``,
  s.message,
  ``,
  `Reply to this email to respond to ${s.name} directly.`].
  join('\n');
}

// Email images must be publicly hosted. Set SITE_URL once the site is live on its own domain.
const ASSET_BASE = (process.env.SITE_URL ?? 'https://raw.githubusercontent.com/tazhealth/tazhealth/main/public').replace(/\/$/, '');

/**
 * Plain, email-client-safe HTML: one column, inline styles, no cards.
 * Light by default; clients that support prefers-color-scheme (Apple Mail, iOS Mail, Outlook) get a dark version.
 */
export function contactEmailHtml(s: ContactSubmission, sentAt = new Date()) {
  const name = escape(s.name);
  const email = escape(s.email);
  const firstName = escape(s.name.split(' ')[0]);
  const topic = escape(topicLabel(s.topic).toLowerCase());
  const message = escape(s.message).replace(/\r?\n/g, '<br />');
  const replyHref = `mailto:${encodeURIComponent(s.email)}?subject=${encodeURIComponent('Re: your message to TAZhealth')}`;
  const font = `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`;
  const text = 'margin:0 0 20px;font-size:16px;line-height:1.6;color:#111111;';
  const muted = 'font-size:15px;line-height:1.6;color:#6B6B6B;';
  const logo = (file: string, cls: string, hidden = false) =>
  `<img src="${ASSET_BASE}/${file}" width="120" height="48" alt="TAZhealth" class="${cls}" style="display:${hidden ? 'none' : 'block'};width:120px;height:auto;border:0;outline:none;text-decoration:none;${hidden ? 'mso-hide:all;max-height:0;overflow:hidden;' : ''}" />`;

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="color-scheme" content="light dark" />
  <meta name="supported-color-schemes" content="light dark" />
  <title>New message from ${name}</title>
  <style>
    :root { color-scheme: light dark; supported-color-schemes: light dark; }
    @media only screen and (max-width: 600px) {
      .container { padding: 32px 20px !important; }
      .divider { padding: 0 20px !important; }
      .button { display: block !important; text-align: center !important; }
    }
    @media (prefers-color-scheme: dark) {
      .bg { background: #121212 !important; }
      .fg { color: #F2F2F2 !important; }
      .muted { color: #A3A3A3 !important; }
      .quote { border-left-color: #3DBE6A !important; }
      .rule { border-top-color: #2E2E2E !important; }
      .button { background: #F2F2F2 !important; color: #121212 !important; }
      .logo-light { display: none !important; }
      .logo-dark { display: block !important; max-height: none !important; }
    }
    /* Outlook.com dark mode */
    [data-ogsc] .fg { color: #F2F2F2 !important; }
    [data-ogsc] .muted { color: #A3A3A3 !important; }
    [data-ogsc] .button { background: #F2F2F2 !important; color: #121212 !important; }
    [data-ogsc] .logo-light { display: none !important; }
    [data-ogsc] .logo-dark { display: block !important; max-height: none !important; }
  </style>
</head>
<body class="bg" style="margin:0;padding:0;background:#FFFFFF;font-family:${font};-webkit-text-size-adjust:100%;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escape(s.message.slice(0, 120))}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="bg" style="background:#FFFFFF;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;">
          <tr>
            <td class="container" style="padding:48px 40px 32px;text-align:left;">
              <div style="margin:0 0 36px;">
                ${logo('logo.png', 'logo-light')}
                ${logo('logo-light.png', 'logo-dark', true)}
              </div>

              <p class="fg" style="${text}">Hi TAZhealth team,</p>
              <p class="fg" style="${text}"><strong>${name}</strong> sent a ${topic} message through the website:</p>
              <p class="fg quote" style="margin:0 0 28px;padding-left:16px;border-left:3px solid #098933;font-size:16px;line-height:1.65;color:#111111;">${message}</p>

              <p class="muted" style="margin:0 0 4px;${muted}">Email: <a href="mailto:${email}" class="fg" style="color:#111111;">${email}</a></p>
              <p class="muted" style="margin:0 0 28px;${muted}">Received: ${escape(formatDate(sentAt))} (WAT)</p>

              <a href="${replyHref}" class="button" style="display:inline-block;background:#111111;color:#FFFFFF;font-size:16px;font-weight:600;text-decoration:none;padding:14px 28px;border-radius:6px;">Reply to ${firstName}</a>

            </td>
          </tr>
          <tr>
            <td class="divider" style="padding:0 40px;">
              <div class="rule" style="border-top:1px solid #E5E5E5;"></div>
            </td>
          </tr>
          <tr>
            <td class="container" style="padding:24px 40px 48px;text-align:left;">
              <table role="presentation" cellpadding="0" cellspacing="0">
                <tr>${socials.
  map(
    (so, i) =>
    `<td style="padding:0 ${i === socials.length - 1 ? 0 : 18}px 0 0;"><a href="${so.href}" style="display:block;text-decoration:none;"><img src="${ASSET_BASE}/email/${so.key}.png" width="22" height="22" alt="${escape(so.label)}" style="display:block;width:22px;height:22px;border:0;" /></a></td>`
  ).
  join('')}</tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
