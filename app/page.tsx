import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
import { HomeHero } from '@/components/home/HomeHero';
import { TazAiShowcase } from '@/components/home/TazAiShowcase';
import { PartnersStrip } from '@/components/home/PartnersStrip';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { CountUp } from '@/components/ui/CountUp';
import { GalleryGrid } from '@/components/ui/GalleryGrid';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { gallery, images } from '@/data/images';
import { outreachImpact } from '@/data/impact';
import { testimonials } from '@/data/people';
import { cn } from '@/utils/cn';

const steps = [
{
  when: 'On the day',
  title: 'We show up',
  text: 'Blood pressure, blood sugar and malaria checks, time with a doctor, and free medicine. Under a canopy, in the middle of the community.',
  image: images.glucose,
  alt: 'Volunteer preparing a blood glucose test at an outreach'
},
{
  when: 'Before we leave',
  title: 'We make a plan',
  text: 'Everyone leaves with a follow-up plan. Their details are saved on TAZ AI, even when there’s no network at the site.',
  image: images.phone,
  alt: 'Volunteer taking patient records at a market outreach'
},
{
  when: 'Weeks later',
  title: 'We check in',
  text: 'Reminders by SMS in their own language, calls from volunteers, and referrals we follow until care actually happens.',
  image: images.consult,
  alt: 'Free medical consultation at an outreach'
}];


export default function Home() {
  const [featured, ...others] = testimonials;

  return (
    <>
      <HomeHero />

      {/* How we care */}
      <section className="bg-white pb-16 pt-20 sm:pb-20 sm:pt-28 lg:pb-28 lg:pt-36" aria-labelledby="how-title">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 id="how-title" className="text-balance text-2xl font-semibold leading-tight text-ink sm:text-3xl">
              At most free outreaches, care ends the same evening.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink/65">
              Of every 10 people screened, only 1 or 2 are still in care a few weeks later. So we do it differently.
            </p>
          </Reveal>

          <RevealGroup
            as="ol"
            className="no-scrollbar -mx-5 mt-10 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pb-2 sm:-mx-8 sm:mt-14 sm:scroll-px-8 sm:px-8 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:pb-0">
            {steps.map((s, i) =>
            <RevealItem as="li" key={s.title} className="w-[80%] shrink-0 snap-start sm:w-[55%] md:w-auto">
                <img src={s.image} alt={s.alt} loading="lazy" className="aspect-[4/3] w-full rounded-3xl object-cover" />
                <p className="mt-5 text-sm font-medium text-leaf">
                  {i + 1}. {s.when}
                </p>
                <h3 className="mt-1 text-xl font-semibold text-ink">{s.title}</h3>
                <p className="mt-2 text-[16px] leading-relaxed text-ink/65">{s.text}</p>
              </RevealItem>
            )}
          </RevealGroup>
        </div>
      </section>

      {/* Numbers */}
      <section className="bg-forest py-14 text-white lg:py-16" aria-label="Our impact so far">
        <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-y-10 px-5 sm:px-8 lg:grid-cols-4">
          {outreachImpact.map((s, i) =>
          <li key={s.label} className={cn('text-center', i > 0 && 'lg:border-l lg:border-white/15')}>
              <p className="text-4xl font-semibold tracking-tight text-sun sm:text-5xl">
                <CountUp to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-1 text-[15px] text-white/75">{s.label}</p>
            </li>
          )}
        </ul>
      </section>

      {/* Voices */}
      <section className="bg-white py-16 sm:py-20 lg:py-28" aria-label="In their words">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <Reveal className="text-center">
            <p className="text-5xl leading-none text-sun" aria-hidden="true">“</p>
            <blockquote className="mx-auto mt-2 max-w-3xl text-balance text-2xl leading-snug text-forest sm:text-[28px]">
              {featured.quote}
            </blockquote>
            <p className="mt-6 font-medium text-ink">{featured.name}</p>
            <p className="text-sm text-ink/60">{featured.role}</p>
          </Reveal>

          <RevealGroup className="mt-14 grid gap-4 md:grid-cols-2">
            {others.map((t) =>
            <RevealItem key={t.name}>
                <figure className="h-full rounded-3xl bg-white p-7 ring-1 ring-ink/10">
                  <blockquote className="text-[16px] leading-relaxed text-ink/80">“{t.quote}”</blockquote>
                  <figcaption className="mt-4 text-sm">
                    <span className="font-medium text-ink">{t.name}</span>
                    <span className="text-ink/55"> · {t.role}</span>
                  </figcaption>
                </figure>
              </RevealItem>
            )}
          </RevealGroup>
        </div>
      </section>

      <TazAiShowcase />

      {/* Gallery */}
      <section className="bg-white py-16 sm:py-20 lg:py-28" aria-labelledby="gallery-title">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <Reveal>
              <h2 id="gallery-title" className="text-2xl font-semibold text-ink sm:text-3xl">
                Scenes from the field
              </h2>
              <p className="mt-2 text-ink/60">Tap any photo to see it up close.</p>
            </Reveal>
            <Link href="/outreaches" className="inline-flex items-center gap-2 font-medium text-leaf hover:text-forest">
              All outreaches <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10">
            <GalleryGrid images={gallery.slice(0, 6)} />
          </div>
        </div>
      </section>

      <PartnersStrip />

      {/* Closing */}
      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <Reveal className="mx-auto max-w-xl px-5 text-center sm:px-8">
          <h2 className="text-balance text-2xl font-semibold text-ink sm:text-3xl">
            Help us keep the <span className="text-leaf">heartbeat going.</span>
          </h2>
          <p className="mt-4 text-ink/65">
            Give a Saturday at an outreach, make follow-up calls from home, or bring us to your community.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink to="/get-involved#volunteer" size="lg">
              Volunteer with us
            </ButtonLink>
            <ButtonLink to="/get-involved#partner" size="lg" variant="secondary">
              Partner with us
            </ButtonLink>
          </div>
        </Reveal>
      </section>
    </>);

}
