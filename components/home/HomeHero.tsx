'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { ButtonLink } from '../ui/ButtonLink';
import { images } from '../../data/images';
import { EASE } from '../../utils/motion';

function rise(delay: number) {
  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: EASE, delay }
  };
}

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-white pt-32 lg:pt-40">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <motion.p
          {...rise(0)}
          className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-sm font-medium text-forest ring-1 ring-forest/10">

          <span className="h-1.5 w-1.5 rounded-full bg-leaf" aria-hidden="true" />
          Free outreaches, then real follow-up
        </motion.p>

        <motion.h1
          {...rise(0.05)}
          className="mt-6 text-balance text-[34px] font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-[60px]">

          Outreach shouldn’t end when the team{' '}
          <span className="relative inline-block text-leaf">
            leaves.
            <svg viewBox="0 0 200 12" className="absolute -bottom-2 left-0 h-3 w-full" fill="none" aria-hidden="true">
              <motion.path
                d="M2 8 C 50 2, 120 2, 198 7"
                stroke="#F2A93B"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.6, ease: EASE, delay: 0.7 }} />

            </svg>
          </span>
        </motion.h1>

        <motion.p {...rise(0.15)} className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink/65 sm:text-lg">
          We bring free medical outreaches to underserved Nigerian communities. Then we keep checking on every person
          we met, by SMS, by phone and through referrals.
        </motion.p>

        <motion.div {...rise(0.25)} className="mt-7 flex flex-wrap justify-center gap-2.5 sm:mt-8 sm:gap-3">
          <ButtonLink to="/contact?topic=volunteer" size="lg">
            Volunteer with us
          </ButtonLink>
          <ButtonLink to="/outreaches" size="lg" variant="secondary">
            See how we follow up <ArrowRightIcon className="h-4 w-4" />
          </ButtonLink>
        </motion.div>
      </div>

      <motion.div
        className="relative mx-auto mt-10 max-w-5xl px-5 pb-4 sm:mt-14 sm:px-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE, delay: 0.3 }}>

        <div className="overflow-hidden rounded-[2rem] shadow-card ring-8 ring-white">
          <img
            src={images.hero}
            alt="A TAZhealth health worker checking an elderly woman’s blood pressure at a TAZhealth outreach"
            className="aspect-[5/4] w-full object-cover sm:aspect-[16/8]" />

        </div>

      </motion.div>
    </section>);

}
