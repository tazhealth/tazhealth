import React from 'react';
import Link from 'next/link';
import { Reveal } from '../ui/Reveal';

export function VolunteerCta() {
  return (
    <section className="bg-black px-5 py-24 text-center sm:px-8 sm:py-32" aria-labelledby="volunteer-cta-title">
      <Reveal className="mx-auto max-w-3xl">
        <h2
          id="volunteer-cta-title"
          className="text-balance text-[36px] font-semibold leading-[1.05] tracking-[-0.035em] text-white sm:text-6xl">

          Volunteer with TAZhealth
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-[16px] leading-relaxed text-white/60 sm:text-lg">
          Doctors, students and everyday people bringing free care to communities that need it most. There’s a place for
          you.
        </p>
        <Link
          href="/contact?topic=volunteer"
          className="mt-9 inline-flex h-12 items-center rounded-full bg-white px-7 text-[15px] font-medium text-black transition-[transform,background-color] duration-200 ease-smooth hover:-translate-y-0.5 hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:h-14 sm:px-8 sm:text-base">

          Become a volunteer
        </Link>
      </Reveal>
    </section>);

}
