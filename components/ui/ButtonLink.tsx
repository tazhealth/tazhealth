import React from 'react';
import Link from 'next/link';
import { cn } from '../../utils/cn';

type Variant = 'primary' | 'secondary' | 'light' | 'outlineLight';
type Size = 'md' | 'lg';

type ButtonLinkProps = {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  to?: string;
  href?: string;
  external?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
};

const base =
'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-[transform,box-shadow,background-color,color] duration-200 ease-smooth hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60';

const variants: Record<Variant, string> = {
  primary: 'bg-leaf text-white hover:bg-forest hover:shadow-lift',
  secondary: 'bg-white text-forest ring-1 ring-inset ring-forest/20 hover:bg-forest hover:text-white hover:shadow-lift',
  light: 'bg-white text-forest hover:bg-mint hover:shadow-lift',
  outlineLight: 'text-white ring-1 ring-inset ring-white/40 hover:bg-white hover:text-forest'
};

const sizes: Record<Size, string> = {
  md: 'h-11 px-5 text-sm sm:h-12 sm:px-6 sm:text-[15px]',
  lg: 'h-11 px-5 text-sm sm:h-14 sm:px-7 sm:text-base'
};

export function ButtonLink({
  children,
  variant = 'primary',
  size = 'md',
  className,
  to,
  href,
  external,
  onClick,
  type = 'button',
  disabled
}: ButtonLinkProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (to) {
    return (
      <Link href={to} className={classes} onClick={onClick}>
        {children}
      </Link>);

  }
  if (href) {
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        {...external ? { target: '_blank', rel: 'noopener noreferrer' } : {}}>
        
        {children}
      </a>);

  }
  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>);

}