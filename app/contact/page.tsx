import { Suspense } from 'react';
import { ContactForm } from '@/components/contact/ContactForm';
import { site } from '@/data/site';

export default function Contact() {
  return (
    <section className="flex min-h-[calc(100vh-4rem)] items-center bg-white pb-16 pt-28 sm:pt-32">
      <div className="mx-auto grid w-full max-w-5xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div className="text-center lg:text-left">
          <p className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm text-ink/70 ring-1 ring-ink/10">
            <span className="h-1.5 w-1.5 rounded-full bg-leaf" aria-hidden="true" />
            Contact
          </p>
          <h1 className="mt-5 text-[40px] font-medium leading-[1.02] tracking-[-0.035em] text-ink sm:text-6xl">Let’s talk.</h1>
          <p className="mx-auto mt-4 max-w-sm text-[15px] leading-relaxed text-ink/60 sm:text-base lg:mx-0">
            Questions about volunteering, partnering or TAZ AI? Send us a message. We read every one.
          </p>
          <p className="mt-6 text-sm text-ink/50">
            Prefer WhatsApp?{' '}
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="font-medium text-leaf hover:text-forest">
              Chat with us
            </a>
          </p>
        </div>

        <Suspense fallback={null}>
          <ContactForm />
        </Suspense>
      </div>
    </section>);

}
