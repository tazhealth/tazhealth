import React from 'react';
import { Loader2Icon } from 'lucide-react';
import { cn } from '../../utils/cn';

export const panelClass = 'overflow-hidden rounded-2xl bg-white shadow-[0_1px_3px_rgba(16,24,16,0.05)] ring-1 ring-ink/10';

type FormPanelProps = {
  onSubmit: (e: React.FormEvent) => void;
  footer: React.ReactNode;
  children: React.ReactNode;
  label: string;
};

export function FormPanel({ onSubmit, footer, children, label }: FormPanelProps) {
  return (
    <form onSubmit={onSubmit} noValidate aria-label={label} className={panelClass}>
      {children}
      <div className="flex flex-col gap-4 border-t border-ink/[0.08] bg-ink/[0.02] px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-7">
        {footer}
      </div>
    </form>);

}

export function FormSection({ title, description, children }: {title: string;description?: string;children: React.ReactNode;}) {
  return (
    <div className="border-t border-ink/[0.08] px-4 py-5 first:border-t-0 sm:px-7 sm:py-7">
      <h3 className="text-[15px] font-medium text-ink">{title}</h3>
      {description && <p className="mt-0.5 text-sm text-ink/50">{description}</p>}
      <div className="mt-4 sm:mt-5">{children}</div>
    </div>);

}

export function SubmitButton({ busy, busyLabel = 'Sending…', children, className }: {busy: boolean;busyLabel?: string;children: React.ReactNode;className?: string;}) {
  return (
    <button
      type="submit"
      disabled={busy}
      className={cn(
        'inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-lg bg-forest px-4 text-sm font-medium text-white shadow-[0_1px_2px_rgba(16,24,16,0.2)] transition-colors duration-150 hover:bg-forest-dark focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-leaf/25 disabled:opacity-60',
        className
      )}>

      {busy ?
      <>
          <Loader2Icon className="h-4 w-4 animate-spin" aria-hidden="true" /> {busyLabel}
        </> :

      children
      }
    </button>);

}
