import React, { useState } from 'react';

type Values = Record<string, string | boolean>;
type Errors<T> = Partial<Record<keyof T, string>>;
type Status = 'idle' | 'submitting' | 'success';

export function useSimpleForm<T extends Values>(initial: T, validate: (values: T) => Errors<T>) {
  const [values, setValues] = useState<T>(initial);
  const [errors, setErrors] = useState<Errors<T>>({});
  const [status, setStatus] = useState<Status>('idle');

  const setField = <K extends keyof T,>(key: K, value: T[K]) => {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const found = validate(values);
    const hasErrors = Object.values(found).some(Boolean);
    setErrors(found);
    if (hasErrors) {
      const firstKey = Object.keys(found).find((k) => found[k as keyof T]);
      if (firstKey) document.getElementById(firstKey)?.focus();
      return;
    }
    setStatus('submitting');
    window.setTimeout(() => setStatus('success'), 900);
  };

  const reset = () => {
    setValues(initial);
    setErrors({});
    setStatus('idle');
  };

  return { values, errors, status, setField, handleSubmit, reset };
}

export const isEmail = (v: string) => /^\S+@\S+\.\S+$/.test(v);