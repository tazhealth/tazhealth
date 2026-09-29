'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { AlertCircleIcon } from 'lucide-react';
import { CheckboxField, ChoiceChips, SelectField, TextAreaField, TextField } from '../forms/Field';
import { FormPanel, FormSection, SubmitButton } from '../forms/FormPanel';
import { FormSuccess } from '../forms/FormSuccess';
import { NextSteps, SideIntro } from './SideIntro';
import { volunteerRoles } from '../../data/involve';
import { upcomingOutreaches } from '../../data/outreaches';
import { isEmail, useSimpleForm } from '../../hooks/useSimpleForm';
import { cn } from '../../utils/cn';

const states = ['Lagos', 'Ogun', 'Oyo', 'FCT Abuja', 'Other state', 'Outside Nigeria (remote)'];
const availability = ['Outreach Saturdays', 'A few hours a week, remote', 'Flexible'];

export function VolunteerSection() {
  const params = useSearchParams();
  const outreach = upcomingOutreaches.find((u) => u.id === params.get('outreach'));

  const { values, errors, status, setField, handleSubmit, reset } = useSimpleForm(
    { volRole: '', volName: '', volEmail: '', volPhone: '', volState: '', volAvailability: '', volSkills: '', volConsent: false as boolean },
    (v) => ({
      volRole: v.volRole ? undefined : 'Please choose a role.',
      volName: v.volName.trim() ? undefined : 'Please tell us your name.',
      volEmail: isEmail(v.volEmail) ? undefined : 'Please enter a valid email.',
      volPhone: v.volPhone.trim().length >= 7 ? undefined : 'Please enter a number we can reach you on.',
      volState: v.volState ? undefined : 'Please choose where you’re based.',
      volConsent: v.volConsent ? undefined : 'Please agree so we can contact you.'
    })
  );

  return (
    <section id="volunteer" className="scroll-mt-20 border-t border-ink/10 bg-white py-16 sm:py-24 lg:py-32" aria-labelledby="volunteer-title">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:gap-12 sm:px-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <SideIntro
            index="01"
            id="volunteer-title"
            title="Volunteer"
            text="Pick the role that fits you. Most roles need no medical background, just reliability and heart.">

            {outreach &&
            <div className="mt-8 flex items-center gap-3.5 rounded-xl p-3.5 ring-1 ring-ink/10">
                <span className="w-11 shrink-0 overflow-hidden rounded-lg text-center ring-1 ring-ink/10">
                  <span className="block bg-ink/5 py-0.5 text-[9px] font-medium uppercase tracking-wide text-ink/55">{outreach.month}</span>
                  <span className="block py-1 text-[15px] font-medium tabular-nums text-ink">{outreach.day}</span>
                </span>
                <span className="text-sm">
                  <span className="block text-ink/50">You’re signing up for</span>
                  <span className="block font-medium text-ink">
                    {outreach.community}, {outreach.weekday} {outreach.day} {outreach.month}
                  </span>
                </span>
              </div>
            }

            <NextSteps
              steps={[
              'Our coordinator messages you on WhatsApp within a week.',
              'A 30-minute orientation call, online.',
              'Your first outreach or follow-up shift.']
              } />

          </SideIntro>
        </div>

        <div className="lg:col-span-8">
          {status === 'success' ?
          <FormSuccess
            title="Welcome to the team"
            text={`Thanks, ${values.volName.split(' ')[0]}. Our volunteer coordinator will message you on WhatsApp within a week.`}
            onReset={reset}
            resetLabel="Sign up someone else" /> :


          <FormPanel
            label="Volunteer sign-up"
            onSubmit={handleSubmit}
            footer={
            <>
                  <div className="sm:max-w-sm">
                    <CheckboxField id="volConsent" checked={values.volConsent} onChange={(v) => setField('volConsent', v)} error={errors.volConsent}>
                      TAZhealth can contact me about volunteering, as described in the{' '}
                      <a href="/privacy" className="underline underline-offset-2 hover:text-ink">
                        privacy policy
                      </a>
                      .
                    </CheckboxField>
                  </div>
                  <SubmitButton busy={status === 'submitting'}>Sign me up</SubmitButton>
                </>
            }>

              <FormSection title="Choose a role" description="You can change this later.">
                <fieldset aria-describedby={errors.volRole ? 'volRole-error' : undefined}>
                  <legend className="sr-only">Volunteer role</legend>
                  <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                    {volunteerRoles.map((r, i) => {
                    const Icon = r.icon;
                    const checked = values.volRole === r.id;
                    return (
                      <label
                        key={r.id}
                        className={cn(
                          'relative flex cursor-pointer flex-col rounded-xl border p-3 sm:p-4 transition-[border-color,background-color,box-shadow] duration-150 has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-leaf/15',
                          checked ?
                          'border-forest bg-mint/50 ring-1 ring-forest' :
                          errors.volRole ?
                          'border-risk-high/60' :
                          'border-ink/[0.14] hover:border-ink/30'
                        )}>

                          <input
                          type="radio"
                          name="volRole"
                          id={i === 0 ? 'volRole' : undefined}
                          value={r.id}
                          checked={checked}
                          onChange={() => setField('volRole', r.id)}
                          className="sr-only" />

                          <span className="flex items-start justify-between">
                            <span className={cn('flex h-8 w-8 items-center justify-center rounded-lg', checked ? 'bg-forest text-white' : 'bg-ink/[0.04] text-ink/60')}>
                              <Icon className="h-4 w-4" aria-hidden="true" />
                            </span>
                            <span
                            className={cn('h-4 w-4 rounded-full border transition-all duration-150', checked ? 'border-[5px] border-forest' : 'border-ink/25')}
                            aria-hidden="true" />

                          </span>
                          <span className="mt-2.5 text-sm font-medium leading-snug text-ink sm:mt-3 sm:text-[15px]">{r.title}</span>
                          <span className="mt-1 hidden text-[13px] leading-relaxed text-ink/55 sm:block">{r.text}</span>
                          <span className="mt-1.5 text-[11px] font-medium text-leaf sm:mt-3 sm:text-xs">{r.commitment}</span>
                        </label>);

                  })}
                  </div>
                  {errors.volRole &&
                <p id="volRole-error" className="mt-2 flex items-center gap-1.5 text-[13px] text-risk-high">
                      <AlertCircleIcon className="h-3.5 w-3.5" aria-hidden="true" /> {errors.volRole}
                    </p>
                }
                </fieldset>
              </FormSection>

              <FormSection title="About you">
                <div className="grid gap-5 sm:grid-cols-2">
                  <TextField id="volName" label="Full name" value={values.volName} onChange={(v) => setField('volName', v)} error={errors.volName} autoComplete="name" placeholder="Adaeze Okonkwo" />
                  <TextField id="volPhone" type="tel" label="Phone / WhatsApp" value={values.volPhone} onChange={(v) => setField('volPhone', v)} error={errors.volPhone} autoComplete="tel" placeholder="+234 800 000 0000" />
                  <TextField id="volEmail" type="email" label="Email" value={values.volEmail} onChange={(v) => setField('volEmail', v)} error={errors.volEmail} autoComplete="email" placeholder="you@email.com" />
                  <SelectField id="volState" label="Where are you based?" value={values.volState} onChange={(v) => setField('volState', v)} options={states} error={errors.volState} />
                </div>
              </FormSection>

              <FormSection title="Availability and skills">
                <div className="space-y-5">
                  <ChoiceChips
                  id="volAvailability"
                  name="volAvailability"
                  label="When can you help?"
                  optional
                  options={availability}
                  value={values.volAvailability}
                  onChange={(v) => setField('volAvailability', v)} />

                  <TextAreaField
                  id="volSkills"
                  label="Profession or skills"
                  optional
                  rows={3}
                  value={values.volSkills}
                  onChange={(v) => setField('volSkills', v)}
                  placeholder="e.g. Registered nurse, speaks Yoruba and Pidgin"
                  hint="Languages you speak help us match you to follow-up calls." />

                </div>
              </FormSection>
            </FormPanel>
          }
        </div>
      </div>
    </section>);

}
