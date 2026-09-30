'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';
import { Logo } from './Logo';
import { OutreachBanner } from './OutreachBanner';
import { ButtonLink } from '../ui/ButtonLink';
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

        <OutreachBanner collapsed={scrolled} />
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
            <ButtonLink href={site.chatRoom} external className="hidden h-11 px-5 sm:inline-flex">
              <WhatsAppIcon className="h-4 w-4" /> Join chat room
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
        <motion.aside
          key="panel"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-[70] flex flex-col overflow-y-auto bg-white lg:hidden"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25, ease: EASE }}>
          
            <div className="flex h-[72px] shrink-0 items-center justify-between px-5 sm:px-8">
              <Link href="/" aria-label="TAZhealth home" onClick={() => setOpen(false)}>
                <Logo />
              </Link>
              <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink ring-1 ring-ink/10 transition-colors hover:bg-ink/5">
              
                <XIcon className="h-5 w-5" />
              </button>
            </div>

            <nav aria-label="Mobile" className="px-5 pt-6 sm:px-8">
              <ul className="border-t border-ink/10">
                {navLinks.map((link, i) => {
                const isActive = isLinkActive(pathname, link.to);
                return (
                  <motion.li
                    key={link.to}
                    className="border-b border-ink/10"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: EASE, delay: 0.04 + i * 0.04 }}>
                    
                      <Link
                      href={link.to}
                      aria-current={isActive ? 'page' : undefined}
                      className={cn(
                        'flex items-center justify-between py-4 text-[28px] font-medium tracking-[-0.02em] transition-colors',
                        isActive ? 'text-forest' : 'text-ink hover:text-forest'
                      )}>
                      
                        {link.label}
                        {isActive && <span className="h-2 w-2 rounded-full bg-leaf" aria-hidden="true" />}
                      </Link>
                    </motion.li>);

              })}
              </ul>
            </nav>

            <div className="mt-auto px-5 pb-8 pt-10 sm:px-8">
              <div className="grid grid-cols-2 gap-2.5">
                <ButtonLink href={site.chatRoom} external className="w-full">
                  <WhatsAppIcon className="h-4 w-4" /> Join chat room
                </ButtonLink>
                <ButtonLink href={site.whatsapp} external variant="secondary" className="w-full">
                  <WhatsAppIcon className="h-4 w-4" /> WhatsApp
                </ButtonLink>
              </div>
              <p className="mt-5 flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-ink/50">
                <a href={`mailto:${site.email}`} className="hover:text-forest">{site.email}</a>
                <a href={site.phoneHref} className="hover:text-forest">{site.phone}</a>
              </p>
            </div>
          </motion.aside>
        }
      </AnimatePresence>
    </>);

}
