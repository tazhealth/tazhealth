import type { Metadata } from 'next';
import { Reveal } from '@/components/ui/Reveal';
import { TeamGrid } from '@/components/team/TeamGrid';
import { team } from '@/data/people';
import { site } from '@/data/site';

const founder = team[0];

export const metadata: Metadata = {
  title: 'Our team',
  description: 'Meet the people behind TAZhealth, working to expand healthcare access in underserved Nigerian communities.',
  alternates: { canonical: '/team' }
};

export default function Team() {
  return (
    <section className="bg-white pb-14 pt-28 sm:pt-32 lg:pb-20 lg:pt-36" aria-labelledby="team-title">
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

        <TeamGrid members={team} />

        {/* Founder quote */}
        <Reveal className="mt-14 rounded-lg bg-[#EDEDED] px-6 py-10 sm:mt-16 sm:px-12 sm:py-14">
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
            <a
              href={site.volunteerForm}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex h-11 items-center rounded-full border border-ink bg-transparent px-5 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf focus-visible:ring-offset-2">

              Become a volunteer
            </a>
          </div>
          <div className="flex -space-x-2 sm:space-x-2" aria-hidden="true">
            {/* Keep this row at these six faces, even as the team grows. */}
            {team.slice(0, 6).map((m) =>
            <img key={m.name} src={m.image} alt="" className="h-12 w-12 rounded-full object-cover ring-2 ring-white sm:h-14 sm:w-14" />
            )}
          </div>
        </Reveal>
      </div>
    </section>);

}
