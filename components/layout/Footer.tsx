import React from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
import { SocialIcon } from '../ui/SocialIcon';
import { navLinks, site, socials } from '../../data/site';

type FooterLink = {label: string;href: string;external?: boolean;};

const columns: {title: string;links: FooterLink[];}[] = [
{
  title: 'Explore',
  links: [...navLinks.filter((l) => l.to !== '/partner').map((l) => ({ label: l.label, href: l.to })), { label: 'Blog', href: '/blog' }]
},
{
  title: 'Get involved',
  links: [
  { label: 'Volunteer', href: '/contact?topic=volunteer' },
  { label: 'Partner with us', href: '/partner' },
  { label: 'Join our chat room', href: site.chatRoom, external: true },
  { label: 'Donate', href: '/contact?topic=donate' },
  { label: 'Upcoming outreaches', href: '/outreaches#upcoming' }]

},
{
  title: 'Reach us',
  links: [
  { label: site.email, href: `mailto:${site.email}` },
  { label: site.phone, href: site.phoneHref },
  { label: 'WhatsApp', href: site.whatsapp, external: true }]

}];


const linkClass = 'text-sm text-white/70 transition-colors hover:text-white';

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 py-14 lg:grid-cols-12 lg:gap-8 lg:py-20">
          <div className="lg:col-span-5">
            <Logo tone="light" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              Free medical outreaches and real follow-up for underserved Nigerian communities.
            </p>
            <ul className="mt-6 flex gap-3" aria-label="Social media">
              {socials.map((s) =>
              <li key={s.key}>
                  <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-white hover:bg-white hover:text-black">

                    <SocialIcon name={s.key} className="h-4 w-4" />
                  </a>
                </li>
              )}
            </ul>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:col-span-7">
            {columns.map((c) =>
            <div key={c.title}>
                <h2 className="text-xs font-semibold uppercase tracking-widest text-white">{c.title}</h2>
                <ul className="mt-5 space-y-3">
                  {c.links.map((l) =>
                <li key={l.label}>
                      {l.external || l.href.startsWith('mailto:') || l.href.startsWith('tel:') ?
                  <a
                    href={l.href}
                    {...l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {}}
                    className={`break-words ${linkClass}`}>

                          {l.label}
                        </a> :

                  <Link href={l.href} className={linkClass}>
                          {l.label}
                        </Link>
                  }
                    </li>
                )}
                </ul>
              </div>
            )}
          </nav>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/15 py-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} TAZhealth Initiative. All rights reserved.</p>
          <Link href="/privacy" className="transition-colors hover:text-white">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>);

}
