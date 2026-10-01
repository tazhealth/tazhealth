'use client';

import { useCallback, useState } from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
import { OutreachModal } from '@/components/outreaches/OutreachModal';
import { OutreachStack } from '@/components/outreaches/OutreachStack';
import { DayTimeline } from '@/components/outreaches/DayTimeline';
import { FeaturedStory } from '@/components/outreaches/FeaturedStory';
import { images } from '@/data/images';
import { pastOutreaches, upcomingOutreaches } from '@/data/outreaches';
import type { Outreach } from '@/types/content';

const volunteerHref = (id: string) => `/contact?topic=volunteer&outreach=${id}`;

function SectionHead({ title, aside }: {title: string;aside?: string;}) {
  return (
    <div className="grid gap-3 sm:gap-4 lg:grid-cols-12 lg:items-end">
      <div className="lg:col-span-7">
        <h2 className="text-2xl font-medium tracking-[-0.025em] text-ink sm:text-4xl">{title}</h2>
      </div>
      {aside && <p className="text-[15px] leading-relaxed text-ink/55 sm:text-[16px] lg:col-span-5">{aside}</p>}
    </div>);

}

export default function Outreaches() {
  const [selected, setSelected] = useState<Outreach | null>(null);
  const close = useCallback(() => setSelected(null), []);
  const totalPeople = pastOutreaches.reduce((s, o) => s + o.peopleReached, 0);
  const featured = pastOutreaches.reduce((a, o) => o.peopleReached > a.peopleReached ? o : a);
  const totalVolunteers = pastOutreaches.reduce((s, o) => s + o.volunteers, 0);
  const stats = [
  { label: 'Outreaches held', value: pastOutreaches.length },
  { label: 'People reached', value: totalPeople.toLocaleString() },
  { label: 'Volunteers deployed', value: totalVolunteers }];


  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-28 sm:pt-32 lg:pt-40">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="text-sm text-ink/50">Outreaches</p>
          <div className="mt-4 grid gap-5 sm:mt-6 sm:gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
            <h1 className="text-[32px] font-medium leading-[1.05] tracking-[-0.03em] text-ink sm:text-5xl sm:leading-[1.02] sm:tracking-[-0.035em] lg:col-span-8 lg:text-[64px]">
              One Saturday of care. Months of follow-up.
            </h1>
            <p className="text-[15px] leading-relaxed text-ink/60 sm:text-lg lg:col-span-4">
              We set up where people already gather, in church halls, village squares and by the road. Then we keep
              checking on every person we met.
            </p>
          </div>

          <dl className="mt-8 grid grid-cols-3 border-t border-ink/10 sm:mt-14">
            {stats.map((s) =>
            <div key={s.label} className="border-l border-ink/10 py-4 pl-3 first:border-l-0 first:pl-0 sm:py-6 sm:pl-6">
                <dt className="text-[11px] text-ink/50 sm:text-sm">{s.label}</dt>
                <dd className="mt-1 text-2xl font-medium tabular-nums tracking-tight text-ink sm:text-4xl">{s.value}</dd>
              </div>
            )}
          </dl>
        </div>

        <figure className="mx-auto max-w-6xl px-5 sm:px-8">
          <img
            src={images.queue}
            alt="Community members seated and waiting at the Odogbolu outreach"
            className="aspect-[4/3] w-full rounded-lg object-cover sm:aspect-[21/9]" />

        </figure>
      </section>

      {/* Upcoming */}
      <section id="upcoming" className="scroll-mt-20 bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHead
            title="Coming up"
            aside="Every outreach needs clinicians, field workers and people to make follow-up calls. Pick a date." />


          <div className="mt-8 border-t border-ink/10 sm:mt-12">
            <div className="hidden grid-cols-12 gap-4 border-b border-ink/10 px-2 py-3 text-xs text-ink/45 md:grid">
              <span className="col-span-2">Date</span>
              <span className="col-span-3">Community</span>
              <span className="col-span-4">Focus</span>
              <span className="col-span-2">Volunteers</span>
            </div>
            <ul>
              {upcomingOutreaches.map((u) =>
              <li key={u.id}>
                  <Link
                  href={volunteerHref(u.id)}
                  className="group grid grid-cols-[3.75rem_1fr_auto] items-center gap-3 border-b border-ink/10 py-4 sm:gap-4 sm:py-6 transition-colors hover:bg-mint/50 md:grid-cols-12 md:px-2">

                    <span className="md:col-span-2">
                      <span className="block text-lg font-medium tabular-nums leading-tight tracking-tight text-ink sm:text-2xl">
                        {u.day} {u.month}
                      </span>
                      <span className="block text-xs text-ink/50 sm:text-sm">{u.weekday}</span>
                    </span>
                    <span className="md:col-span-3">
                      <span className="block text-[15px] font-medium text-ink sm:text-lg">{u.community}</span>
                      <span className="block text-xs text-ink/50 sm:text-sm">{u.state}</span>
                      <span className="mt-1 block text-[13px] leading-snug text-ink/65 md:hidden">
                        {[u.focus ?? u.note, u.volunteersNeeded && `${u.volunteersNeeded} volunteers needed`].filter(Boolean).join(' · ')}
                      </span>
                    </span>
                    <span className="hidden text-ink/70 md:col-span-4 md:block">{u.focus ?? u.note ?? 'Details coming soon'}</span>
                    <span className="hidden tabular-nums text-ink/70 md:col-span-2 md:block">{u.volunteersNeeded ? `${u.volunteersNeeded} needed` : 'Open'}</span>
                    <span className="flex items-center justify-end gap-1.5 text-sm font-medium text-leaf md:col-span-1">
                      <span className="hidden lg:inline">Join</span>
                      <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </section>

      {/* Log */}
      <section id="past" className="scroll-mt-20 bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHead
            title="Outreach log"
            aside="Every outreach we’ve run, newest first. What we did, who we reached, and who we did it with." />


          <OutreachStack outreaches={pastOutreaches} onSelect={setSelected} />
        </div>
      </section>

      {/* A day */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <DayTimeline />

          {/* TAZ AI moving to its own site.
          <Link href="/taz-ai" className="mt-8 inline-flex items-center gap-1 text-sm font-medium text-leaf hover:text-forest">
            How follow-up works on TAZ AI <ArrowUpRightIcon className="h-4 w-4" />
          </Link> */}
        </div>
      </section>

      {/* Featured story */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <FeaturedStory outreach={featured} onRead={setSelected} />
        </div>
      </section>

      {/* Close */}
      <section className="bg-white px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="mx-auto max-w-2xl text-balance text-[32px] font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-5xl">
            Bring care to a community you love.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-ink/65 sm:text-base">
            Host or sponsor an outreach. We bring the clinicians and the medicine.
          </p>
          <Link
            href="/partner"
            className="group mt-8 inline-flex h-12 items-center gap-1.5 rounded-full bg-leaf px-6 text-[15px] font-medium text-white transition-colors hover:bg-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf focus-visible:ring-offset-2">

            Partner with us
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>

      <OutreachModal outreach={selected} onClose={close} />
    </>);

}
