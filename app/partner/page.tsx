import type { Metadata } from 'next';
import { ArrowRightIcon, CheckIcon } from 'lucide-react';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { images } from '@/data/images';
import { partnerTypes } from '@/data/involve';
import { pastOutreaches } from '@/data/outreaches';

export const metadata: Metadata = {
  title: 'Partner with us · TAZhealth',
  description: 'Sponsor or co-host an outreach, bring TAZ AI to your programme, or receive referrals. Let’s make follow-up the standard.'
};

const CONTACT = '/contact?topic=partner';

const reasons = [
{ title: 'Reach people who are usually missed', text: 'We go to markets, church halls and village squares, where people rarely see a clinician.' },
{ title: 'Care that doesn’t stop after one day', text: 'Every patient gets a follow-up plan, SMS check-ins in their language and tracked referrals.' },
{ title: 'Outcomes you can actually report', text: 'People reached, risks found and follow-ups completed, ready for your board or funder report.' }];


const ways = [
{ title: 'Sponsor an outreach', text: 'Fund the medicine, screening kits and SMS follow-up for one community.', note: 'Your name on the day and in the report' },
{ title: 'Co-host an outreach', text: 'Bring your staff, members or congregation. We bring the clinicians and the follow-up.', note: 'Great for companies and faith groups' },
{ title: 'Bring TAZ AI to your programme', text: 'Use our offline registration, risk triage and SMS follow-up at your own outreaches.', note: 'Subsidised pilots for nonprofits' },
{ title: 'Receive referrals', text: 'Clinics and hospitals get patients referred with their details and reason for referral.', note: 'For PHCs, clinics and hospitals' }];


const steps = [
{ title: 'We talk', text: 'A short call to understand your goals, community and budget.' },
{ title: 'We plan together', text: 'Location, date, services and who does what, agreed in writing.' },
{ title: 'Outreach day', text: 'Screening, consultations, medicine and referrals, on the ground.' },
{ title: 'Follow-up and report', text: 'Weeks of follow-up, then a clear report of what happened.' }];


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

export default function Partner() {
  const people = pastOutreaches.reduce((n, o) => n + o.peopleReached, 0);
  const referrals = pastOutreaches.reduce((n, o) => n + o.referrals, 0);
  const stats = [
  { label: 'Outreaches held', value: String(pastOutreaches.length) },
  { label: 'People seen', value: String(people) },
  { label: 'Referrals tracked', value: String(referrals) },
  { label: 'SMS languages', value: '5' }];


  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-28 sm:pt-32 lg:pt-40">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="text-sm text-ink/50">Partner with us</p>
          <div className="mt-4 grid gap-5 sm:mt-6 sm:gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
            <h1 className="text-[32px] font-medium leading-[1.05] tracking-[-0.03em] text-ink sm:text-6xl sm:leading-[1.02] sm:tracking-[-0.035em] lg:col-span-8 lg:text-[64px]">
              Make follow-up the standard, together.
            </h1>
            <div className="lg:col-span-4">
              <p className="text-[15px] leading-relaxed text-ink/60 sm:text-lg">
                NGOs, companies, clinics and government. Help us bring free care to more communities, and keep it going long after the outreach day.
              </p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                <ButtonLink to={CONTACT}>
                  Start a conversation <ArrowRightIcon className="h-4 w-4" />
                </ButtonLink>
                <ButtonLink to="/outreaches" variant="secondary">
                  See our work
                </ButtonLink>
              </div>
            </div>
          </div>

          <dl className="mt-10 grid grid-cols-2 border-t border-ink/10 sm:mt-14 lg:grid-cols-4">
            {stats.map((s, i) =>
            <div
              key={s.label}
              className={`py-4 sm:py-6 ${i % 2 === 1 ? 'border-l border-ink/10 pl-4 sm:pl-6' : ''} ${i === 2 ? 'lg:border-l lg:border-ink/10 lg:pl-6' : ''} ${i >= 2 ? 'border-t border-ink/10 lg:border-t-0' : ''}`}>

                <dt className="text-[11px] text-ink/50 sm:text-sm">{s.label}</dt>
                <dd className="mt-1 text-2xl font-medium tabular-nums tracking-tight text-ink sm:text-4xl">{s.value}</dd>
              </div>
            )}
          </dl>
        </div>

        <figure className="mx-auto max-w-6xl px-5 sm:px-8">
          <img
            src={images.volunteers}
            alt="TAZhealth volunteers and partners at an outreach"
            className="aspect-[4/3] w-full rounded-lg object-cover sm:aspect-[21/9]" />

          <figcaption className="mt-2.5 text-xs text-ink/50 sm:mt-3 sm:text-sm">Volunteers and partners at a TAZhealth outreach</figcaption>
        </figure>
      </section>

      {/* Why */}
      <section className="bg-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHead index="01" title="Why partner with TAZhealth" aside="Most outreaches help for a day. We are built for what happens after." />
          <RevealGroup className="mt-8 grid border-t border-ink/10 sm:mt-12 md:grid-cols-3">
            {reasons.map((r, i) =>
            <RevealItem key={r.title} className="flex gap-4 border-b border-ink/10 py-5 md:block md:border-b-0 md:border-l md:px-6 md:py-8 md:first:border-l-0 md:first:pl-0">
                <p className="w-5 shrink-0 font-mono text-xs leading-6 text-ink/40">0{i + 1}</p>
                <div className="md:mt-6">
                  <h3 className="text-[15px] font-medium text-ink sm:text-lg">{r.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink/60 sm:mt-2 sm:text-[15px]">{r.text}</p>
                </div>
              </RevealItem>
            )}
          </RevealGroup>
        </div>
      </section>

      {/* Ways */}
      <section className="border-t border-ink/10 bg-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHead index="02" title="Ways to partner" aside="Pick one, or mix and match. We shape every partnership around your goals." />
          <RevealGroup className="mt-8 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4">
            {ways.map((w) =>
            <RevealItem key={w.title}>
                <a
                href={CONTACT}
                className="group flex h-full flex-col rounded-2xl p-5 ring-1 ring-ink/10 transition-colors duration-200 hover:bg-mint/40 hover:ring-forest/30 sm:p-7">

                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-medium text-ink sm:text-xl">{w.title}</h3>
                    <ArrowRightIcon className="mt-1 h-4 w-4 shrink-0 text-ink/30 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-forest" />
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60 sm:text-[15px]">{w.text}</p>
                  <p className="mt-auto flex items-center gap-1.5 pt-5 text-[13px] text-leaf sm:text-sm">
                    <CheckIcon className="h-3.5 w-3.5" strokeWidth={2.5} /> {w.note}
                  </p>
                </a>
              </RevealItem>
            )}
          </RevealGroup>

          <div className="mt-10 sm:mt-14">
            <p className="text-sm text-ink/45">Who we work with</p>
            <ul className="mt-3 grid border-t border-ink/10 sm:grid-cols-2 lg:grid-cols-4">
              {partnerTypes.map((p) => {
                const Icon = p.icon;
                return (
                  <li key={p.title} className="flex gap-3 border-b border-ink/10 py-4 lg:border-b-0 lg:pr-6">
                    <Icon className="mt-0.5 h-4 w-4 shrink-0 text-forest" aria-hidden="true" />
                    <span>
                      <span className="block text-sm font-medium text-ink sm:text-[15px]">{p.title}</span>
                      <span className="mt-0.5 block text-[13px] leading-relaxed text-ink/55 sm:text-sm">{p.text}</span>
                    </span>
                  </li>);

              })}
            </ul>
          </div>
        </div>
      </section>

      {/* How */}
      <section className="border-t border-ink/10 bg-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHead index="03" title="How it works" aside="From first call to final report, usually four to eight weeks." />
          <ol className="mt-8 grid border-t border-ink/10 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) =>
            <li key={s.title} className="flex gap-4 border-b border-ink/10 py-4 sm:block sm:py-6 sm:pr-6 lg:border-b-0 lg:border-l lg:px-5 lg:py-8 lg:first:border-l-0 lg:first:pl-0">
                <p className="w-5 shrink-0 font-mono text-xs leading-5 text-ink/40">0{i + 1}</p>
                <div>
                  <h3 className="text-[15px] font-medium text-ink sm:mt-6 sm:text-base">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink/60 sm:mt-2 sm:text-[15px]">{s.text}</p>
                </div>
              </li>
            )}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest-dark py-16 text-white sm:py-24">
        <Reveal className="mx-auto grid max-w-6xl gap-6 px-5 sm:gap-10 sm:px-8 lg:grid-cols-12 lg:items-end">
          <h2 className="text-2xl font-medium leading-[1.15] tracking-[-0.025em] sm:text-5xl sm:leading-[1.1] lg:col-span-8">
            Let’s talk about the community you want to reach.
          </h2>
          <div className="lg:col-span-4">
            <p className="text-[15px] leading-relaxed text-white/60 sm:text-[16px]">
              Tell us a little about your organisation. We reply within two working days.
            </p>
            <ButtonLink to={CONTACT} variant="light" className="mt-6">
              Contact us <ArrowRightIcon className="h-4 w-4" />
            </ButtonLink>
          </div>
        </Reveal>
      </section>
    </>);

}
