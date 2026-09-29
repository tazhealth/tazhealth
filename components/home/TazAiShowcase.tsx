import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
import { PhoneMockup } from '../ui/PhoneMockup';
import { Reveal } from '../ui/Reveal';
import { SmsThread } from '../tazai/SmsThread';
import { englishThread, pidginThread } from '../../data/sms';
import { cn } from '../../utils/cn';

const capabilities = [
{ title: 'Registers offline', text: 'Works with no network at the site, then syncs on the road home.' },
{ title: 'Flags risk in seconds', text: 'Blood pressure, glucose and symptoms are scored the moment they’re entered.' },
{ title: 'Follows up by SMS', text: 'In English, Pidgin, Yoruba, Hausa or Igbo. Every reply updates the care plan.' }];


const threads = [
{ language: 'English', messages: englishThread, delay: 300, offset: '' },
{ language: 'Pidgin', messages: pidginThread, delay: 900, offset: 'sm:mt-16' }];


export function TazAiShowcase() {
  return (
    <section className="relative overflow-hidden bg-forest-dark py-20 text-white sm:py-24 lg:py-32" aria-labelledby="taz-title">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:items-center lg:gap-10">
        <Reveal className="min-w-0 lg:col-span-6">
          <p className="text-sm text-white">TAZ AI</p>
          <h2 id="taz-title" className="mt-4 text-balance text-3xl font-medium leading-[1.1] tracking-[-0.025em] sm:text-4xl">
            The tool that remembers every patient.
          </h2>
          <p className="mt-5 max-w-md text-[16px] leading-relaxed text-white/60">
            Most outreaches keep paper lists that get lost. TAZ AI keeps a living record for every person we meet, and
            follows up in the language they actually speak.
          </p>

          <ol className="mt-10 max-w-lg border-t border-white/10">
            {capabilities.map((c, i) =>
            <li key={c.title} className="flex gap-5 border-b border-white/10 py-4">
                <span className="font-mono text-xs leading-6 text-white/35">0{i + 1}</span>
                <span>
                  <span className="block text-[15px] font-medium">{c.title}</span>
                  <span className="mt-0.5 block text-sm leading-relaxed text-white/55">{c.text}</span>
                </span>
              </li>
            )}
          </ol>

          <Link href="/taz-ai" className="group mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-white">
            See how TAZ AI works
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </Reveal>

        <Reveal delay={0.1} className="min-w-0 lg:col-span-6">
          <div className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 sm:mx-0 sm:justify-center sm:overflow-visible sm:px-0 sm:pb-0">
            {threads.map((t) =>
            <figure key={t.language} className={cn('shrink-0 snap-center', t.offset)}>
                <PhoneMockup className="w-[248px] sm:w-[250px]">
                  <SmsThread language={t.language} messages={t.messages} startDelay={t.delay} />
                </PhoneMockup>
              </figure>
            )}
          </div>
          <p className="mt-8 text-center text-[13px] text-white/40">Example messages. Real patient conversations are private.</p>
        </Reveal>
      </div>
    </section>);

}
