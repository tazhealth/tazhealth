'use client';

import { useCallback, useState } from 'react';
import Link from 'next/link';
import { ArrowRightIcon, ArrowUpRightIcon } from 'lucide-react';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { WhatsAppIcon } from '@/components/ui/SocialIcon';
import { OutreachModal } from '@/components/outreaches/OutreachModal';
import { images } from '@/data/images';
import { pastOutreaches, upcomingOutreaches } from '@/data/outreaches';
import { fieldStories } from '@/data/people';
import { site } from '@/data/site';
import type { Outreach } from '@/types/content';

const day = [
{ when: 'Morning', title: 'Registration and screening', text: 'Blood pressure, blood sugar, malaria and BMI for every adult.' },
{ when: 'Late morning', title: 'Time with a doctor', text: 'A proper one-to-one with a volunteer doctor or nurse.' },
{ when: 'Midday', title: 'Medicine and referrals', text: 'Free essential drugs, and a referral for anyone who needs more care.' },
{ when: 'Afternoon', title: 'A health talk', text: 'Plain talk on diet, blood pressure, and mother and child health.' },
{ when: 'The weeks after', title: 'Follow-up', text: 'SMS check-ins and calls start the next morning, until care actually happens.' }];


const volunteerHref = (id: string) => `/get-involved?outreach=${id}#volunteer`;

function SectionHead({ index, title, aside }: {index: string;title: string;aside?: string;}) {
  return (
    <div className="grid gap-4 lg:grid-cols-12 lg:items-end">
      <div className="lg:col-span-7">
        <p className="font-mono text-xs text-ink/40">{index}</p>
        <h2 className="mt-3 text-3xl font-medium tracking-[-0.025em] text-ink sm:text-4xl">{title}</h2>
      </div>
      {aside && <p className="text-[16px] leading-relaxed text-ink/55 lg:col-span-5">{aside}</p>}
    </div>);

}

export default function Outreaches() {
  const [selected, setSelected] = useState<Outreach | null>(null);
  const close = useCallback(() => setSelected(null), []);
  const totalPeople = pastOutreaches.reduce((s, o) => s + o.peopleReached, 0);
  const totalReferrals = pastOutreaches.reduce((s, o) => s + o.referrals, 0);
  const stats = [
  { label: 'Outreaches held', value: pastOutreaches.length },
  { label: 'People seen', value: totalPeople },
  { label: 'Referrals followed up', value: totalReferrals }];


  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-32 lg:pt-40">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="text-sm text-ink/50">Outreaches</p>
          <div className="mt-6 grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
            <h1 className="text-[40px] font-medium leading-[1.02] tracking-[-0.035em] text-ink sm:text-6xl lg:col-span-8 lg:text-[64px]">
              One Saturday of care. Months of follow-up.
            </h1>
            <p className="text-lg leading-relaxed text-ink/60 lg:col-span-4">
              We set up where people already gather, in church halls, village squares and by the road. Then we keep
              checking on every person we met.
            </p>
          </div>

          <dl className="mt-14 grid grid-cols-3 border-t border-ink/10">
            {stats.map((s) =>
            <div key={s.label} className="border-l border-ink/10 py-6 pl-4 first:border-l-0 first:pl-0 sm:pl-6">
                <dt className="text-xs text-ink/50 sm:text-sm">{s.label}</dt>
                <dd className="mt-1 text-3xl font-medium tabular-nums tracking-tight text-ink sm:text-4xl">{s.value}</dd>
              </div>
            )}
          </dl>
        </div>

        <figure className="mx-auto max-w-6xl px-5 sm:px-8">
          <img
            src={images.queue}
            alt="Community members queuing at an outreach registration desk"
            className="aspect-[4/3] w-full rounded-lg object-cover sm:aspect-[21/9]" />

          <figcaption className="mt-3 flex justify-between text-sm text-ink/50">
            <span>Registration queue, Kuje, FCT Abuja</span>
            <span>November 2025</span>
          </figcaption>
        </figure>
      </section>

      {/* Upcoming */}
      <section id="upcoming" className="scroll-mt-20 bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHead
            index="01"
            title="Coming up"
            aside="Every outreach needs clinicians, field workers and people to make follow-up calls. Pick a date." />


          <div className="mt-12 border-t border-ink/10">
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
                  className="group grid grid-cols-[4.5rem_1fr_auto] items-center gap-4 border-b border-ink/10 py-6 transition-colors hover:bg-mint/50 md:grid-cols-12 md:px-2">

                    <span className="md:col-span-2">
                      <span className="block text-2xl font-medium tabular-nums tracking-tight text-ink">
                        {u.day} {u.month}
                      </span>
                      <span className="block text-sm text-ink/50">{u.weekday}</span>
                    </span>
                    <span className="md:col-span-3">
                      <span className="block text-lg font-medium text-ink">{u.community}</span>
                      <span className="block text-sm text-ink/50">{u.state}</span>
                      <span className="mt-1 block text-sm text-ink/65 md:hidden">
                        {u.focus} · {u.volunteersNeeded} volunteers needed
                      </span>
                    </span>
                    <span className="hidden text-ink/70 md:col-span-4 md:block">{u.focus}</span>
                    <span className="hidden tabular-nums text-ink/70 md:col-span-2 md:block">{u.volunteersNeeded} needed</span>
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
      <section id="past" className="scroll-mt-20 border-t border-ink/10 bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHead
            index="02"
            title="Outreach log"
            aside="Every outreach we’ve run, newest first. What we did, who we reached, and what happened after." />


          <ol className="mt-16 space-y-20 lg:space-y-28">
            {pastOutreaches.map((o) =>
            <li key={o.id} className="grid gap-5 lg:grid-cols-12 lg:gap-10">
                <div className="lg:col-span-3">
                  <div className="flex gap-3 text-sm text-ink/50 lg:sticky lg:top-28 lg:block">
                    <p className="tabular-nums">{o.date}</p>
                    <p className="lg:mt-1">{o.state}</p>
                  </div>
                </div>

                <div className="lg:col-span-9">
                  <h3 className="text-2xl font-medium tracking-[-0.02em] text-ink sm:text-3xl">{o.community}</h3>
                  <p className="mt-3 max-w-2xl text-lg leading-relaxed text-ink/60">{o.summary}</p>

                  <button
                  type="button"
                  onClick={() => setSelected(o)}
                  aria-label={`Read the full story of the ${o.community} outreach`}
                  className="group mt-8 block w-full overflow-hidden rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf focus-visible:ring-offset-4">

                    <img
                    src={o.image}
                    alt=""
                    loading="lazy"
                    className="aspect-[2/1] w-full object-cover transition-transform duration-500 ease-smooth group-hover:scale-[1.02]" />

                  </button>

                  <dl className="mt-6 grid grid-cols-2 gap-y-5 border-t border-ink/10 pt-5 sm:grid-cols-4">
                    <div>
                      <dt className="text-xs text-ink/45">People reached</dt>
                      <dd className="mt-1 text-xl font-medium tabular-nums text-ink">{o.peopleReached}</dd>
                    </div>
                    <div>
                      <dt className="text-xs text-ink/45">Referrals</dt>
                      <dd className="mt-1 text-xl font-medium tabular-nums text-ink">{o.referrals}</dd>
                    </div>
                    <div className="col-span-2">
                      <dt className="text-xs text-ink/45">What we did</dt>
                      <dd className="mt-1 text-[15px] leading-relaxed text-ink/70">{o.services.join(', ')}</dd>
                    </div>
                  </dl>

                  <p className="mt-6 flex gap-3 text-[16px] leading-relaxed text-ink/75">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sun" aria-hidden="true" />
                    {o.highlight}
                  </p>

                  <button
                  type="button"
                  onClick={() => setSelected(o)}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-leaf hover:text-forest">

                    Read the full story <ArrowUpRightIcon className="h-4 w-4" />
                  </button>
                </div>
              </li>
            )}
          </ol>
        </div>
      </section>

      {/* A day */}
      <section className="border-t border-ink/10 bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHead
            index="03"
            title="How a day runs"
            aside="Most outreaches stop at the afternoon. The last column is the part we built TAZhealth for." />


          <ol className="mt-12 grid border-t border-ink/10 sm:grid-cols-2 lg:grid-cols-5">
            {day.map((d, i) =>
            <li
              key={d.title}
              className="border-b border-ink/10 py-6 sm:pr-6 lg:border-b-0 lg:border-l lg:px-5 lg:py-8 lg:first:border-l-0 lg:first:pl-0">

                <p className="font-mono text-xs text-ink/40">0{i + 1}</p>
                <p className={`mt-6 text-sm ${i === day.length - 1 ? 'text-sun' : 'text-leaf'}`}>{d.when}</p>
                <h3 className="mt-1 font-medium text-ink">{d.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink/60">{d.text}</p>
              </li>
            )}
          </ol>

          <Link href="/taz-ai" className="mt-8 inline-flex items-center gap-1 text-sm font-medium text-leaf hover:text-forest">
            How follow-up works on TAZ AI <ArrowUpRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Voices */}
      <section className="border-t border-ink/10 bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHead index="04" title="From the field" />
          <div className="mt-12 grid gap-10 border-t border-ink/10 pt-10 md:grid-cols-3 md:gap-0">
            {fieldStories.map((s) =>
            <figure key={s.title} className="flex flex-col md:border-l md:border-ink/10 md:px-6 md:first:border-l-0 md:first:pl-0">
                <blockquote className="text-[17px] leading-relaxed text-ink/80">“{s.quote}”</blockquote>
                <figcaption className="mt-6 flex items-center gap-3 md:mt-auto md:pt-8">
                  <img src={s.image} alt="" loading="lazy" className="h-10 w-10 rounded-full object-cover" />
                  <span className="text-sm">
                    <span className="block font-medium text-ink">{s.name}</span>
                    <span className="block text-ink/50">{s.role}</span>
                  </span>
                </figcaption>
              </figure>
            )}
          </div>
        </div>
      </section>

      {/* Close */}
      <section className="border-t border-ink/10 bg-white py-24 lg:py-32">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:items-end">
          <h2 className="text-3xl font-medium leading-[1.1] tracking-[-0.03em] text-ink sm:text-5xl lg:col-span-8">
            Know a community that needs care? Host an outreach with us.
          </h2>
          <div className="lg:col-span-4">
            <p className="text-[16px] leading-relaxed text-ink/60">
              We bring the clinicians, the medicine and the follow-up. You bring the community.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink to="/get-involved#partner">Partner with us</ButtonLink>
              <ButtonLink href={site.whatsapp} external variant="secondary">
                <WhatsAppIcon className="h-4 w-4" /> WhatsApp
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <OutreachModal outreach={selected} onClose={close} />
    </>);

}
