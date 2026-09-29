'use client';

import { motion } from 'framer-motion';
import { MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
import { ContactForm } from '@/components/contact/ContactForm';
import { MapPlaceholder } from '@/components/contact/MapPlaceholder';
import { EcgLine } from '@/components/ui/EcgLine';
import { Reveal } from '@/components/ui/Reveal';
import { SocialIcon, WhatsAppIcon } from '@/components/ui/SocialIcon';
import { site, socials } from '@/data/site';
import { EASE } from '@/utils/motion';

const details = [
{ icon: MailIcon, label: 'Email', value: site.email, href: `mailto:${site.email}` },
{ icon: PhoneIcon, label: 'Phone', value: site.phone, href: site.phoneHref },
{ icon: WhatsAppIcon, label: 'WhatsApp', value: site.whatsappDisplay, href: site.whatsapp, external: true },
{ icon: MapPinIcon, label: 'Address', value: site.address }];


export default function Contact() {
  return (
    <>
      <section className="relative overflow-hidden bg-mint pb-12 pt-32 lg:pb-16 lg:pt-40">
        <div className="adire pointer-events-none absolute inset-0 opacity-[0.07]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <motion.h1
            className="text-[36px] leading-[1.02] text-forest sm:text-5xl lg:text-[60px]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: EASE }}>

            Let’s talk.
          </motion.h1>
          <motion.p
            className="mt-5 max-w-xl text-lg leading-relaxed text-ink/75"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.1 }}>

            Questions about volunteering, partnerships or TAZ AI? Send a message, or reach us on WhatsApp for the fastest
            reply.
          </motion.p>
        </div>
        <EcgLine className="relative mt-10 h-12" />
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <Reveal>
            <h2 className="text-2xl text-forest">Send us a message</h2>
            <div className="mt-8">
              <ContactForm />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="space-y-8">
            <div>
              <h2 className="text-2xl text-forest">Reach us directly</h2>
              <ul className="mt-6 divide-y divide-forest/10 border-y border-forest/10">
                {details.map((d) => {
                  const Icon = d.icon;
                  const content =
                  <>
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-mint text-leaf">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm text-ink/55">{d.label}</span>
                        <span className="block break-words text-[16px] font-medium text-ink">{d.value}</span>
                      </span>
                    </>;

                  return (
                    <li key={d.label}>
                      {d.href ?
                      <a
                        href={d.href}
                        {...d.external ? { target: '_blank', rel: 'noopener noreferrer' } : {}}
                        className="flex items-center gap-4 py-4 transition-colors hover:text-forest">

                          {content}
                        </a> :

                      <div className="flex items-center gap-4 py-4">{content}</div>
                      }
                    </li>);

                })}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-medium text-ink/60">Follow our outreaches</h3>
              <ul className="mt-3 flex gap-2">
                {socials.map((s) =>
                <li key={s.key}>
                    <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-mint text-forest transition-[background-color,color,transform] duration-200 hover:-translate-y-0.5 hover:bg-forest hover:text-white">

                      <SocialIcon name={s.key} className="h-5 w-5" />
                    </a>
                  </li>
                )}
              </ul>
            </div>

            <MapPlaceholder />
          </Reveal>
        </div>
      </section>
    </>);

}
