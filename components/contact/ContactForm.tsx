'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { TextAreaField, TextField } from '../forms/Field';
import { SubmitButton } from '../forms/FormPanel';
import { FormSuccess } from '../forms/FormSuccess';
import { upcomingOutreaches } from '../../data/outreaches';
import { site } from '../../data/site';
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
  const { values, errors, status, submitError, setField, handleSubmit, reset } = useSimpleForm(
    { cName: '', cEmail: '', cMessage: prefill, website: '' },
    (v) => ({
      cName: v.cName.trim() ? undefined : 'Please tell us your name.',
      cEmail: isEmail(v.cEmail) ? undefined : 'Please enter a valid email.',
      cMessage: v.cMessage.trim().length >= 10 ? undefined : 'Please write a short message (at least 10 characters).'
    }),
    async (v) => {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: v.cName,
          email: v.cEmail,
          message: v.cMessage,
          topic: topic ?? undefined,
          page: window.location.pathname + window.location.search,
          website: v.website
        })
      }).catch(() => null);
      if (!res?.ok) {
        const data = await res?.json().catch(() => null);
        throw new Error(data?.error ?? `We couldn’t send your message. Please try again or email us at ${site.email}.`);
      }
    }
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
      {/* Honeypot for spam bots */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={(e) => setField('website', e.target.value)} />
      </div>
      {submitError &&
      <p role="alert" className="rounded-lg bg-risk-high/10 px-3.5 py-2.5 text-sm text-risk-high">
          {submitError}
        </p>
      }
      <SubmitButton busy={status === 'submitting'} className="h-12 w-full text-[15px]">
        Send message
      </SubmitButton>
    </form>);

}
