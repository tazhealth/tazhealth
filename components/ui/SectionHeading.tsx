import React from 'react';
import { Reveal } from './Reveal';
import { cn } from '../../utils/cn';

type SectionHeadingProps = {
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: 'left' | 'center';
  tone?: 'default' | 'light';
  className?: string;
  id?: string;
};

export function SectionHeading({ title, intro, align = 'left', tone = 'default', className, id }: SectionHeadingProps) {
  return (
    <Reveal className={cn(align === 'center' && 'mx-auto text-center', 'max-w-2xl', className)}>
      <h2
        id={id}
        className={cn(
          'text-[26px] leading-[1.1] sm:text-3xl lg:text-[38px]',
          tone === 'light' ? 'text-white' : 'text-forest'
        )}>
        
        {title}
      </h2>
      {intro &&
      <p className={cn('mt-4 text-lg leading-relaxed', tone === 'light' ? 'text-white/75' : 'text-ink/70')}>{intro}</p>
      }
    </Reveal>);

}