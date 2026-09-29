import React from 'react';
import { Loader2Icon } from 'lucide-react';
import { SelectField, TextAreaField, TextField } from '../forms/Field';
import { FormSuccess } from '../forms/FormSuccess';
import { ButtonLink } from '../ui/ButtonLink';
import { isEmail, useSimpleForm } from '../../hooks/useSimpleForm';

const subjects = ['General enquiry', 'Volunteering', 'Partnership', 'TAZ AI demo', 'Donations', 'Media & press'];

export function ContactForm() {
  const { values, errors, status, setField, handleSubmit, reset } = useSimpleForm(
    { cName: '', cEmail: '', cPhone: '', cSubject: '', cMessage: '' },
    (v) => ({
      cName: v.cName.trim() ? undefined : 'Please tell us your name.',
      cEmail: isEmail(v.cEmail) ? undefined : 'Please enter a valid email.',
      cSubject: v.cSubject ? undefined : 'Please choose a subject.',
      cMessage: v.cMessage.trim().length >= 10 ? undefined : 'Please write a short message (at least 10 characters).'
    })
  );

  if (status === 'success') {
    return (
      <FormSuccess
        title="Message sent"
        text={`Thanks, ${values.cName.split(' ')[0]}. We usually reply within one working day.`}
        onReset={reset} />);


  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
      <TextField id="cName" label="Name" value={values.cName} onChange={(v) => setField('cName', v)} error={errors.cName} autoComplete="name" />
      <TextField id="cEmail" type="email" label="Email" value={values.cEmail} onChange={(v) => setField('cEmail', v)} error={errors.cEmail} autoComplete="email" />
      <TextField id="cPhone" type="tel" label="Phone" optional value={values.cPhone} onChange={(v) => setField('cPhone', v)} autoComplete="tel" />
      <SelectField id="cSubject" label="Subject" value={values.cSubject} onChange={(v) => setField('cSubject', v)} options={subjects} error={errors.cSubject} />
      <TextAreaField id="cMessage" label="Message" rows={6} className="sm:col-span-2" value={values.cMessage} onChange={(v) => setField('cMessage', v)} error={errors.cMessage} placeholder="How can we help?" />
      <div className="sm:col-span-2">
        <ButtonLink type="submit" size="lg" className="w-full sm:w-auto" disabled={status === 'submitting'}>
          {status === 'submitting' ?
          <>
              <Loader2Icon className="h-5 w-5 animate-spin" aria-hidden="true" /> Sending…
            </> :

          'Send message'
          }
        </ButtonLink>
      </div>
    </form>);

}