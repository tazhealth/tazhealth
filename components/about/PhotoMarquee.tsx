import React from 'react';
import { gallery, images } from '../../data/images';
import { cn } from '../../utils/cn';

const photos = [
{ src: images.aboutHero, alt: 'TAZhealth volunteers carrying medical supplies along a village path', caption: 'Where it started · Ogbomosho' },
...gallery];


const tilts = ['-rotate-3', 'rotate-2', '-rotate-1', 'rotate-3', '-rotate-2', 'rotate-1'];
const lifts = ['translate-y-0', 'translate-y-5', '-translate-y-2', 'translate-y-3'];

export function PhotoMarquee() {
  const loop = [...photos, ...photos];

  return (
    <div
      className="group relative overflow-hidden py-8"
      aria-label="Photos from our outreaches">

      <ul className="marquee flex w-max gap-6 pr-6 [animation-duration:70s] group-hover:[animation-play-state:paused]">
        {loop.map((p, i) =>
        <li key={`${p.src}-${i}`} aria-hidden={i >= photos.length} className={lifts[i % lifts.length]}>
            <figure
            className={cn(
              'w-52 bg-white p-2.5 pb-3 shadow-card transition-transform duration-300 ease-smooth hover:rotate-0 hover:scale-105 sm:w-60',
              tilts[i % tilts.length]
            )}>

              <img src={p.src} alt={i >= photos.length ? '' : p.alt} loading="lazy" className="aspect-[4/5] w-full object-cover" />
              <figcaption className="mt-2.5 text-center text-[13px] text-ink/65">{p.caption}</figcaption>
            </figure>
          </li>
        )}
      </ul>
    </div>);

}
