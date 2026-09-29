'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { EcgLine } from './EcgLine';
import { EASE } from '../../utils/motion';

type PageHeroProps = {
  title: React.ReactNode;
  description: string;
  image: string;
  imageAlt: string;
  actions?: React.ReactNode;
  aside?: React.ReactNode;
};

export function PageHero({ title, description, image, imageAlt, actions, aside }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-mint pb-16 pt-28 lg:pb-24 lg:pt-36">
      <div className="adire pointer-events-none absolute inset-0 opacity-[0.07]" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <motion.h1
            className="text-[40px] leading-[1.04] text-forest sm:text-5xl lg:text-[64px]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: EASE }}>
            
            {title}
          </motion.h1>
          <motion.p
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink/75"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.1 }}>
            
            {description}
          </motion.p>
          <EcgLine className="mt-8 h-10 max-w-md" />
          {actions &&
          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: EASE, delay: 0.2 }}>
            
              {actions}
            </motion.div>
          }
        </div>
        <motion.div
          className="relative mx-auto w-full max-w-[420px]"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}>
          
          <div className="aspect-[4/5] overflow-hidden rounded-b-[2rem] rounded-t-full bg-forest/10 ring-8 ring-white">
            <img src={image} alt={imageAlt} className="ken-burns h-full w-full object-cover" />
          </div>
          {aside}
        </motion.div>
      </div>
    </section>);

}