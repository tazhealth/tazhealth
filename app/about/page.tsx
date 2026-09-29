import { CompassIcon, HeartPulseIcon, TargetIcon } from 'lucide-react';
import { PageHero } from '@/components/ui/PageHero';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { CtaBand } from '@/components/ui/CtaBand';
import { SocialIcon } from '@/components/ui/SocialIcon';
import { JourneyTimeline } from '@/components/about/JourneyTimeline';
import { images } from '@/data/images';
import { team } from '@/data/people';

const lessons = [
{
  title: 'Screening is the start, not the finish.',
  text: 'Finding a high blood pressure reading means nothing if no one checks whether treatment followed.'
},
{
  title: 'Trust is built by coming back.',
  text: 'Communities opened up when they saw us return — and when our messages spoke their language.'
},
{
  title: 'Tools must fit the field.',
  text: 'No network, cheap phones, busy volunteers. Anything we build has to work in those conditions first.'
}];


const values = [
{ name: 'Human-centred', text: 'We design around the dignity, language and daily reality of the people we serve.' },
{ name: 'Community-first', text: 'Community leaders shape where we go and how we work. We are guests, and we act like it.' },
{ name: 'Accountable', text: 'We track what happens after every outreach and report it honestly — to communities, partners and donors.' },
{ name: 'Innovative', text: 'When the old way loses patients, we build a better one — simply, affordably and responsibly.' }];


export default function About() {
  return (
    <>
      <PageHero
        title={
        <>
            Building <span className="text-leaf">continuous care</span> for underserved communities.
          </>
        }
        description="TAZhealth is a Nigerian nonprofit that brings medical outreaches to communities who need them most — and builds the tools to keep caring after we leave."
        image={images.aboutHero}
        imageAlt="TAZhealth volunteers carrying medical supplies along a village path"
        actions={
        <>
            <ButtonLink to="/get-involved" size="lg">
              Join us
            </ButtonLink>
            <ButtonLink to="/outreaches" size="lg" variant="secondary">
              See our outreaches
            </ButtonLink>
          </>
        }
        aside={
        <div className="absolute -left-3 bottom-10 rounded-2xl bg-white p-4 shadow-card sm:-left-8">
            <p className="text-3xl font-medium text-forest">2025</p>
            <p className="text-sm text-ink/60">First outreach, Ogbomosho</p>
          </div>
        } />


      {/* Our story */}
      <section className="bg-white py-20 lg:py-28" aria-labelledby="story-title">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <h2 id="story-title" className="text-lg font-medium text-leaf">
              Our story
            </h2>
            <p className="mt-4 text-[28px] leading-[1.25] text-forest sm:text-4xl sm:leading-[1.2]">
              “We screened 52 people in Ogbomosho. A month later, we could reach fewer than ten of them.”
            </p>
            <p className="mt-6 text-[15px] text-ink/60">— Amara Okafor, Founder</p>
          </Reveal>
          <Reveal delay={0.1} className="space-y-5 text-lg leading-relaxed text-ink/75">
            <p>
              TAZhealth began with a simple outreach: a few young doctors, a borrowed canopy and a table of donated drugs.
              We found blood pressure readings that should have sent people straight to a clinic.
            </p>
            <p>
              When we called to follow up, most phones went unanswered. People hadn’t filled their prescriptions. Some
              never made it to the referral. The outreach had helped for a day — and then care simply stopped.
            </p>
            <p>That year of outreaches taught us three things that now shape everything we do.</p>
          </Reveal>
        </div>

        <RevealGroup as="ol" className="mx-auto mt-14 grid max-w-7xl gap-4 px-5 sm:px-8 md:grid-cols-3">
          {lessons.map((l) =>
          <RevealItem as="li" key={l.title} className="flex flex-col rounded-[2rem] bg-mint p-7 sm:p-8">
              <HeartPulseIcon className="h-7 w-7 text-leaf" aria-hidden="true" />
              <h3 className="mt-5 text-xl text-forest">{l.title}</h3>
              <p className="mt-2 text-[16px] leading-relaxed text-ink/70">{l.text}</p>
            </RevealItem>
          )}
        </RevealGroup>
      </section>

      {/* Mission & vision */}
      <section className="bg-white pb-20 lg:pb-28" aria-label="Mission and vision">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal className="relative overflow-hidden rounded-[2rem] bg-forest p-8 text-white sm:p-12">
            <div className="adire-light pointer-events-none absolute inset-0 opacity-[0.05]" aria-hidden="true" />
            <TargetIcon className="relative h-8 w-8 text-sun" aria-hidden="true" />
            <h2 className="relative mt-6 text-lg font-medium text-white/70">Our mission</h2>
            <p className="relative mt-3 text-2xl leading-snug sm:text-[34px] sm:leading-[1.2]">
              To bring quality healthcare to underserved Nigerian communities — and make sure it continues long after the
              outreach ends.
            </p>
          </Reveal>
          <Reveal className="rounded-[2rem] bg-mint p-8 sm:p-12" delay={0.08}>
            <CompassIcon className="h-8 w-8 text-leaf" aria-hidden="true" />
            <h2 className="mt-6 text-lg font-medium text-ink/60">Our vision</h2>
            <p className="mt-3 text-2xl leading-snug text-forest sm:text-[30px] sm:leading-[1.25]">
              A Nigeria where no patient is forgotten after their first diagnosis.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-mint py-20 lg:py-28" aria-labelledby="values-title">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading id="values-title" title="What we stand on." />
          <RevealGroup as="ul" className="mt-12 border-t border-forest/15">
            {values.map((v) =>
            <RevealItem as="li" key={v.name} className="grid gap-3 border-b border-forest/15 py-8 md:grid-cols-[1fr_1.4fr] md:items-baseline md:gap-10">
                <h3 className="text-3xl text-forest sm:text-4xl">{v.name}</h3>
                <p className="max-w-xl text-lg leading-relaxed text-ink/70">{v.text}</p>
              </RevealItem>
            )}
          </RevealGroup>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-20 lg:py-28" aria-labelledby="journey-title">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <SectionHeading id="journey-title" align="center" title="Our journey so far." intro="From one outreach to a care platform." />
          <div className="mt-14">
            <JourneyTimeline />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white pb-8 lg:pb-12" aria-labelledby="team-title">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading id="team-title" title="The people behind the pulse." intro="A small core team, supported by dozens of volunteers at every outreach." />
          <RevealGroup as="ul" className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {team.map((m) =>
            <RevealItem as="li" key={m.name}>
                <article className="group flex h-full flex-col">
                  <div className="aspect-[3/4] overflow-hidden rounded-b-3xl rounded-t-full bg-mint transition-transform duration-200 ease-smooth group-hover:-translate-y-1">
                    <img src={m.image} alt={`Portrait of ${m.name}`} loading="lazy" className="h-full w-full object-cover transition-transform duration-300 ease-smooth group-hover:scale-105" />
                  </div>
                  <h3 className="mt-5 text-xl text-forest">{m.name}</h3>
                  <p className="text-[15px] font-medium text-leaf">{m.role}</p>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink/70">{m.bio}</p>
                  <div className="mt-auto flex gap-2 pt-4">
                    <a href={m.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${m.name} on LinkedIn`} className="flex h-10 w-10 items-center justify-center rounded-full bg-mint text-forest transition-colors hover:bg-forest hover:text-white">
                      <SocialIcon name="linkedin" className="h-4 w-4" />
                    </a>
                    <a href={m.x} target="_blank" rel="noopener noreferrer" aria-label={`${m.name} on X`} className="flex h-10 w-10 items-center justify-center rounded-full bg-mint text-forest transition-colors hover:bg-forest hover:text-white">
                      <SocialIcon name="x" className="h-4 w-4" />
                    </a>
                  </div>
                </article>
              </RevealItem>
            )}
          </RevealGroup>
        </div>
      </section>

      <CtaBand
        title="Join the people keeping care going."
        text="Whether you’re a clinician, a student, a developer or simply someone who cares — there’s a place for you at TAZhealth."
        primaryLabel="Join us" />

    </>);

}
