import { Suspense } from 'react';
import { ArrowDownIcon } from 'lucide-react';
import { PageHero } from '@/components/ui/PageHero';
import { RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FaqAccordion } from '@/components/ui/FaqAccordion';
import { Reveal } from '@/components/ui/Reveal';
import { VolunteerSection } from '@/components/involve/VolunteerSection';
import { PartnerSection } from '@/components/involve/PartnerSection';
import { DonateSection } from '@/components/involve/DonateSection';
import { images } from '@/data/images';
import { getInvolvedFaqs } from '@/data/faqs';
import { cn } from '@/utils/cn';

const paths = [
{
  href: '#volunteer',
  title: 'Volunteer',
  text: 'Join an outreach day, or make follow-up calls from wherever you are.',
  image: images.volunteers,
  tone: 'bg-mint text-forest',
  sub: 'text-ink/70',
  cta: 'text-leaf'
},
{
  href: '#partner',
  title: 'Partner',
  text: 'NGOs, hospitals, companies and government — let’s make continuity the standard.',
  image: images.consult,
  tone: 'bg-forest text-white',
  sub: 'text-white/75',
  cta: 'text-sun'
},
{
  href: '#donate',
  title: 'Donate',
  text: 'Fund drugs, screening equipment and the SMS that keeps patients connected.',
  image: images.pharmacy,
  tone: 'bg-sun/20 text-forest',
  sub: 'text-ink/70',
  cta: 'text-forest'
}];


export default function GetInvolved() {
  return (
    <>
      <PageHero
        title={
        <>
            Be part of the <span className="text-leaf">continuity of care.</span>
          </>
        }
        description="Outreach day lasts a few hours. Follow-up lasts months. Whatever you can give — time, partnership or funds — keeps the heartbeat going."
        image={images.volunteers}
        imageAlt="Smiling TAZhealth volunteers in green t-shirts" />


      <section className="bg-white py-16 lg:py-24" aria-label="Ways to get involved">
        <RevealGroup as="ul" className="mx-auto grid max-w-7xl gap-5 px-5 sm:px-8 md:grid-cols-3">
          {paths.map((p) =>
          <RevealItem as="li" key={p.title}>
              <a
              href={p.href}
              className={cn(
                'group flex h-full flex-col overflow-hidden rounded-[2rem] transition-[transform,box-shadow] duration-200 ease-smooth hover:-translate-y-1 hover:scale-[1.01] hover:shadow-card',
                p.tone
              )}>

                <div className="aspect-[16/11] overflow-hidden">
                  <img src={p.image} alt="" className="h-full w-full object-cover transition-transform duration-300 ease-smooth group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <h2 className="text-3xl sm:text-4xl">{p.title}</h2>
                  <p className={cn('mt-3 text-[16px] leading-relaxed', p.sub)}>{p.text}</p>
                  <span className={cn('mt-auto inline-flex items-center gap-2 pt-6 font-medium', p.cta)}>
                    Start here <ArrowDownIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" />
                  </span>
                </div>
              </a>
            </RevealItem>
          )}
        </RevealGroup>
      </section>

      <Suspense fallback={null}>
        <VolunteerSection />
      </Suspense>
      <PartnerSection />
      <DonateSection />

      <section className="bg-mint py-20 lg:py-28" aria-labelledby="gi-faq">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeading id="gi-faq" title="Good questions." intro="Still unsure? Message us on WhatsApp — a real person will reply." className="lg:sticky lg:top-28 lg:self-start" />
          <Reveal>
            <FaqAccordion items={getInvolvedFaqs} />
          </Reveal>
        </div>
      </section>
    </>);

}
