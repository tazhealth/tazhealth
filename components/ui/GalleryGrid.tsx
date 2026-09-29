'use client';

import React, { useState } from 'react';
import { ExpandIcon } from 'lucide-react';
import { Lightbox } from './Lightbox';
import { RevealGroup, RevealItem } from './Reveal';

type GalleryImage = {src: string;alt: string;caption: string;};

export function GalleryGrid({ images }: {images: GalleryImage[];}) {
  const [index, setIndex] = useState<number | null>(null);

  return (
    <>
      <RevealGroup className="columns-2 gap-3 sm:gap-4 lg:columns-3" stagger={0.05}>
        {images.map((img, i) =>
        <RevealItem key={img.src + i} className="mb-3 break-inside-avoid sm:mb-4">
            <button
            type="button"
            onClick={() => setIndex(i)}
            className="group relative block w-full overflow-hidden rounded-2xl bg-mint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf focus-visible:ring-offset-2 sm:rounded-3xl"
            aria-label={`Open photo: ${img.caption}`}>
            
              <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className={`w-full object-cover transition-transform duration-300 ease-smooth group-hover:scale-105 ${
              i % 3 === 0 ? 'aspect-[4/5]' : i % 3 === 1 ? 'aspect-square' : 'aspect-[4/3]'}`
              } />
            
              <span className="absolute inset-x-2 bottom-2 flex items-center justify-between rounded-xl bg-white/95 px-3 py-2 text-left text-xs font-medium text-forest opacity-100 transition-opacity duration-200 sm:inset-x-3 sm:bottom-3 sm:text-sm lg:opacity-0 lg:group-hover:opacity-100">
                {img.caption}
                <ExpandIcon className="ml-2 h-4 w-4 shrink-0" aria-hidden="true" />
              </span>
            </button>
          </RevealItem>
        )}
      </RevealGroup>
      <Lightbox images={images} index={index} onClose={() => setIndex(null)} onChange={setIndex} />
    </>);

}