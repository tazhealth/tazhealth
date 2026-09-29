import { ButtonLink } from '@/components/ui/ButtonLink';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { JourneyTimeline } from '@/components/about/JourneyTimeline';
import { images } from '@/data/images';
import { team } from '@/data/people';
import { cn } from '@/utils/cn';

const polaroids = [
{ src: images.motherChild, caption: 'Makoko, a second visit', alt: 'Nurse examining a child with her mother', tilt: '-rotate-6', offset: 'sm:translate-y-6' },
{ src: images.aboutHero, caption: 'Ogbomosho, where it started', alt: 'TAZhealth volunteers carrying medical supplies along a village path', tilt: 'rotate-2', offset: '' },
{ src: images.education, caption: 'Akinyele, health talk', alt: 'Health talk under a shade tree', tilt: 'rotate-6', offset: 'sm:translate-y-8' }];


const lessons = [
'Screening is the start, not the finish. A high reading means nothing if nobody checks what happened next.',
'Trust is built by coming back. People opened up when they saw us return, and when our messages spoke their language.',
'Tools have to fit the field. No network, cheap phones, busy volunteers. Whatever we build must work there first.'];


const founder = team[0];

export default function About() {
  return (
    <>
      {/* Opening */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F6F7E6] to-mint pb-20 pt-32 lg:pb-28 lg:pt-40">
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

        <RevealGroup className="mx-auto mt-14 flex max-w-4xl flex-col items-center gap-8 px-5 sm:flex-row sm:justify-center sm:gap-0 sm:px-8">
          {polaroids.map((p) =>
          <RevealItem key={p.caption} className={cn('w-60 sm:-mx-3 sm:w-64', p.offset)}>
              <figure className={cn('bg-white p-3 pb-4 shadow-card transition-transform duration-300 ease-smooth hover:rotate-0 hover:scale-105', p.tilt)}>
                <img src={p.src} alt={p.alt} className="aspect-square w-full object-cover" />
                <figcaption className="mt-3 text-center text-sm text-ink/70">{p.caption}</figcaption>
              </figure>
            </RevealItem>
          )}
        </RevealGroup>
      </section>

      {/* The letter */}
      <section className="bg-white py-20 lg:py-28" aria-labelledby="letter-title">
        <Reveal className="mx-auto max-w-2xl px-5 sm:px-8">
          <p id="letter-title" className="text-sm font-medium text-leaf">
            A note from our founder
          </p>
          <p className="mt-5 text-2xl leading-snug text-forest sm:text-[28px]">
            “We screened 52 people in Ogbomosho. A month later, we could reach fewer than ten of them.”
          </p>

          <div className="mt-8 space-y-5 text-[17px] leading-[1.8] text-ink/75">
            <p>
              TAZhealth began with a borrowed canopy, a few young doctors and a table of donated drugs. That first day,
              we found blood pressure readings that should have sent people straight to a clinic.
            </p>
            <p>
              When we called to follow up, most phones rang out. Prescriptions hadn’t been filled. Referrals hadn’t
              happened. We had helped for one afternoon, and then care simply stopped.
            </p>
            <p>That year taught us three things we still hold on to:</p>
          </div>

          <ol className="mt-6 space-y-4">
            {lessons.map((l, i) =>
            <li key={i} className="flex gap-4 rounded-2xl bg-mint px-5 py-4">
                <span className="text-lg font-semibold text-leaf">{i + 1}</span>
                <p className="text-[16px] leading-relaxed text-ink/80">{l}</p>
              </li>
            )}
          </ol>

          <p className="mt-8 text-[17px] leading-[1.8] text-ink/75">
            So we stopped measuring ourselves by how many people we saw, and started asking how many we stayed with.
            That question is why we exist.
          </p>

          <div className="mt-10 flex items-center gap-4 border-t border-forest/10 pt-8">
            <img src={founder.image} alt="" className="h-14 w-14 rounded-full object-cover" />
            <div>
              <p className="font-medium text-ink">{founder.name}</p>
              <p className="text-sm text-ink/60">{founder.role}</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Why and hope */}
      <section className="bg-forest py-20 text-white lg:py-24">
        <div className="mx-auto grid max-w-5xl gap-12 px-5 sm:px-8 md:grid-cols-2 md:gap-16">
          <Reveal>
            <p className="text-sm font-medium text-sun">Why we exist</p>
            <p className="mt-4 text-xl leading-snug sm:text-2xl">
              To bring good care to underserved Nigerian communities, and make sure it keeps going after the outreach
              ends.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-sm font-medium text-sun">What we hope for</p>
            <p className="mt-4 text-xl leading-snug sm:text-2xl">
              A Nigeria where nobody is forgotten after their first diagnosis.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Journey */}
      <section className="bg-white py-20 lg:py-28" aria-labelledby="journey-title">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <Reveal className="text-center">
            <h2 id="journey-title" className="text-2xl font-semibold text-ink sm:text-3xl">
              How we got here
            </h2>
            <p className="mt-3 text-ink/60">From one outreach to a care platform.</p>
          </Reveal>
          <div className="mt-14">
            <JourneyTimeline />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-mint py-20 lg:py-28" aria-labelledby="team-title">
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

      {/* Closing */}
      <section className="bg-white py-20 lg:py-28">
        <Reveal className="mx-auto max-w-xl px-5 text-center sm:px-8">
          <h2 className="text-2xl font-semibold text-ink sm:text-3xl">
            Come to an outreach. <span className="text-leaf">Stay for the follow-up.</span>
          </h2>
          <p className="mt-4 text-ink/65">
            Doctors, nurses, students, or anyone with a few hours and a phone. There’s a place for you.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink to="/get-involved#volunteer" size="lg">
              Volunteer with us
            </ButtonLink>
            <ButtonLink to="/outreaches#upcoming" size="lg" variant="secondary">
              See upcoming outreaches
            </ButtonLink>
          </div>
        </Reveal>
      </section>
    </>);

}
