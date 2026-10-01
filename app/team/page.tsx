import type { Metadata } from 'next';
import Link from 'next/link';
import { PlusIcon } from 'lucide-react';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { team } from '@/data/people';

export const metadata: Metadata = {
  title: 'Our team · TAZhealth',
  description: 'Meet the people behind TAZhealth, working to expand healthcare access in underserved Nigerian communities.'
};

export default function Team() {
  return (
    <section className="bg-white pb-20 pt-32 sm:pt-36 lg:pb-28 lg:pt-44" aria-labelledby="team-title">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="inline-flex rounded-full bg-mint px-3 py-1 text-sm font-medium text-forest">Our team</p>
          <h1
            id="team-title"
            className="mt-5 text-balance text-[34px] font-semibold leading-[1.08] tracking-[-0.03em] text-forest-dark sm:text-5xl">

            The people behind the pulse
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-[16px] leading-relaxed text-ink/65 sm:text-lg">
            A small core team, supported by dozens of volunteers at every outreach, working to bring healthcare closer to
            the people who need it most.
          </p>
        </Reveal>

        <RevealGroup as="ul" className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-12 lg:mt-16 lg:grid-cols-4">
          {team.map((m) =>
          <RevealItem as="li" key={m.name}>
              <img
              src={m.image}
              alt={`Portrait of ${m.name}`}
              loading="lazy"
              className="aspect-square w-full rounded-2xl bg-mint object-cover" />

              <h2 className="mt-4 text-[15px] font-semibold leading-snug text-ink sm:mt-5 sm:text-lg">{m.name}</h2>
              <p className="mt-0.5 text-[13px] font-medium text-forest sm:text-[15px]">{m.role}</p>
              <p className="mt-2 text-[13px] leading-relaxed text-ink/65 sm:text-[15px]">{m.bio}</p>
            </RevealItem>
          )}

          <RevealItem as="li">
            <Link
              href="/contact?topic=volunteer"
              className="group flex aspect-square w-full flex-col items-center justify-center gap-4 rounded-2xl border-2 border-dashed border-ink/15 text-center transition-colors hover:border-leaf hover:bg-mint/40">

              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-forest sm:h-14 sm:w-14 text-white transition-transform duration-200 group-hover:scale-105">
                <PlusIcon className="h-6 w-6" aria-hidden="true" />
              </span>
              <span className="px-3 sm:px-6">
                <span className="block text-[15px] font-semibold text-ink sm:text-lg">Join the team</span>
                <span className="mt-1 block text-[13px] text-ink/60 sm:text-[15px]">Volunteer at our next outreach</span>
              </span>
            </Link>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>);

}
