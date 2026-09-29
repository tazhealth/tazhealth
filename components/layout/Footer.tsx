import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, CheckIcon, MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
import { Logo } from './Logo';
import { EcgLine } from '../ui/EcgLine';
import { SocialIcon, WhatsAppIcon } from '../ui/SocialIcon';
import { navLinks, site, socials } from '../../data/site';

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
    <footer className="relative overflow-hidden bg-forest text-white">
      <div className="adire-light pointer-events-none absolute inset-0 opacity-[0.05]" aria-hidden="true" />
      <EcgLine tone="white" className="relative h-14 opacity-70" baseOpacity={0.18} />

      <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-10 sm:px-8 lg:pt-14">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1.4fr]">
          <div>
            <Logo tone="light" />
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-white/75">{site.mission}</p>
            <ul className="mt-6 flex gap-2" aria-label="Social media">
              {socials.map((s) =>
              <li key={s.key}>
                  <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-[background-color,color,transform] duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-forest">
                  
                    <SocialIcon name={s.key} className="h-5 w-5" />
                  </a>
                </li>
              )}
            </ul>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-sm font-medium text-white/60">Explore</h2>
            <ul className="mt-4 space-y-3">
              {navLinks.map((l) =>
              <li key={l.to}>
                  <Link to={l.to} className="text-[15px] text-white/90 transition-colors hover:text-sun">
                    {l.label}
                  </Link>
                </li>
              )}
              <li>
                <Link to="/privacy" className="text-[15px] text-white/90 transition-colors hover:text-sun">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-medium text-white/60">Reach us</h2>
            <ul className="mt-4 space-y-4 text-[15px]">
              <li>
                <a href={`mailto:${site.email}`} className="flex items-start gap-3 text-white/90 hover:text-sun">
                  <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-white/60" /> {site.email}
                </a>
              </li>
              <li>
                <a href={site.phoneHref} className="flex items-start gap-3 text-white/90 hover:text-sun">
                  <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-white/60" /> {site.phone}
                </a>
              </li>
              <li>
                <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-white/90 hover:text-sun">
                  <WhatsAppIcon className="mt-0.5 h-4 w-4 shrink-0 text-white/60" /> WhatsApp us
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/90">
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-white/60" /> {site.address}
              </li>
            </ul>
          </div>

          <div className="rounded-3xl bg-white/[0.07] p-6">
            <h2 className="text-lg font-medium">Field notes, once a month</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-white/70">
              Stories from our outreaches, TAZ AI updates and ways to help. No spam.
            </p>
            {status === 'success' ?
            <p className="mt-5 flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-3 text-[15px]" role="status">
                <CheckIcon className="h-5 w-5 text-sun" /> You’re subscribed. Thank you!
              </p> :

            <form onSubmit={onSubmit} className="mt-5" noValidate>
                <label htmlFor="newsletter" className="sr-only">
                  Email address
                </label>
                <div className="flex gap-2">
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
                  className="h-12 min-w-0 flex-1 rounded-full bg-white px-5 text-[15px] text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-sun" />
                
                  <button
                  type="submit"
                  aria-label="Subscribe"
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-leaf transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-sun hover:text-forest">
                  
                    <ArrowRightIcon className="h-5 w-5" />
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

        <div className="mt-14 flex flex-col gap-3 border-t border-white/15 pt-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} TAZhealth Initiative. A Nigerian nonprofit.</p>
          <Link to="/privacy" className="hover:text-white">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>);

}