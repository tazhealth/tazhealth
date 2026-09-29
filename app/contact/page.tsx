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
    <section className="bg-white pb-24 pt-32 lg:pb-32 lg:pt-40">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <p className="text-sm text-ink/50">Contact</p>
          <h1 className="mt-6 text-[40px] font-medium leading-[1.02] tracking-[-0.035em] text-ink sm:text-6xl">
            Talk to us.
          </h1>
          <p className="mt-5 max-w-sm text-lg leading-relaxed text-ink/60">
            Questions about volunteering, partnerships or TAZ AI? Send a message, or reach us directly.
          </p>

          <ul className="mt-12 border-t border-ink/10">
            {routes.map((r) => {
              const body =
              <>
                  <span className="text-sm text-ink/45">{r.label}</span>
                  <span className="min-w-0">
                    <span className="flex items-center gap-1.5 break-words text-[15px] font-medium text-ink">
                      {r.value}
                      {r.href &&
                    <ArrowUpRightIcon className="h-3.5 w-3.5 shrink-0 text-ink/30 transition-colors group-hover:text-forest" aria-hidden="true" />
                    }
                    </span>
                    <span className="mt-0.5 block text-sm text-ink/50">{r.note}</span>
                  </span>
                </>;

              const row = 'grid grid-cols-[6.5rem_1fr] gap-4 border-b border-ink/10 py-4';
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

          <div className="mt-8 flex items-center gap-4">
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
