'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRightIcon, XIcon } from 'lucide-react';
import { upcomingOutreaches } from '../../data/outreaches';
import { cn } from '../../utils/cn';

const STORAGE_KEY = 'tazhealth-banner-dismissed';

export function OutreachBanner({ collapsed }: {collapsed: boolean;}) {
  const next = upcomingOutreaches[0];
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!next) return;
    let dismissed: string | null = null;
    try {
      dismissed = window.localStorage.getItem(STORAGE_KEY);
    } catch {}
    setVisible(dismissed !== next.id);
  }, [next]);

  if (!next) return null;

  const dismiss = () => {
    setVisible(false);
    try {
      window.localStorage.setItem(STORAGE_KEY, next.id);
    } catch {}
  };

  const open = visible && !collapsed;

  return (
    <div
      className={cn(
        'grid bg-forest-dark text-white transition-[grid-template-rows] duration-300 ease-smooth',
        open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
      )}
      aria-hidden={!open}
      inert={!open}>

      <div className="overflow-hidden">
        <div className="relative mx-auto flex h-9 max-w-7xl items-center justify-center px-12 text-[13px]">
          <Link
            href={`/contact?topic=volunteer&outreach=${next.id}`}
            className="group flex min-w-0 items-center gap-2.5 text-white/85 hover:text-white">

            <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
              <span className="absolute inset-0 animate-ping rounded-full bg-sun opacity-60" />
              <span className="relative h-2 w-2 rounded-full bg-sun" />
            </span>
            <span className="truncate">
              <span className="hidden sm:inline">Next outreach: </span>
              <span className="font-medium text-white">
                {next.community}, {next.weekday} {next.day} {next.month}
              </span>
              <span className="hidden text-white/60 md:inline">
                {' '}· {next.focus} · {next.volunteersNeeded} volunteers needed
              </span>
            </span>
            <span className="flex shrink-0 items-center gap-1 font-medium text-sun">
              Volunteer
              <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </span>
          </Link>
          <button
            type="button"
            onClick={dismiss}
            aria-label="Dismiss announcement"
            className="absolute right-3 flex h-7 w-7 items-center justify-center rounded-full text-white/60 transition-colors hover:bg-white/10 hover:text-white sm:right-6">

            <XIcon className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>);

}
