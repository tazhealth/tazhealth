'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { HeartIcon, Loader2Icon, LockIcon } from 'lucide-react';
import { ButtonLink } from '../ui/ButtonLink';
import { RevealGroup, RevealItem } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import { FormSuccess } from '../forms/FormSuccess';
import { donationAmounts, donationUses } from '../../data/involve';
import { cn } from '../../utils/cn';
import { EASE } from '../../utils/motion';

const naira = (n: number) => `₦${n.toLocaleString()}`;

export function DonateSection() {
  const [frequency, setFrequency] = useState<'once' | 'monthly'>('once');
  const [amount, setAmount] = useState<number>(10000);
  const [custom, setCustom] = useState('');
  const [status, setStatus] = useState<'idle' | 'processing' | 'done'>('idle');
  const [error, setError] = useState('');

  const value = custom ? Number(custom.replace(/[^\d]/g, '')) : amount;

  const donate = () => {
    if (!value || value < 500) {
      setError('Please enter an amount of at least ₦500.');
      return;
    }
    setError('');
    setStatus('processing');
    window.setTimeout(() => setStatus('done'), 900);
  };

  return (
    <section id="donate" className="scroll-mt-20 bg-white py-20 lg:py-28" aria-labelledby="donate-title">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <SectionHeading
            id="donate-title"
            title="Donate to keep care going."
            intro="Every naira goes to the three things that make continuous care possible." />
          
          <RevealGroup as="ul" className="mt-10 divide-y divide-forest/10 border-y border-forest/10">
            {donationUses.map((d) => {
              const Icon = d.icon;
              return (
                <RevealItem as="li" key={d.title} className="flex gap-5 py-6">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-mint text-leaf">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-xl text-forest">{d.title}</h3>
                    <p className="mt-1 text-[16px] leading-relaxed text-ink/70">{d.text}</p>
                    <p className="mt-2 inline-flex rounded-full bg-sun/20 px-3 py-1 text-sm font-medium text-forest">{d.example}</p>
                  </div>
                </RevealItem>);

            })}
          </RevealGroup>
        </div>

        <div className="lg:pt-4">
          {status === 'done' ?
          <FormSuccess
            title="Thank you for your generosity"
            text={`Your ${frequency === 'monthly' ? 'monthly ' : ''}gift of ${naira(value)} will be completed with our secure payment partner. We’ll email your receipt and an impact update.`}
            onReset={() => setStatus('idle')}
            resetLabel="Make another gift" /> :


          <div className="relative overflow-hidden rounded-[2rem] bg-forest p-6 text-white sm:p-8 lg:sticky lg:top-28">
              <div className="adire-light pointer-events-none absolute inset-0 opacity-[0.05]" aria-hidden="true" />
              <div className="relative">
                <h3 className="text-2xl">Make a gift</h3>
                <div role="radiogroup" aria-label="Donation frequency" className="mt-6 grid grid-cols-2 rounded-full bg-white/10 p-1">
                  {(['once', 'monthly'] as const).map((f) =>
                <button
                  key={f}
                  type="button"
                  role="radio"
                  aria-checked={frequency === f}
                  onClick={() => setFrequency(f)}
                  className={cn(
                    'h-11 rounded-full text-[15px] font-medium transition-colors duration-200',
                    frequency === f ? 'bg-white text-forest' : 'text-white/80 hover:text-white'
                  )}>
                  
                      {f === 'once' ? 'One-time' : 'Monthly'}
                    </button>
                )}
                </div>

                <div role="radiogroup" aria-label="Donation amount" className="mt-5 grid grid-cols-2 gap-2">
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
                        'h-14 rounded-2xl text-lg font-medium transition-[background-color,color,transform] duration-200 hover:-translate-y-0.5',
                        active ? 'bg-sun text-forest' : 'bg-white/10 text-white hover:bg-white/15'
                      )}>
                      
                        {naira(a)}
                      </button>);

                })}
                </div>

                <label htmlFor="customAmount" className="mt-5 block text-sm font-medium text-white/80">
                  Or enter your own amount
                </label>
                <div className="relative mt-2">
                  <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink/50">₦</span>
                  <input
                  id="customAmount"
                  inputMode="numeric"
                  value={custom}
                  onChange={(e) => {
                    setCustom(e.target.value.replace(/[^\d]/g, ''));
                    setError('');
                  }}
                  placeholder="e.g. 15000"
                  aria-invalid={Boolean(error)}
                  aria-describedby={error ? 'amount-error' : undefined}
                  className="h-12 w-full rounded-xl bg-white pl-9 pr-4 text-[16px] text-ink placeholder:text-ink/40 focus:outline-none focus:ring-4 focus:ring-sun/40" />
                
                </div>
                <AnimatePresence>
                  {error &&
                <motion.p
                  id="amount-error"
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2, ease: EASE }}
                  className="mt-2 text-sm text-sun">
                  
                      {error}
                    </motion.p>
                }
                </AnimatePresence>

                <ButtonLink onClick={donate} variant="light" size="lg" className="mt-6 w-full" disabled={status === 'processing'}>
                  {status === 'processing' ?
                <>
                      <Loader2Icon className="h-5 w-5 animate-spin" aria-hidden="true" /> Processing…
                    </> :

                <>
                      <HeartIcon className="h-5 w-5" aria-hidden="true" />
                      Donate {value ? naira(value) : ''}
                      {frequency === 'monthly' ? ' / month' : ''}
                    </>
                }
                </ButtonLink>
                <p className="mt-4 flex items-center justify-center gap-2 text-sm text-white/60">
                  <LockIcon className="h-4 w-4" aria-hidden="true" /> Secure payment · Receipt by email
                </p>
              </div>
            </div>
          }
        </div>
      </div>
    </section>);

}