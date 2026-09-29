import React from 'react';
import Link from 'next/link';
import { ArrowUpRightIcon } from 'lucide-react';
import { ButtonLink } from './ButtonLink';
import { EcgLine } from './EcgLine';
import { Reveal } from './Reveal';
import { WhatsAppIcon } from './SocialIcon';
import { site } from '../../data/site';

type CtaBandProps = {
  title: string;
  text: string;
  primaryLabel?: string;
  primaryTo?: string;
};

const paths = [
{ label: 'Volunteer', text: 'Give a Saturday, or a few hours of follow-up calls.', to: '/get-involved#volunteer' },
{ label: 'Partner', text: 'Bring continuous care to your programme.', to: '/get-involved#partner' },
{ label: 'Donate', text: 'Fund drugs, screening and SMS follow-up.', to: '/get-involved#donate' }];


export function CtaBand({ title, text, primaryLabel = 'Get involved', primaryTo = '/get-involved' }: CtaBandProps) {
  return (
    <section className="px-5 py-16 sm:px-8 lg:py-24">
      <Reveal className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-forest px-6 pb-20 pt-12 sm:px-12 lg:rounded-[2.5rem] lg:px-16 lg:pb-24 lg:pt-16">
        <div className="adire-light pointer-events-none absolute inset-0 opacity-[0.06]" aria-hidden="true" />
        <div className="relative grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:gap-16">
          <div>
            <h2 className="text-[34px] leading-[1.08] text-white sm:text-5xl">{title}</h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/75">{text}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink to={primaryTo} variant="light" size="lg">
                {primaryLabel}
              </ButtonLink>
              <ButtonLink href={site.whatsapp} external variant="outlineLight" size="lg">
                <WhatsAppIcon className="h-5 w-5" /> Chat on WhatsApp
              </ButtonLink>
            </div>
          </div>
          <ul className="space-y-2">
            {paths.map((p) =>
            <li key={p.label}>
                <Link
                to={p.to}
                className="group flex items-center justify-between gap-4 rounded-2xl bg-white/[0.07] px-5 py-4 transition-[background-color,transform] duration-200 ease-smooth hover:-translate-y-0.5 hover:bg-white/[0.14]">
                
                  <span>
                    <span className="block text-lg font-medium text-white">{p.label}</span>
                    <span className="block text-[15px] text-white/65">{p.text}</span>
                  </span>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-forest transition-colors duration-200 group-hover:bg-sun">
                    <ArrowUpRightIcon className="h-5 w-5" />
                  </span>
                </Link>
              </li>
            )}
          </ul>
        </div>
        <EcgLine tone="white" className="absolute inset-x-0 bottom-4 h-12 opacity-60" baseOpacity={0.15} />
      </Reveal>
    </section>);

}