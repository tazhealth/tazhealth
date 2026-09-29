import { Suspense } from 'react';
import { ArrowDownIcon, ArrowUpRightIcon } from 'lucide-react';
import { FaqAccordion } from '@/components/ui/FaqAccordion';
import { VolunteerSection } from '@/components/involve/VolunteerSection';
import { PartnerSection } from '@/components/involve/PartnerSection';
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
  href: '#partner',
  index: '02',
  title: 'Partner',
  text: 'NGOs, clinics, companies and government. Let’s make follow-up the standard.',
  meta: 'Reply within two working days',
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
      <section className="bg-white pb-24 pt-32 lg:pb-32 lg:pt-40">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="text-sm text-ink/50">Get involved</p>
          <div className="mt-6 grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
            <h1 className="text-[40px] font-medium leading-[1.02] tracking-[-0.035em] text-ink sm:text-6xl lg:col-span-8 lg:text-[64px]">
              Give a Saturday. Make a call. Fund a follow-up.
            </h1>
            <p className="text-lg leading-relaxed text-ink/60 lg:col-span-4">
              Outreach day lasts a few hours. Follow-up lasts months. Pick whatever fits your life right now.
            </p>
          </div>

          <nav aria-label="Ways to help" className="mt-16 grid gap-10 md:grid-cols-3 md:gap-6">
            {ways.map((w) =>
            <a key={w.href} href={w.href} className="group block">
                <div className="overflow-hidden rounded-lg">
                  <img
                  src={w.image}
                  alt=""
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 ease-smooth group-hover:scale-[1.03]" />

                </div>
                <div className="mt-5 border-t border-ink/10 pt-4">
                  <p className="font-mono text-xs text-ink/40">{w.index}</p>
                  <p className="mt-2 flex items-center justify-between text-xl font-medium text-ink">
                    {w.title}
                    <ArrowDownIcon className="h-4 w-4 text-ink/40 transition-transform duration-200 group-hover:translate-y-0.5 group-hover:text-forest" />
                  </p>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-ink/60">{w.text}</p>
                  <p className="mt-3 text-sm text-leaf">{w.meta}</p>
                </div>
              </a>
            )}
          </nav>
        </div>
      </section>

      <Suspense fallback={null}>
        <VolunteerSection />
      </Suspense>
      <PartnerSection />
      <DonateSection />

      <section className="border-t border-ink/10 bg-white py-24 lg:py-32" aria-labelledby="gi-faq">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <p className="font-mono text-xs text-ink/40">04</p>
            <h2 id="gi-faq" className="mt-3 text-3xl font-medium tracking-[-0.025em] text-ink sm:text-4xl">
              Questions
            </h2>
            <p className="mt-4 max-w-sm text-[16px] leading-relaxed text-ink/60">
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
