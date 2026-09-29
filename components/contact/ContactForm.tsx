'use client';

import React from 'react';
import { ChoiceChips, TextAreaField, TextField } from '../forms/Field';
import { FormPanel, FormSection, SubmitButton } from '../forms/FormPanel';
import { FormSuccess } from '../forms/FormSuccess';
import { isEmail, useSimpleForm } from '../../hooks/useSimpleForm';

const subjects = ['General', 'Volunteering', 'Partnership', 'TAZ AI demo', 'Donations', 'Press'];

export function ContactForm() {
  const { values, errors, status, setField, handleSubmit, reset } = useSimpleForm(
    { cSubject: '', cName: '', cEmail: '', cPhone: '', cMessage: '' },
    (v) => ({
      cSubject: v.cSubject ? undefined : 'Please choose what this is about.',
      cName: v.cName.trim() ? undefined : 'Please tell us your name.',
      cEmail: isEmail(v.cEmail) ? undefined : 'Please enter a valid email.',
      cMessage: v.cMessage.trim().length >= 10 ? undefined : 'Please write a short message (at least 10 characters).'
    })
  );

  if (status === 'success') {
    return (
      <FormSuccess
        title="Message sent"
        text={`Thanks, ${values.cName.split(' ')[0]}. We usually reply within one working day.`}
        onReset={reset}
        resetLabel="Send another message" />);


  }

  return (
    <FormPanel
      label="Contact form"
      onSubmit={handleSubmit}
      footer={
      <>
          <p className="text-sm text-ink/50">We usually reply within one working day.</p>
          <SubmitButton busy={status === 'submitting'}>Send message</SubmitButton>
        </>
      }>

      <FormSection title="Send us a message">
        <div className="space-y-5">
          <ChoiceChips
            id="cSubject"
            name="cSubject"
            label="What’s it about?"
            options={subjects}
            value={values.cSubject}
            onChange={(v) => setField('cSubject', v)}
            error={errors.cSubject} />

          <div className="grid gap-5 sm:grid-cols-2">
            <TextField id="cName" label="Name" value={values.cName} onChange={(v) => setField('cName', v)} error={errors.cName} autoComplete="name" />
            <TextField id="cEmail" type="email" label="Email" value={values.cEmail} onChange={(v) => setField('cEmail', v)} error={errors.cEmail} autoComplete="email" placeholder="you@email.com" />
          </div>
          <TextField id="cPhone" type="tel" label="Phone" optional value={values.cPhone} onChange={(v) => setField('cPhone', v)} autoComplete="tel" placeholder="+234 800 000 0000" />
          <TextAreaField
            id="cMessage"
            label="Message"
            rows={4}
            value={values.cMessage}
            onChange={(v) => setField('cMessage', v)}
            error={errors.cMessage}
            placeholder="How can we help?" />

        </div>
      </FormSection>
    </FormPanel>);

}
