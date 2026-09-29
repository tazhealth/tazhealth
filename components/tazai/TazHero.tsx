'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CloudUploadIcon, MessageSquareTextIcon } from 'lucide-react';
import { ButtonLink } from '../ui/ButtonLink';
import { EcgLine } from '../ui/EcgLine';
import { PhoneMockup } from '../ui/PhoneMockup';
import { PatientScreen } from './PatientScreen';
import { EASE } from '../../utils/motion';

const facts = ['Works offline', 'SMS in 5 languages', 'No app for patients'];

export function TazHero() {
  return (
    <section className="relative overflow-hidden bg-forest-dark pt-28 text-white lg:pt-32">
      <div className="adire-light pointer-events-none absolute inset-0 opacity-[0.05]" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="pb-4 lg:pb-24">
          <motion.p
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-sun"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: EASE }}>
            
            TAZ AI · by TAZhealth
          </motion.p>
          <motion.h1
            className="mt-6 text-[42px] leading-[1.03] sm:text-6xl lg:text-[70px]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: EASE, delay: 0.05 }}>
            
            Turn every outreach into an ongoing care journey.
          </motion.h1>
          <motion.p
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/75 sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.15 }}>
            
            TAZ AI registers patients offline, flags who’s at risk in seconds, and follows up by SMS — so the care you
            start on outreach day doesn’t stop when you leave.
          </motion.p>
          <motion.div
            className="mt-9 flex flex-col gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: EASE, delay: 0.25 }}>
            
            <ButtonLink href="#demo" variant="light" size="lg">
              Request a demo
            </ButtonLink>
            <ButtonLink to="/get-involved#partner" variant="outlineLight" size="lg">
              Partner with us
            </ButtonLink>
          </motion.div>
          <motion.ul
            className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-[15px] text-white/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}>
            
            {facts.map((f) =>
            <li key={f} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-sun" aria-hidden="true" />
                {f}
              </li>
            )}
          </motion.ul>
        </div>

        <motion.div
          className="relative flex justify-center self-end"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.15 }}>
          
          <div className="absolute bottom-0 h-[82%] w-[90%] max-w-[400px] rounded-t-full bg-leaf/25" aria-hidden="true" />
          <div className="relative translate-y-12">
            <PhoneMockup float>
              <PatientScreen />
            </PhoneMockup>
          </div>
          <motion.div
            className="absolute left-0 top-[22%] hidden items-center gap-2.5 rounded-2xl bg-white p-3 text-ink shadow-card sm:flex lg:-left-6"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, ease: EASE, delay: 0.7 }}>
            
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-mint text-leaf">
              <MessageSquareTextIcon className="h-4 w-4" aria-hidden="true" />
            </span>
            <span className="text-sm">
              <span className="block font-medium">SMS sent · Pidgin</span>
              <span className="block text-xs text-ink/60">48 patients, 9:02 AM</span>
            </span>
          </motion.div>
          <motion.div
            className="absolute bottom-[30%] right-0 hidden items-center gap-2.5 rounded-2xl bg-white p-3 text-ink shadow-card sm:flex lg:-right-4"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, ease: EASE, delay: 0.85 }}>
            
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sun/20 text-forest">
              <CloudUploadIcon className="h-4 w-4" aria-hidden="true" />
            </span>
            <span className="text-sm">
              <span className="block font-medium">Synced on the road</span>
              <span className="block text-xs text-ink/60">No signal at site</span>
            </span>
          </motion.div>
        </motion.div>
      </div>
      <EcgLine tone="white" className="relative z-10 h-14" baseOpacity={0.15} />
    </section>);

}