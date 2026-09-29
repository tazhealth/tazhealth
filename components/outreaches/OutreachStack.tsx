'use client';

import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import type { MotionValue } from 'framer-motion';
import { ArrowUpRightIcon } from 'lucide-react';
import type { Outreach } from '../../types/content';
import { cn } from '../../utils/cn';

type Props = {
  outreaches: Outreach[];
  onSelect: (o: Outreach) => void;
};

function Card({
  o,
  i,
  total,
  progress,
  onSelect



}: {o: Outreach;i: number;total: number;progress: MotionValue<number>;onSelect: (o: Outreach) => void;}) {
  const reduce = useReducedMotion();
  const target = 1 - (total - 1 - i) * 0.035;
  const scale = useTransform(progress, [i / total, 1], [1, reduce ? 1 : target]);
  const imageLeft = i % 2 === 1;

  return (
    <li
      className="sticky mb-5 last:mb-0 sm:mb-8"
      style={{ top: `calc(var(--stack-top) + ${i * 12}px)` }}>

      <motion.article
        style={{ scale }}
        className="origin-top overflow-hidden rounded-2xl bg-white p-2.5 shadow-[0_-12px_40px_-20px_rgba(16,24,16,0.35)] ring-1 ring-ink/10 sm:rounded-3xl sm:p-3 lg:grid lg:h-[540px] lg:grid-cols-2">

        <button
          type="button"
          onClick={() => onSelect(o)}
          aria-label={`Read the full story of the ${o.community} outreach`}
          className={cn(
            'group block h-full w-full overflow-hidden rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf sm:rounded-2xl',
            imageLeft ? 'lg:order-first' : 'lg:order-last'
          )}>

          <img
            src={o.image}
            alt=""
            loading="lazy"
            className="aspect-[16/10] h-full w-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-[1.03] lg:aspect-auto" />

        </button>

        <div className="flex flex-col px-2 pb-2 pt-4 sm:px-5 sm:pb-5 sm:pt-6 lg:px-10 lg:py-10">
          <p className="flex items-center gap-2.5 text-xs text-ink/50 sm:text-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-leaf" aria-hidden="true" />
            <span className="tabular-nums">{o.date}</span>
            <span className="text-ink/25">·</span>
            {o.state}
          </p>

          <h3 className="mt-3 text-xl font-medium tracking-[-0.02em] text-ink sm:mt-5 sm:text-3xl lg:mt-auto lg:text-[34px] lg:leading-[1.1]">
            {o.community}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink/60 sm:mt-3 sm:line-clamp-none sm:text-base lg:max-w-md">
            {o.summary}
          </p>

          <dl className="mt-4 flex gap-8 border-t border-ink/10 pt-4 sm:mt-6">
            <div>
              <dt className="text-xs text-ink/45">People reached</dt>
              <dd className="mt-0.5 text-lg font-medium tabular-nums text-ink sm:text-xl">{o.peopleReached}</dd>
            </div>
            <div>
              <dt className="text-xs text-ink/45">Referrals</dt>
              <dd className="mt-0.5 text-lg font-medium tabular-nums text-ink sm:text-xl">{o.referrals}</dd>
            </div>
          </dl>

          <div className="mt-4 flex flex-col gap-4 sm:mt-6 lg:mt-auto lg:pt-8">
            <p className="hidden items-start gap-3 text-[15px] leading-relaxed text-ink/70 sm:flex">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sun" aria-hidden="true" />
              {o.highlight}
            </p>
            <button
              type="button"
              onClick={() => onSelect(o)}
              className="inline-flex w-fit items-center gap-1 text-sm font-medium text-leaf hover:text-forest">

              Read the full story <ArrowUpRightIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
      </motion.article>
    </li>);

}

export function OutreachStack({ outreaches, onSelect }: Props) {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });

  return (
    <ol ref={ref} className="relative mt-8 [--stack-top:84px] sm:mt-14 lg:[--stack-top:112px]">
      {outreaches.map((o, i) =>
      <Card key={o.id} o={o} i={i} total={outreaches.length} progress={scrollYProgress} onSelect={onSelect} />
      )}
    </ol>);

}
