import type { Metadata } from 'next';
import { ArrowRightIcon, HandshakeIcon } from 'lucide-react';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { PhoneMockup } from '@/components/ui/PhoneMockup';
import { Reveal } from '@/components/ui/Reveal';
import { SmsThread } from '@/components/tazai/SmsThread';
import { images } from '@/data/images';
import { pastOutreaches } from '@/data/outreaches';
import { site } from '@/data/site';
import { pidginThread } from '@/data/sms';

export const metadata: Metadata = {
  title: 'Partner with us',
  description: 'Sponsor or co-host a free medical outreach with TAZhealth and bring healthcare to a community in Nigeria that needs it most.',
  alternates: { canonical: '/partner' }
};

const CONTACT = '/contact?topic=partner';

const audiences = [
{ label: 'NGOs & foundations', image: images.healthEducation },
{ label: 'Hospitals & clinics', image: images.consult },
{ label: 'Companies', image: images.volunteers },
{ label: 'Government agencies', image: images.phone }];


function Split({
  eyebrow,
  title,
  text,
  cta,
  children,
  flip



}: {eyebrow: string;title: string;text: string;cta: string;children: React.ReactNode;flip?: boolean;}) {
  return (
    <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
      <Reveal className={flip ? 'lg:order-last' : ''}>
        <p className="text-sm font-medium text-leaf">{eyebrow}</p>
        <h2 className="mt-3 text-balance text-[30px] font-semibold leading-[1.08] tracking-[-0.03em] text-ink sm:text-5xl">{title}</h2>
        <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink/65 sm:text-base">{text}</p>
        <ButtonLink to={CONTACT} className="mt-7 bg-ink hover:bg-forest">
          {cta} <ArrowRightIcon className="h-4 w-4" />
        </ButtonLink>
      </Reveal>
      <Reveal delay={0.1}>{children}</Reveal>
    </div>);

}

export default function Partner() {
  const people = pastOutreaches.reduce((n, o) => n + o.peopleReached, 0);
  const volunteers = pastOutreaches.reduce((n, o) => n + o.volunteers, 0);

  return (
    <>
      {/* Hero */}
      <section className="bg-white px-3 pt-24 sm:px-5 sm:pt-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl">
          <img
            src={images.volunteers}
            alt="TAZhealth volunteers and partners at an outreach"
            className="h-[560px] w-full object-cover sm:h-[620px]" />

          <div className="absolute inset-0 bg-ink/50" aria-hidden="true" />
          <div className="absolute inset-0 flex items-end p-6 sm:items-center sm:p-12 lg:p-16">
            <div className="max-w-xl text-white">
              <p className="text-sm text-white/75">Partner with TAZhealth</p>
              <h1 className="mt-3 text-balance text-[38px] font-semibold leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-[68px]">
                Let’s keep more communities healthy.
              </h1>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/80 sm:text-lg">
                Free outreaches and months of follow-up, for the people who are usually missed. We’d love to do it with you.
              </p>
              <ButtonLink to={CONTACT} variant="light" className="mt-7">
                Get in touch <ArrowRightIcon className="h-4 w-4" />
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsor */}
      <section className="mt-3 bg-mint py-12 sm:mt-5 sm:py-16">
        <Split
          eyebrow="Sponsor an outreach"
          title="Fund a day of care. See every outcome."
          text="Your support covers medicine, screening kits and SMS follow-up for one community. Afterwards you get a clear report of who was reached and what happened next."
          cta="Sponsor an outreach">

          <div className="rounded-2xl bg-white p-5 shadow-card ring-1 ring-ink/5 sm:p-7">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-ink">Outreach report</p>
              <span className="rounded-full bg-mint px-2.5 py-1 text-xs text-forest">All outreaches</span>
            </div>
            <dl className="mt-5 grid grid-cols-3 gap-3">
              {[
              ['Outreaches', pastOutreaches.length],
              ['People reached', people.toLocaleString()],
              ['Volunteers', volunteers]].
              map(([l, v]) =>
              <div key={l} className="rounded-xl bg-[#F7F8F6] p-3 sm:p-4">
                  <dt className="text-[11px] text-ink/50 sm:text-xs">{l}</dt>
                  <dd className="mt-1 text-xl font-semibold tabular-nums text-ink sm:text-2xl">{v}</dd>
                </div>
              )}
            </dl>
            <ul className="mt-5 divide-y divide-ink/5">
              {pastOutreaches.slice(0, 4).map((o) =>
              <li key={o.id} className="flex items-center justify-between py-2.5 text-sm">
                  <span className="min-w-0 truncate font-medium text-ink">{o.name}</span>
                  <span className="shrink-0 pl-3 text-ink/50">{o.peopleReached} reached</span>
                </li>
              )}
            </ul>
          </div>
        </Split>
      </section>

      {/* Co-host */}
      <section className="bg-white px-3 py-12 sm:px-5 sm:py-16">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-forest px-6 pt-12 text-center text-white sm:px-12 sm:pt-16">
          <Reveal>
            <p className="text-sm text-white/65">Co-host an outreach</p>
            <h2 className="mx-auto mt-3 max-w-xl text-balance text-[30px] font-semibold leading-[1.08] tracking-[-0.03em] sm:text-5xl">
              Bring your people. We bring the care.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-white/70 sm:text-base">
              Companies, churches and associations host an outreach with us. We bring the clinicians, medicine and follow-up.
            </p>
            <ButtonLink to={CONTACT} variant="light" className="mt-7">
              Host with us
            </ButtonLink>
          </Reveal>
          <div className="mt-12 flex items-end justify-center gap-3 sm:gap-5">
            {[images.exercise, images.bpCheck, images.malariaTalk].map((src, i) =>
            <div
              key={src}
              className={`overflow-hidden rounded-t-2xl border-4 border-b-0 border-ink ${i === 1 ? 'h-56 w-36 sm:h-80 sm:w-52' : 'h-44 w-28 sm:h-64 sm:w-44'}`}>

                <img src={src} alt="" loading="lazy" className="h-full w-full object-cover" />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* TAZ AI */}
      <section className="overflow-hidden bg-[#F4F5F4] pt-12 sm:pt-16">
        <Split
          eyebrow="Bring TAZ AI to your programme"
          title="Follow-up that runs itself."
          text="Use our offline registration, risk triage and SMS check-ins in five Nigerian languages at your own outreaches. Subsidised pilots for nonprofits."
          cta="Request a pilot"
          flip>

          <div className="flex justify-center">
            <div className="translate-y-6">
              <PhoneMockup className="w-[248px] sm:w-[270px]">
                <SmsThread language="Pidgin" messages={pidginThread} startDelay={300} />
              </PhoneMockup>
            </div>
          </div>
        </Split>
      </section>

      {/* Who */}
      <section className="bg-forest-dark text-white">
        <Reveal className="mx-auto max-w-2xl px-5 py-16 text-center sm:py-24">
          <h2 className="text-balance text-[30px] font-semibold leading-[1.08] tracking-[-0.03em] sm:text-5xl">We work with every kind of partner.</h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-white/65 sm:text-base">
            Clinics receive referrals, funders get outcome reports, and communities get care that keeps going.
          </p>
          <ButtonLink to={CONTACT} variant="light" className="mt-7">
            Partner with us
          </ButtonLink>
        </Reveal>
        <ul className="grid grid-cols-2 lg:grid-cols-4">
          {audiences.map((a) =>
          <li key={a.label} className="relative aspect-[3/4] overflow-hidden">
              <img src={a.image} alt="" loading="lazy" className="h-full w-full object-cover" />
              <span className="absolute inset-x-0 bottom-0 bg-ink/55 px-4 py-3 text-sm font-medium sm:text-base">{a.label}</span>
            </li>
          )}
        </ul>
      </section>

      {/* Start */}
      <section className="bg-mint py-12 sm:py-16">
        <Reveal className="mx-auto max-w-xl px-5 text-center">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-leaf text-white">
            <HandshakeIcon className="h-6 w-6" aria-hidden="true" />
          </span>
          <h2 className="mt-5 text-[30px] font-semibold tracking-[-0.03em] text-ink sm:text-5xl">Start a partnership</h2>
          <p className="mx-auto mt-3 max-w-sm text-[15px] leading-relaxed text-ink/65 sm:text-base">
            Tell us about your organisation and the community you want to reach. We reply within two working days.
          </p>
          <ButtonLink to={CONTACT} className="mt-7 bg-ink hover:bg-forest">
            Contact us
          </ButtonLink>
        </Reveal>
      </section>

      {/* Volunteer banner */}
      <section className="bg-white px-5 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 rounded-3xl bg-[#F4F5F4] p-7 sm:flex-row sm:items-center sm:justify-between sm:p-12">
          <div>
            <h2 className="text-2xl font-semibold tracking-[-0.025em] text-ink sm:text-4xl">Rather volunteer?</h2>
            <p className="mt-2 max-w-md text-[15px] text-ink/65 sm:text-base">
              Give a Saturday at an outreach, or make follow-up calls from home.
            </p>
          </div>
          <ButtonLink href={site.volunteerGroup} external variant="secondary" className="w-fit shrink-0">
            Volunteer with us <ArrowRightIcon className="h-4 w-4" />
          </ButtonLink>
        </div>
      </section>
    </>);

}
