import { images } from './images';
import type { Outreach, UpcomingOutreach } from '../types/content';

export const pastOutreaches: Outreach[] = [
{
  id: 'ilaro-2026',
  community: 'Ilaro',
  state: 'Ogun State',
  date: 'June 2026',
  image: images.hero,
  summary: 'Hypertension and diabetes screening for 118 adults — and our first full TAZ AI follow-up cohort.',
  peopleReached: 118,
  referrals: 17,
  services: ['BP screening', 'Glucose testing', 'Consultations', 'Free medication', 'SMS follow-up'],
  highlight: '41 patients flagged for follow-up; 36 reached by SMS or phone within a week.',
  story:
  'Ilaro was the first outreach where every patient was registered on TAZ AI. By the time the team left, clinicians already had a call list of high-risk patients — and the first Yoruba SMS check-ins went out the next morning.'
},
{
  id: 'akinyele-2026',
  community: 'Akinyele',
  state: 'Oyo State',
  date: 'March 2026',
  image: images.education,
  summary: 'A health talk under the village tree, followed by maternal health and blood pressure checks.',
  peopleReached: 96,
  referrals: 12,
  services: ['Health education', 'Antenatal checks', 'BP screening', 'Consultations'],
  highlight: 'Eight expectant mothers linked to their nearest primary healthcare centre.',
  story:
  'We partnered with the community leader to host a health talk before screening began. Turnout doubled when people heard the team would come back to check on them.'
},
{
  id: 'kuje-2025',
  community: 'Kuje',
  state: 'FCT Abuja',
  date: 'November 2025',
  image: images.queue,
  summary: 'Our largest turnout yet — registration queues formed before sunrise.',
  peopleReached: 104,
  referrals: 15,
  services: ['Registration on TAZ AI', 'BP screening', 'Malaria testing', 'Consultations'],
  highlight: 'First field test of offline registration and instant risk triage.',
  story:
  'Kuje had no reliable network. It was the perfect test: every registration was saved on the phone and synced that evening when the team got signal on the road home.'
},
{
  id: 'makoko-2025',
  community: 'Makoko',
  state: 'Lagos State',
  date: 'August 2025',
  image: images.motherChild,
  summary: 'Child wellness checks and malaria testing for families in the waterfront community.',
  peopleReached: 78,
  referrals: 9,
  services: ['Child wellness', 'Malaria testing', 'Nutrition counselling', 'Free medication'],
  highlight: 'Paper-based follow-up pilot: volunteers called every family within 10 days.',
  story:
  'We tested follow-up with paper registers and volunteer phone calls. It worked — families answered — but it showed us we needed a tool to do this at scale.'
},
{
  id: 'ijebu-2025',
  community: 'Ijebu-Ode',
  state: 'Ogun State',
  date: 'May 2025',
  image: images.glucose,
  summary: 'A diabetes-focused outreach with glucose testing and practical diet counselling.',
  peopleReached: 64,
  referrals: 8,
  services: ['Glucose testing', 'Diet counselling', 'Consultations'],
  highlight: '1 in 5 adults screened had a high blood sugar reading they didn’t know about.',
  story:
  'Many people had never had their blood sugar checked. Our dietitian volunteers turned local foods into simple, affordable meal plans.'
},
{
  id: 'ogbomosho-2025',
  community: 'Ogbomosho',
  state: 'Oyo State',
  date: 'February 2025',
  image: images.consult,
  summary: 'Our very first outreach — and the one that showed us what happens when care stops.',
  peopleReached: 52,
  referrals: 11,
  services: ['BP screening', 'Consultations', 'Free medication'],
  highlight: 'Weeks later, we could reach fewer than 1 in 5 patients. TAZhealth’s mission was born.',
  story:
  'We screened 52 people and referred 11. When we tried to follow up a month later, most numbers were wrong or unanswered. That gap is the reason TAZ AI exists.'
}];


export const upcomingOutreaches: UpcomingOutreach[] = [
{
  id: 'iseyin-oct',
  day: '18',
  month: 'Oct',
  weekday: 'Sat',
  community: 'Iseyin',
  state: 'Oyo State',
  focus: 'Hypertension & diabetes screening',
  volunteersNeeded: 12
},
{
  id: 'epe-nov',
  day: '15',
  month: 'Nov',
  weekday: 'Sat',
  community: 'Epe',
  state: 'Lagos State',
  focus: 'Maternal & child health',
  volunteersNeeded: 18
},
{
  id: 'kuje-dec',
  day: '06',
  month: 'Dec',
  weekday: 'Sat',
  community: 'Kuje',
  state: 'FCT Abuja',
  focus: 'Return visit & recheck day',
  volunteersNeeded: 10
}];