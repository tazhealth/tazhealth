'use client';

import { useCallback, useState } from 'react';
import Link from 'next/link';
import { ActivityIcon, ArrowRightIcon, BookOpenIcon, CalendarIcon, PillIcon, SendIcon, StethoscopeIcon, UsersIcon } from 'lucide-react';
import { PageHero } from '@/components/ui/PageHero';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { CountUp } from '@/components/ui/CountUp';
import { EcgLine } from '@/components/ui/EcgLine';
import { GalleryGrid } from '@/components/ui/GalleryGrid';
import { CtaBand } from '@/components/ui/CtaBand';
import { OutreachModal } from '@/components/outreaches/OutreachModal';
import { gallery, images } from '@/data/images';
import { outreachImpact } from '@/data/impact';
import { pastOutreaches, upcomingOutreaches } from '@/data/outreaches';
import { fieldStories } from '@/data/people';
import type { Outreach } from '@/types/content';

const journey = [
{ icon: ActivityIcon, title: 'Screening', text: 'Blood pressure, blood sugar, malaria and BMI checks for every adult.' },
{ icon: StethoscopeIcon, title: 'Consultation', text: 'One-to-one time with a volunteer doctor or nurse.' },
{ icon: PillIcon, title: 'Treatment', text: 'Free essential medication and clear instructions to take home.' },
{ icon: SendIcon, title: 'Referral', text: 'Serious cases linked to the nearest PHC or hospital — and tracked.' },
{ icon: BookOpenIcon, title: 'Health education', text: 'Practical talks on diet, hypertension, maternal and child health.' }];


const cardHover = 'transition-[transform,box-shadow] duration-200 ease-smooth hover:-translate-y-1 hover:scale-[1.01] hover:shadow-card';

export default function Outreaches() {
  const [selected, setSelected] = useState<Outreach | null>(null);
  const close = useCallback(() => setSelected(null), []);
  const next = upcomingOutreaches[0];

  return (
    <>
      <PageHero
        title={
        <>
            Bringing care to <span className="text-leaf">where people are.</span>
          </>
        }
        description="We set up under canopies, in church halls and village squares — wherever the community gathers — and we keep in touch after we leave."
        image={images.queue}
        imageAlt="Community members waiting at an outreach registration desk"
        actions={
        <>
            <ButtonLink href="#upcoming" size="lg">
              Upcoming outreaches
            </ButtonLink>
            <ButtonLink href="#past" size="lg" variant="secondary">
              Past outreaches
            </ButtonLink>
          </>
        }
        aside={
        <a href="#upcoming" className="absolute -right-2 bottom-10 flex items-center gap-3 rounded-2xl bg-white p-3.5 shadow-card transition-transform duration-200 hover:-translate-y-0.5 sm:-right-8">
            <span className="flex h-12 w-12 flex-col items-center justify-center rounded-xl bg-forest text-white">
              <span className="text-lg font-medium leading-none">{next.day}</span>
              <span className="text-[10px] uppercase">{next.month}</span>
            </span>
            <span>
              <span className="block text-sm font-medium text-ink">Next: {next.community}</span>
              <span className="block text-xs text-ink/60">{next.volunteersNeeded} volunteers needed</span>
            </span>
          </a>
        } />


      {/* Impact numbers */}
      <section className="bg-forest text-white" aria-label="Impact numbers">
        <RevealGroup as="ul" className="mx-auto grid max-w-7xl grid-cols-2 px-5 sm:px-8 lg:grid-cols-4">
          {outreachImpact.map((s, i) =>
          <RevealItem
            as="li"
            key={s.label}
            className={`py-10 lg:py-14 ${i % 2 === 1 ? 'pl-6 lg:pl-10' : 'pr-6'} ${i > 0 ? 'lg:border-l lg:border-white/15 lg:pl-10' : ''} ${i >= 2 ? 'border-t border-white/15 lg:border-t-0' : ''}`}>

              <p className="text-5xl font-medium tracking-tight text-sun sm:text-6xl">
                <CountUp to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-1 text-[15px] text-white/75">{s.label}</p>
            </RevealItem>
          )}
        </RevealGroup>
      </section>

      {/* Past outreaches */}
      <section id="past" className="scroll-mt-20 bg-white py-20 lg:py-28" aria-labelledby="past-title">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading id="past-title" title="Past outreaches" intro="Tap any outreach to see who we reached and what happened next." />
          <RevealGroup as="ul" className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {pastOutreaches.map((o) =>
            <RevealItem as="li" key={o.id}>
                <button
                type="button"
                onClick={() => setSelected(o)}
                className={`group flex h-full w-full flex-col overflow-hidden rounded-[2rem] border border-forest/10 bg-white text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf ${cardHover}`}>

                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={o.image} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-300 ease-smooth group-hover:scale-105" />
                    <span className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-forest">
                      <CalendarIcon className="h-3.5 w-3.5" aria-hidden="true" /> {o.date}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-2xl text-forest">{o.community}</h3>
                    <p className="text-sm text-ink/55">{o.state}</p>
                    <p className="mt-3 text-[15px] leading-relaxed text-ink/75">{o.summary}</p>
                    <div className="mt-auto flex items-center justify-between pt-6">
                      <span className="flex items-center gap-1.5 text-sm text-ink/60">
                        <UsersIcon className="h-4 w-4" aria-hidden="true" /> {o.peopleReached} reached
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[15px] font-medium text-leaf group-hover:text-forest">
                        View details <ArrowRightIcon className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </button>
              </RevealItem>
            )}
          </RevealGroup>
        </div>
      </section>

      {/* What happens at an outreach */}
      <section className="relative overflow-hidden bg-mint py-20 lg:py-28" aria-labelledby="journey-title">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading id="journey-title" align="center" title="What happens at an outreach" intro="Five stations, one continuous journey — and it doesn’t end at the last one." />
          <div className="relative mt-14">
            <EcgLine className="absolute inset-x-0 top-12 hidden h-12 lg:block" />
            <RevealGroup as="ol" className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-5" stagger={0.09}>
              {journey.map((j, i) => {
                const Icon = j.icon;
                return (
                  <RevealItem as="li" key={j.title} className="flex flex-col items-center rounded-b-[2rem] rounded-t-full bg-white px-6 pb-8 pt-10 text-center">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-forest text-white">
                      <Icon className="h-7 w-7" aria-hidden="true" />
                    </span>
                    <p className="mt-5 text-sm font-medium text-leaf">Station {i + 1}</p>
                    <h3 className="mt-1 text-xl text-forest">{j.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-ink/70">{j.text}</p>
                  </RevealItem>);

              })}
            </RevealGroup>
          </div>
          <p className="mt-10 text-center text-[16px] text-ink/70">
            Then TAZ AI takes over the follow-up.{' '}
            <Link href="/taz-ai" className="font-medium text-leaf underline-offset-4 hover:text-forest hover:underline">
              See how it works
            </Link>
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-white py-20 lg:py-28" aria-labelledby="gallery-title">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading id="gallery-title" title="The gallery" intro="Tap a photo to open it full-screen. Use arrow keys to browse." />
          <div className="mt-10">
            <GalleryGrid images={gallery} />
          </div>
        </div>
      </section>

      {/* Stories */}
      <section className="bg-mint py-20 lg:py-28" aria-labelledby="stories-title">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading id="stories-title" title="Stories from the field" />
          <RevealGroup className="mt-12 grid gap-5 lg:grid-cols-3">
            {fieldStories.map((s) =>
            <RevealItem key={s.title}>
                <article className="flex h-full flex-col overflow-hidden rounded-[2rem] bg-white">
                  <img src={s.image} alt="" loading="lazy" className="aspect-[16/10] w-full object-cover" />
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="text-xl text-forest">{s.title}</h3>
                    <blockquote className="mt-3 text-[16px] leading-relaxed text-ink/75">“{s.quote}”</blockquote>
                    <p className="mt-auto pt-6 text-[15px]">
                      <span className="font-medium text-ink">{s.name}</span>
                      <span className="text-ink/55"> · {s.role}</span>
                    </p>
                  </div>
                </article>
              </RevealItem>
            )}
          </RevealGroup>
        </div>
      </section>

      {/* Upcoming */}
      <section id="upcoming" className="scroll-mt-20 bg-white pt-20 lg:pt-28" aria-labelledby="upcoming-title">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading id="upcoming-title" title="Upcoming outreaches" intro="Join us on the day — every outreach needs clinicians, field workers and follow-up officers." />
          <RevealGroup as="ul" className="mt-12 divide-y divide-forest/10 border-y border-forest/10">
            {upcomingOutreaches.map((u) =>
            <RevealItem as="li" key={u.id} className="flex flex-col gap-5 py-6 sm:flex-row sm:items-center sm:gap-8">
                <div className="flex items-center gap-5 sm:w-auto">
                  <span className="flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-2xl bg-forest text-white">
                    <span className="text-3xl font-medium leading-none">{u.day}</span>
                    <span className="mt-1 text-xs text-white/75">
                      {u.month} · {u.weekday}
                    </span>
                  </span>
                  <div className="sm:hidden">
                    <h3 className="text-xl text-forest">{u.community}</h3>
                    <p className="text-sm text-ink/60">{u.state}</p>
                  </div>
                </div>
                <div className="hidden min-w-[180px] sm:block">
                  <h3 className="text-2xl text-forest">{u.community}</h3>
                  <p className="text-sm text-ink/60">{u.state}</p>
                </div>
                <div className="flex-1">
                  <p className="text-[16px] text-ink/80">{u.focus}</p>
                  <p className="mt-1 inline-flex rounded-full bg-sun/20 px-2.5 py-0.5 text-sm font-medium text-forest">
                    {u.volunteersNeeded} volunteers needed
                  </p>
                </div>
                <ButtonLink to={`/get-involved?outreach=${u.id}#volunteer`} className="w-full sm:w-auto">
                  Volunteer for this outreach
                </ButtonLink>
              </RevealItem>
            )}
          </RevealGroup>
        </div>
      </section>

      <CtaBand
        title="Bring an outreach to your community."
        text="Know a community that needs care? Partner with us to host an outreach — we’ll handle the clinicians, drugs and follow-up."
        primaryLabel="Partner with us"
        primaryTo="/get-involved#partner" />


      <OutreachModal outreach={selected} onClose={close} />
    </>);

}
