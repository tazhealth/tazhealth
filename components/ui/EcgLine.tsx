import React from 'react';
import { cn } from '../../utils/cn';

type EcgLineProps = {
  className?: string;
  tone?: 'leaf' | 'white' | 'sun';
  strokeWidth?: number;
  baseOpacity?: number;
};

const PATH =
'M0 40 H70 L80 40 L88 30 L96 40 H120 L130 40 L138 8 L150 72 L160 18 L168 40 H210 L222 32 L232 40 H300 L310 40 L318 30 L326 40 H350 L360 40 L368 8 L380 72 L390 18 L398 40 H440 L452 32 L462 40 H600';

const COLORS = { leaf: '#3A9A3F', white: '#FFFFFF', sun: '#F2A93B' };

export function EcgLine({ className, tone = 'leaf', strokeWidth = 2.5, baseOpacity = 0.22 }: EcgLineProps) {
  const color = COLORS[tone];
  return (
    <svg
      viewBox="0 0 600 80"
      preserveAspectRatio="none"
      className={cn('block h-12 w-full', className)}
      aria-hidden="true"
      fill="none">
      
      <path
        d={PATH}
        stroke={color}
        strokeOpacity={baseOpacity}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke" />
      
      <path
        d={PATH}
        pathLength={1}
        className="ecg-pulse"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke" />
      
    </svg>);

}