'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon, CheckCheckIcon } from 'lucide-react';
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
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F6F7E6] via-mint to-white pt-32 lg:pt-40">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <motion.p
          {...rise(0)}
          className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-sm font-medium text-forest ring-1 ring-forest/10">

          <span className="h-1.5 w-1.5 rounded-full bg-leaf" aria-hidden="true" />
          Free outreaches, then real follow-up
        </motion.p>

        <motion.h1
          {...rise(0.05)}
          className="mt-6 text-balance text-[36px] font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-[60px]">

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

        <motion.p {...rise(0.15)} className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink/65">
          We bring free medical outreaches to underserved Nigerian communities. Then we keep checking on every person
          we met, by SMS, by phone and through referrals.
        </motion.p>

        <motion.div {...rise(0.25)} className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink to="/get-involved#volunteer" size="lg">
            Volunteer with us
          </ButtonLink>
          <ButtonLink to="/taz-ai" size="lg" variant="secondary">
            See how we follow up <ArrowRightIcon className="h-4 w-4" />
          </ButtonLink>
        </motion.div>
      </div>

      <motion.div
        className="relative mx-auto mt-14 max-w-5xl px-5 pb-4 sm:px-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE, delay: 0.3 }}>

        <div className="overflow-hidden rounded-[2rem] shadow-card ring-8 ring-white">
          <img
            src={images.hero}
            alt="A TAZhealth health worker checking an elderly woman’s blood pressure at a village outreach"
            className="aspect-[4/5] w-full object-cover object-top sm:aspect-[16/8] sm:object-center" />

        </div>

        <div className="absolute bottom-10 left-9 max-w-[260px] space-y-2 text-left sm:left-14 sm:max-w-[300px]">
          <motion.div
            className="rounded-2xl rounded-bl-md bg-white p-3.5 text-sm text-ink shadow-card"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: EASE, delay: 1 }}>

            Hi Mama Folake, how are you feeling today? Reply 1 if well, 2 if you need help.
            <span className="mt-1.5 flex items-center gap-1 text-xs text-ink/50">
              Day 3 check-in <CheckCheckIcon className="h-3.5 w-3.5 text-leaf" aria-hidden="true" />
            </span>
          </motion.div>
          <motion.div
            className="ml-auto w-fit rounded-2xl rounded-br-md bg-leaf px-4 py-2.5 text-sm text-white shadow-card"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: EASE, delay: 1.5 }}>

            1. I dey well, thank you!
          </motion.div>
        </div>
      </motion.div>
    </section>);

}
