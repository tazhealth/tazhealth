import {
  ActivityIcon,
  BellRingIcon,
  Building2Icon,
  ChurchIcon,
  ClipboardCheckIcon,
  GaugeIcon,
  GraduationCapIcon,
  HeartHandshakeIcon,
  HospitalIcon,
  KeyRoundIcon,
  LayoutDashboardIcon,
  LockIcon,
  MessageSquareTextIcon,
  PhoneCallIcon,
  ShieldCheckIcon,
  SmartphoneIcon,
  UsersIcon,
  WifiOffIcon } from
'lucide-react';
import type { IconItem } from '../types/content';

export const howItWorks: IconItem[] = [
{
  icon: WifiOffIcon,
  title: 'Register offline',
  text: 'Health workers register patients on a low-cost Android phone. No signal needed.'
},
{
  icon: ActivityIcon,
  title: 'Instant risk triage',
  text: 'Blood pressure, blood sugar and symptoms are scored instantly as High, Medium or Low risk.'
},
{
  icon: MessageSquareTextIcon,
  title: 'Automatic SMS follow-up',
  text: 'Patients get reminders and check-ins by SMS, in the language they speak at home.'
},
{
  icon: BellRingIcon,
  title: 'Clinician alerts',
  text: 'High-risk patients are flagged to a clinician for a call or referral within hours.'
}];


export const smsLanguages = [
{ name: 'English', hello: 'How are you feeling today?' },
{ name: 'Pidgin', hello: 'How your body dey today?' },
{ name: 'Yoruba', hello: 'Bawo ni ara re loni?' },
{ name: 'Hausa', hello: 'Yaya jikinka yau?' },
{ name: 'Igbo', hello: 'Kedu ka ahụ gị dị taa?' }];


export const minorFeatures: IconItem[] = [
{
  icon: ActivityIcon,
  title: 'AI-supported triage',
  text: 'Clinician-set rules and AI scoring flag who needs attention first.'
},
{
  icon: BellRingIcon,
  title: 'High-risk alerts',
  text: 'Dangerous readings notify the on-call clinician straight away.'
},
{
  icon: PhoneCallIcon,
  title: 'Follow-up call lists',
  text: 'Daily, prioritised lists so volunteers know exactly who to call.'
},
{
  icon: LayoutDashboardIcon,
  title: 'Community dashboard',
  text: 'See reach, risk and follow-up outcomes for every outreach.'
}];


export const builtForNigeria: IconItem[] = [
{ icon: SmartphoneIcon, title: 'Low-end Android phones', text: 'Light enough for the affordable phones health workers already carry.' },
{ icon: GaugeIcon, title: 'Low data use', text: 'Syncs compact records, not heavy files, so data bundles last.' },
{ icon: WifiOffIcon, title: 'Works offline', text: 'Every screen works without network. Sync happens when it can.' },
{ icon: MessageSquareTextIcon, title: 'No app for patients', text: 'Patients only need SMS — any phone, any network.' }];


export const audiences: IconItem[] = [
{ icon: HeartHandshakeIcon, title: 'NGOs', text: 'Run outreaches that keep caring after you leave.' },
{ icon: ChurchIcon, title: 'Faith-based organisations', text: 'Turn medical missions into lasting care.' },
{ icon: HospitalIcon, title: 'Hospitals', text: 'Follow up community screening and referrals.' },
{ icon: Building2Icon, title: 'PHC networks', text: 'Track patients across primary healthcare centres.' },
{ icon: GraduationCapIcon, title: 'Student health groups', text: 'Give student outreaches real continuity.' },
{ icon: UsersIcon, title: 'Community health programmes', text: 'Support CHEWs with triage and call lists.' }];


export const privacyPoints: IconItem[] = [
{
  icon: LockIcon,
  title: 'Encrypted end to end',
  text: 'Patient records are encrypted on the phone, in transit and at rest.'
},
{
  icon: ClipboardCheckIcon,
  title: 'Consent-first design',
  text: 'Nothing is recorded or sent until the patient agrees. They can reply STOP at any time.'
},
{
  icon: KeyRoundIcon,
  title: 'Role-based access',
  text: 'Volunteers, clinicians and admins each see only what their role requires.'
}];


export const offlineIcon = WifiOffIcon;
export const secureIcon = ShieldCheckIcon;