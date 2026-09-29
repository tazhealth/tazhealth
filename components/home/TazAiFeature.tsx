import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { ButtonLink } from '../ui/ButtonLink';
import { PhoneMockup } from '../ui/PhoneMockup';
import { Reveal } from '../ui/Reveal';
import { PatientScreen } from '../tazai/PatientScreen';

const flow = ['Register offline', 'Triage risk', 'SMS follow-up', 'Alert clinician'];

export function TazAiFeature() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 lg:py-28" aria-labelledby="taz-feature">
      <Reveal className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-forest lg:rounded-[2.5rem]">
        <div className="adire-light pointer-events-none absolute inset-0 opacity-[0.05]" aria-hidden="true" />
        <div className="relative grid items-center gap-12 px-6 pt-12 sm:px-12 lg:grid-cols-[1.1fr_0.9fr] lg:px-16 lg:pt-0">
          <div className="lg:py-20">
            <p className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-sun">TAZ AI</p>
            <h2 id="taz-feature" className="mt-5 text-[34px] leading-[1.08] text-white sm:text-5xl">
              Every outreach, turned into an ongoing care journey.
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/75">
              Our digital health tool helps health workers register patients offline, spot who’s at risk in seconds and
              follow up by SMS in five Nigerian languages.
            </p>
            <ol className="mt-8 flex flex-wrap items-center gap-2 text-sm">
              {flow.map((step, i) =>
              <li key={step} className="flex items-center gap-2">
                  <span className="whitespace-nowrap rounded-full bg-white/10 px-3.5 py-2 text-white">{step}</span>
                  {i < flow.length - 1 && <ArrowRightIcon className="h-4 w-4 text-sun" aria-hidden="true" />}
                </li>
              )}
            </ol>
            <div className="mt-9">
              <ButtonLink to="/taz-ai" variant="light" size="lg">
                Learn more <ArrowRightIcon className="h-4 w-4" />
              </ButtonLink>
            </div>
          </div>

          <div className="relative flex justify-center lg:h-full lg:items-end lg:pt-16">
            <div className="absolute bottom-0 left-1/2 h-[80%] w-[85%] max-w-[380px] -translate-x-1/2 rounded-t-full bg-leaf/30" aria-hidden="true" />
            <div className="relative translate-y-10 lg:translate-y-16">
              <PhoneMockup float>
                <PatientScreen />
              </PhoneMockup>
            </div>
          </div>
        </div>
      </Reveal>
    </section>);

}