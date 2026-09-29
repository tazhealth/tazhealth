'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRightIcon, MenuIcon, XIcon } from 'lucide-react';
import { Logo } from './Logo';
import { ButtonLink } from '../ui/ButtonLink';
import { EcgLine } from '../ui/EcgLine';
import { WhatsAppIcon } from '../ui/SocialIcon';
import { navLinks, site } from '../../data/site';
import { cn } from '../../utils/cn';
import { EASE } from '../../utils/motion';

const DARK_HERO_ROUTES: string[] = [];

function isLinkActive(pathname: string, to: string) {
  return to === '/' ? pathname === '/' : pathname === to || pathname.startsWith(`${to}/`);
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const onDark = DARK_HERO_ROUTES.includes(pathname) && !scrolled;

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300 ease-smooth',
          scrolled ? 'bg-white/95 shadow-nav backdrop-blur' : 'bg-transparent'
        )}>

        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
          <Link href="/" aria-label="TAZhealth home" className="rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf">
            <Logo tone={onDark ? 'light' : 'default'} />
          </Link>

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = isLinkActive(pathname, link.to);
                return (
                  <li key={link.to}>
                    <Link
                      href={link.to}
                      className={cn(
                        'whitespace-nowrap rounded-full px-3.5 py-2 text-[15px] font-medium transition-colors duration-200',
                        onDark
                          ? isActive
                            ? 'bg-white/15 text-white'
                            : 'text-white/80 hover:text-white'
                          : isActive
                          ? 'bg-mint text-forest'
                          : 'text-ink/75 hover:text-forest'
                      )}>

                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <ButtonLink to="/get-involved#partner" className="hidden h-11 px-5 sm:inline-flex">
              Partner with us
            </ButtonLink>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className={cn(
                'inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-200 lg:hidden',
                onDark ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-mint text-forest hover:bg-forest hover:text-white'
              )}>

              <MenuIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open &&
        <>
            <motion.div
            key="backdrop"
            className="fixed inset-0 z-[60] bg-ink/40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen(false)} />

            <motion.aside
            key="panel"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="fixed inset-y-0 right-0 z-[70] flex w-[88%] max-w-sm flex-col overflow-y-auto bg-white lg:hidden"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: EASE }}>

              <div className="flex h-[72px] items-center justify-between px-5">
                <Logo />
                <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-mint text-forest">

                  <XIcon className="h-5 w-5" />
                </button>
              </div>
              <nav aria-label="Mobile" className="px-3 pt-2">
                <ul>
                  {navLinks.map((link, i) => {
                    const isActive = isLinkActive(pathname, link.to);
                    return (
                      <motion.li
                        key={link.to}
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, ease: EASE, delay: 0.05 + i * 0.04 }}>

                        <Link
                          href={link.to}
                          className={cn(
                            'flex items-center justify-between rounded-2xl px-4 py-4 text-xl font-medium',
                            isActive ? 'bg-mint text-forest' : 'text-ink'
                          )}>

                          {link.label}
                          <ArrowRightIcon className="h-5 w-5 text-leaf" />
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>
              <div className="mt-auto space-y-3 px-5 pb-8 pt-6">
                <EcgLine className="mb-4 h-8" />
                <ButtonLink to="/get-involved#partner" size="lg" className="w-full">
                  Partner with us
                </ButtonLink>
                <ButtonLink href={site.whatsapp} external variant="secondary" size="lg" className="w-full">
                  <WhatsAppIcon className="h-5 w-5" /> Chat on WhatsApp
                </ButtonLink>
              </div>
            </motion.aside>
          </>
        }
      </AnimatePresence>
    </>);

}
