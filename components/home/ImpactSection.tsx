'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CountUp } from '../ui/CountUp';
import { Reveal } from '../ui/Reveal';
import { communityNames, homeImpact } from '../../data/impact';
import { images } from '../../data/images';
import { EASE } from '../../utils/motion';

export function ImpactSection() {
  const [people, communities, outreaches] = homeImpact;

  return (
    <section className="bg-white py-20 lg:py-28" aria-labelledby="impact-title">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <Reveal>
            <h2 id="impact-title" className="text-[32px] leading-[1.1] text-forest sm:text-4xl lg:text-[46px]">
              What showing up — and coming back — looks like.
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="text-lg leading-relaxed text-ink/70 lg:max-w-md lg:justify-self-end">
              Every number here is a person we screened, treated or referred — and then checked on again.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-12">
          <Reveal className="relative overflow-hidden rounded-[2rem] bg-mint p-8 sm:p-12 lg:col-span-7">
            <div className="adire pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full opacity-[0.12]" aria-hidden="true" />
            <p className="relative inline-flex items-baseline rounded-full border-2 border-leaf px-7 py-2 text-7xl font-medium tracking-tight text-forest sm:text-8xl lg:text-[120px] lg:leading-none">
              <CountUp to={people.value} />
              <span className="text-sun">+</span>
            </p>
            <p className="relative mt-6 max-w-sm text-xl text-ink/80">{people.label}</p>
            <div className="relative mt-10 flex gap-3">
              {[images.glucose, images.motherChild, images.pharmacy].map((src, i) =>
              <img
                key={src}
                src={src}
                alt=""
                className={`h-20 w-20 rounded-2xl object-cover sm:h-24 sm:w-24 ${i === 1 ? 'translate-y-3' : ''}`} />

              )}
            </div>
          </Reveal>

          <div className="grid gap-4 lg:col-span-5">
            <Reveal className="rounded-[2rem] bg-forest p-8 text-white sm:p-10" delay={0.08}>
              <p className="text-6xl font-medium tracking-tight text-sun">
                <CountUp to={communities.value} />
              </p>
              <p className="mt-2 text-lg text-white/85">{communities.label}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {communityNames.map((n) =>
                <li key={n} className="rounded-full bg-white/10 px-3 py-1.5 text-sm text-white/90">
                    {n}
                  </li>
                )}
              </ul>
            </Reveal>
            <Reveal className="rounded-[2rem] border border-forest/10 p-8 sm:p-10" delay={0.14}>
              <div className="flex items-end justify-between gap-6">
                <div>
                  <p className="text-6xl font-medium tracking-tight text-forest">
                    <CountUp to={outreaches.value} />
                  </p>
                  <p className="mt-2 max-w-[16rem] text-lg text-ink/75">{outreaches.label}</p>
                </div>
              </div>
              <div className="mt-6 flex items-center gap-1.5" aria-hidden="true">
                {Array.from({ length: outreaches.value }).map((_, i) =>
                <motion.span
                  key={i}
                  className="h-8 flex-1 rounded-full bg-leaf"
                  initial={{ scaleY: 0.2, opacity: 0.3 }}
                  whileInView={{ scaleY: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, ease: EASE, delay: 0.2 + i * 0.05 }} />

                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>);

}