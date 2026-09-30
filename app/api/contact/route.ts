import { site } from '@/data/site';
import { contactEmailHtml, contactEmailSubject, contactEmailText } from '@/utils/contactEmail';

const SENDLIB_URL = 'https://sendlib.samueltuoyo.com/api/send';
const TO = process.env.CONTACT_TO ?? site.email;
const FROM = process.env.SENDLIB_FROM ?? `"TAZhealth Website" <${site.email}>`;

// Basic per-IP limit to protect the daily Gmail quota. Resets when the server restarts.
const WINDOW_MS = 60 * 60 * 1000;
const MAX_REQUESTS = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_REQUESTS;
}

const str = (v: unknown, max: number) => typeof v === 'string' ? v.trim().slice(0, max) : '';

export async function POST(request: Request) {
  const key = process.env.SENDLIB_API_KEY;
  if (!key) return Response.json({ error: 'Email is not configured' }, { status: 503 });

  const body = await request.json().catch(() => null);
  if (!body || typeof body !== 'object') return Response.json({ error: 'Invalid request' }, { status: 400 });

  // Honeypot: real visitors never see or fill this field.
  if (str(body.website, 200)) return Response.json({ ok: true });

  const submission = {
    name: str(body.name, 120),
    email: str(body.email, 200),
    message: str(body.message, 5000),
    topic: str(body.topic, 40) || undefined,
    page: str(body.page, 300) || undefined
  };
  if (!submission.name || !/^\S+@\S+\.\S+$/.test(submission.email) || submission.message.length < 10) {
    return Response.json({ error: 'Please check the form and try again.' }, { status: 400 });
  }

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? 'local';
  if (rateLimited(ip)) {
    return Response.json({ error: 'You’ve sent a few messages already. Please try again later.' }, { status: 429 });
  }

  const sentAt = new Date();
  const res = await fetch(SENDLIB_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${key}` },
    body: JSON.stringify({
      from: FROM,
      to: TO,
      replyTo: `"${submission.name.replace(/["<>]/g, '')}" <${submission.email}>`,
      subject: contactEmailSubject(submission),
      html: contactEmailHtml(submission, sentAt),
      text: contactEmailText(submission, sentAt)
    })
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => '');
    console.error('SendLib error', res.status, detail);
    return Response.json(
      {
        error: 'We couldn’t send your message. Please try again or email us directly.',
        ...(process.env.NODE_ENV === 'development' && { detail })
      },
      { status: 502 }
    );
  }

  return Response.json({ ok: true });
}
