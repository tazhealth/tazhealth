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
    <div className="grid gap-3 sm:gap-4 lg:grid-cols-12 lg:items-end">
      <div className="lg:col-span-7">
        <p className="font-mono text-xs text-ink/40">{index}</p>
        <h2 className="mt-2 text-2xl font-medium tracking-[-0.025em] text-ink sm:mt-3 sm:text-4xl">{title}</h2>
      </div>
      {aside && <p className="text-[15px] leading-relaxed text-ink/55 sm:text-[16px] lg:col-span-5">{aside}</p>}
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
  { label: 'Referrals tracked', value: totalReferrals }];


  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-28 sm:pt-32 lg:pt-40">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="text-sm text-ink/50">Outreaches</p>
          <div className="mt-4 grid gap-5 sm:mt-6 sm:gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
            <h1 className="text-[32px] font-medium leading-[1.05] tracking-[-0.03em] text-ink sm:text-6xl sm:leading-[1.02] sm:tracking-[-0.035em] lg:col-span-8 lg:text-[64px]">
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

          <figcaption className="mt-2.5 flex justify-between gap-4 text-xs text-ink/50 sm:mt-3 sm:text-sm">
            <span>Beneficiaries waiting, Odogbolu, Ogun State</span>
            <span>TAZhealth outreach</span>
          </figcaption>
        </figure>
      </section>

      {/* Upcoming */}
      <section id="upcoming" className="scroll-mt-20 bg-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHead
            index="01"
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
      <section id="past" className="scroll-mt-20 border-t border-ink/10 bg-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHead
            index="02"
            title="Outreach log"
            aside="Every outreach we’ve run, newest first. What we did, who we reached, and what happened after." />


          <ol className="mt-10 space-y-14 sm:mt-16 sm:space-y-20 lg:space-y-28">
            {pastOutreaches.map((o) =>
            <li key={o.id} className="grid gap-5 lg:grid-cols-12 lg:gap-10">
                <div className="lg:col-span-3">
                  <div className="flex gap-3 text-xs text-ink/50 sm:text-sm lg:sticky lg:top-28 lg:block">
                    <p className="tabular-nums">{o.date}</p>
                    <p className="lg:mt-1">{o.state}</p>
                  </div>
                </div>

                <div className="lg:col-span-9">
                  <h3 className="text-xl font-medium tracking-[-0.02em] text-ink sm:text-3xl">{o.community}</h3>
                  <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-ink/60 sm:mt-3 sm:text-lg">{o.summary}</p>

                  <button
                  type="button"
                  onClick={() => setSelected(o)}
                  aria-label={`Read the full story of the ${o.community} outreach`}
                  className="group mt-5 block w-full overflow-hidden rounded-lg sm:mt-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf focus-visible:ring-offset-4">

                    <img
                    src={o.image}
                    alt=""
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover sm:aspect-[2/1] transition-transform duration-500 ease-smooth group-hover:scale-[1.02]" />

                  </button>

                  <dl className="mt-5 grid grid-cols-2 gap-y-4 border-t border-ink/10 pt-4 sm:mt-6 sm:grid-cols-4 sm:gap-y-5 sm:pt-5">
                    <div>
                      <dt className="text-xs text-ink/45">People reached</dt>
                      <dd className="mt-0.5 text-lg font-medium tabular-nums text-ink sm:mt-1 sm:text-xl">{o.peopleReached}</dd>
                    </div>
                    <div>
                      <dt className="text-xs text-ink/45">Referrals</dt>
                      <dd className="mt-0.5 text-lg font-medium tabular-nums text-ink sm:mt-1 sm:text-xl">{o.referrals}</dd>
                    </div>
                    <div className="col-span-2">
                      <dt className="text-xs text-ink/45">What we did</dt>
                      <dd className="mt-0.5 text-sm leading-relaxed text-ink/70 sm:mt-1 sm:text-[15px]">{o.services.join(', ')}</dd>
                    </div>
                  </dl>

                  <p className="mt-4 flex gap-3 text-[15px] leading-relaxed text-ink/75 sm:mt-6 sm:text-[16px]">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sun sm:mt-2.5" aria-hidden="true" />
                    {o.highlight}
                  </p>

                  <button
                  type="button"
                  onClick={() => setSelected(o)}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-leaf hover:text-forest sm:mt-5">

                    Read the full story <ArrowUpRightIcon className="h-4 w-4" />
                  </button>
                </div>
              </li>
            )}
          </ol>
        </div>
      </section>

      {/* A day */}
      <section className="border-t border-ink/10 bg-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHead
            index="03"
            title="How a day runs"
            aside="Most outreaches stop at the afternoon. The last column is the part we built TAZhealth for." />


          <ol className="mt-8 grid border-t border-ink/10 sm:mt-12 sm:grid-cols-2 lg:grid-cols-5">
            {day.map((d, i) =>
            <li
              key={d.title}
              className="flex gap-4 border-b border-ink/10 py-4 sm:block sm:py-6 sm:pr-6 lg:border-b-0 lg:border-l lg:px-5 lg:py-8 lg:first:border-l-0 lg:first:pl-0">

                <p className="w-5 shrink-0 font-mono text-xs leading-5 text-ink/40">0{i + 1}</p>
                <div>
                  <p className={`text-[13px] sm:mt-6 sm:text-sm ${i === day.length - 1 ? 'text-sun' : 'text-leaf'}`}>{d.when}</p>
                  <h3 className="mt-0.5 text-[15px] font-medium text-ink sm:mt-1 sm:text-base">{d.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink/60 sm:mt-2 sm:text-[15px]">{d.text}</p>
                </div>
              </li>
            )}
          </ol>

          <Link href="/taz-ai" className="mt-8 inline-flex items-center gap-1 text-sm font-medium text-leaf hover:text-forest">
            How follow-up works on TAZ AI <ArrowUpRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Voices */}
      <section className="border-t border-ink/10 bg-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHead index="04" title="From the field" />
          <div className="mt-8 grid gap-8 border-t border-ink/10 pt-8 sm:mt-12 sm:gap-10 sm:pt-10 md:grid-cols-3 md:gap-0">
            {fieldStories.map((s) =>
            <figure key={s.title} className="flex flex-col md:border-l md:border-ink/10 md:px-6 md:first:border-l-0 md:first:pl-0">
                <blockquote className="text-[15px] leading-relaxed text-ink/80 sm:text-[17px]">“{s.quote}”</blockquote>
                <figcaption className="mt-4 flex items-center gap-3 sm:mt-6 md:mt-auto md:pt-8">
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
      <section className="border-t border-ink/10 bg-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 sm:gap-10 sm:px-8 lg:grid-cols-12 lg:items-end">
          <h2 className="text-2xl font-medium leading-[1.15] tracking-[-0.025em] text-ink sm:text-5xl sm:leading-[1.1] sm:tracking-[-0.03em] lg:col-span-8">
            Know a community that needs care? Host an outreach with us.
          </h2>
          <div className="lg:col-span-4">
            <p className="text-[15px] leading-relaxed text-ink/60 sm:text-[16px]">
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
