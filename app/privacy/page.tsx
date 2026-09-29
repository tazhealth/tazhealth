import type { Metadata } from 'next';
import { privacySections, privacyUpdated } from '@/data/privacy';

export const metadata: Metadata = {
  title: 'Privacy Policy · TAZhealth',
  description: 'How TAZhealth collects, uses and protects your information.'
};

export default function Privacy() {
  return (
    <article className="bg-white pb-20 pt-36 sm:pb-28 sm:pt-40">
      <div className="mx-auto max-w-2xl px-5 sm:px-8">
        <h1 className="text-[32px] leading-tight text-ink sm:text-5xl">Privacy Policy</h1>
        <p className="mt-3 text-sm text-ink/55">Last updated {privacyUpdated}</p>

        <div className="mt-10 space-y-10 sm:mt-14">
          {privacySections.map((s) =>
          <section key={s.id} id={s.id} className="scroll-mt-28">
              <h2 className="text-lg text-ink sm:text-xl">{s.title}</h2>
              <div className="mt-3 space-y-3">
                {s.body.map((para, i) =>
              <p key={i} className="text-[15px] leading-[1.75] text-ink/70 sm:text-base">
                    {para}
                  </p>
              )}
              </div>
            </section>
          )}
        </div>
      </div>
    </article>);

}
