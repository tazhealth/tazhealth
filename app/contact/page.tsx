import { ArrowUpRightIcon } from 'lucide-react';
import { ContactForm } from '@/components/contact/ContactForm';
import { SocialIcon } from '@/components/ui/SocialIcon';
import { site, socials } from '@/data/site';

const routes = [
{ label: 'WhatsApp', value: site.whatsappDisplay, note: 'Fastest reply, usually within a few hours', href: site.whatsapp, external: true },
{ label: 'Email', value: site.email, note: 'For partnerships, press and anything detailed', href: `mailto:${site.email}` },
{ label: 'Phone', value: site.phone, note: 'Weekdays, 9am to 5pm', href: site.phoneHref },
{ label: 'Office', value: site.address, note: 'We spend most days in the field' }];


export default function Contact() {
  return (
    <section className="bg-white pb-16 pt-28 sm:pb-24 sm:pt-32 lg:pb-32 lg:pt-40">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:gap-14 sm:px-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <p className="text-sm text-ink/50">Contact</p>
          <h1 className="mt-4 text-[34px] font-medium leading-[1.02] tracking-[-0.035em] text-ink sm:mt-6 sm:text-6xl">
            Talk to us.
          </h1>
          <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-ink/60 sm:mt-5 sm:text-lg">
            Questions about volunteering, partnerships or TAZ AI? Send a message, or reach us directly.
          </p>

          <ul className="mt-8 border-t border-ink/10 sm:mt-12">
            {routes.map((r) => {
              const body =
              <>
                  <span className="text-[13px] text-ink/45 sm:text-sm">{r.label}</span>
                  <span className="min-w-0">
                    <span className="flex items-center gap-1.5 break-words text-sm font-medium text-ink sm:text-[15px]">
                      {r.value}
                      {r.href &&
                    <ArrowUpRightIcon className="h-3.5 w-3.5 shrink-0 text-ink/30 transition-colors group-hover:text-forest" aria-hidden="true" />
                    }
                    </span>
                    <span className="mt-0.5 block text-[13px] text-ink/50 sm:text-sm">{r.note}</span>
                  </span>
                </>;

              const row = 'grid grid-cols-[5.5rem_1fr] gap-3 border-b border-ink/10 py-3.5 sm:grid-cols-[6.5rem_1fr] sm:gap-4 sm:py-4';
              return (
                <li key={r.label}>
                  {r.href ?
                  <a
                    href={r.href}
                    {...r.external ? { target: '_blank', rel: 'noopener noreferrer' } : {}}
                    className={`group ${row} transition-colors hover:bg-ink/[0.015]`}>

                      {body}
                    </a> :

                  <div className={row}>{body}</div>
                  }
                </li>);

            })}
          </ul>

          <div className="mt-6 flex items-center gap-3 sm:mt-8 sm:gap-4">
            <p className="text-sm text-ink/45">Follow along</p>
            <ul className="flex gap-1" aria-label="Social media">
              {socials.map((s) =>
              <li key={s.key}>
                  <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full text-ink/55 transition-colors hover:bg-ink/5 hover:text-ink">

                    <SocialIcon name={s.key} className="h-4 w-4" />
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </section>);

}
