'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpIcon, ArrowUpRightIcon, MessageCircleIcon, XIcon } from 'lucide-react';
import { getReply, quickReplies, welcome } from '../../utils/chatbot';
import type { BotReply } from '../../utils/chatbot';
import { EASE } from '../../utils/motion';

type Message = ({from: 'bot';} & BotReply) | {from: 'user';text: string;};

function BotAvatar() {
  return (
    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white ring-1 ring-ink/10" aria-hidden="true">
      <img src="/chat-avatar.png" alt="" className="h-5 w-5 object-contain" />
    </span>);

}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{ from: 'bot', ...welcome }]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  // On phones the panel is full screen and follows the visible area, so the keyboard never covers the input.
  const [viewport, setViewport] = useState<{height: number;top: number;} | null>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);

    const mobile = window.matchMedia('(max-width: 639px)').matches;
    if (!mobile) {
      inputRef.current?.focus();
      return () => window.removeEventListener('keydown', onKey);
    }

    document.body.style.overflow = 'hidden';
    const vv = window.visualViewport;
    const sync = () => setViewport({ height: vv?.height ?? window.innerHeight, top: vv?.offsetTop ?? 0 });
    sync();
    vv?.addEventListener('resize', sync);
    vv?.addEventListener('scroll', sync);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      vv?.removeEventListener('resize', sync);
      vv?.removeEventListener('scroll', sync);
      setViewport(null);
    };
  }, [open]);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, typing]);

  const send = async (text: string) => {
    const trimmed = text.trim().slice(0, 1000);
    if (!trimmed || typing) return;
    const history: Message[] = [...messages, { from: 'user', text: trimmed }];
    setMessages(history);
    setInput('');
    setTyping(true);

    let reply: BotReply;
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: history.slice(1).slice(-12).map((m) => ({ from: m.from, text: m.text.slice(0, 1000) }))
        })
      });
      if (!res.ok) throw new Error(String(res.status));
      reply = await res.json();
    } catch {
      // Fall back to the built-in answers if the AI is unavailable.
      reply = getReply(trimmed);
    }

    setMessages((m) => [...m, { from: 'bot', ...reply }]);
    setTyping(false);
  };

  const showQuickReplies = messages.length === 1;

  return (
    <>
      <AnimatePresence>
        {open &&
        <motion.div
          role="dialog"
          aria-label="Chat with TAZhealth"
          className="fixed inset-x-0 top-0 z-[80] flex h-[100dvh] flex-col overflow-hidden bg-white sm:inset-x-auto sm:bottom-24 sm:right-6 sm:top-auto sm:z-[60] sm:h-[min(560px,calc(100dvh-7rem))] sm:w-[380px] sm:rounded-2xl sm:shadow-card sm:ring-1 sm:ring-ink/10"
          initial={{ opacity: 0, y: 16, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.98 }}
          transition={{ duration: 0.25, ease: EASE }}
          style={{ transformOrigin: 'bottom right', ...(viewport && { height: viewport.height, top: viewport.top }) }}>

            {/* Header */}
            <div className="flex shrink-0 items-center justify-between bg-forest px-4 pb-3.5 pt-[max(0.875rem,env(safe-area-inset-top))] text-white sm:pt-3.5">
              <div className="flex items-center gap-3">
                <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white">
                  <img src="/chat-avatar.png" alt="" className="h-7 w-7 object-contain" />
                  <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-[#4ade80] ring-2 ring-forest" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[15px] font-semibold leading-tight">TAZhealth Assistant</p>
                  <p className="text-xs text-white/70">Usually replies instantly</p>
                </div>
              </div>
              <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="flex h-8 w-8 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white">

                <XIcon className="h-4 w-4" />
              </button>
            </div>

            {/* Messages */}
            <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto overscroll-contain bg-[#F7F8F6] px-4 py-4" aria-live="polite">
              {messages.map((m, i) =>
            m.from === 'bot' ?
            <div key={i} className="flex items-end gap-2">
                    <BotAvatar />
                    <div className="max-w-[80%]">
                      <p className="whitespace-pre-line rounded-2xl rounded-bl-md bg-white px-3.5 py-2.5 text-[14px] leading-relaxed text-ink/85 shadow-sm ring-1 ring-ink/5">
                        {m.text}
                      </p>
                      {m.links &&
                <div className="mt-2 flex flex-col items-start gap-1.5">
                          {m.links.map((l) =>
                  l.external ?
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-full bg-mint px-3 py-1.5 text-[13px] font-medium text-forest transition-colors hover:bg-leaf hover:text-white">

                                {l.label} <ArrowUpRightIcon className="h-3.5 w-3.5" />
                              </a> :

                  <Link
                    key={l.label}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center gap-1 rounded-full bg-mint px-3 py-1.5 text-[13px] font-medium text-forest transition-colors hover:bg-leaf hover:text-white">

                                {l.label} <ArrowUpRightIcon className="h-3.5 w-3.5" />
                              </Link>

                  )}
                        </div>
                }
                    </div>
                  </div> :

            <div key={i} className="flex justify-end">
                    <p className="max-w-[80%] rounded-2xl rounded-br-md bg-leaf px-3.5 py-2.5 text-[14px] leading-relaxed text-white">
                      {m.text}
                    </p>
                  </div>

            )}

              {typing &&
            <div className="flex items-end gap-2">
                  <BotAvatar />
                  <span className="flex gap-1 rounded-2xl rounded-bl-md bg-white px-3.5 py-3.5 shadow-sm ring-1 ring-ink/5" aria-label="Typing">
                    {[0, 1, 2].map((d) =>
                <motion.span
                  key={d}
                  className="h-1.5 w-1.5 rounded-full bg-ink/40"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1, repeat: Infinity, delay: d * 0.15 }} />

                )}
                  </span>
                </div>
            }

              {showQuickReplies &&
            <div className="flex flex-wrap gap-1.5 pl-9 pt-1">
                  {quickReplies.map((q) =>
              <button
                key={q}
                type="button"
                onClick={() => send(q)}
                className="rounded-full bg-white px-3 py-1.5 text-[13px] font-medium text-forest ring-1 ring-forest/25 transition-colors hover:bg-forest hover:text-white">

                      {q}
                    </button>
              )}
                </div>
            }
            </div>

            {/* Input */}
            <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex shrink-0 items-center gap-2 border-t border-ink/10 bg-white px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 sm:pb-3">

              <label htmlFor="chat-input" className="sr-only">
                Type your message
              </label>
              <input
              id="chat-input"
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question…"
              autoComplete="off"
              enterKeyHint="send"
              className="h-11 min-w-0 flex-1 rounded-full bg-[#F2F4F1] px-4 text-[16px] text-ink [font-size-adjust:none] placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-leaf/40" />

              <button
              type="submit"
              aria-label="Send message"
              disabled={!input.trim() || typing}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-leaf text-white transition-colors hover:bg-forest disabled:opacity-40">

                <ArrowUpIcon className="h-5 w-5" />
              </button>
            </form>
          </motion.div>
        }
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Close chat' : 'Chat with TAZhealth'}
        aria-expanded={open}
        className={`group fixed bottom-4 right-4 z-[60] items-center gap-2 sm:bottom-6 sm:right-6 ${open ? 'hidden sm:flex' : 'flex'}`}
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.3, ease: EASE, delay: 0.8 }}>

        {!open &&
        <span className="pointer-events-none hidden translate-x-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-forest opacity-0 shadow-card transition-[opacity,transform] duration-200 ease-smooth group-hover:translate-x-0 group-hover:opacity-100 sm:block">
            Ask us anything
          </span>
        }
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-leaf text-white shadow-lift transition-[transform,background-color] duration-200 ease-smooth group-hover:-translate-y-0.5 group-hover:bg-forest sm:h-14 sm:w-14">
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? 'close' : 'open'}
              initial={{ rotate: -45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 45, opacity: 0 }}
              transition={{ duration: 0.15 }}>

              {open ? <XIcon className="h-6 w-6" /> : <MessageCircleIcon className="h-6 w-6 sm:h-7 sm:w-7" />}
            </motion.span>
          </AnimatePresence>
        </span>
      </motion.button>
    </>);

}
