import React from 'react';
import { cn } from '../../utils/cn';

type RiskBadgeProps = {
  level: 'high' | 'medium' | 'low';
  children: React.ReactNode;
  pulse?: boolean;
  className?: string;
};

const styles = {
  high: 'bg-risk-high text-white',
  medium: 'bg-risk-medium text-ink',
  low: 'bg-risk-low text-white'
};

export function RiskBadge({ level, children, pulse = false, className }: RiskBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-medium',
        styles[level],
        pulse && level === 'high' && 'risk-pulse',
        className
      )}>
      
      <span className="h-1.5 w-1.5 rounded-full bg-current opacity-80" aria-hidden="true" />
      {children}
    </span>);

}