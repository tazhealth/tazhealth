'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CloudUploadIcon, MessageSquareTextIcon } from 'lucide-react';
import { ButtonLink } from '../ui/ButtonLink';
import { DashboardPreview } from './DashboardPreview';
import { EASE } from '../../utils/motion';

const facts = ['Works offline', 'SMS in 5 languages', 'No app for patients'];

export function TazHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F6F7E6] via-mint to-[#E3F2E3] pt-32 lg:pt-40">
      {/* Concentric arcs rising from behind the dashboard */}
      <div className="pointer-events-none absolute inset-x-0 top-[38%] flex justify-center" aria-hidden="true">
        {[1500, 1150, 820].map((size) =>
        <div
          key={size}
          className="absolute rounded-full bg-leaf/[0.07]"
          style={{ width: size, height: size }} />

        )}
      </div>

      {/* Sun-yellow swoop behind the mockup */}
      <svg
        className="pointer-events-none absolute left-1/2 top-[34%] h-[900px] w-[1600px] -translate-x-1/2 sm:top-[30%]"
        viewBox="0 0 1600 900"
        fill="none"
        aria-hidden="true">

        <motion.path
          d="M-40 560 C 120 420, 260 380, 330 470 C 400 560, 300 760, 150 820 M 1180 260 C 1320 120, 1480 150, 1500 330 C 1520 520, 1380 700, 1280 900"
          stroke="#F2A93B"
          strokeWidth="10"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.6, ease: EASE, delay: 0.3 }} />

      </svg>

      <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
        <motion.p
          className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-sm font-medium text-forest ring-1 ring-forest/10"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: EASE }}>

          <span className="h-1.5 w-1.5 rounded-full bg-leaf" aria-hidden="true" />
          TAZ AI · by TAZhealth
        </motion.p>
        <motion.h1
          className="mx-auto mt-6 max-w-4xl text-balance text-[36px] font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-[64px]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: EASE, delay: 0.05 }}>

          Turn every outreach into an ongoing <span className="text-leaf">care journey</span>
        </motion.h1>
        <motion.p
          className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-ink/65"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.15 }}>

          Register patients offline, flag who’s at risk in seconds, and follow up by SMS. The care you start on outreach
          day keeps going after you leave.
        </motion.p>
        <motion.div
          className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: EASE, delay: 0.25 }}>

          <ButtonLink to="/get-involved#partner" variant="secondary" size="lg" className="bg-leaf/15 ring-leaf/30">
            Partner with us
          </ButtonLink>
          <ButtonLink href="#demo" size="lg">
            Request a demo
          </ButtonLink>
        </motion.div>
        <motion.ul
          className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-ink/60"
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
        className="relative mx-auto mt-14 max-w-6xl px-5 sm:px-8 lg:mt-16"
        initial={{ opacity: 0, y: 48 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE, delay: 0.3 }}>

        <div className="relative max-h-[420px] overflow-hidden sm:max-h-[520px] lg:max-h-[560px]">
          <DashboardPreview frame="browser" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" aria-hidden="true" />
        </div>

        <motion.div
          className="absolute -left-2 top-[72%] hidden items-center gap-2.5 rounded-2xl bg-white p-3 text-left shadow-card lg:flex"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, ease: EASE, delay: 0.9 }}>

          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-mint text-leaf">
            <MessageSquareTextIcon className="h-4 w-4" aria-hidden="true" />
          </span>
          <span className="text-sm">
            <span className="block font-medium">SMS sent · Pidgin</span>
            <span className="block text-xs text-ink/60">48 patients, 9:02 AM</span>
          </span>
        </motion.div>
        <motion.div
          className="absolute -right-2 top-[18%] hidden items-center gap-2.5 rounded-2xl bg-white p-3 text-left shadow-card lg:flex"
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, ease: EASE, delay: 1.05 }}>

          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sun/20 text-forest">
            <CloudUploadIcon className="h-4 w-4" aria-hidden="true" />
          </span>
          <span className="text-sm">
            <span className="block font-medium">Synced on the road</span>
            <span className="block text-xs text-ink/60">No signal at site</span>
          </span>
        </motion.div>
      </motion.div>
    </section>);

}
