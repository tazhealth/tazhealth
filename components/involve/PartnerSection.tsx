'use client';

import React from 'react';
import { ChoiceChips, TextAreaField, TextField } from '../forms/Field';
import { FormPanel, FormSection, SubmitButton } from '../forms/FormPanel';
import { FormSuccess } from '../forms/FormSuccess';
import { SideIntro } from './SideIntro';
import { partnerTypes } from '../../data/involve';
import { isEmail, useSimpleForm } from '../../hooks/useSimpleForm';

const interests = ['Sponsor an outreach', 'Co-host an outreach', 'Bring TAZ AI to our programme', 'Receive referrals', 'Something else'];

export function PartnerSection() {
  const { values, errors, status, setField, handleSubmit, reset } = useSimpleForm(
    { ptOrg: '', ptType: '', ptInterest: '', ptMessage: '', ptName: '', ptEmail: '', ptPhone: '' },
    (v) => ({
      ptOrg: v.ptOrg.trim() ? undefined : 'Please add your organisation.',
      ptType: v.ptType ? undefined : 'Please choose your organisation type.',
      ptName: v.ptName.trim() ? undefined : 'Please tell us your name.',
      ptEmail: isEmail(v.ptEmail) ? undefined : 'Please enter a valid email.'
    })
  );

  return (
    <section id="partner" className="scroll-mt-20 border-t border-ink/10 bg-white py-24 lg:py-32" aria-labelledby="partner-title">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <SideIntro
            index="02"
            id="partner-title"
            title="Partner"
            text="Together we can make follow-up the standard for every outreach in Nigeria.">

            <div className="mt-10">
              <p className="text-sm text-ink/45">Who we work with</p>
              <ul className="mt-3 border-t border-ink/10">
                {partnerTypes.map((p) =>
                <li key={p.title} className="border-b border-ink/10 py-3.5">
                    <p className="text-[15px] font-medium text-ink">{p.title}</p>
                    <p className="mt-0.5 text-sm text-ink/55">{p.text}</p>
                  </li>
                )}
              </ul>
            </div>
          </SideIntro>
        </div>

        <div className="lg:col-span-8">
          {status === 'success' ?
          <FormSuccess
            title="Thanks for reaching out"
            text="Our partnerships lead will get back to you within two working days."
            onReset={reset}
            resetLabel="Send another enquiry" /> :


          <FormPanel
            label="Partnership enquiry"
            onSubmit={handleSubmit}
            footer={
            <>
                  <p className="text-sm text-ink/50">We reply within two working days.</p>
                  <SubmitButton busy={status === 'submitting'}>Send enquiry</SubmitButton>
                </>
            }>

              <FormSection title="Your organisation">
                <div className="space-y-5">
                  <TextField id="ptOrg" label="Organisation name" value={values.ptOrg} onChange={(v) => setField('ptOrg', v)} error={errors.ptOrg} autoComplete="organization" placeholder="e.g. Oyo Care Network" />
                  <ChoiceChips
                  id="ptType"
                  name="ptType"
                  label="Type of organisation"
                  options={partnerTypes.map((p) => p.title)}
                  value={values.ptType}
                  onChange={(v) => setField('ptType', v)}
                  error={errors.ptType} />

                </div>
              </FormSection>

              <FormSection title="What you have in mind">
                <div className="space-y-5">
                  <ChoiceChips
                  id="ptInterest"
                  name="ptInterest"
                  label="I’m interested in"
                  optional
                  options={interests}
                  value={values.ptInterest}
                  onChange={(v) => setField('ptInterest', v)} />

                  <TextAreaField
                  id="ptMessage"
                  label="Tell us more"
                  optional
                  rows={4}
                  value={values.ptMessage}
                  onChange={(v) => setField('ptMessage', v)}
                  placeholder="Communities you work in, timelines, anything useful." />

                </div>
              </FormSection>

              <FormSection title="Contact person">
                <div className="grid gap-5 sm:grid-cols-2">
                  <TextField id="ptName" label="Your name" value={values.ptName} onChange={(v) => setField('ptName', v)} error={errors.ptName} autoComplete="name" />
                  <TextField id="ptEmail" type="email" label="Work email" value={values.ptEmail} onChange={(v) => setField('ptEmail', v)} error={errors.ptEmail} autoComplete="email" placeholder="you@organisation.org" />
                  <TextField id="ptPhone" type="tel" label="Phone" optional className="sm:col-span-2" value={values.ptPhone} onChange={(v) => setField('ptPhone', v)} autoComplete="tel" />
                </div>
              </FormSection>
            </FormPanel>
          }
        </div>
      </div>
    </section>);

}
