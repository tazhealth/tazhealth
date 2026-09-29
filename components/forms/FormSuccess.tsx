'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon } from 'lucide-react';
import { EASE } from '../../utils/motion';

type FormSuccessProps = {
  title: string;
  text: string;
  onReset: () => void;
  resetLabel?: string;
};

export function FormSuccess({ title, text, onReset, resetLabel = 'Send another' }: FormSuccessProps) {
  return (
    <motion.div
      role="status"
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: EASE }}
      className="flex flex-col items-center rounded-3xl bg-mint px-6 py-12 text-center">
      
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-leaf text-white">
        <CheckIcon className="h-7 w-7" />
      </span>
      <h3 className="mt-5 text-2xl text-forest">{title}</h3>
      <p className="mt-2 max-w-sm text-[16px] leading-relaxed text-ink/70">{text}</p>
      <button type="button" onClick={onReset} className="mt-6 text-[15px] font-medium text-leaf underline-offset-4 hover:text-forest hover:underline">
        {resetLabel}
      </button>
    </motion.div>);

}