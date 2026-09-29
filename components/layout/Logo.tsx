import React from 'react';
import { cn } from '../../utils/cn';

type LogoProps = {
  tone?: 'default' | 'light';
  className?: string;
};

export function Logo({ tone = 'default', className }: LogoProps) {
  return (
    <img
      src={tone === 'light' ? '/logo-light.png' : '/logo.png'}
      alt="TAZhealth"
      width={720}
      height={290}
      className={cn('h-10 w-auto sm:h-11', className)} />);


}
