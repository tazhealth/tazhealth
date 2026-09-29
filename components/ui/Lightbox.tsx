'use client';

import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from 'lucide-react';
import { EASE } from '../../utils/motion';

type LightboxImage = {src: string;alt: string;caption?: string;};

type LightboxProps = {
  images: LightboxImage[];
  index: number | null;
  onClose: () => void;
  onChange: (index: number) => void;
};

export function Lightbox({ images, index, onClose, onChange }: LightboxProps) {
  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onChange((index + 1) % images.length);
      if (e.key === 'ArrowLeft') onChange((index - 1 + images.length) % images.length);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [index, images.length, onClose, onChange]);

  const current = index !== null ? images[index] : null;

  return (
    <AnimatePresence>
      {current && index !== null &&
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label="Photo viewer"
        className="fixed inset-0 z-[90] flex flex-col bg-ink/95 p-4 sm:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}>
        
          <div className="flex items-center justify-between text-white">
            <span className="text-sm text-white/70">
              {index + 1} / {images.length}
            </span>
            <button
            type="button"
            onClick={onClose}
            aria-label="Close photo viewer"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 hover:bg-white/20">
            
              <XIcon className="h-5 w-5" />
            </button>
          </div>
          <div className="relative flex flex-1 items-center justify-center py-4" onClick={(e) => e.stopPropagation()}>
            <motion.figure
            key={current.src}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="flex max-h-full flex-col items-center">
            
              <img src={current.src} alt={current.alt} className="max-h-[72vh] w-auto rounded-2xl object-contain" />
              {current.caption && <figcaption className="mt-4 text-center text-sm text-white/80">{current.caption}</figcaption>}
            </motion.figure>
            <button
            type="button"
            aria-label="Previous photo"
            onClick={() => onChange((index - 1 + images.length) % images.length)}
            className="absolute left-0 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:left-2">
            
              <ChevronLeftIcon className="h-6 w-6" />
            </button>
            <button
            type="button"
            aria-label="Next photo"
            onClick={() => onChange((index + 1) % images.length)}
            className="absolute right-0 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:right-2">
            
              <ChevronRightIcon className="h-6 w-6" />
            </button>
          </div>
        </motion.div>
      }
    </AnimatePresence>);

}