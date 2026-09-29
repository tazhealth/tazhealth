import React, { useRef, useState } from 'react';
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from 'framer-motion';
import { howItWorks } from '../../data/tazai';
import { cn } from '../../utils/cn';

export function HowItWorksSteps() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 55%'] });
  const [progress, setProgress] = useState(0);

  useMotionValueEvent(scrollYProgress, 'change', (v) => setProgress(v));

  const n = howItWorks.length;
  const p = reduce ? 1 : progress;
  const isActive = (i: number) => p >= i / (n - 1) - 0.02;

  return (
    <div ref={ref} className="relative">
      {/* Desktop horizontal line */}
      <div className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-1 rounded-full bg-forest/10 lg:block" aria-hidden="true">
        <motion.div className="h-full origin-left rounded-full bg-leaf" style={{ scaleX: reduce ? 1 : scrollYProgress }} />
      </div>
      {/* Mobile vertical line */}
      <div className="absolute bottom-6 left-7 top-6 w-1 -translate-x-1/2 rounded-full bg-forest/10 lg:hidden" aria-hidden="true">
        <motion.div className="h-full w-full origin-top rounded-full bg-leaf" style={{ scaleY: reduce ? 1 : scrollYProgress }} />
      </div>

      <ol className="relative grid gap-10 lg:grid-cols-4 lg:gap-6">
        {howItWorks.map((step, i) => {
          const Icon = step.icon;
          const active = isActive(i);
          return (
            <li key={step.title} className="flex gap-5 lg:flex-col lg:items-center lg:text-center">
              <span
                className={cn(
                  'relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full transition-[background-color,color,transform] duration-300 ease-smooth',
                  active ? 'scale-105 bg-leaf text-white ring-8 ring-mint' : 'bg-white text-forest/40 ring-1 ring-forest/15'
                )}>
                
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <div className={cn('transition-opacity duration-300', active ? 'opacity-100' : 'opacity-50')}>
                <p className="text-sm font-medium text-leaf">Step {i + 1}</p>
                <h3 className="mt-1 text-xl text-forest">{step.title}</h3>
                <p className="mt-2 max-w-xs text-[15px] leading-relaxed text-ink/70 lg:mx-auto">{step.text}</p>
              </div>
            </li>);

        })}
      </ol>
    </div>);

}