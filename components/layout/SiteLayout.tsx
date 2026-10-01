'use client';

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { MotionConfig } from 'framer-motion';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { VolunteerCta } from './VolunteerCta';
import { ChatWidget } from './ChatWidget';

export function SiteLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Stop iOS Safari's auto-zoom when a form field is focused. iOS still allows pinch-zoom with
  // maximum-scale set, so this is limited to Apple touch devices to keep pinch-zoom on Android.
  useEffect(() => {
    const ios = /iPad|iPhone|iPod/.test(navigator.userAgent) || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;
    const meta = document.querySelector<HTMLMetaElement>('meta[name="viewport"]');
    if (ios && meta && !meta.content.includes('maximum-scale')) meta.content += ', maximum-scale=1';
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const t = window.setTimeout(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 80);
      return () => window.clearTimeout(t);
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  return (
    <MotionConfig reducedMotion="user">
      <div className="flex min-h-screen w-full flex-col bg-white">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-forest focus:px-4 focus:py-2 focus:text-white">

          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        {pathname !== '/contact' && <VolunteerCta />}
        <div className="border-t border-white/10 bg-black">
          <Footer />
        </div>
        <ChatWidget />
      </div>
    </MotionConfig>
  );
}
