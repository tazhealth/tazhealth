import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon, MegaphoneIcon } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { RevealGroup, RevealItem } from '../ui/Reveal';
import { images } from '../../data/images';

const cardHover =
'transition-[transform,box-shadow] duration-200 ease-smooth hover:-translate-y-1 hover:scale-[1.01] hover:shadow-card';

export function WhatWeDo() {
  return (
    <section className="relative bg-mint py-20 lg:py-28" aria-labelledby="what-we-do">
      <div className="ankara-band absolute inset-x-0 top-0 h-4 opacity-40" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="what-we-do"
          title="Three ways we keep care going."
          intro="We show up in person, speak up for communities, and build tools so care doesn’t depend on who happens to be in the room." />
        

        <RevealGroup className="mt-12 grid gap-4 lg:grid-cols-12 lg:grid-rows-2">
          <RevealItem className="lg:col-span-7 lg:row-span-2">
            <Link
              href="/outreaches"
              className={`group flex h-full flex-col overflow-hidden rounded-[2rem] bg-white ${cardHover}`}>
              
              <div className="aspect-[16/10] overflow-hidden lg:aspect-auto lg:flex-1">
                <img
                  src={images.volunteers}
                  alt="TAZhealth volunteers at an outreach"
                  className="h-full w-full object-cover transition-transform duration-300 ease-smooth group-hover:scale-105" />
                
              </div>
              <div className="p-7 sm:p-9">
                <h3 className="text-xl text-forest sm:text-2xl">Medical outreaches</h3>
                <p className="mt-3 max-w-lg text-[16px] leading-relaxed text-ink/70">
                  Free screening, consultations, medication and referrals - delivered in the communities that need them
                  most, by volunteer doctors, nurses and field workers.
                </p>
                <span className="mt-5 inline-flex items-center gap-2 font-medium text-leaf group-hover:text-forest">
                  See our outreaches <ArrowRightIcon className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </RevealItem>

          <RevealItem className="lg:col-span-5">
            <Link href="/about" className={`group flex h-full flex-col rounded-[2rem] bg-white p-7 sm:p-9 ${cardHover}`}>
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sun/20 text-forest">
                <MegaphoneIcon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-xl text-forest">Advocacy</h3>
              <p className="mt-3 text-[16px] leading-relaxed text-ink/70">
                We share what we see in the field with health authorities and partners - pushing for primary care that
                reaches everyone.
              </p>
              <span className="mt-auto inline-flex items-center gap-2 pt-5 font-medium text-leaf group-hover:text-forest">
                Our story <ArrowRightIcon className="h-4 w-4" />
              </span>
            </Link>
          </RevealItem>

          <RevealItem className="lg:col-span-5">
            <Link
              href="/taz-ai"
              className={`group relative flex h-full flex-col overflow-hidden rounded-[2rem] bg-forest p-7 text-white sm:p-9 ${cardHover}`}>
              
              <div className="max-w-[15rem] self-end rounded-2xl rounded-br-md bg-white px-4 py-3 text-sm text-ink shadow-card">
                Abeg no forget take your medicine today. Stay well o!
              </div>
              <h3 className="mt-6 text-xl">Digital health · TAZ AI</h3>
              <p className="mt-3 text-[16px] leading-relaxed text-white/75">
                Offline registration, instant risk triage and automatic SMS follow-up - so every outreach becomes a care
                journey.
              </p>
              <span className="mt-auto inline-flex items-center gap-2 pt-5 font-medium text-sun">
                Meet TAZ AI <ArrowRightIcon className="h-4 w-4" />
              </span>
            </Link>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>);

}