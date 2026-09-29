'use client';

import { motion } from 'framer-motion';
import { privacySections, privacyUpdated } from '@/data/privacy';
import { EASE } from '@/utils/motion';

export default function Privacy() {
  return (
    <>
      <section className="bg-mint pb-12 pt-28 lg:pb-16 lg:pt-36">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.h1
            className="text-[32px] leading-[1.05] text-forest sm:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}>

            Privacy Policy
          </motion.h1>
          <p className="mt-4 text-[16px] text-ink/60">Last updated {privacyUpdated}</p>
        </div>
        <div className="ankara-band mt-10 h-4 opacity-40" aria-hidden="true" />
      </section>

      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[240px_1fr] lg:gap-20">
          <nav aria-label="On this page" className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="text-sm font-medium text-ink/55">On this page</h2>
            <ul className="mt-4 flex flex-wrap gap-2 lg:flex-col lg:gap-0.5">
              {privacySections.map((s) =>
              <li key={s.id}>
                  <a
                  href={`#${s.id}`}
                  className="block rounded-full bg-mint px-3 py-1.5 text-sm text-forest transition-colors hover:bg-forest hover:text-white lg:rounded-lg lg:bg-transparent lg:px-3 lg:py-2 lg:text-[15px] lg:text-ink/70 lg:hover:bg-mint lg:hover:text-forest">

                    {s.title}
                  </a>
                </li>
              )}
            </ul>
          </nav>

          <article className="max-w-2xl">
            {privacySections.map((s) =>
            <section key={s.id} id={s.id} className="scroll-mt-28 border-b border-forest/10 py-8 first:pt-0 last:border-b-0">
                <h2 className="text-xl text-forest sm:text-[22px]">{s.title}</h2>
                <div className="mt-4 space-y-4">
                  {s.body.map((p, i) =>
                <p key={i} className="text-[17px] leading-[1.75] text-ink/80">
                      {p}
                    </p>
                )}
                </div>
              </section>
            )}
          </article>
        </div>
      </section>
    </>);

}
