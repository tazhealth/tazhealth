import React from 'react';
import { cn } from '../../utils/cn';

type LogoProps = {
  tone?: 'default' | 'light';
  className?: string;
};

export function Logo({ tone = 'default', className }: LogoProps) {
  const outline = tone === 'light' ? '#FFFFFF' : '#1A1A1A';
  return (
    <span className={cn('inline-flex items-center gap-2', className)}>
      <svg viewBox="0 0 48 44" className="h-11 w-auto shrink-0" aria-hidden="true" fill="none">
        <path
          d="M24 39C11 30.5 4 23 4 14.8 4 9 8.4 5 13.6 5c4 0 7.6 2.4 10.4 6 2.8-3.6 6.4-6 10.4-6C39.6 5 44 9 44 14.8 44 23 37 30.5 24 39Z"
          stroke={outline}
          strokeWidth="2.6"
          strokeLinejoin="round" />
        
        <path d="M41 21c3.5 2.5 4 7.5.5 10.5" stroke={outline} strokeWidth="2" strokeLinecap="round" />
        <circle cx="39.5" cy="34" r="2.6" stroke={outline} strokeWidth="2" />
        <path
          d="M8 21h7l2.5-5 4 10 3.5-13 3 8h11"
          stroke="#3A9A3F"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round" />
        
        <path d="M29.5 8.5c1-4.5 5.5-7 10.5-6.5-.5 5-4.8 8-10.5 6.5Z" fill="#3A9A3F" />
      </svg>
      <span className="sr-only">TAZhealth</span>
    </span>);

}