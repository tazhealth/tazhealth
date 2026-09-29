import React from 'react';
import { ExternalLinkIcon, MapPinIcon } from 'lucide-react';
import { site } from '../../data/site';

export function MapPlaceholder() {
  const query = encodeURIComponent(site.address);
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-mint">
      <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <path d="M-10 210 C 80 180, 140 240, 230 200 S 360 150, 420 170" stroke="#CFE6D0" strokeWidth="22" fill="none" />
        <g stroke="#FFFFFF" strokeWidth="8" fill="none" strokeLinecap="round">
          <path d="M-10 90 H 420" />
          <path d="M120 -10 V 310" />
          <path d="M280 -10 L 250 310" />
          <path d="M-10 250 L 420 130" />
        </g>
        <g stroke="#FFFFFF" strokeWidth="3" fill="none">
          <path d="M40 -10 V 310" />
          <path d="M200 -10 V 310" />
          <path d="M-10 40 H 420" />
          <path d="M-10 160 H 420" />
          <path d="M340 -10 V 310" />
        </g>
        <rect x="140" y="105" width="44" height="40" rx="6" fill="#DDEEDD" />
        <rect x="300" y="50" width="30" height="28" rx="6" fill="#DDEEDD" />
        <rect x="55" y="170" width="50" height="34" rx="6" fill="#DDEEDD" />
      </svg>
      <div className="absolute left-1/2 top-[42%] flex -translate-x-1/2 -translate-y-full flex-col items-center">
        <span className="rounded-full bg-white px-3 py-1.5 text-sm font-medium text-forest shadow-card">TAZhealth</span>
        <span className="mt-2 flex h-12 w-12 items-center justify-center rounded-full bg-leaf text-white ring-8 ring-leaf/20">
          <MapPinIcon className="h-6 w-6" aria-hidden="true" />
        </span>
      </div>
      <a
        href={`https://www.google.com/maps/search/?api=1&query=${query}`}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-[15px] font-medium text-forest transition-transform duration-200 hover:-translate-y-0.5">
        
        {site.address}
        <ExternalLinkIcon className="h-4 w-4" aria-hidden="true" />
      </a>
    </div>);

}