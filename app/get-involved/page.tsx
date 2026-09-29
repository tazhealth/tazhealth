import { Suspense } from 'react';
import { ArrowDownIcon, ArrowUpRightIcon } from 'lucide-react';
import { FaqAccordion } from '@/components/ui/FaqAccordion';
import { VolunteerSection } from '@/components/involve/VolunteerSection';
import { DonateSection } from '@/components/involve/DonateSection';
import { images } from '@/data/images';
import { getInvolvedFaqs } from '@/data/faqs';
import { site } from '@/data/site';

const ways = [
{
  href: '#volunteer',
  index: '01',
  title: 'Volunteer',
  text: 'Join an outreach day, or make follow-up calls from wherever you are.',
  meta: 'From one Saturday a quarter',
  image: images.volunteers
},
{
  href: '/partner',
  index: '02',
  title: 'Partner',
  text: 'NGOs, clinics, companies and government. Let’s make follow-up the standard.',
  meta: 'See how partnering works',
  image: images.consult
},
{
  href: '#donate',
  index: '03',
  title: 'Donate',
  text: 'Fund medicine, screening kits and the SMS that keeps patients connected.',
  meta: 'From ₦500, one-time or monthly',
  image: images.pharmacy
}];


export default function GetInvolved() {
  return (
    <>
      <section className="bg-white pb-14 pt-28 sm:pb-24 sm:pt-32 lg:pb-32 lg:pt-40">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="text-sm text-ink/50">Get involved</p>
          <div className="mt-4 grid gap-5 sm:mt-6 sm:gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
            <h1 className="text-[32px] font-medium leading-[1.05] tracking-[-0.03em] text-ink sm:text-6xl sm:leading-[1.02] sm:tracking-[-0.035em] lg:col-span-8 lg:text-[64px]">
              Give a Saturday. Make a call. Fund a follow-up.
            </h1>
            <p className="text-[15px] leading-relaxed text-ink/60 sm:text-lg lg:col-span-4">
              Outreach day lasts a few hours. Follow-up lasts months. Pick whatever fits your life right now.
            </p>
          </div>

          <nav aria-label="Ways to help" className="mt-8 grid border-t border-ink/10 sm:mt-16 md:grid-cols-3 md:gap-6 md:border-t-0">
            {ways.map((w) =>
            <a key={w.href} href={w.href} className="group flex items-center gap-4 border-b border-ink/10 py-4 md:block md:border-b-0 md:py-0">
                <div className="h-20 w-20 shrink-0 overflow-hidden rounded-lg md:h-auto md:w-auto">
                  <img
                  src={w.image}
                  alt=""
                  className="h-full w-full object-cover transition-transform md:aspect-[4/3] md:h-auto duration-500 ease-smooth group-hover:scale-[1.03]" />

                </div>
                <div className="min-w-0 flex-1 md:mt-5 md:border-t md:border-ink/10 md:pt-4">
                  <p className="hidden font-mono text-xs text-ink/40 md:block">{w.index}</p>
                  <p className="flex items-center justify-between text-base font-medium text-ink md:mt-2 md:text-xl">
                    {w.title}
                    <ArrowDownIcon className="h-4 w-4 text-ink/40 transition-transform duration-200 group-hover:translate-y-0.5 group-hover:text-forest" />
                  </p>
                  <p className="mt-0.5 line-clamp-2 text-[13px] leading-snug text-ink/60 md:mt-1.5 md:line-clamp-none md:text-[15px] md:leading-relaxed">{w.text}</p>
                  <p className="mt-1 text-xs text-leaf md:mt-3 md:text-sm">{w.meta}</p>
                </div>
              </a>
            )}
          </nav>
        </div>
      </section>

      <Suspense fallback={null}>
        <VolunteerSection />
      </Suspense>
      <DonateSection />

      <section className="border-t border-ink/10 bg-white py-16 sm:py-24 lg:py-32" aria-labelledby="gi-faq">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:gap-12 sm:px-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <p className="font-mono text-xs text-ink/40">03</p>
            <h2 id="gi-faq" className="mt-2 text-2xl sm:mt-3 sm:text-3xl font-medium tracking-[-0.025em] text-ink sm:text-4xl">
              Questions
            </h2>
            <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-ink/60 sm:mt-4 sm:text-[16px]">
              Still unsure? Message us on WhatsApp. A real person will reply.
            </p>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-leaf hover:text-forest">

              Chat on WhatsApp <ArrowUpRightIcon className="h-4 w-4" />
            </a>
          </div>
          <div className="lg:col-span-8">
            <FaqAccordion items={getInvolvedFaqs} />
          </div>
        </div>
      </section>
    </>);

}
