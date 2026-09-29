import React from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
import { SocialIcon } from '../ui/SocialIcon';
import { navLinks, site, socials } from '../../data/site';

type FooterLink = {label: string;href: string;external?: boolean;};

const columns: {title: string;links: FooterLink[];}[] = [
{ title: 'Explore', links: navLinks.map((l) => ({ label: l.label, href: l.to })) },
{
  title: 'Get involved',
  links: [
  { label: 'Volunteer', href: '/contact?topic=volunteer' },
  { label: 'Partner with us', href: '/partner' },
  { label: 'Donate', href: '/contact?topic=donate' },
  { label: 'Upcoming outreaches', href: '/outreaches#upcoming' }]

},
{
  title: 'Reach us',
  links: [
  { label: site.email, href: `mailto:${site.email}` },
  { label: site.phone, href: site.phoneHref },
  { label: 'WhatsApp us', href: site.whatsapp, external: true }]

},
{ title: 'Legal', links: [{ label: 'Privacy Policy', href: '/privacy' }] }];


export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:py-16">
        <div className="lg:col-span-4">
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink/65">
            Free medical outreaches and real follow-up for underserved Nigerian communities.
          </p>
          <ul className="mt-5 flex gap-4" aria-label="Social media">
            {socials.map((s) =>
            <li key={s.key}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="text-ink transition-colors hover:text-forest">
                  <SocialIcon name={s.key} className="h-5 w-5" />
                </a>
              </li>
            )}
          </ul>
          <p className="mt-5 text-sm text-ink/55">© {new Date().getFullYear()} TAZhealth Initiative. All rights reserved.</p>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 lg:col-span-8">
          {columns.map((c) =>
          <div key={c.title}>
              <h2 className="text-base font-semibold text-ink">{c.title}</h2>
              <ul className="mt-4 space-y-3">
                {c.links.map((l) =>
              <li key={l.label}>
                    {l.external || l.href.startsWith('mailto:') || l.href.startsWith('tel:') ?
                <a
                  href={l.href}
                  {...l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {}}
                  className="break-words text-sm text-ink/70 transition-colors hover:text-forest">

                        {l.label}
                      </a> :

                <Link href={l.href} className="text-sm text-ink/70 transition-colors hover:text-forest">
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
    </footer>);

}
