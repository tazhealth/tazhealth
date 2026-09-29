import React from 'react';
import { HeartIcon } from 'lucide-react';
import { partners } from '../../data/site';

export function PartnersStrip() {
  const loop = [...partners, ...partners];
  return (
    <section className="border-y border-forest/10 bg-white py-12" aria-labelledby="partners-title">
      <h2 id="partners-title" className="px-5 text-center text-[15px] font-medium text-ink/60">
        Supported by partners who believe care should continue
      </h2>
      <div className="mt-8 overflow-hidden">
        <ul className="marquee flex w-max items-center gap-12 pr-12">
          {loop.map((name, i) =>
          <li
            key={`${name}-${i}`}
            aria-hidden={i >= partners.length}
            className="flex items-center gap-2 whitespace-nowrap text-lg font-medium text-ink/45">
            
              <HeartIcon className="h-5 w-5 text-leaf/60" aria-hidden="true" />
              {name}
            </li>
          )}
        </ul>
      </div>
    </section>);

}