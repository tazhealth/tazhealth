'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { CalendarIcon, Loader2Icon } from 'lucide-react';
import { CheckboxField, SelectField, TextAreaField, TextField } from '../forms/Field';
import { FormSuccess } from '../forms/FormSuccess';
import { ButtonLink } from '../ui/ButtonLink';
import { Reveal } from '../ui/Reveal';
import { volunteerRoles } from '../../data/involve';
import { upcomingOutreaches } from '../../data/outreaches';
import { isEmail, useSimpleForm } from '../../hooks/useSimpleForm';
import { cn } from '../../utils/cn';

const states = ['Lagos', 'Ogun', 'Oyo', 'FCT Abuja', 'Other state', 'Outside Nigeria (remote)'];
const availability = ['Outreach days (Saturdays)', 'A few hours a week, remote', 'Flexible'];

export function VolunteerSection() {
  const params = useSearchParams();
  const outreach = upcomingOutreaches.find((u) => u.id === params.get('outreach'));

  const { values, errors, status, setField, handleSubmit, reset } = useSimpleForm(
    { volRole: '', volName: '', volEmail: '', volPhone: '', volState: '', volAvailability: '', volSkills: '', volConsent: false as boolean },
    (v) => ({
      volRole: v.volRole ? undefined : 'Please choose a role.',
      volName: v.volName.trim() ? undefined : 'Please tell us your name.',
      volEmail: isEmail(v.volEmail) ? undefined : 'Please enter a valid email.',
      volPhone: v.volPhone.trim().length >= 7 ? undefined : 'Please enter a phone number we can reach you on.',
      volState: v.volState ? undefined : 'Please choose where you’re based.',
      volConsent: v.volConsent ? undefined : 'Please agree so we can contact you.'
    })
  );

  return (
    <section id="volunteer" className="scroll-mt-20 bg-white py-20 lg:py-28" aria-labelledby="volunteer-title">
      <form onSubmit={handleSubmit} noValidate className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <h2 id="volunteer-title" className="text-[26px] leading-[1.1] text-forest sm:text-3xl lg:text-[38px]">
              Volunteer with us.
            </h2>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-ink/70">
              Pick the role that fits you. No medical background needed for most - just reliability and heart.
            </p>
          </Reveal>

          {outreach &&
          <p className="mt-6 flex items-center gap-3 rounded-2xl bg-sun/15 px-4 py-3 text-[15px] text-forest">
              <CalendarIcon className="h-5 w-5 shrink-0" aria-hidden="true" />
              Signing up for {outreach.community} · {outreach.weekday} {outreach.day} {outreach.month}
            </p>
          }

          <fieldset className="mt-8" aria-describedby={errors.volRole ? 'volRole-error' : undefined}>
            <legend className="mb-3 text-sm font-medium text-ink">Choose a role</legend>
            <div className="grid gap-3 sm:grid-cols-2">
              {volunteerRoles.map((r, i) => {
                const Icon = r.icon;
                const checked = values.volRole === r.id;
                return (
                  <label
                    key={r.id}
                    className={cn(
                      'flex cursor-pointer flex-col rounded-3xl p-5 transition-[background-color,box-shadow,transform] duration-200 ease-smooth hover:-translate-y-0.5',
                      checked ? 'bg-mint ring-2 ring-leaf' : 'bg-white ring-1 ring-forest/15 hover:ring-forest/30'
                    )}>
                    
                    <input
                      type="radio"
                      name="volRole"
                      id={i === 0 ? 'volRole' : undefined}
                      value={r.id}
                      checked={checked}
                      onChange={() => setField('volRole', r.id)}
                      className="sr-only" />
                    
                    <span className={cn('flex h-10 w-10 items-center justify-center rounded-xl', checked ? 'bg-leaf text-white' : 'bg-mint text-leaf')}>
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="mt-4 text-lg font-medium text-forest">{r.title}</span>
                    <span className="mt-1 text-[15px] leading-relaxed text-ink/70">{r.text}</span>
                    <span className="mt-auto pt-3 text-sm font-medium text-leaf">{r.commitment}</span>
                  </label>);

              })}
            </div>
            {errors.volRole &&
            <p id="volRole-error" className="mt-2 text-sm text-risk-high">
                {errors.volRole}
              </p>
            }
          </fieldset>
        </div>

        <div className="lg:pt-2">
          {status === 'success' ?
          <FormSuccess
            title="Welcome to the team!"
            text={`Thanks, ${values.volName.split(' ')[0]}. Our volunteer coordinator will message you on WhatsApp within a week with next steps.`}
            onReset={reset}
            resetLabel="Sign up someone else" /> :


          <div className="rounded-[2rem] bg-mint p-6 sm:p-8 lg:sticky lg:top-28">
              <h3 className="text-xl text-forest">Your details</h3>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <TextField id="volName" label="Full name" className="sm:col-span-2" value={values.volName} onChange={(v) => setField('volName', v)} error={errors.volName} autoComplete="name" />
                <TextField id="volEmail" type="email" label="Email" value={values.volEmail} onChange={(v) => setField('volEmail', v)} error={errors.volEmail} autoComplete="email" />
                <TextField id="volPhone" type="tel" label="Phone / WhatsApp" value={values.volPhone} onChange={(v) => setField('volPhone', v)} error={errors.volPhone} autoComplete="tel" />
                <SelectField id="volState" label="Where are you based?" value={values.volState} onChange={(v) => setField('volState', v)} options={states} error={errors.volState} />
                <SelectField id="volAvailability" label="Availability" optional value={values.volAvailability} onChange={(v) => setField('volAvailability', v)} options={availability} />
                <TextAreaField
                id="volSkills"
                label="Profession or skills"
                optional
                rows={3}
                className="sm:col-span-2"
                value={values.volSkills}
                onChange={(v) => setField('volSkills', v)}
                placeholder="e.g. Registered nurse, speaks Yoruba and Pidgin" />
              
                <div className="sm:col-span-2">
                  <CheckboxField id="volConsent" checked={values.volConsent} onChange={(v) => setField('volConsent', v)} error={errors.volConsent}>
                    I agree to TAZhealth contacting me about volunteering, as described in the privacy policy.
                  </CheckboxField>
                </div>
              </div>
              <ButtonLink type="submit" size="lg" className="mt-6 w-full" disabled={status === 'submitting'}>
                {status === 'submitting' ?
              <>
                    <Loader2Icon className="h-5 w-5 animate-spin" aria-hidden="true" /> Sending…
                  </> :

              'Sign me up'
              }
              </ButtonLink>
            </div>
          }
        </div>
      </form>
    </section>);

}