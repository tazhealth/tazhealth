'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { testimonials } from '../../data/people';
import { EASE } from '../../utils/motion';

export function TestimonialSlider() {
  const [[index, dir], setState] = useState<[number, number]>([0, 1]);
  const reduce = useReducedMotion();
  const total = testimonials.length;
  const t = testimonials[index];

  const go = (step: number) => setState(([i]) => [(i + step + total) % total, step]);

  const nav =
  'flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-ink ring-1 ring-ink/15 transition-colors duration-200 hover:bg-ink hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf sm:h-12 sm:w-12';

  return (
    <div
      className="mx-auto max-w-5xl text-center"
      role="region"
      aria-roledescription="carousel"
      aria-label="What people say about TAZhealth"
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') go(-1);
        if (e.key === 'ArrowRight') go(1);
      }}>

      <p className="text-5xl leading-none text-sun" aria-hidden="true">“</p>

      <div className="mt-4 flex items-center gap-3 sm:gap-8">
        <button type="button" onClick={() => go(-1)} aria-label="Previous testimonial" className={nav}>
          <ChevronLeftIcon className="h-5 w-5" />
        </button>

        <div className="grid min-w-0 flex-1" aria-live="polite">
          <AnimatePresence mode="popLayout" initial={false} custom={dir}>
            <motion.figure
              key={index}
              custom={dir}
              className="[grid-area:1/1]"
              initial={reduce ? { opacity: 0 } : { opacity: 0, x: dir * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, x: dir * -40 }}
              transition={{ duration: 0.35, ease: EASE }}>
              
              <blockquote className="text-balance text-[19px] leading-snug text-forest sm:text-[30px] sm:leading-[1.25] lg:text-[34px]">{t.quote}</blockquote>
              <figcaption className="mt-6 sm:mt-7">
                <span className="block font-medium text-ink">{t.name}</span>
                <span className="mt-0.5 block text-sm text-ink/55">{t.role}</span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <button type="button" onClick={() => go(1)} aria-label="Next testimonial" className={nav}>
          <ChevronRightIcon className="h-5 w-5" />
        </button>
      </div>
    </div>);

}
