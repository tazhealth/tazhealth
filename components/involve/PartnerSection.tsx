import React from 'react';
import { Loader2Icon } from 'lucide-react';
import { SelectField, TextAreaField, TextField } from '../forms/Field';
import { FormSuccess } from '../forms/FormSuccess';
import { ButtonLink } from '../ui/ButtonLink';
import { RevealGroup, RevealItem } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import { partnerTypes } from '../../data/involve';
import { isEmail, useSimpleForm } from '../../hooks/useSimpleForm';

const interests = ['Sponsor an outreach', 'Bring TAZ AI to our programme', 'Receive referrals', 'Co-host an outreach', 'Something else'];

export function PartnerSection() {
  const { values, errors, status, setField, handleSubmit, reset } = useSimpleForm(
    { ptOrg: '', ptName: '', ptEmail: '', ptPhone: '', ptType: '', ptInterest: '', ptMessage: '' },
    (v) => ({
      ptOrg: v.ptOrg.trim() ? undefined : 'Please add your organisation.',
      ptName: v.ptName.trim() ? undefined : 'Please tell us your name.',
      ptEmail: isEmail(v.ptEmail) ? undefined : 'Please enter a valid email.',
      ptType: v.ptType ? undefined : 'Please choose your organisation type.'
    })
  );

  return (
    <section id="partner" className="relative scroll-mt-20 overflow-hidden bg-mint py-20 lg:py-28" aria-labelledby="partner-title">
      <div className="adire pointer-events-none absolute inset-0 opacity-[0.06]" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeading
            id="partner-title"
            title="Partner with us."
            intro="Together we can make continuous care the standard for every outreach in Nigeria." />
          
          <RevealGroup as="ul" className="mt-10 space-y-3">
            {partnerTypes.map((p) => {
              const Icon = p.icon;
              return (
                <RevealItem as="li" key={p.title} className="flex gap-4 rounded-3xl bg-white p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-forest text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-lg text-forest">{p.title}</h3>
                    <p className="mt-0.5 text-[15px] text-ink/70">{p.text}</p>
                  </div>
                </RevealItem>);

            })}
          </RevealGroup>
        </div>

        <div>
          {status === 'success' ?
          <FormSuccess
            title="Thank you for reaching out"
            text="Our partnerships lead will get back to you within two working days."
            onReset={reset}
            resetLabel="Send another enquiry" /> :


          <form onSubmit={handleSubmit} noValidate className="rounded-[2rem] bg-white p-6 sm:p-8">
              <h3 className="text-2xl text-forest">Partnership enquiry</h3>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <TextField id="ptOrg" label="Organisation" className="sm:col-span-2" value={values.ptOrg} onChange={(v) => setField('ptOrg', v)} error={errors.ptOrg} autoComplete="organization" />
                <TextField id="ptName" label="Your name" value={values.ptName} onChange={(v) => setField('ptName', v)} error={errors.ptName} autoComplete="name" />
                <TextField id="ptEmail" type="email" label="Email" value={values.ptEmail} onChange={(v) => setField('ptEmail', v)} error={errors.ptEmail} autoComplete="email" />
                <SelectField id="ptType" label="Organisation type" value={values.ptType} onChange={(v) => setField('ptType', v)} options={partnerTypes.map((p) => p.title)} error={errors.ptType} />
                <SelectField id="ptInterest" label="I’m interested in" optional value={values.ptInterest} onChange={(v) => setField('ptInterest', v)} options={interests} />
                <TextField id="ptPhone" type="tel" label="Phone" optional className="sm:col-span-2" value={values.ptPhone} onChange={(v) => setField('ptPhone', v)} autoComplete="tel" />
                <TextAreaField id="ptMessage" label="Message" optional rows={4} className="sm:col-span-2" value={values.ptMessage} onChange={(v) => setField('ptMessage', v)} placeholder="Tell us what you have in mind" />
              </div>
              <ButtonLink type="submit" size="lg" className="mt-6 w-full sm:w-auto" disabled={status === 'submitting'}>
                {status === 'submitting' ?
              <>
                    <Loader2Icon className="h-5 w-5 animate-spin" aria-hidden="true" /> Sending…
                  </> :

              'Send enquiry'
              }
              </ButtonLink>
            </form>
          }
        </div>
      </div>
    </section>);

}