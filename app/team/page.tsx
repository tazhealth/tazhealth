import type { Metadata } from 'next';
import Link from 'next/link';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { team } from '@/data/people';

const founder = team[0];

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

        <RevealGroup as="ul" className="mx-auto mt-12 grid max-w-sm grid-cols-1 gap-6 sm:max-w-none sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {team.map((m) =>
          <RevealItem as="li" key={m.name}>
              <div className="group relative overflow-hidden rounded-lg bg-[#EDEDED]">
                <img
                src={m.image}
                alt={`Portrait of ${m.name}`}
                loading="lazy"
                className="aspect-[7/8] w-full object-cover transition-transform duration-500 ease-smooth group-hover:scale-[1.03]" />

                <div className="absolute inset-x-3 bottom-3 rounded-full border border-ink bg-white px-4 py-2 text-center">
                  <h2 className="truncate text-base font-semibold leading-tight text-ink sm:text-[15px] lg:text-base">{m.name}</h2>
                  <p className="mt-0.5 truncate text-[13px] leading-tight text-ink/70">{m.role}</p>
                </div>
              </div>
            </RevealItem>
          )}

        </RevealGroup>

        {/* Founder quote */}
        <Reveal className="mt-20 rounded-lg bg-[#EDEDED] px-6 py-10 sm:mt-28 sm:px-12 sm:py-14">
          <figure>
            <blockquote className="max-w-4xl text-balance text-[24px] font-medium leading-[1.25] tracking-[-0.02em] text-ink sm:text-[36px]">
              Access to quality healthcare should not be determined by where someone lives or what they can afford.
            </blockquote>
            <figcaption className="mt-7 flex items-center gap-3.5">
              <img src={founder.image} alt="" className="h-12 w-12 rounded-full object-cover ring-2 ring-white sm:h-14 sm:w-14" />
              <span>
                <span className="block text-[15px] font-semibold text-ink sm:text-base">{founder.name}</span>
                <span className="block text-sm text-ink/60">{founder.role}, TAZhealth</span>
              </span>
            </figcaption>
          </figure>
        </Reveal>

        {/* Volunteer */}
        <Reveal className="mt-6 flex flex-col gap-8 rounded-lg bg-[#EDEDED] px-6 py-10 sm:mt-8 sm:flex-row sm:items-end sm:justify-between sm:px-12 sm:py-14">
          <div>
            <h2 className="text-[28px] font-semibold leading-tight tracking-[-0.025em] text-ink sm:text-4xl">Want to join the team?</h2>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ink/65 sm:text-base">
              Doctors, students and everyday people bringing free care to communities that need it most. There’s a place for
              you.
            </p>
            <Link
              href="/contact?topic=volunteer"
              className="mt-6 inline-flex h-11 items-center rounded-full border border-ink bg-transparent px-5 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf focus-visible:ring-offset-2">

              Become a volunteer
            </Link>
          </div>
          <div className="flex -space-x-2 sm:space-x-2" aria-hidden="true">
            {team.map((m) =>
            <img key={m.name} src={m.image} alt="" className="h-12 w-12 rounded-full object-cover ring-2 ring-white sm:h-14 sm:w-14" />
            )}
          </div>
        </Reveal>
      </div>
    </section>);

}
