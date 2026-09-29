'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon } from 'lucide-react';
import { panelClass } from './FormPanel';
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
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: EASE }}
      className={`${panelClass} flex flex-col items-center px-6 py-14 text-center`}>

      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-mint text-forest ring-1 ring-leaf/30">
        <CheckIcon className="h-5 w-5" strokeWidth={2.5} />
      </span>
      <h3 className="mt-5 text-lg font-medium text-ink">{title}</h3>
      <p className="mt-1.5 max-w-sm text-[15px] leading-relaxed text-ink/60">{text}</p>
      <button type="button" onClick={onReset} className="mt-6 text-sm font-medium text-leaf underline-offset-4 hover:text-forest hover:underline">
        {resetLabel}
      </button>
    </motion.div>);

}
