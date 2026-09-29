import React from 'react';
import { ChevronDownIcon } from 'lucide-react';
import { cn } from '../../utils/cn';

const control =
'w-full rounded-xl border bg-white px-4 text-[16px] text-ink placeholder:text-ink/40 transition-[border-color,box-shadow] duration-200 focus:outline-none focus:ring-4';

function controlState(error?: string) {
  return error ? 'border-risk-high focus:border-risk-high focus:ring-risk-high/15' : 'border-ink/15 focus:border-leaf focus:ring-leaf/15';
}

type BaseProps = {
  id: string;
  label: string;
  error?: string;
  optional?: boolean;
  className?: string;
};

function Label({ id, label, optional }: {id: string;label: string;optional?: boolean;}) {
  return (
    <label htmlFor={id} className="mb-2 block text-sm font-medium text-ink">
      {label}
      {optional && <span className="ml-1 font-normal text-ink/50">(optional)</span>}
    </label>);

}

function ErrorText({ id, error }: {id: string;error?: string;}) {
  if (!error) return null;
  return (
    <p id={`${id}-error`} className="mt-1.5 text-sm text-risk-high">
      {error}
    </p>);

}

type TextFieldProps = BaseProps & {
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
};

export function TextField({ id, label, error, optional, className, value, onChange, type = 'text', placeholder, autoComplete }: TextFieldProps) {
  return (
    <div className={className}>
      <Label id={id} label={label} optional={optional} />
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(control, 'h-12', controlState(error))} />
      
      <ErrorText id={id} error={error} />
    </div>);

}

type SelectFieldProps = BaseProps & {
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder?: string;
};

export function SelectField({ id, label, error, optional, className, value, onChange, options, placeholder = 'Select…' }: SelectFieldProps) {
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
          className={cn(control, 'h-12 appearance-none pr-10', !value && 'text-ink/40', controlState(error))}>
          
          <option value="">{placeholder}</option>
          {options.map((o) =>
          <option key={o} value={o} className="text-ink">
              {o}
            </option>
          )}
        </select>
        <ChevronDownIcon className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/50" aria-hidden="true" />
      </div>
      <ErrorText id={id} error={error} />
    </div>);

}

type TextAreaFieldProps = BaseProps & {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  rows?: number;
};

export function TextAreaField({ id, label, error, optional, className, value, onChange, placeholder, rows = 5 }: TextAreaFieldProps) {
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
        className={cn(control, 'resize-y py-3', controlState(error))} />
      
      <ErrorText id={id} error={error} />
    </div>);

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
      <label htmlFor={id} className="flex cursor-pointer items-start gap-3 text-[15px] leading-relaxed text-ink/75">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className="mt-1 h-5 w-5 shrink-0 rounded border-ink/30 accent-leaf" />
        
        <span>{children}</span>
      </label>
      <ErrorText id={id} error={error} />
    </div>);

}