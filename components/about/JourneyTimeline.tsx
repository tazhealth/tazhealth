'use client';

import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Reveal } from '../ui/Reveal';
import { milestones } from '../../data/people';
import { cn } from '../../utils/cn';

export function JourneyTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 60%'] });

  return (
    <div ref={ref} className="relative">
      <div className="absolute bottom-2 left-4 top-2 w-0.5 -translate-x-1/2 bg-forest/10 lg:left-1/2" aria-hidden="true">
        <motion.div className="h-full w-full origin-top bg-leaf" style={{ scaleY: scrollYProgress }} />
      </div>
      <ol className="space-y-10 lg:space-y-6">
        {milestones.map((m, i) => {
          const isNext = m.date === 'Next';
          const right = i % 2 === 1;
          return (
            <li key={m.title} className="relative lg:grid lg:grid-cols-2 lg:gap-16">
              <span
                className={cn(
                  'absolute left-4 top-1.5 h-4 w-4 -translate-x-1/2 rounded-full bg-white ring-4 lg:left-1/2',
                  isNext ? 'ring-sun' : 'ring-leaf'
                )}
                aria-hidden="true" />
              
              <Reveal className={cn('pl-12 lg:pl-0', right ? 'lg:col-start-2' : 'lg:text-right')}>
                <p className={cn('text-sm font-medium', isNext ? 'text-sun' : 'text-leaf')}>{m.date}</p>
                <h3 className="mt-1 text-xl text-forest sm:text-xl">{m.title}</h3>
                <p className={cn('mt-2 max-w-md text-[16px] leading-relaxed text-ink/70', !right && 'lg:ml-auto')}>{m.text}</p>
              </Reveal>
            </li>);

        })}
      </ol>
    </div>);

}