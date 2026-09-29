import React from 'react';
import { AlertCircleIcon, CheckIcon, ChevronDownIcon } from 'lucide-react';
import { cn } from '../../utils/cn';

const control =
'w-full rounded-lg border bg-white px-3.5 text-[15px] text-ink shadow-[0_1px_2px_rgba(16,24,16,0.04)] placeholder:text-ink/35 transition-[border-color,box-shadow] duration-150 focus:outline-none focus:ring-4';

function controlState(error?: string) {
  return error ?
  'border-risk-high/70 focus:border-risk-high focus:ring-risk-high/10' :
  'border-ink/[0.14] hover:border-ink/25 focus:border-forest focus:ring-leaf/15';
}

type BaseProps = {
  id: string;
  label: string;
  error?: string;
  optional?: boolean;
  hint?: string;
  className?: string;
};

function Label({ id, label, optional, as = 'label' }: {id: string;label: string;optional?: boolean;as?: 'label' | 'legend';}) {
  const Tag = as;
  return (
    <Tag {...as === 'label' ? { htmlFor: id } : {}} className="mb-1.5 flex w-full items-baseline justify-between text-[13px] font-medium text-ink/80">
      {label}
      {optional && <span className="text-xs font-normal text-ink/40">Optional</span>}
    </Tag>);

}

function Help({ id, error, hint }: {id: string;error?: string;hint?: string;}) {
  if (error) {
    return (
      <p id={`${id}-error`} className="mt-1.5 flex items-center gap-1.5 text-[13px] text-risk-high">
        <AlertCircleIcon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
        {error}
      </p>);

  }
  if (hint) return <p className="mt-1.5 text-[13px] text-ink/45">{hint}</p>;
  return null;
}

type TextFieldProps = BaseProps & {
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>['inputMode'];
};

export function TextField({ id, label, error, optional, hint, className, value, onChange, type = 'text', placeholder, autoComplete, inputMode }: TextFieldProps) {
  return (
    <div className={className}>
      <Label id={id} label={label} optional={optional} />
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        autoComplete={autoComplete}
        inputMode={inputMode}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(control, 'h-11', controlState(error))} />

      <Help id={id} error={error} hint={hint} />
    </div>);

}

type SelectFieldProps = BaseProps & {
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder?: string;
};

export function SelectField({ id, label, error, optional, hint, className, value, onChange, options, placeholder = 'Select…' }: SelectFieldProps) {
  return (
    <div className={className}>
      <Label id={id} label={label} optional={optional} />
      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className={cn(control, 'h-11 cursor-pointer appearance-none pr-10', !value && 'text-ink/35', controlState(error))}>

          <option value="">{placeholder}</option>
          {options.map((o) =>
          <option key={o} value={o} className="text-ink">
              {o}
            </option>
          )}
        </select>
        <ChevronDownIcon className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/40" aria-hidden="true" />
      </div>
      <Help id={id} error={error} hint={hint} />
    </div>);

}

type TextAreaFieldProps = BaseProps & {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  rows?: number;
};

export function TextAreaField({ id, label, error, optional, hint, className, value, onChange, placeholder, rows = 5 }: TextAreaFieldProps) {
  return (
    <div className={className}>
      <Label id={id} label={label} optional={optional} />
      <textarea
        id={id}
        rows={rows}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(control, 'resize-y py-2.5 leading-relaxed', controlState(error))} />

      <Help id={id} error={error} hint={hint} />
    </div>);

}

type ChoiceChipsProps = BaseProps & {
  name: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
};

export function ChoiceChips({ id, name, label, error, optional, hint, className, value, onChange, options }: ChoiceChipsProps) {
  return (
    <fieldset className={className} aria-describedby={error ? `${id}-error` : undefined}>
      <Label id={id} label={label} optional={optional} as="legend" />
      <div className="flex flex-wrap gap-2">
        {options.map((o, i) =>
        <label
          key={o}
          className={cn(
            'flex h-9 cursor-pointer items-center gap-1.5 rounded-full border px-3.5 text-sm transition-colors duration-150',
            'has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-leaf/15',
            value === o ?
            'border-forest bg-forest text-white' :
            error ?
            'border-risk-high/60 text-ink/75 hover:border-risk-high' :
            'border-ink/[0.14] bg-white text-ink/75 hover:border-ink/30 hover:text-ink'
          )}>

            <input
            type="radio"
            name={name}
            id={i === 0 ? id : undefined}
            value={o}
            checked={value === o}
            onChange={() => onChange(o)}
            className="sr-only" />

            {value === o && <CheckIcon className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden="true" />}
            {o}
          </label>
        )}
      </div>
      <Help id={id} error={error} hint={hint} />
    </fieldset>);

}

type CheckboxFieldProps = {
  id: string;
  checked: boolean;
  onChange: (v: boolean) => void;
  children: React.ReactNode;
  error?: string;
};

export function CheckboxField({ id, checked, onChange, children, error }: CheckboxFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-ink/65">
        <span className="relative mt-0.5 flex h-[18px] w-[18px] shrink-0">
          <input
            id={id}
            type="checkbox"
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? `${id}-error` : undefined}
            className={cn(
              'peer h-full w-full cursor-pointer appearance-none rounded-[5px] border bg-white transition-colors duration-150 checked:border-forest checked:bg-forest focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-leaf/15',
              error ? 'border-risk-high' : 'border-ink/25 hover:border-ink/40'
            )} />

          <CheckIcon
            className="pointer-events-none absolute inset-0 m-auto h-3 w-3 text-white opacity-0 peer-checked:opacity-100"
            strokeWidth={3}
            aria-hidden="true" />

        </span>
        <span>{children}</span>
      </label>
      <Help id={id} error={error} />
    </div>);

}
