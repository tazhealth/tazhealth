'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRightIcon, CheckIcon } from 'lucide-react';
import { Logo } from './Logo';
import { SocialIcon } from '../ui/SocialIcon';
import { navLinks, site, socials } from '../../data/site';

const involveLinks = [
{ label: 'Volunteer', to: '/get-involved#volunteer' },
{ label: 'Partner with us', to: '/partner' },
{ label: 'Donate', to: '/get-involved#donate' },
{ label: 'Book a TAZ AI demo', to: '/taz-ai#demo' },
{ label: 'Upcoming outreaches', to: '/outreaches#upcoming' }];


const linkClass = 'text-[15px] text-white/70 transition-colors duration-200 hover:text-white';

function Column({ title, children }: {title: string;children: React.ReactNode;}) {
  return (
    <div>
      <h2 className="text-sm text-white/40">{title}</h2>
      <ul className="mt-4 space-y-3">{children}</ul>
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
    <footer className="relative overflow-hidden bg-forest-dark text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Statement + newsletter */}
        <div className="grid gap-10 py-16 lg:grid-cols-12 lg:items-end lg:py-20">
          <p className="text-balance text-3xl font-medium leading-[1.1] tracking-[-0.025em] sm:text-4xl lg:col-span-7">
            Care that keeps going, long after the tents come down.
          </p>

          <div className="lg:col-span-5">
            <h2 className="text-[15px] font-medium">Field notes, once a month</h2>
            <p className="mt-1 text-sm text-white/55">Stories from our outreaches, TAZ AI updates and ways to help.</p>
            {status === 'success' ?
            <p className="mt-4 flex h-12 items-center gap-2 text-[15px] text-white/85" role="status">
                <CheckIcon className="h-5 w-5 text-sun" /> You’re subscribed. Thank you!
              </p> :

            <form onSubmit={onSubmit} className="mt-4" noValidate>
                <label htmlFor="newsletter" className="sr-only">
                  Email address
                </label>
                <div className="flex h-12 items-center rounded-full bg-white/[0.08] p-1 pl-5 ring-1 ring-white/15 transition-shadow focus-within:ring-sun">
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
                  className="h-full min-w-0 flex-1 bg-transparent text-[15px] text-white placeholder:text-white/40 focus:outline-none" />

                  <button
                  type="submit"
                  className="flex h-10 shrink-0 items-center gap-1.5 rounded-full bg-white px-4 text-sm font-medium text-forest transition-colors duration-200 hover:bg-sun">

                    Subscribe <ArrowRightIcon className="h-4 w-4" />
                  </button>
                </div>
                {status === 'error' &&
              <p id="newsletter-error" className="mt-2 text-sm text-sun">
                    Please enter a valid email address.
                  </p>
              }
              </form>
            }
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 border-t border-white/10 py-14 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Logo tone="light" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">
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

          <Column title="Reach us">
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
            <li className="text-[15px] text-white/70">{site.address}</li>
          </Column>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col-reverse gap-5 border-t border-white/10 py-6 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} TAZhealth Initiative ·{' '}
            <Link href="/privacy" className="transition-colors hover:text-white">
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
                className="flex h-9 w-9 items-center justify-center rounded-full text-white/60 transition-colors duration-200 hover:bg-white/10 hover:text-white">

                  <SocialIcon name={s.key} className="h-4 w-4" />
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>

      <p
        aria-hidden="true"
        className="pointer-events-none -mb-[4.5vw] select-none text-center text-[21vw] font-semibold leading-none tracking-[-0.06em] text-white/[0.05]">

        TAZhealth
      </p>
    </footer>);

}
