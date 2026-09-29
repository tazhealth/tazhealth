'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { UserRoundIcon } from 'lucide-react';
import { CountUp } from '../ui/CountUp';
import { Reveal } from '../ui/Reveal';
import { EASE } from '../../utils/motion';

const people = Array.from({ length: 10 }, (_, i) => i);

export function ProblemSection() {
  return (
    <section className="relative overflow-hidden bg-forest-dark py-20 text-white lg:py-28" aria-labelledby="problem-title">
      <div className="adire-light pointer-events-none absolute inset-0 opacity-[0.04]" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal className="lg:sticky lg:top-32 lg:self-start">
          <h2 id="problem-title" className="text-[28px] leading-[1.08] sm:text-4xl lg:text-[44px]">
            Care stops when the outreach stops.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-white/75">
            A free outreach can find dangerously high blood pressure in the morning. By evening the team has gone - and
            without follow-up, most patients never get the treatment or referral they were told they need.
          </p>
        </Reveal>

        <div className="space-y-4">
          <Reveal className="rounded-[2rem] bg-white/[0.06] p-7 ring-1 ring-white/10 sm:p-10">
            <p className="text-5xl font-medium tracking-tight text-sun sm:text-6xl lg:text-8xl">
              <CountUp to={90} prefix="80–" suffix="%" />
            </p>
            <p className="mt-3 max-w-sm text-lg text-white/85">of patients are lost to follow-up after a typical outreach.</p>
            <div className="mt-8 flex flex-wrap gap-2 sm:gap-3" role="img" aria-label="Of every 10 patients, only 1 or 2 are still in care">
              {people.map((i) =>
              <motion.span
                key={i}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 sm:h-12 sm:w-12"
                initial={{ opacity: 1 }}
                whileInView={{ opacity: i === 0 ? 1 : i === 1 ? 0.55 : 0.18 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.4, ease: EASE, delay: 0.5 + i * 0.06 }}>
                
                  <UserRoundIcon className={i === 0 ? 'h-5 w-5 text-sun' : 'h-5 w-5 text-white'} aria-hidden="true" />
                </motion.span>
              )}
            </div>
            <p className="mt-3 text-sm text-white/55">Of every 10 people screened, only 1–2 are still in care weeks later.</p>
          </Reveal>

          <Reveal className="grid items-center gap-6 rounded-[2rem] bg-white/[0.06] p-7 ring-1 ring-white/10 sm:grid-cols-[auto_1fr] sm:p-10" delay={0.1}>
            <p className="text-5xl font-medium tracking-tight text-sun">
              <CountUp to={60} suffix="%" />
            </p>
            <div>
              <p className="text-lg text-white/85">of Nigerians lack adequate access to primary healthcare.</p>
              <div className="mt-4 h-3 overflow-hidden rounded-full bg-white/10" aria-hidden="true">
                <motion.div
                  className="h-full rounded-full bg-sun"
                  initial={{ width: 0 }}
                  whileInView={{ width: '60%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: EASE, delay: 0.3 }} />
                
              </div>
            </div>
          </Reveal>

          <p className="px-2 text-xs leading-relaxed text-white/50">
            Sources: TAZhealth outreach follow-up records (2025); national primary healthcare access estimates. Figures
            are indicative - full references available on request.
          </p>
        </div>
      </div>
    </section>);

}