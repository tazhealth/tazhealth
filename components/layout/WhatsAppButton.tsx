'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { WhatsAppIcon } from '../ui/SocialIcon';
import { site } from '../../data/site';
import { EASE } from '../../utils/motion';

export function WhatsAppButton() {
  return (
    <motion.a
      href={site.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with TAZhealth on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-2 sm:bottom-6 sm:right-6"
      initial={{ opacity: 0, scale: 0.96, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.3, ease: EASE, delay: 0.8 }}>
      
      <span className="pointer-events-none hidden translate-x-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-forest opacity-0 shadow-card transition-[opacity,transform] duration-200 ease-smooth group-hover:translate-x-0 group-hover:opacity-100 sm:block">
        Chat with us
      </span>
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-leaf text-white shadow-lift transition-[transform,background-color] duration-200 ease-smooth group-hover:-translate-y-0.5 group-hover:bg-forest">
        <WhatsAppIcon className="h-7 w-7" />
      </span>
    </motion.a>);

}