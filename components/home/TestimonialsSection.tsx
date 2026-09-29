import React from 'react';
import { QuoteIcon } from 'lucide-react';
import { RevealGroup, RevealItem } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import { testimonials } from '../../data/people';

function initials(name: string) {
  return name.
  replace('Dr. ', '').
  split(' ').
  map((p) => p[0]).
  slice(0, 2).
  join('');
}

export function TestimonialsSection() {
  const [featured, ...rest] = testimonials;

  return (
    <section className="relative overflow-hidden bg-mint py-20 lg:py-28" aria-labelledby="voices">
      <div className="adire pointer-events-none absolute inset-0 opacity-[0.06]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading id="voices" title="In their words." intro="From the people we serve and the volunteers who make it happen." />

        <RevealGroup className="mt-12 grid gap-4 lg:grid-cols-12">
          <RevealItem className="lg:col-span-7">
            <figure className="flex h-full flex-col rounded-[2rem] bg-forest p-8 text-white sm:p-12">
              <QuoteIcon className="h-10 w-10 text-sun" aria-hidden="true" />
              <blockquote className="mt-6 text-2xl leading-snug sm:text-[32px] sm:leading-[1.25]">“{featured.quote}”</blockquote>
              <figcaption className="mt-auto flex items-center gap-4 pt-10">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sun font-medium text-forest">
                  {initials(featured.name)}
                </span>
                <span>
                  <span className="block font-medium">{featured.name}</span>
                  <span className="block text-sm text-white/65">{featured.role}</span>
                </span>
              </figcaption>
            </figure>
          </RevealItem>
          <div className="grid gap-4 lg:col-span-5">
            {rest.map((t) =>
            <RevealItem key={t.name}>
                <figure className="flex h-full flex-col rounded-[2rem] bg-white p-7 sm:p-9">
                  <blockquote className="text-lg leading-relaxed text-ink/85">“{t.quote}”</blockquote>
                  <figcaption className="mt-auto flex items-center gap-3 pt-6">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-mint text-sm font-medium text-forest">
                      {initials(t.name)}
                    </span>
                    <span>
                      <span className="block text-[15px] font-medium text-ink">{t.name}</span>
                      <span className="block text-sm text-ink/60">{t.role}</span>
                    </span>
                  </figcaption>
                </figure>
              </RevealItem>
            )}
          </div>
        </RevealGroup>
      </div>
    </section>);

}