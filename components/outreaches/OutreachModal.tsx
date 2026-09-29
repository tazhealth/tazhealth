'use client';

import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MapPinIcon, XIcon } from 'lucide-react';
import { ButtonLink } from '../ui/ButtonLink';
import { team } from '../../data/people';
import { upcomingOutreaches } from '../../data/outreaches';
import type { Outreach } from '../../types/content';
import { EASE } from '../../utils/motion';

type OutreachModalProps = {
  outreach: Outreach | null;
  onClose: () => void;
};

function Label({ children }: {children: React.ReactNode;}) {
  return <p className="border-b border-ink/10 pb-2 text-sm font-medium text-ink/55">{children}</p>;
}

export function OutreachModal({ outreach, onClose }: OutreachModalProps) {
  useEffect(() => {
    if (!outreach) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [outreach, onClose]);

  const next = upcomingOutreaches[0];

  return (
    <AnimatePresence>
      {outreach &&
      <motion.div
        className="fixed inset-0 z-[90] flex items-end justify-center bg-ink/40 backdrop-blur-sm sm:items-center sm:p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}>

          <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="outreach-modal-title"
          className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-t-2xl bg-white shadow-card sm:rounded-2xl"
          initial={{ y: 32, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 32, opacity: 0 }}
          transition={{ duration: 0.3, ease: EASE }}
          onClick={(e) => e.stopPropagation()}>

            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-ink/10 bg-white/90 px-5 py-3 backdrop-blur sm:px-8">
              <p className="text-sm text-ink/50">Outreach log</p>
              <button
              type="button"
              onClick={onClose}
              aria-label="Close details"
              autoFocus
              className="flex h-8 w-8 items-center justify-center rounded-md text-ink/60 transition-colors hover:bg-ink/5 hover:text-ink">

                <XIcon className="h-4 w-4" />
              </button>
            </div>

            <div className="grid gap-8 p-5 sm:p-8 md:grid-cols-[280px_1fr] md:gap-10">
              {/* Left column */}
              <div className="md:space-y-6">
                <img src={outreach.image} alt="" className="aspect-[16/10] w-full rounded-xl object-cover md:aspect-square" />

                <div className="hidden md:block">
                  <Label>Hosted by</Label>
                  <p className="mt-3 flex items-center gap-2.5 text-[15px] font-medium text-ink">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-leaf text-[11px] font-semibold text-white">
                      T
                    </span>
                    TAZhealth
                  </p>
                </div>

                <div className="hidden md:block">
                  <Label>{outreach.peopleReached} people came</Label>
                  <div className="mt-3 flex -space-x-2" aria-hidden="true">
                    {team.map((m) =>
                  <img key={m.name} src={m.image} alt="" className="h-8 w-8 rounded-full object-cover ring-2 ring-white" />
                  )}
                    <span className="flex h-8 items-center rounded-full bg-ink/5 px-2.5 text-xs text-ink/60 ring-2 ring-white">
                      +{outreach.peopleReached - team.length}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right column */}
              <div className="min-w-0">
                <span className="rounded-md bg-ink/5 px-2 py-1 text-xs text-ink/60">Past outreach</span>
                <h2 id="outreach-modal-title" className="mt-3 text-3xl font-medium tracking-[-0.025em] text-ink sm:text-4xl">
                  {outreach.community}
                </h2>

                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-3.5">
                    <span className="w-11 shrink-0 overflow-hidden rounded-lg text-center ring-1 ring-ink/10">
                      <span className="block bg-ink/5 py-0.5 text-[9px] font-medium uppercase tracking-wide text-ink/55">
                        {outreach.date.slice(0, 3)}
                      </span>
                      <span className="block py-1 text-[13px] font-medium tabular-nums text-ink">
                        {outreach.date.split(' ')[1]}
                      </span>
                    </span>
                    <span>
                      <span className="block font-medium text-ink">{outreach.date}</span>
                      <span className="block text-sm text-ink/55">One-day free outreach</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-3.5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-ink/60 ring-1 ring-ink/10">
                      <MapPinIcon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block font-medium text-ink">{outreach.community}</span>
                      <span className="block text-sm text-ink/55">{outreach.state}, Nigeria</span>
                    </span>
                  </div>
                </div>

                {next &&
              <div className="mt-7 overflow-hidden rounded-xl ring-1 ring-ink/10">
                    <p className="bg-ink/[0.03] px-4 py-2.5 text-sm text-ink/55">This outreach has ended</p>
                    <div className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between">
                      <p className="text-[15px] text-ink/75">
                        Next up: <span className="font-medium text-ink">{next.community}</span>, {next.weekday} {next.day}{' '}
                        {next.month}
                        <span className="block text-sm text-ink/50">{next.volunteersNeeded} volunteers needed</span>
                      </p>
                      <ButtonLink to={`/get-involved?outreach=${next.id}#volunteer`} onClick={onClose} className="h-10 px-5">
                        Volunteer
                      </ButtonLink>
                    </div>
                  </div>
              }

                <div className="mt-9">
                  <Label>About</Label>
                  <p className="mt-4 text-[16px] leading-relaxed text-ink/80">{outreach.summary}</p>
                  <p className="mt-3 text-[16px] leading-relaxed text-ink/65">{outreach.story}</p>
                </div>

                <div className="mt-9">
                  <Label>Recap</Label>
                  <dl className="mt-4 grid grid-cols-2 border-b border-ink/10 pb-4">
                    <div>
                      <dt className="text-xs text-ink/45">People reached</dt>
                      <dd className="mt-1 text-2xl font-medium tabular-nums text-ink">{outreach.peopleReached}</dd>
                    </div>
                    <div className="border-l border-ink/10 pl-5">
                      <dt className="text-xs text-ink/45">Referrals</dt>
                      <dd className="mt-1 text-2xl font-medium tabular-nums text-ink">{outreach.referrals}</dd>
                    </div>
                  </dl>
                  <p className="mt-4 text-[15px] leading-relaxed text-ink/75">
                    <span className="font-medium text-ink">What stood out: </span>
                    {outreach.highlight}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {outreach.services.map((s) =>
                  <li key={s} className="rounded-md px-2.5 py-1 text-sm text-ink/65 ring-1 ring-ink/10">
                        {s}
                      </li>
                  )}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      }
    </AnimatePresence>);

}
