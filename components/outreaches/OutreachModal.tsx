import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CalendarIcon, MapPinIcon, XIcon } from 'lucide-react';
import { ButtonLink } from '../ui/ButtonLink';
import type { Outreach } from '../../types/content';
import { EASE } from '../../utils/motion';

type OutreachModalProps = {
  outreach: Outreach | null;
  onClose: () => void;
};

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

  return (
    <AnimatePresence>
      {outreach &&
      <motion.div
        className="fixed inset-0 z-[90] flex items-end justify-center bg-ink/50 sm:items-center sm:p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}>
        
          <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="outreach-modal-title"
          className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-[2rem] bg-white sm:rounded-[2rem]"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ duration: 0.3, ease: EASE }}
          onClick={(e) => e.stopPropagation()}>
          
            <button
            type="button"
            onClick={onClose}
            aria-label="Close details"
            autoFocus
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white text-forest shadow-card">
            
              <XIcon className="h-5 w-5" />
            </button>
            <img src={outreach.image} alt="" className="aspect-[16/9] w-full object-cover" />
            <div className="p-6 sm:p-10">
              <div className="flex flex-wrap gap-4 text-sm text-ink/60">
                <span className="flex items-center gap-1.5">
                  <CalendarIcon className="h-4 w-4" aria-hidden="true" /> {outreach.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPinIcon className="h-4 w-4" aria-hidden="true" /> {outreach.state}
                </span>
              </div>
              <h2 id="outreach-modal-title" className="mt-3 text-3xl text-forest sm:text-4xl">
                {outreach.community}
              </h2>
              <p className="mt-3 text-lg leading-relaxed text-ink/75">{outreach.summary}</p>

              <dl className="mt-8 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-forest p-5 text-white">
                  <dt className="text-sm text-white/70">People reached</dt>
                  <dd className="mt-1 text-4xl font-medium text-sun">{outreach.peopleReached}</dd>
                </div>
                <div className="rounded-2xl bg-mint p-5">
                  <dt className="text-sm text-ink/60">Referrals made</dt>
                  <dd className="mt-1 text-4xl font-medium text-forest">{outreach.referrals}</dd>
                </div>
              </dl>

              <h3 className="mt-8 text-sm font-medium text-ink/60">Services provided</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {outreach.services.map((s) =>
              <li key={s} className="rounded-full bg-mint px-3.5 py-1.5 text-sm text-forest">
                    {s}
                  </li>
              )}
              </ul>

              <p className="mt-8 border-l-4 border-sun pl-4 text-lg font-medium text-forest">{outreach.highlight}</p>
              <p className="mt-5 text-[16px] leading-relaxed text-ink/75">{outreach.story}</p>

              <div className="mt-8">
                <ButtonLink to="/get-involved#volunteer" onClick={onClose}>
                  Volunteer at our next outreach
                </ButtonLink>
              </div>
            </div>
          </motion.div>
        </motion.div>
      }
    </AnimatePresence>);

}