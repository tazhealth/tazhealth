'use client';

import React, { useRef, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import type { MotionValue } from 'framer-motion';
import { ClipboardListIcon, HeartHandshakeIcon, MegaphoneIcon, PillIcon, StethoscopeIcon } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { images } from '../../data/images';
import { cn } from '../../utils/cn';
import { EASE } from '../../utils/motion';

type Step = {
  when: string;
  title: string;
  text: string;
  tags: string[];
  icon: LucideIcon;
  image: string;
  alt: string;
};

const steps: Step[] = [
{
  when: 'Morning',
  title: 'Registration and screening',
  text: 'Blood pressure, blood sugar, malaria and BMI for every adult.',
  tags: ['Blood pressure', 'Blood sugar', 'Malaria', 'BMI'],
  icon: ClipboardListIcon,
  image: images.phone,
  alt: 'Volunteer registering a patient at an outreach'
},
{
  when: 'Late morning',
  title: 'Time with a doctor',
  text: 'A proper one-to-one with a volunteer doctor or nurse.',
  tags: ['One-to-one', 'Doctors', 'Nurses'],
  icon: StethoscopeIcon,
  image: images.consult,
  alt: 'Free medical consultation at a TAZhealth outreach'
},
{
  when: 'Midday',
  title: 'Medicine and referrals',
  text: 'Free essential drugs, and a referral for anyone who needs more care.',
  tags: ['Free drugs', 'Referrals'],
  icon: PillIcon,
  image: images.pharmacy,
  alt: 'Volunteers testing and treating community members'
},
{
  when: 'Afternoon',
  title: 'A health talk',
  text: 'Plain talk on diet, blood pressure, and mother and child health.',
  tags: ['Diet', 'Blood pressure', 'Mother & child'],
  icon: MegaphoneIcon,
  image: images.education,
  alt: 'Volunteer giving a health talk to a seated crowd'
},
{
  when: 'The weeks after',
  title: 'Follow-up',
  text: 'SMS check-ins and calls start the next morning, until care actually happens.',
  tags: ['SMS check-ins', 'Phone calls'],
  icon: HeartHandshakeIcon,
  image: images.volunteers,
  alt: 'TAZhealth volunteer team after an outreach'
}];


/** Fills the line under the active step as the reader scrolls through it. */
function StepProgress({ progress, index }: {progress: MotionValue<number>;index: number;}) {
  const width = useTransform(progress, (v) => {
    const local = v * steps.length - index;
    return `${Math.min(Math.max(local, 0), 1) * 100}%`;
  });
  return <motion.span className="absolute bottom-0 left-0 h-0.5 bg-leaf" style={{ width }} aria-hidden="true" />;
}

export function DayTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    setActive(Math.min(steps.length - 1, Math.max(0, Math.floor(v * steps.length))));
  });

  const jumpTo = (i: number) => {
    const el = ref.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    const scrollable = el.offsetHeight - window.innerHeight;
    window.scrollTo({ top: top + scrollable * ((i + 0.15) / steps.length), behavior: 'smooth' });
  };

  const step = steps[active];

  return (
    <>
    <h2 className="text-balance text-[28px] font-semibold leading-[1.1] tracking-[-0.025em] text-ink sm:text-4xl lg:hidden">
      How a day runs
    </h2>
    <div ref={ref} className="relative" style={{ height: `${steps.length * 60}svh` }}>
      <div className="sticky top-[72px] flex h-[calc(100svh-72px)] items-center">
        <div className="grid w-full gap-5 lg:grid-cols-12 lg:items-center lg:gap-12">
          {/* Photo with floating card */}
          <div className="relative overflow-hidden rounded-3xl bg-ink lg:order-last lg:col-span-7">
            <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[5/4]">
              <AnimatePresence initial={false}>
                <motion.img
                  key={step.image}
                  src={step.image}
                  alt={step.alt}
                  className="absolute inset-0 h-full w-full object-cover"
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: EASE }} />

              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/10" aria-hidden="true" />

              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={step.title}
                  className="absolute inset-x-3 bottom-3 rounded-xl bg-black/45 px-3.5 py-3 text-white sm:rounded-2xl sm:px-4 sm:py-4 ring-1 ring-white/15 backdrop-blur-md sm:inset-x-6 sm:bottom-6 sm:p-5 lg:inset-x-8 lg:bottom-8"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4, ease: EASE }}>

                  <p className="text-[11px] text-white/60 sm:text-xs">{step.when}</p>
                  <p className="mt-0.5 text-base font-semibold tracking-[-0.01em] sm:mt-1 sm:text-xl">{step.title}</p>
                  <p className="mt-1 text-[13px] leading-snug text-white/80 sm:hidden">{step.text}</p>
                  <ul className="mt-3 hidden flex-wrap gap-1.5 sm:flex">
                    {step.tags.map((t) =>
                    <li
                      key={t}
                      className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2 py-0.5 text-[11px] text-white/90 sm:px-2.5 sm:py-1 sm:text-xs ring-1 ring-white/15">

                        <span className="h-1.5 w-1.5 rounded-full bg-[#4ade80]" aria-hidden="true" />
                        {t}
                      </li>
                    )}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Steps */}
          <div className="lg:col-span-5">
          <h2 className="mb-8 hidden text-balance text-4xl font-semibold leading-[1.1] tracking-[-0.025em] text-ink lg:block">
            How a day runs
          </h2>
          <ul aria-label="Steps of an outreach day">
            {steps.map((s, i) => {
              const isActive = i === active;
              const Icon = s.icon;
              return (
                <li key={s.title} className="relative border-b border-ink/10 first:border-t">
                  <button
                    type="button"
                    onClick={() => jumpTo(i)}
                    aria-current={isActive ? 'step' : undefined}
                    className="group flex w-full items-start gap-3 py-3 text-left focus-visible:outline-none sm:gap-3.5 sm:py-5">

                    <Icon
                      className={cn(
                        'mt-0.5 h-[18px] w-[18px] shrink-0 transition-colors duration-300',
                        isActive ? 'text-leaf' : 'text-ink/35 group-hover:text-ink/60'
                      )}
                      aria-hidden="true" />

                    <span className="min-w-0 flex-1">
                      <span
                        className={cn(
                          'block text-[16px] font-medium tracking-[-0.01em] transition-colors duration-300 sm:text-lg',
                          isActive ? 'text-ink' : 'text-ink/50 group-hover:text-ink/75'
                        )}>

                        {s.title}
                      </span>
                      <motion.span
                        initial={false}
                        animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0 }}
                        transition={{ duration: 0.35, ease: EASE }}
                        className="hidden overflow-hidden sm:block">

                        <span className="block pt-1.5 text-sm leading-relaxed text-ink/60 sm:text-[15px]">
                          <span className="font-medium text-leaf">{s.when}. </span>
                          {s.text}
                        </span>
                      </motion.span>
                    </span>
                  </button>
                  {isActive && <StepProgress progress={scrollYProgress} index={i} />}
                </li>);

            })}
          </ul>
          </div>
        </div>
      </div>
    </div>
    </>);

}
