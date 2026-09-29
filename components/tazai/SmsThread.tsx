import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useInView, useReducedMotion } from 'framer-motion';
import { ChevronLeftIcon, SignalIcon } from 'lucide-react';
import { EASE } from '../../utils/motion';
import { cn } from '../../utils/cn';

export type SmsMessage = {from: 'taz' | 'patient';text: string;};

type SmsThreadProps = {
  language: string;
  messages: SmsMessage[];
  startDelay?: number;
};

export function SmsThread({ language, messages, startDelay = 0 }: SmsThreadProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduce = useReducedMotion();
  const [count, setCount] = useState(0);
  const [typing, setTyping] = useState(false);
  const messagesRef = useRef(messages);
  messagesRef.current = messages;
  const total = messages.length;

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setCount(total);
      return;
    }
    if (count >= total) {
      setTyping(false);
      return;
    }
    const next = messagesRef.current[count];
    const showTyping = window.setTimeout(() => setTyping(next.from === 'taz'), count === 0 ? startDelay : 400);
    const reveal = window.setTimeout(
      () => {
        setTyping(false);
        setCount((c) => c + 1);
      },
      (count === 0 ? startDelay : 400) + (next.from === 'taz' ? 1100 : 700)
    );
    return () => {
      window.clearTimeout(showTyping);
      window.clearTimeout(reveal);
    };
  }, [inView, count, reduce, total, startDelay]);

  return (
    <div ref={ref} className="flex h-full flex-col bg-white">
      <div className="flex items-center justify-between px-6 pb-1 pt-3.5 text-[10px] font-medium text-ink">
        <span>9:02</span>
        <SignalIcon className="h-3 w-3" aria-hidden="true" />
      </div>
      <div className="flex items-center gap-2 border-b border-ink/5 px-3 pb-3 pt-4">
        <ChevronLeftIcon className="h-4 w-4 text-leaf" aria-hidden="true" />
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-leaf text-[10px] font-semibold text-white">TZ</span>
        <div>
          <p className="text-[12px] font-semibold text-ink">TAZhealth</p>
          <p className="text-[10px] text-ink/50">SMS · {language}</p>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-2 overflow-hidden px-3 py-4" aria-live="polite">
        <p className="mb-1 text-center text-[9px] text-ink/40">Today</p>
        <AnimatePresence initial={false}>
          {messages.slice(0, count).map((m, i) =>
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.3, ease: EASE }}
            className={cn(
              'max-w-[85%] rounded-2xl px-3 py-2 text-[11.5px] leading-snug',
              m.from === 'taz' ? 'self-start rounded-bl-md bg-[#EEF1EE] text-ink' : 'self-end rounded-br-md bg-leaf text-white'
            )}>
            
              {m.text}
            </motion.p>
          )}
          {typing &&
          <motion.span
            key="typing"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex w-fit items-center gap-1 self-start rounded-2xl rounded-bl-md bg-[#EEF1EE] px-3 py-2.5"
            aria-label="TAZhealth is typing">
            
              <span className="typing-dot h-1.5 w-1.5 rounded-full bg-ink/50" />
              <span className="typing-dot h-1.5 w-1.5 rounded-full bg-ink/50" />
              <span className="typing-dot h-1.5 w-1.5 rounded-full bg-ink/50" />
            </motion.span>
          }
        </AnimatePresence>
      </div>

      <div className="m-3 rounded-full bg-[#F3F5F3] px-4 py-2 text-[10px] text-ink/40">Text message</div>
    </div>);

}