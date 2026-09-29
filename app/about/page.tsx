import { ButtonLink } from '@/components/ui/ButtonLink';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { RootsList, RootsPath } from '@/components/about/RootsPath';
import { PhotoMarquee } from '@/components/about/PhotoMarquee';
import { ScrollRevealText } from '@/components/about/ScrollRevealText';
import { team } from '@/data/people';
import { aboutFaqs } from '@/data/faqs';
import { FaqAccordion } from '@/components/ui/FaqAccordion';

const letter = [
'“We screened 52 people in Ogbomosho. A month later, we could reach fewer than ten of them.”',
'TAZhealth began with a borrowed canopy, a few young doctors and a table of donated drugs. When we called to follow up, most phones rang out. Prescriptions hadn’t been filled. Referrals hadn’t happened.',
'We had helped for one afternoon, and then care simply stopped. That year taught us three things. Screening is the start, not the finish. Trust is built by coming back. And tools have to fit the field.',
'So we stopped counting how many people we saw, and started asking how many we stayed with. That question is why we exist.'];


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
              TAZhealth is a small Nigerian nonprofit. We run free medical outreaches, and then we keep checking on
              the people we met.
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

      {/* Why and hope */}
      <section className="bg-forest py-20 text-white lg:py-24">
        <div className="mx-auto grid max-w-5xl gap-12 px-5 sm:px-8 md:grid-cols-2 md:gap-16">
          <Reveal>
            <p className="text-sm font-medium text-white/60">Why we exist</p>
            <p className="mt-4 text-xl leading-snug sm:text-2xl">
              To bring good care to underserved Nigerian communities, and make sure it keeps going after the outreach
              ends.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-sm font-medium text-white/60">What we hope for</p>
            <p className="mt-4 text-xl leading-snug sm:text-2xl">
              A Nigeria where nobody is forgotten after their first diagnosis.
            </p>
          </Reveal>
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
