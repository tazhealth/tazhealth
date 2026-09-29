import {
  Building2Icon,
  BriefcaseIcon,
  ClipboardListIcon,
  HeartHandshakeIcon,
  HospitalIcon,
  LandmarkIcon,
  MessageSquareTextIcon,
  PhoneCallIcon,
  PillIcon,
  StethoscopeIcon } from
'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type VolunteerRole = {
  id: string;
  title: string;
  text: string;
  commitment: string;
  icon: LucideIcon;
};

export const volunteerRoles: VolunteerRole[] = [
{
  id: 'medical',
  title: 'Medical volunteers',
  text: 'Doctors, nurses, pharmacists and lab scientists who screen, consult and treat on outreach day.',
  commitment: '1 Saturday per quarter',
  icon: StethoscopeIcon
},
{
  id: 'field',
  title: 'Field workers',
  text: 'Run registration, crowd flow and logistics - and register patients on TAZ AI.',
  commitment: 'Outreach days',
  icon: ClipboardListIcon
},
{
  id: 'followup',
  title: 'Follow-up officers',
  text: 'Call high-risk patients after an outreach, in English, Pidgin or your local language.',
  commitment: '2–3 hrs a week, remote',
  icon: PhoneCallIcon
},
{
  id: 'general',
  title: 'General volunteers',
  text: 'Photography, social media, fundraising, design - skills that keep the mission moving.',
  commitment: 'Flexible',
  icon: HeartHandshakeIcon
}];


export const partnerTypes: {title: string;text: string;icon: LucideIcon;}[] = [
{ title: 'NGOs & foundations', text: 'Co-host outreaches or bring TAZ AI into your programmes.', icon: HeartHandshakeIcon },
{ title: 'Hospitals & clinics', text: 'Receive referrals and support follow-up with your clinicians.', icon: HospitalIcon },
{ title: 'Companies', text: 'Sponsor outreaches, drugs or SMS as part of your CSR.', icon: BriefcaseIcon },
{ title: 'Government agencies', text: 'Strengthen PHC follow-up with data from the community.', icon: LandmarkIcon }];


export const donationUses: {title: string;text: string;example: string;icon: LucideIcon;}[] = [
{
  title: 'Essential drugs',
  text: 'Antihypertensives, antimalarials and basic medication given free on outreach day.',
  example: '₦10,000 · a month of BP medication for several patients',
  icon: PillIcon
},
{
  title: 'Screening equipment',
  text: 'BP monitors, glucometers, test strips and malaria kits that travel with the team.',
  example: '₦25,000 · a glucometer with test strips',
  icon: Building2Icon
},
{
  title: 'SMS follow-up',
  text: 'Reminders and check-ins that keep patients connected to care for months.',
  example: '₦5,000 · follow-up messages for a whole outreach cohort',
  icon: MessageSquareTextIcon
}];


export const donationAmounts = [5000, 10000, 25000, 50000];