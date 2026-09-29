import React from 'react';
import { ArrowRightIcon, CheckIcon, CloudIcon, ShieldCheckIcon, SmartphoneIcon, WifiOffIcon } from 'lucide-react';
import { RevealGroup, RevealItem } from '../ui/Reveal';
import { minorFeatures, smsLanguages } from '../../data/tazai';

const hover = 'transition-[transform,box-shadow] duration-200 ease-smooth hover:-translate-y-1 hover:scale-[1.01] hover:shadow-card';

const queue = [
{ name: 'Patient #046', state: 'synced' },
{ name: 'Patient #047', state: 'synced' },
{ name: 'Patient #048', state: 'saved' }];


export function FeaturesBento() {
  return (
    <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.06}>
      <RevealItem className="sm:col-span-2">
        <div className={`flex h-full flex-col rounded-[2rem] bg-mint p-7 sm:p-8 ${hover}`}>
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-leaf">
            <WifiOffIcon className="h-6 w-6" aria-hidden="true" />
          </span>
          <h3 className="mt-6 text-2xl text-forest">Works offline</h3>
          <p className="mt-2 max-w-md text-[16px] leading-relaxed text-ink/70">
            No network at the outreach site? No problem. Every record is saved on the phone and syncs automatically when
            signal returns.
          </p>
          <ul className="mt-6 space-y-2">
            {queue.map((q) =>
            <li key={q.name} className="flex items-center justify-between rounded-xl bg-white px-4 py-2.5 text-sm">
                <span className="flex items-center gap-2 text-ink">
                  <SmartphoneIcon className="h-4 w-4 text-ink/40" aria-hidden="true" />
                  {q.name}
                </span>
                {q.state === 'synced' ?
              <span className="flex items-center gap-1 text-leaf">
                    <CheckIcon className="h-4 w-4" aria-hidden="true" /> Synced
                  </span> :

              <span className="flex items-center gap-1 text-ink/60">
                    <CloudIcon className="h-4 w-4" aria-hidden="true" /> Saved on device
                  </span>
              }
              </li>
            )}
          </ul>
        </div>
      </RevealItem>

      <RevealItem className="sm:col-span-2 lg:row-span-2">
        <div className={`flex h-full flex-col rounded-[2rem] bg-forest p-7 text-white sm:p-8 ${hover}`}>
          <h3 className="text-2xl">SMS in five Nigerian languages</h3>
          <p className="mt-2 max-w-md text-[16px] leading-relaxed text-white/75">
            Written with native speakers and clinicians — so a reminder feels like it came from someone who knows you.
          </p>
          <ul className="mt-8 flex-1 space-y-2">
            {smsLanguages.map((l) =>
            <li key={l.name} className="flex flex-col gap-1 rounded-2xl bg-white/[0.07] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                <span className="text-sm font-medium text-sun">{l.name}</span>
                <span className="text-[16px] text-white/90" lang={l.name === 'Yoruba' ? 'yo' : l.name === 'Hausa' ? 'ha' : l.name === 'Igbo' ? 'ig' : 'en'}>
                  {l.hello}
                </span>
              </li>
            )}
          </ul>
        </div>
      </RevealItem>

      {minorFeatures.map((f) => {
        const Icon = f.icon;
        return (
          <RevealItem key={f.title}>
            <div className={`flex h-full flex-col rounded-[2rem] border border-forest/10 bg-white p-7 ${hover}`}>
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-mint text-leaf">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg text-forest">{f.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink/70">{f.text}</p>
            </div>
          </RevealItem>);

      })}

      <RevealItem className="sm:col-span-2">
        <a href="#privacy" className={`group flex h-full items-center gap-5 rounded-[2rem] bg-sun/15 p-7 ${hover}`}>
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-forest">
            <ShieldCheckIcon className="h-6 w-6" aria-hidden="true" />
          </span>
          <span className="flex-1">
            <span className="block text-lg font-medium text-forest">Secure and consent-first</span>
            <span className="block text-[15px] text-ink/70">Encryption, patient consent and role-based access by default.</span>
          </span>
          <ArrowRightIcon className="h-5 w-5 shrink-0 text-forest transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
        </a>
      </RevealItem>
    </RevealGroup>);

}