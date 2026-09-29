import { CheckIcon, ClipboardCheckIcon } from 'lucide-react';
import { TazHero } from '@/components/tazai/TazHero';
import { CareGapChart } from '@/components/tazai/CareGapChart';
import { HowItWorksSteps } from '@/components/tazai/HowItWorksSteps';
import { FeaturesBento } from '@/components/tazai/FeaturesBento';
import { SmsThread } from '@/components/tazai/SmsThread';
import { DashboardPreview } from '@/components/tazai/DashboardPreview';
import { FeaturePhone } from '@/components/tazai/FeaturePhone';
import { DemoRequestForm } from '@/components/tazai/DemoRequestForm';
import { PhoneMockup } from '@/components/ui/PhoneMockup';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { FaqAccordion } from '@/components/ui/FaqAccordion';
import { audiences, builtForNigeria, privacyPoints } from '@/data/tazai';
import { englishThread, pidginThread } from '@/data/sms';
import { tazAiFaqs } from '@/data/faqs';

const demoSteps = [
'A 30-minute walkthrough with our team',
'A pilot plan shaped around your next outreach',
'Training for your volunteers - in a single afternoon'];


export default function TazAi() {
  return (
    <>
      <TazHero />

      {/* The problem it solves */}
      <section className="bg-white py-20 lg:py-28" aria-labelledby="gap-title">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading
            id="gap-title"
            title="Care stops when the outreach stops. TAZ AI keeps it going."
            intro="Outreaches find people who urgently need care - then lose touch with most of them. TAZ AI gives every patient a follow-up plan before the team packs up." />

          <CareGapChart />
        </div>
      </section>

      {/* How it works */}
      <section className="bg-mint py-20 lg:py-28" aria-labelledby="how-title">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading id="how-title" align="center" title="How it works" intro="From first reading to follow-up, in four steps." />
          <div className="mt-14 lg:mt-16">
            <HowItWorksSteps />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-20 lg:py-28" aria-labelledby="features-title">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading id="features-title" title="Everything a follow-up team needs. Nothing it doesn’t." />
          <div className="mt-12">
            <FeaturesBento />
          </div>
        </div>
      </section>

      {/* SMS showcase */}
      <section className="relative overflow-hidden bg-mint py-20 lg:py-28" aria-labelledby="sms-title">
        <div className="adire pointer-events-none absolute inset-0 opacity-[0.06]" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            id="sms-title"
            title="Messages that sound like home."
            intro="Warm, short and clear - in English, Pidgin, Yoruba, Hausa or Igbo. Patients can reply, and every reply updates their care plan." />

          <div className="flex flex-col items-center justify-center gap-10 sm:flex-row sm:items-start sm:gap-6">
            <div className="text-center">
              <p className="mb-4 text-sm font-medium text-forest">English · after the outreach</p>
              <PhoneMockup>
                <SmsThread language="English" messages={englishThread} startDelay={300} />
              </PhoneMockup>
            </div>
            <div className="text-center sm:mt-16">
              <p className="mb-4 text-sm font-medium text-forest">Pidgin · medication reminder</p>
              <PhoneMockup>
                <SmsThread language="Pidgin" messages={pidginThread} startDelay={900} />
              </PhoneMockup>
            </div>
          </div>
        </div>
      </section>

      {/* Built for Nigeria */}
      <section className="relative overflow-hidden bg-forest-dark py-20 text-white lg:py-28" aria-labelledby="nigeria-title">
        <div className="adire-light pointer-events-none absolute inset-0 opacity-[0.04]" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              id="nigeria-title"
              tone="light"
              title="Built for Nigeria - not adapted to it."
              intro="Patchy network, expensive data, basic phones. We designed for the real conditions of community health work from day one." />

            <Reveal className="mt-10 flex items-center gap-6" delay={0.1}>
              <FeaturePhone />
              <p className="max-w-[14rem] text-[15px] leading-relaxed text-white/70">
                Patients don’t need a smartphone, an app or data. If it can receive an SMS, it works.
              </p>
            </Reveal>
          </div>
          <RevealGroup as="ul" className="grid divide-y divide-white/10 border-y border-white/10 sm:grid-cols-2 sm:divide-y-0">
            {builtForNigeria.map((item, i) => {
              const Icon = item.icon;
              return (
                <RevealItem
                  as="li"
                  key={item.title}
                  className={`py-8 sm:px-6 ${i % 2 === 0 ? 'sm:border-r sm:border-white/10 sm:pl-0' : ''} ${i < 2 ? 'sm:border-b sm:border-white/10' : ''}`}>

                  <Icon className="h-7 w-7 text-sun" aria-hidden="true" />
                  <h3 className="mt-4 text-xl">{item.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-white/70">{item.text}</p>
                </RevealItem>);

            })}
          </RevealGroup>
        </div>
      </section>

      {/* Who it's for */}
      <section className="bg-white py-20 lg:py-28" aria-labelledby="audience-title">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading id="audience-title" title="Made for anyone who runs outreaches." />
          <RevealGroup as="ul" className="mt-12 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map((a) => {
              const Icon = a.icon;
              return (
                <RevealItem as="li" key={a.title} className="flex gap-4 border-t border-forest/10 py-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-mint text-leaf">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-lg text-forest">{a.title}</h3>
                    <p className="mt-1 text-[15px] text-ink/70">{a.text}</p>
                  </div>
                </RevealItem>);

            })}
          </RevealGroup>
        </div>
      </section>

      {/* Dashboard preview */}
      <section className="overflow-hidden bg-mint py-20 lg:py-28" aria-labelledby="dashboard-title">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            id="dashboard-title"
            align="center"
            title="See your whole community at a glance."
            intro="Reach, risk and follow-up outcomes for every outreach - ready for your team meeting or your next funder report." />

          <Reveal className="mt-12 lg:mt-16">
            <DashboardPreview />
          </Reveal>
        </div>
      </section>

      {/* Privacy */}
      <section id="privacy" className="scroll-mt-24 bg-white py-20 lg:py-28" aria-labelledby="privacy-title">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <SectionHeading
              id="privacy-title"
              title="Health data is personal. We treat it that way."
              intro="Privacy and consent aren’t settings in TAZ AI - they’re how it was built." />

            <Reveal className="mt-8 max-w-sm rounded-3xl bg-mint p-5" delay={0.1}>
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-leaf text-white">
                  <ClipboardCheckIcon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[15px] font-medium text-ink">Consent recorded</p>
                  <p className="text-sm text-ink/60">Folake agreed to SMS follow-up in Yoruba · 10:41</p>
                </div>
              </div>
            </Reveal>
          </div>
          <RevealGroup as="ul" className="space-y-4">
            {privacyPoints.map((p) => {
              const Icon = p.icon;
              return (
                <RevealItem as="li" key={p.title} className="flex gap-5 rounded-[2rem] border border-forest/10 p-6 sm:p-8">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-forest text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-xl text-forest">{p.title}</h3>
                    <p className="mt-2 text-[16px] leading-relaxed text-ink/70">{p.text}</p>
                  </div>
                </RevealItem>);

            })}
          </RevealGroup>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white pb-20 lg:pb-28" aria-labelledby="faq-title">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeading id="faq-title" title="Questions, answered." intro="Can’t find what you need? Ask us on WhatsApp." className="lg:sticky lg:top-28 lg:self-start" />
          <Reveal>
            <FaqAccordion items={tazAiFaqs} />
          </Reveal>
        </div>
      </section>

      {/* Demo CTA */}
      <section id="demo" className="scroll-mt-20 px-5 pb-20 sm:px-8 lg:pb-28" aria-labelledby="demo-title">
        <div className="relative mx-auto grid max-w-7xl gap-10 overflow-hidden rounded-[2rem] bg-forest p-6 sm:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14 lg:rounded-[2.5rem] lg:p-14">
          <div className="adire-light pointer-events-none absolute inset-0 opacity-[0.05]" aria-hidden="true" />
          <div className="relative text-white">
            <h2 id="demo-title" className="text-[28px] leading-[1.08] sm:text-4xl">
              Bring TAZ AI to your outreach program.
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-white/75">
              Tell us a little about your work. Here’s what happens next:
            </p>
            <ul className="mt-8 space-y-4">
              {demoSteps.map((s) =>
              <li key={s} className="flex items-start gap-3 text-[16px] text-white/90">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sun text-forest">
                    <CheckIcon className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  {s}
                </li>
              )}
            </ul>
          </div>
          <div className="relative rounded-[1.5rem] bg-white p-6 sm:p-8">
            <DemoRequestForm />
          </div>
        </div>
      </section>
    </>);

}
