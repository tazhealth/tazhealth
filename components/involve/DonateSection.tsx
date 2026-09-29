'use client';

import React, { useState } from 'react';
import { AlertCircleIcon, LockIcon } from 'lucide-react';
import { FormSection, SubmitButton, panelClass } from '../forms/FormPanel';
import { FormSuccess } from '../forms/FormSuccess';
import { SideIntro } from './SideIntro';
import { donationAmounts, donationUses } from '../../data/involve';
import { cn } from '../../utils/cn';

const naira = (n: number) => `₦${n.toLocaleString()}`;

const [drugs, equipment, sms] = donationUses;
const impactFor = (n: number) => {
  const use = n >= 25000 ? equipment : n >= 10000 ? drugs : sms;
  return use.example.split(' · ')[1];
};

export function DonateSection() {
  const [frequency, setFrequency] = useState<'once' | 'monthly'>('once');
  const [amount, setAmount] = useState<number>(10000);
  const [custom, setCustom] = useState('');
  const [status, setStatus] = useState<'idle' | 'processing' | 'done'>('idle');
  const [error, setError] = useState('');

  const value = custom ? Number(custom) : amount;

  const donate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value || value < 500) {
      setError('Please enter an amount of at least ₦500.');
      document.getElementById('customAmount')?.focus();
      return;
    }
    setError('');
    setStatus('processing');
    window.setTimeout(() => setStatus('done'), 900);
  };

  return (
    <section id="donate" className="scroll-mt-20 border-t border-ink/10 bg-white py-24 lg:py-32" aria-labelledby="donate-title">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <SideIntro
            index="03"
            id="donate-title"
            title="Donate"
            text="Every naira goes to the three things that keep care going after the outreach.">

            <ul className="mt-10 border-t border-ink/10">
              {donationUses.map((d) => {
                const [price, what] = d.example.split(' · ');
                return (
                  <li key={d.title} className="grid grid-cols-[1fr_auto] gap-x-4 border-b border-ink/10 py-4">
                    <p className="text-[15px] font-medium text-ink">{d.title}</p>
                    <p className="text-[15px] font-medium tabular-nums text-ink">{price}</p>
                    <p className="col-span-2 mt-0.5 text-sm text-ink/55">{what}</p>
                  </li>);

              })}
            </ul>
          </SideIntro>
        </div>

        <div className="lg:col-span-7">
          {status === 'done' ?
          <FormSuccess
            title="Thank you for your gift"
            text={`Your ${frequency === 'monthly' ? 'monthly ' : ''}gift of ${naira(value)} will be completed with our secure payment partner. We’ll email your receipt and an impact update.`}
            onReset={() => setStatus('idle')}
            resetLabel="Make another gift" /> :


          <form onSubmit={donate} noValidate aria-label="Make a donation" className={panelClass}>
              <FormSection title="How often?">
                <div role="radiogroup" aria-label="Donation frequency" className="grid grid-cols-2 rounded-lg bg-ink/[0.05] p-1">
                  {(['once', 'monthly'] as const).map((f) =>
                <button
                  key={f}
                  type="button"
                  role="radio"
                  aria-checked={frequency === f}
                  onClick={() => setFrequency(f)}
                  className={cn(
                    'h-9 rounded-md text-sm font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-leaf/15',
                    frequency === f ? 'bg-white text-ink shadow-[0_1px_3px_rgba(16,24,16,0.12)]' : 'text-ink/55 hover:text-ink'
                  )}>

                      {f === 'once' ? 'One-time' : 'Monthly'}
                    </button>
                )}
                </div>
              </FormSection>

              <FormSection title="Amount">
                <div role="radiogroup" aria-label="Donation amount" className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {donationAmounts.map((a) => {
                  const active = !custom && amount === a;
                  return (
                    <button
                      key={a}
                      type="button"
                      role="radio"
                      aria-checked={active}
                      onClick={() => {
                        setAmount(a);
                        setCustom('');
                        setError('');
                      }}
                      className={cn(
                        'h-12 rounded-lg border text-[15px] font-medium tabular-nums transition-colors duration-150 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-leaf/15',
                        active ? 'border-forest bg-mint/50 text-forest ring-1 ring-forest' : 'border-ink/[0.14] text-ink/75 hover:border-ink/30 hover:text-ink'
                      )}>

                        {naira(a)}
                      </button>);

                })}
                </div>

                <label htmlFor="customAmount" className="mb-1.5 mt-5 block text-[13px] font-medium text-ink/80">
                  Or enter an amount
                </label>
                <div
                className={cn(
                  'flex h-11 items-center rounded-lg border bg-white shadow-[0_1px_2px_rgba(16,24,16,0.04)] transition-[border-color,box-shadow] duration-150 focus-within:ring-4',
                  error ? 'border-risk-high/70 focus-within:ring-risk-high/10' : 'border-ink/[0.14] hover:border-ink/25 focus-within:border-forest focus-within:ring-leaf/15'
                )}>

                  <span className="pl-3.5 pr-1 text-[15px] text-ink/45">₦</span>
                  <input
                  id="customAmount"
                  inputMode="numeric"
                  value={custom ? Number(custom).toLocaleString() : ''}
                  onChange={(e) => {
                    setCustom(e.target.value.replace(/[^\d]/g, ''));
                    setError('');
                  }}
                  placeholder="15,000"
                  aria-invalid={Boolean(error)}
                  aria-describedby={error ? 'amount-error' : undefined}
                  className="h-full min-w-0 flex-1 bg-transparent pr-3.5 text-[15px] tabular-nums text-ink placeholder:text-ink/35 focus:outline-none" />

                  <span className="pr-3.5 text-sm text-ink/40">NGN</span>
                </div>
                {error ?
              <p id="amount-error" className="mt-1.5 flex items-center gap-1.5 text-[13px] text-risk-high">
                    <AlertCircleIcon className="h-3.5 w-3.5" aria-hidden="true" /> {error}
                  </p> :
              value >= 500 ?
              <p className="mt-2 text-[13px] text-ink/50">
                    {naira(value)} could cover roughly {impactFor(value)}.
                  </p> :
              null}
              </FormSection>

              <div className="border-t border-ink/[0.08] bg-ink/[0.02] px-5 py-5 sm:px-7">
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between text-ink/55">
                    <dt>Frequency</dt>
                    <dd>{frequency === 'once' ? 'One-time' : 'Every month'}</dd>
                  </div>
                  <div className="flex justify-between border-t border-ink/[0.08] pt-2 text-[15px] font-medium text-ink">
                    <dt>{frequency === 'once' ? 'Total' : 'Total per month'}</dt>
                    <dd className="tabular-nums">{value ? naira(value) : '₦0'}</dd>
                  </div>
                </dl>
                <SubmitButton busy={status === 'processing'} busyLabel="Processing…" className="mt-5 h-11 w-full text-[15px]">
                  Donate {value ? naira(value) : ''}
                  {frequency === 'monthly' ? ' a month' : ''}
                </SubmitButton>
                <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-ink/45">
                  <LockIcon className="h-3.5 w-3.5" aria-hidden="true" /> Secure payment · Receipt by email · Cancel monthly gifts anytime
                </p>
              </div>
            </form>
          }
        </div>
      </div>
    </section>);

}
