'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '../ui/Reveal';
import { EASE } from '../../utils/motion';

const W = 800;
const BASE = 60;

function beat(x: number) {
  return ` H${x - 20} L${x - 12} 24 L${x} 100 L${x + 10} 36 L${x + 18} ${BASE}`;
}

const withBeats = [100, 260, 420, 600, 760];
const withPath = `M0 ${BASE}` + withBeats.map(beat).join('') + ` H${W}`;
const withoutSolid = `M0 ${BASE}` + beat(100) + ` H220`;

const withLabels = [
{ day: 'Day 0', text: 'Screened & triaged' },
{ day: 'Day 1', text: 'SMS check-in' },
{ day: 'Day 3', text: 'Follow-up call' },
{ day: 'Day 14', text: 'BP recheck' },
{ day: 'Day 30', text: 'Still in care' }];


export function CareGapChart() {
  return (
    <div className="space-y-6">
      <Reveal className="rounded-[2rem] border border-forest/10 bg-white p-6 sm:p-8">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-lg font-medium text-ink">A typical outreach</h3>
          <p className="text-sm text-ink/55">Screened on Day 0 - then silence</p>
        </div>
        <svg viewBox={`0 0 ${W} 120`} className="mt-4 h-20 w-full sm:h-24" fill="none" aria-hidden="true">
          <path d={withoutSolid} stroke="#1A1A1A" strokeOpacity="0.55" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
          <path d={`M220 ${BASE} H${W}`} stroke="#1A1A1A" strokeOpacity="0.18" strokeWidth="3" strokeDasharray="4 12" strokeLinecap="round" />
        </svg>
        <div className="mt-2 flex justify-between text-sm">
          <span className="text-ink/70">Outreach day</span>
          <span className="font-medium text-risk-high">Lost to follow-up</span>
        </div>
      </Reveal>

      <Reveal className="rounded-[2rem] bg-mint p-6 sm:p-8" delay={0.1}>
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-lg font-medium text-forest">The same outreach, with TAZ AI</h3>
          <p className="text-sm text-ink/60">The heartbeat keeps going</p>
        </div>
        <svg viewBox={`0 0 ${W} 120`} className="mt-4 h-20 w-full sm:h-24" fill="none" aria-hidden="true">
          <motion.path
            d={withPath}
            stroke="#3A9A3F"
            strokeWidth="3.5"
            strokeLinejoin="round"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1.6, ease: EASE }} />
          
          {withBeats.map((x, i) =>
          <motion.circle
            key={x}
            cx={x}
            cy={BASE}
            r="7"
            fill="#FFFFFF"
            stroke="#1F5E2A"
            strokeWidth="3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.3, delay: 0.3 + i * 0.3 }} />

          )}
        </svg>
        <ol className="relative mt-3 grid grid-cols-5 gap-1 text-center">
          {withLabels.map((l) =>
          <li key={l.day}>
              <span className="block text-sm font-medium text-forest">{l.day}</span>
              <span className="hidden text-xs text-ink/60 sm:block">{l.text}</span>
            </li>
          )}
        </ol>
      </Reveal>
    </div>);

}