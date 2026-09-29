'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { TextAreaField, TextField } from '../forms/Field';
import { SubmitButton } from '../forms/FormPanel';
import { FormSuccess } from '../forms/FormSuccess';
import { upcomingOutreaches } from '../../data/outreaches';
import { isEmail, useSimpleForm } from '../../hooks/useSimpleForm';

export function ContactForm() {
  const params = useSearchParams();
  const topic = params.get('topic');
  const outreach = upcomingOutreaches.find((u) => u.id === params.get('outreach'));
  const prefill =
  topic === 'partner' ? 'Hi TAZhealth, I’d like to talk about partnering with you. Our organisation is ' :
  topic === 'volunteer' ?
  `Hi TAZhealth, I’d like to volunteer${outreach ? ` at the ${outreach.community} outreach on ${outreach.weekday} ${outreach.day} ${outreach.month}` : ''}. My background is ` :
  topic === 'donate' ? 'Hi TAZhealth, I’d like to support your work with a donation. ' :
  '';
  const { values, errors, status, setField, handleSubmit, reset } = useSimpleForm(
    { cName: '', cEmail: '', cMessage: prefill },
    (v) => ({
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
    <form onSubmit={handleSubmit} noValidate aria-label="Contact form" className="space-y-5">
      <TextField id="cName" label="Name *" value={values.cName} onChange={(v) => setField('cName', v)} error={errors.cName} autoComplete="name" placeholder="Your name" />
      <TextField id="cEmail" type="email" label="Email *" value={values.cEmail} onChange={(v) => setField('cEmail', v)} error={errors.cEmail} autoComplete="email" placeholder="Your email" />
      <TextAreaField id="cMessage" label="Message *" rows={5} value={values.cMessage} onChange={(v) => setField('cMessage', v)} error={errors.cMessage} placeholder="What’s on your mind?" />
      <SubmitButton busy={status === 'submitting'} className="h-12 w-full text-[15px]">
        Send message
      </SubmitButton>
    </form>);

}
