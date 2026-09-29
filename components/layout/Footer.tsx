'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRightIcon, CheckIcon } from 'lucide-react';
import { Logo } from './Logo';
import { SocialIcon } from '../ui/SocialIcon';
import { navLinks, site, socials } from '../../data/site';

const involveLinks = [
{ label: 'Volunteer', to: '/contact?topic=volunteer' },
{ label: 'Partner with us', to: '/partner' },
{ label: 'Donate', to: '/contact?topic=donate' },
// { label: 'Book a TAZ AI demo', to: '/taz-ai#demo' },
{ label: 'Upcoming outreaches', to: '/outreaches#upcoming' }];


const linkClass = 'text-[15px] text-ink/65 transition-colors duration-200 hover:text-forest';

function Column({ title, children, className, listClassName }: {title: string;children: React.ReactNode;className?: string;listClassName?: string;}) {
  return (
    <div className={className}>
      <h2 className="text-sm text-ink/40">{title}</h2>
      <ul className={listClassName ?? 'mt-3 space-y-2'}>{children}</ul>
    </div>);

}

export function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'error' | 'success'>('idle');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setStatus('error');
      return;
    }
    setStatus('success');
    setEmail('');
  };

  return (
    <footer className="relative overflow-hidden border-t border-ink/10 bg-[#F7F8F6] text-ink">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Statement + newsletter */}
        <div className="grid gap-6 py-10 sm:gap-8 lg:grid-cols-12 lg:items-end lg:py-14">
          <p className="text-balance text-2xl font-medium leading-[1.1] tracking-[-0.025em] sm:text-3xl lg:col-span-7">
            Care that keeps going, long after the tents come down.
          </p>

          <div className="lg:col-span-5">
            <h2 className="text-[15px] font-medium">Field notes, once a month</h2>
            <p className="mt-1 text-sm text-ink/55">Stories from our outreaches and ways to help.</p>
            {status === 'success' ?
            <p className="mt-4 flex h-12 items-center gap-2 text-[15px] text-ink/80" role="status">
                <CheckIcon className="h-5 w-5 text-leaf" /> You’re subscribed. Thank you!
              </p> :

            <form onSubmit={onSubmit} className="mt-4" noValidate>
                <label htmlFor="newsletter" className="sr-only">
                  Email address
                </label>
                <div className="flex h-12 items-center rounded-full bg-white p-1 pl-5 ring-1 ring-ink/10 transition-shadow focus-within:ring-2 focus-within:ring-leaf/40">
                  <input
                  id="newsletter"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setStatus('idle');
                  }}
                  placeholder="you@email.com"
                  aria-invalid={status === 'error'}
                  aria-describedby={status === 'error' ? 'newsletter-error' : undefined}
                  className="h-full min-w-0 flex-1 bg-transparent text-[15px] text-ink placeholder:text-ink/35 focus:outline-none" />

                  <button
                  type="submit"
                  className="flex h-10 shrink-0 items-center gap-1.5 rounded-full bg-forest px-4 text-sm font-medium text-white transition-colors duration-200 hover:bg-forest-dark">

                    Subscribe <ArrowRightIcon className="h-4 w-4" />
                  </button>
                </div>
                {status === 'error' &&
              <p id="newsletter-error" className="mt-2 text-sm text-risk-high">
                    Please enter a valid email address.
                  </p>
              }
              </form>
            }
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-7 border-t border-ink/10 py-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Logo />
            <p className="mt-4 hidden max-w-xs text-sm leading-relaxed text-ink/55 md:block">
              A Nigerian nonprofit bringing free outreaches and real follow-up to underserved communities.
            </p>
          </div>

          <Column title="Explore">
            {navLinks.map((l) =>
            <li key={l.to}>
                <Link href={l.to} className={linkClass}>
                  {l.label}
                </Link>
              </li>
            )}
          </Column>

          <Column title="Get involved">
            {involveLinks.map((l) =>
            <li key={l.to}>
                <Link href={l.to} className={linkClass}>
                  {l.label}
                </Link>
              </li>
            )}
          </Column>

          <Column title="Reach us" className="col-span-2 md:col-span-1" listClassName="mt-3 flex flex-wrap gap-x-5 gap-y-2 md:block md:space-y-2">
            <li>
              <a href={`mailto:${site.email}`} className={linkClass}>
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.phoneHref} className={linkClass}>
                {site.phone}
              </a>
            </li>
            <li>
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className={linkClass}>
                WhatsApp us
              </a>
            </li>
            <li className="text-[15px] text-ink/65">{site.address}</li>
          </Column>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col-reverse gap-5 border-t border-ink/10 py-5 text-sm text-ink/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} TAZhealth Initiative ·{' '}
            <Link href="/privacy" className="transition-colors hover:text-forest">
              Privacy Policy
            </Link>
          </p>
          <ul className="flex gap-1" aria-label="Social media">
            {socials.map((s) =>
            <li key={s.key}>
                <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full text-ink/55 transition-colors duration-200 hover:bg-ink/5 hover:text-forest">

                  <SocialIcon name={s.key} className="h-4 w-4" />
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>

      <p
        aria-hidden="true"
        className="pointer-events-none select-none px-2 pb-4 text-center text-[19vw] font-semibold leading-[0.9] tracking-[-0.06em] text-ink/[0.06] sm:pb-6">

        TAZhealth
      </p>
    </footer>);

}
