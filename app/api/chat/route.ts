import { allowedLinks, systemPrompt } from '@/utils/chatContext';
import type { ChatLink } from '@/utils/chatbot';

// Tried in order; later models are used when earlier ones are overloaded.
const MODELS = [process.env.GEMINI_MODEL ?? 'gemini-flash-latest', 'gemini-3.8-flash', 'gemini-3.5-flash', 'gemini-flash-lite-latest'];
const RETRYABLE = new Set([404, 429, 500, 503, 504]);
const MAX_MESSAGES = 12;
const MAX_CHARS = 1000;

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 30;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_REQUESTS;
}

type IncomingMessage = {from: 'user' | 'bot';text: string;};

function isValid(body: unknown): body is {messages: IncomingMessage[];} {
  if (!body || typeof body !== 'object') return false;
  const { messages } = body as {messages?: unknown;};
  return (
    Array.isArray(messages) &&
    messages.length > 0 &&
    messages.length <= MAX_MESSAGES &&
    messages.every(
      (m) =>
      m &&
      (m.from === 'user' || m.from === 'bot') &&
      typeof m.text === 'string' &&
      m.text.length > 0 &&
      m.text.length <= MAX_CHARS
    ) &&
    messages[messages.length - 1].from === 'user');

}

/** Pull [Label](path) links out of the reply, keeping only allowed paths. */
function extractLinks(reply: string) {
  const links: ChatLink[] = [];
  const text = reply.
  replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, label: string, href: string) => {
    if (href in allowedLinks && !links.some((l) => l.href === href)) {
      const looksLikeUrl = /^(\/|https?:|mailto:)/.test(label.trim());
      links.push({ label: looksLikeUrl ? allowedLinks[href] : label, href, external: !href.startsWith('/') });
    }
    return '';
  }).
  replace(/\*\*/g, '').
  replace(/\n{3,}/g, '\n\n').
  trim();
  return { text, links };
}

export async function POST(request: Request) {
  const key = process.env.GEMINI_API_KEY;
  if (!key) return Response.json({ error: 'Chat is not configured' }, { status: 503 });

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? 'local';
  if (rateLimited(ip)) return Response.json({ error: 'Too many messages' }, { status: 429 });

  const body = await request.json().catch(() => null);
  if (!isValid(body)) return Response.json({ error: 'Invalid request' }, { status: 400 });

  // Gemini expects the conversation to start with a user turn.
  const turns = body.messages.slice(body.messages.findIndex((m) => m.from === 'user'));

  const payload = JSON.stringify({
    systemInstruction: { parts: [{ text: systemPrompt() }] },
    contents: turns.map((m) => ({ role: m.from === 'user' ? 'user' : 'model', parts: [{ text: m.text }] })),
    generationConfig: { temperature: 0.4, maxOutputTokens: 2048 }
  });

  let res: Response | undefined;
  for (const model of MODELS) {
    res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-goog-api-key': key },
      body: payload
    });
    if (res.ok || !RETRYABLE.has(res.status)) break;
  }
  if (!res) return Response.json({ error: 'The assistant is unavailable' }, { status: 502 });

  if (!res.ok) {
    const detail = await res.text().catch(() => '');
    console.error('Gemini error', res.status, detail);
    return Response.json(
      { error: 'The assistant is unavailable', ...(process.env.NODE_ENV === 'development' && { detail }) },
      { status: 502 }
    );
  }

  const data = await res.json();
  const reply: string | undefined = data?.candidates?.[0]?.content?.parts?.
  map((p: {text?: string;}) => p.text ?? '').
  join('');
  if (!reply?.trim()) return Response.json({ error: 'Empty reply' }, { status: 502 });

  return Response.json(extractLinks(reply));
}
