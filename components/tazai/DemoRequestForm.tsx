'use client';

import React from 'react';
import { Loader2Icon } from 'lucide-react';
import { SelectField, TextAreaField, TextField } from '../forms/Field';
import { FormSuccess } from '../forms/FormSuccess';
import { ButtonLink } from '../ui/ButtonLink';
import { isEmail, useSimpleForm } from '../../hooks/useSimpleForm';

const orgTypes = [
'NGO',
'Faith-based organisation',
'Hospital',
'PHC network',
'Student health group',
'Community health programme',
'Other'];

const sizes = ['Under 100', '100–300', '300–1,000', 'More than 1,000'];

export function DemoRequestForm() {
  const { values, errors, status, setField, handleSubmit, reset } = useSimpleForm(
    { demoName: '', demoOrg: '', demoEmail: '', demoPhone: '', demoType: '', demoSize: '', demoMessage: '' },
    (v) => ({
      demoName: v.demoName.trim() ? undefined : 'Please tell us your name.',
      demoOrg: v.demoOrg.trim() ? undefined : 'Please add your organisation.',
      demoEmail: isEmail(v.demoEmail) ? undefined : 'Please enter a valid email.',
      demoType: v.demoType ? undefined : 'Please choose an organisation type.'
    })
  );

  if (status === 'success') {
    return (
      <FormSuccess
        title="Demo request received"
        text={`Thanks, ${values.demoName.split(' ')[0]}. We’ll reach out within two working days to schedule a 30-minute walkthrough.`}
        onReset={reset}
        resetLabel="Request another demo" />);


  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
      <TextField id="demoName" label="Full name" value={values.demoName} onChange={(v) => setField('demoName', v)} error={errors.demoName} autoComplete="name" />
      <TextField id="demoOrg" label="Organisation" value={values.demoOrg} onChange={(v) => setField('demoOrg', v)} error={errors.demoOrg} autoComplete="organization" />
      <TextField id="demoEmail" type="email" label="Work email" value={values.demoEmail} onChange={(v) => setField('demoEmail', v)} error={errors.demoEmail} autoComplete="email" />
      <TextField id="demoPhone" type="tel" label="Phone" optional value={values.demoPhone} onChange={(v) => setField('demoPhone', v)} autoComplete="tel" />
      <SelectField id="demoType" label="Organisation type" value={values.demoType} onChange={(v) => setField('demoType', v)} options={orgTypes} error={errors.demoType} />
      <SelectField id="demoSize" label="Patients per outreach" optional value={values.demoSize} onChange={(v) => setField('demoSize', v)} options={sizes} />
      <TextAreaField
        id="demoMessage"
        label="Tell us about your outreach programme"
        optional
        rows={4}
        className="sm:col-span-2"
        value={values.demoMessage}
        onChange={(v) => setField('demoMessage', v)}
        placeholder="Where you work, how often you run outreaches, what follow-up looks like today…" />
      
      <div className="sm:col-span-2">
        <ButtonLink type="submit" size="lg" className="w-full sm:w-auto" disabled={status === 'submitting'}>
          {status === 'submitting' ?
          <>
              <Loader2Icon className="h-5 w-5 animate-spin" aria-hidden="true" /> Sending…
            </> :

          'Request a demo'
          }
        </ButtonLink>
      </div>
    </form>);

}