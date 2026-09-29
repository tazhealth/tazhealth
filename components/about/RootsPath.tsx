'use client';

import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import {
  ClipboardListIcon,
  FlagIcon,
  GraduationCapIcon,
  HeartPulseIcon,
  HelpCircleIcon,
  StethoscopeIcon,
  UsersIcon } from
'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { milestones } from '../../data/people';
import { cn } from '../../utils/cn';

const W = 1000;
const H = 1040;

const nodes = [
{ x: 180, y: 50 },
{ x: 580, y: 50 },
{ x: 580, y: 330 },
{ x: 180, y: 330 },
{ x: 180, y: 610 },
{ x: 580, y: 610 },
{ x: 580, y: 890 }];


const icons: {icon: LucideIcon;tone: string;}[] = [
{ icon: HelpCircleIcon, tone: 'bg-ink text-white' },
{ icon: StethoscopeIcon, tone: 'bg-leaf text-white' },
{ icon: ClipboardListIcon, tone: 'bg-mint text-forest ring-1 ring-leaf/30' },
{ icon: HeartPulseIcon, tone: 'bg-forest text-white' },
{ icon: GraduationCapIcon, tone: 'bg-ink text-white' },
{ icon: UsersIcon, tone: 'bg-leaf text-white' },
{ icon: FlagIcon, tone: 'bg-white text-forest ring-2 ring-dashed ring-forest/40' }];


const solid = 'M 180 50 H 860 A 140 140 0 0 1 860 330 H 140 A 140 140 0 0 0 140 610 H 580';
const dashed = 'M 580 610 H 860 A 140 140 0 0 1 860 890 H 580';

export function RootsPath() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 60%'] });
  const draw = useTransform(scrollYProgress, [0, 0.85], [0, 1]);
  const drawNext = useTransform(scrollYProgress, [0.85, 1], [0, 1]);

  return (
    <div ref={ref} className="relative mx-auto w-full max-w-[1000px]" style={{ aspectRatio: `${W} / ${H}` }}>
      <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 h-full w-full" fill="none" aria-hidden="true">
        <path d={solid} stroke="#000000" strokeOpacity="0.08" strokeWidth="2" />
        <motion.path d={solid} stroke="#047228" strokeWidth="2" style={{ pathLength: reduce ? 1 : draw }} />
        <motion.path
          d={dashed}
          stroke="#047228"
          strokeOpacity="0.5"
          strokeWidth="2"
          strokeDasharray="6 8"
          style={{ opacity: reduce ? 1 : drawNext }} />

      </svg>

      <ol>
        {milestones.map((m, i) => {
          const n = nodes[i];
          if (!n) return null;
          const { icon: Icon, tone } = icons[i];
          const isNext = m.date === 'Next';
          return (
            <motion.li
              key={m.title}
              className="absolute"
              style={{ left: `${n.x / W * 100}%`, top: `${n.y / H * 100}%` }}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.4 }}>

              <span
                className={cn(
                  'absolute left-0 top-0 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full shadow-[0_6px_16px_-8px_rgba(16,24,16,0.4)]',
                  tone
                )}>

                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <p
                className={cn(
                  'absolute bottom-3 left-11 whitespace-nowrap border-l-2 pl-2 text-[15px] font-semibold tracking-tight',
                  isNext ? 'border-sun text-ink/60' : 'border-leaf text-ink'
                )}>

                {m.date}
              </p>
              <div className="absolute left-11 top-4 w-[250px]">
                <h3 className="text-[15px] font-medium leading-snug text-ink">{m.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink/60">{m.text}</p>
              </div>
            </motion.li>);

        })}
      </ol>
    </div>);

}

export function RootsList() {
  return (
    <ol className="relative pl-7">
      <svg className="absolute left-0 top-0 h-8 w-12 text-forest" viewBox="0 0 48 32" fill="none" aria-hidden="true">
        <path d="M 46 22 C 22 14, 6 16, 6 32" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <span className="absolute bottom-6 left-[5.25px] top-8 w-[1.5px] bg-forest" aria-hidden="true" />
      {milestones.map((m, i) => {
        const { icon: Icon, tone } = icons[i] ?? icons[0];
        const isNext = m.date === 'Next';
        return (
          <li key={m.title} className="relative flex gap-4 pb-10 last:pb-0">
            {i > 0 &&
            <span
              className="absolute -left-[26px] top-4 h-0 w-0 border-x-[5px] border-t-[7px] border-x-transparent border-t-forest"
              aria-hidden="true" />
            }
            <span className={cn('flex h-12 w-12 shrink-0 items-center justify-center rounded-full shadow-[0_6px_16px_-8px_rgba(16,24,16,0.4)]', tone)}>
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <div className="pt-1">
              <p className={cn('border-l-2 pl-2 text-[15px] font-semibold leading-tight tracking-tight', isNext ? 'border-sun text-ink/60' : 'border-leaf text-ink')}>
                {m.date}
              </p>
              <h3 className="mt-2.5 text-[15px] font-medium leading-snug text-ink">{m.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-ink/60">{m.text}</p>
            </div>
          </li>);

      })}
    </ol>);

}
