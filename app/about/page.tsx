import { ButtonLink } from '@/components/ui/ButtonLink';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { RootsList, RootsPath } from '@/components/about/RootsPath';
import { PhotoMarquee } from '@/components/about/PhotoMarquee';
import { ScrollRevealText } from '@/components/about/ScrollRevealText';
import { team } from '@/data/people';
import { images } from '@/data/images';
import { pastOutreaches } from '@/data/outreaches';
import { aboutFaqs } from '@/data/faqs';
import { FaqAccordion } from '@/components/ui/FaqAccordion';

const values = [
{
  title: 'Equity',
  text: 'Closing the healthcare access gap.',
  image: images.orphanage,
  alt: 'TAZhealth volunteers with children at the Yemisi Alogi Orphanage outreach'
},
{
  title: 'Community',
  text: 'Solutions built with the people.',
  image: images.education,
  alt: 'Volunteer giving a health talk to community members in Odogbolu'
},
{
  title: 'Impact',
  text: 'Change that truly improves health.',
  image: images.consult,
  alt: 'Free medical consultation at a TAZhealth outreach'
}];

const peopleReached = pastOutreaches.reduce((n, o) => n + o.peopleReached, 0);

const letter = [
'“Access to quality healthcare should not be determined by where someone lives or what they can afford.”',
'That conviction is why we started TAZhealth. Across underserved Nigerian communities, people face real barriers to care, and preventable conditions go unnoticed. So we take healthcare to them: screenings, consultations, medication, referrals and health education, while advocating for the systemic changes that widen access.',
'Since April 2025, we have reached over 1,000 people. In our first year, our work was recognised by UN Academic Impact and the Millennium Campus Network, and the UN SDSN named us among the Top 150 Innovators in Nigeria advancing the SDGs.',
'Next, we are building technology and AI-driven systems to extend our reach beyond each outreach, towards a healthier Nigeria where everyone has a fair chance at the care they need.'];


const founder = team[0];

export default function About() {
  return (
    <>
      {/* Opening */}
      <section className="relative overflow-hidden bg-white pb-20 pt-32 lg:pb-28 lg:pt-40">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <Reveal>
            <p className="text-sm font-medium text-leaf">About us</p>
            <h1 className="mt-4 text-balance text-[34px] font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl">
              We’re the people who <span className="text-leaf">come back.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink/65">
              We are a nonprofit public health initiative expanding healthcare access in underserved Nigerian
              communities through medical outreach and advocacy for systemic change.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 lg:mt-12">
          <PhotoMarquee />
        </div>
      </section>

      {/* The letter */}
      <section className="bg-white py-28 lg:py-40" aria-labelledby="letter-title">
        <div className="mx-auto max-w-2xl px-5 sm:px-8">
          <p
            id="letter-title"
            className="inline-flex items-center gap-2 rounded-full bg-ink/[0.04] px-3 py-1 text-[13px] text-ink/60 ring-1 ring-ink/10">
            
            <span className="h-1.5 w-1.5 rounded-full bg-leaf" aria-hidden="true" />
            A note from our founder
          </p>

          <ScrollRevealText
            paragraphs={letter}
            className="mt-8 space-y-8 text-[22px] font-medium leading-[1.4] tracking-[-0.015em] text-ink sm:text-[28px]" />
          

          <div className="mt-14 flex items-center gap-4">
            <img src={founder.image} alt="" className="h-12 w-12 rounded-full object-cover" />
            <div>
              <p className="font-medium text-ink">{founder.name}</p>
              <p className="text-sm text-ink/55">{founder.role}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and vision */}
      <section className="bg-forest py-20 text-white lg:py-24">
        <div className="mx-auto grid max-w-5xl gap-12 px-5 sm:px-8 md:grid-cols-2 md:gap-16">
          <Reveal>
            <p className="text-sm font-medium text-white/60">Our mission</p>
            <p className="mt-4 text-xl leading-snug sm:text-2xl">
              To improve health outcomes by ensuring equitable healthcare access and equipping individuals with the
              resources and knowledge needed to make informed health decisions.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-sm font-medium text-white/60">Our vision</p>
            <p className="mt-4 text-xl leading-snug sm:text-2xl">
              To create a healthier society by driving impactful public health initiatives and ensuring equitable
              healthcare access, especially for those facing barriers to care.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Who we are */}
      <section className="overflow-hidden bg-white py-20 lg:py-28" aria-labelledby="who-title">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="text-sm font-medium text-leaf">Who we are</p>
            <h2 id="who-title" className="mt-3 text-balance text-[30px] font-semibold leading-[1.1] tracking-[-0.025em] text-ink sm:text-4xl">
              Care, education and a push for fairer healthcare.
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-ink/65 sm:text-[17px]">
              Through medical outreach programs, we deliver essential healthcare services while integrating health
              education to empower people to prioritize their health.
            </p>
            <p className="mt-4 text-[16px] leading-relaxed text-ink/65 sm:text-[17px]">
              Alongside this, our advocacy efforts aim to drive systemic changes that reduce disparities in healthcare
              access.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="relative grid grid-cols-5 grid-rows-2 gap-3 sm:gap-4">
              <img
                src={images.worldHeartDay}
                alt="World Heart Day outreach at Ilishan Market"
                loading="lazy"
                className="col-span-3 row-span-2 h-full min-h-[320px] w-full rounded-2xl object-cover sm:min-h-[440px]" />

              <img
                src={images.bmi}
                alt="Volunteer taking a BMI measurement at an outreach"
                loading="lazy"
                className="col-span-2 aspect-square h-full w-full rounded-2xl object-cover" />

              <img
                src={images.healthEducation}
                alt="Health education session at a TAZhealth outreach"
                loading="lazy"
                className="col-span-2 aspect-square h-full w-full rounded-2xl object-cover" />

              <div className="absolute -bottom-5 left-4 rounded-2xl bg-white px-5 py-4 shadow-card ring-1 ring-ink/5 sm:left-6">
                <p className="text-2xl font-semibold tabular-nums tracking-tight text-forest sm:text-3xl">
                  {peopleReached.toLocaleString()}
                </p>
                <p className="text-xs text-ink/60 sm:text-sm">people reached across {pastOutreaches.length} outreaches</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Core values */}
        <div className="mx-auto mt-24 max-w-6xl px-5 sm:px-8 lg:mt-32">
          <Reveal className="text-center">
            <p className="text-sm font-medium text-leaf">Our core values</p>
            <h2 className="mt-3 text-2xl font-semibold text-ink sm:text-3xl">What guides every outreach</h2>
          </Reveal>
          <RevealGroup as="ul" className="mt-10 grid gap-5 sm:grid-cols-3 sm:gap-6">
            {values.map((v) =>
            <RevealItem as="li" key={v.title} className="group relative overflow-hidden rounded-2xl">
                <img
                src={v.image}
                alt={v.alt}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform sm:aspect-[4/5] duration-700 ease-smooth group-hover:scale-[1.04]" />

                <div
                className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent"
                aria-hidden="true" />

                <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-7">
                  <h3 className="text-2xl font-semibold">{v.title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-white/80">{v.text}</p>
                </div>
              </RevealItem>
            )}
          </RevealGroup>
        </div>
      </section>

      {/* Journey */}
      <section className="bg-white py-20 lg:py-28" aria-labelledby="journey-title">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal className="text-center">
            <h2 id="journey-title" className="text-2xl font-semibold text-ink sm:text-3xl">
              How we got here
            </h2>
            <p className="mt-3 text-ink/60">From one outreach to a care platform.</p>
          </Reveal>
          <div className="mt-14 hidden lg:mt-20 lg:block">
            <RootsPath />
          </div>
          <div className="mx-auto mt-12 max-w-md lg:hidden">
            <RootsList />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="border-t border-ink/10 bg-white py-20 lg:py-28" aria-labelledby="team-title">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal className="text-center">
            <h2 id="team-title" className="text-2xl font-semibold text-ink sm:text-3xl">
              The people behind the pulse
            </h2>
            <p className="mt-3 text-ink/60">A small core team, and dozens of volunteers at every outreach.</p>
          </Reveal>
          <RevealGroup as="ul" className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {team.map((m) =>
            <RevealItem as="li" key={m.name} className="text-center">
                <img
                src={m.image}
                alt={`Portrait of ${m.name}`}
                loading="lazy"
                className="mx-auto aspect-square w-40 rounded-full object-cover ring-4 ring-white" />

                <h3 className="mt-5 text-lg font-medium text-forest">{m.name}</h3>
                <p className="text-sm text-leaf">{m.role}</p>
                <p className="mx-auto mt-2 max-w-xs text-[15px] leading-relaxed text-ink/65">{m.bio}</p>
              </RevealItem>
            )}
          </RevealGroup>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-ink/10 bg-white py-16 sm:py-24 lg:py-32" aria-labelledby="about-faq">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:gap-12 sm:px-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
            <p className="font-mono text-xs text-ink/40">FAQ</p>
            <h2 id="about-faq" className="mt-2 text-2xl font-medium tracking-[-0.025em] text-ink sm:mt-3 sm:text-4xl">
              Questions, answered.
            </h2>
            <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-ink/60 sm:mt-4 sm:text-[16px]">
              Anything else you want to know? Message us and a real person will reply.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              <ButtonLink to="/contact?topic=volunteer">Volunteer with us</ButtonLink>
              <ButtonLink to="/contact" variant="secondary">Contact us</ButtonLink>
            </div>
          </div>
          <div className="lg:col-span-8">
            <FaqAccordion items={aboutFaqs} />
          </div>
        </div>
      </section>
    </>);

}
