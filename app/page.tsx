import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
import { HomeHero } from '@/components/home/HomeHero';
import { TestimonialSlider } from '@/components/home/TestimonialSlider';
// TAZ AI moving to its own site; re-enable when ready.
// import { TazAiShowcase } from '@/components/home/TazAiShowcase';
import { PartnersStrip } from '@/components/home/PartnersStrip';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { ArticleCard } from '@/components/blog/ArticleCard';
import { articles } from '@/data/articles';
import { GalleryGrid } from '@/components/ui/GalleryGrid';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { gallery, images } from '@/data/images';

export const metadata: Metadata = {
  title: { absolute: 'TAZhealth | Free Medical Outreaches for Underserved Nigerian Communities' },
  description:
  'Free health screenings, doctor consultations, medicine and health education for underserved communities in Nigeria. Over 1,000 people reached across 7 outreaches.',
  alternates: { canonical: '/' }
};

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

  return (
    <>
      <HomeHero />

      {/* How we care */}
      <section className="bg-white pb-12 pt-16 sm:pb-14 sm:pt-20 lg:pb-20 lg:pt-24" aria-labelledby="how-title">
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

      {/* Voices */}
      <section className="bg-white pb-4 pt-12 sm:pb-6 sm:pt-14 lg:pb-8 lg:pt-16" aria-label="In their words">
        <div className="px-5 sm:px-8">
          <TestimonialSlider />
        </div>
      </section>

      {/* <TazAiShowcase /> */}

      {/* Gallery */}
      <section className="bg-white py-12 sm:py-14 lg:py-20" aria-labelledby="gallery-title">
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

      {/* Blog */}
      <section className="bg-white py-12 sm:py-14 lg:py-20" aria-labelledby="blog-title">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <Reveal className="max-w-xl">
              <h2 id="blog-title" className="text-2xl font-semibold text-ink sm:text-3xl">
                Blogs & Articles
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-ink/60 sm:text-base">
                Health tips, stories from the field and updates on how we follow up with every patient.
              </p>
            </Reveal>
            <ButtonLink to="/blog" className="h-9 w-fit shrink-0 gap-1.5 px-4 text-[13px]">
              More stories <ArrowRightIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </ButtonLink>
          </div>
          <RevealGroup className="mt-10 grid gap-10 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-8">
            {articles.slice(0, 3).map((a) =>
            <RevealItem key={a.slug}>
                <ArticleCard article={a} />
              </RevealItem>
            )}
          </RevealGroup>
        </div>
      </section>
    </>);

}
