'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRightIcon, PlusIcon } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import type { Outreach } from '../../types/content';
import { cn } from '../../utils/cn';
import { EASE } from '../../utils/motion';

type Row = {value: string;label: string;detail: string;};

export function FeaturedStory({ outreach, onRead }: {outreach: Outreach;onRead: (o: Outreach) => void;}) {
  const [open, setOpen] = useState<number | null>(null);

  const rows: Row[] = [
  {
    value: outreach.peopleReached.toLocaleString(),
    label: `${outreach.reachedLabel} reached`,
    detail: `Services: ${outreach.services.join(', ')}.`
  },
  {
    value: `₦${outreach.contribution.toLocaleString()}`,
    label: 'contributed by TAZhealth',
    detail: `Alongside ${outreach.volunteers} TAZhealth volunteers, in partnership with ${outreach.partners.join(', ')}.`
  }];


  return (
    <div>
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-medium text-leaf">From the field</p>
        <h2 className="mt-3 text-balance text-[32px] font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-5xl">
          {outreach.peopleReached.toLocaleString()} people reached in {outreach.location}
        </h2>
      </Reveal>

      <Reveal delay={0.1} className="mx-auto mt-10 max-w-4xl rounded-lg bg-[#EDEDED] p-6 sm:mt-14 sm:p-12">
        <p className="text-balance text-[22px] font-medium leading-[1.3] tracking-[-0.02em] text-ink sm:text-[34px]">
          {outreach.tagline ?? outreach.summary}
        </p>

        <div className="mt-8 flex flex-col gap-5 sm:mt-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3.5">
            <img src={outreach.image} alt="" className="h-12 w-12 rounded-full object-cover ring-2 ring-white sm:h-14 sm:w-14" />
            <span>
              <span className="block text-[15px] font-semibold text-ink sm:text-base">{outreach.name}</span>
              <span className="block text-sm text-ink/60">
                {outreach.date}, {outreach.location}
              </span>
            </span>
          </div>
          <button
            type="button"
            onClick={() => onRead(outreach)}
            className="group inline-flex h-11 w-fit items-center gap-1.5 rounded-full border border-ink px-5 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf focus-visible:ring-offset-2">

            Read the full story
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
        </div>

        <ul className="mt-8 border-t border-ink/10 sm:mt-10">
          {rows.map((r, i) => {
            const isOpen = open === i;
            return (
              <li key={r.label} className="border-b border-ink/10">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-4 py-4 text-left sm:gap-6">

                  <span className="w-24 shrink-0 text-[15px] font-semibold tabular-nums text-forest sm:w-32 sm:text-base">{r.value}</span>
                  <span className="flex-1 text-[15px] text-ink/65">{r.label}</span>
                  <PlusIcon
                    className={cn('h-4 w-4 shrink-0 text-ink/50 transition-transform duration-300', isOpen && 'rotate-45')}
                    aria-hidden="true" />

                </button>
                <AnimatePresence initial={false}>
                  {isOpen &&
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: EASE }}
                    className="overflow-hidden text-sm leading-relaxed text-ink/65 sm:pl-38">

                      <span className="block pb-4">{r.detail}</span>
                    </motion.p>
                  }
                </AnimatePresence>
              </li>);

          })}
        </ul>
      </Reveal>
    </div>);

}
