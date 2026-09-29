'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon, CheckCheckIcon, MessageSquareTextIcon } from 'lucide-react';
import { ButtonLink } from '../ui/ButtonLink';
import { EcgLine } from '../ui/EcgLine';
import { RiskBadge } from '../ui/RiskBadge';
import { images } from '../../data/images';
import { EASE } from '../../utils/motion';

const words = ['Outreach', 'shouldn’t', 'end', 'when', 'the', 'team'];

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-white pt-24 lg:pt-28">
      {/* Mint panel behind the photo on desktop */}
      <div className="absolute inset-y-0 right-0 hidden w-[42%] rounded-bl-[5rem] bg-mint lg:block" aria-hidden="true">
        <div className="adire absolute inset-0 rounded-bl-[5rem] opacity-[0.08]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-6 pt-6 sm:px-8 lg:grid-cols-[1.12fr_0.88fr] lg:gap-10 lg:pb-10 lg:pt-10">
        <div>
          <h1 className="text-[36px] leading-[1.02] text-forest sm:text-5xl lg:text-[60px] lg:leading-[0.98]">
            <span className="sr-only">Outreach shouldn’t end when the team leaves.</span>
            <span aria-hidden="true">
              {words.map((w, i) =>
              <motion.span
                key={w}
                className="mr-[0.22em] inline-block"
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: EASE, delay: 0.05 + i * 0.05 }}>
                
                  {w}
                </motion.span>
              )}
              <motion.span
                className="relative inline-block text-leaf"
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: EASE, delay: 0.4 }}>
                
                leaves.
                <svg viewBox="0 0 200 12" className="absolute -bottom-2 left-0 h-3 w-full" fill="none" aria-hidden="true">
                  <motion.path
                    d="M2 8 C 50 2, 120 2, 198 7"
                    stroke="#F2A93B"
                    strokeWidth="4"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.6, ease: EASE, delay: 0.8 }} />
                  
                </svg>
              </motion.span>
            </span>
          </h1>

          <motion.p
            className="mt-7 max-w-xl text-lg leading-relaxed text-ink/75 sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.45 }}>
            
            We bring free medical outreaches to underserved Nigerian communities - then keep caring through SMS
            follow-up, referrals and clinician alerts, long after the tents come down.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-col gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: EASE, delay: 0.55 }}>
            
            <ButtonLink to="/get-involved#partner" size="lg">
              Partner with us
            </ButtonLink>
            <ButtonLink to="/taz-ai" size="lg" variant="secondary">
              Explore TAZ AI <ArrowRightIcon className="h-4 w-4" />
            </ButtonLink>
          </motion.div>

          <motion.p
            className="mt-8 flex items-center gap-3 text-[15px] text-ink/65"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.7 }}>
            
            <span className="flex -space-x-2" aria-hidden="true">
              {[images.team1, images.team3, images.team2].map((src) =>
              <img key={src} src={src} alt="" className="h-9 w-9 rounded-full object-cover ring-2 ring-white" />
              )}
            </span>
            <span>
              <span className="font-medium text-forest">500+ people</span> reached across 6 communities
            </span>
          </motion.p>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-[460px] lg:mr-0"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.15 }}>
          
          <div className="aspect-[4/5] overflow-hidden rounded-b-[2.5rem] rounded-t-full bg-mint ring-8 ring-white">
            <img
              src={images.hero}
              alt="A TAZhealth health worker checking an elderly woman’s blood pressure at a village outreach"
              className="ken-burns h-full w-full object-cover" />
            
          </div>

          <motion.div
            className="absolute -left-3 top-[30%] w-[210px] rounded-2xl bg-white p-3 shadow-card sm:-left-10"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, ease: EASE, delay: 0.9 }}>
            
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-mint text-leaf">
                <MessageSquareTextIcon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-medium text-ink">Day 3 check-in</p>
                <p className="flex items-center gap-1 text-xs text-ink/60">
                  SMS delivered · Yoruba <CheckCheckIcon className="h-3.5 w-3.5 text-leaf" aria-hidden="true" />
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute -right-2 bottom-[14%] rounded-2xl bg-white p-3.5 shadow-card sm:-right-8"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, ease: EASE, delay: 1.05 }}>
            
            <RiskBadge level="high" pulse>
              High risk · BP 182/114
            </RiskBadge>
            <p className="mt-2 text-xs text-ink/60">Clinician alerted in 2 min</p>
          </motion.div>
        </motion.div>
      </div>

      <EcgLine className="relative z-10 -mt-4 h-16 lg:-mt-10 lg:h-20" strokeWidth={3} />
    </section>);

}