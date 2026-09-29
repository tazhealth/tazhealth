import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

type PhoneMockupProps = {
  children: React.ReactNode;
  className?: string;
  float?: boolean;
  floatDelay?: number;
};

export function PhoneMockup({ children, className, float = false, floatDelay = 0 }: PhoneMockupProps) {
  const frame =
  <div className={cn('relative aspect-[9/19] w-[256px] rounded-[42px] bg-ink p-2.5 shadow-phone sm:w-[272px]', className)}>
      <div className="absolute left-1/2 top-4 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-ink" aria-hidden="true" />
      <div className="relative h-full w-full overflow-hidden rounded-[34px] bg-white">{children}</div>
    </div>;


  if (!float) return frame;

  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: floatDelay }}>
      
      {frame}
    </motion.div>);

}