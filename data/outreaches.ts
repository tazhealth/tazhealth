import { images } from './images';
import type { Outreach, UpcomingOutreach } from '../types/content';

// Source: TAZhealth Outreach Report. Newest first.
export const pastOutreaches: Outreach[] = [
{
  id: 'health-fair-3-sagamu',
  name: 'Health Fair 3.0',
  location: 'Sagamu',
  state: 'Ogun State',
  date: '14 December 2025',
  image: images.community,
  summary:
  'With the Babcock University Association of Medical Students (BUAMS), we took Health Fair 3.0 to Sagamu, bringing healthcare services and health education to community members.',
  peopleReached: 500,
  reachedLabel: 'community members',
  services: ['Health education', 'Vitals', 'Blood glucose', 'BMI', 'Malaria testing', 'HPV testing', 'Free consultations', 'Free medication'],
  partners: ['Babcock University Association of Medical Students (BUAMS)'],
  contribution: 350000,
  volunteers: 4
},
{
  id: 'joy-to-the-world-isheri-osun',
  name: 'Joy to the World',
  location: 'Isheri Osun Community, Alimosho LG',
  state: 'Lagos State',
  date: '14 December 2025',
  image: images.bpCheck,
  summary:
  'With BUAMS, we ran the “Joy to the World” medical outreach at Isheri Osun Community, bringing healthcare services and health education to community members.',
  peopleReached: 120,
  reachedLabel: 'community members',
  services: ['Health education', 'Vitals', 'Blood glucose', 'BMI', 'Malaria testing', 'HPV testing', 'Free consultations', 'Free medication'],
  partners: [
  'Babcock University Association of Medical Students (BUAMS)',
  'DaveStar Hospital',
  'NiMSA Standing Committee on Public Health'],

  contribution: 200000,
  volunteers: 4
},
{
  id: 'health-fair-2-babcock',
  name: 'Health Fair 2.0',
  location: 'Babcock University, Ilishan-Remo',
  state: 'Ogun State',
  date: '30 October 2025',
  image: images.pharmacy,
  summary:
  'With BUAMS, we organised Health Fair 2.0 at Babcock University, giving students, staff and other beneficiaries healthcare services and health education.',
  peopleReached: 121,
  reachedLabel: 'community members',
  services: ['Health education', 'Vitals', 'Blood glucose', 'BMI', 'Malaria testing', 'HPV testing', 'Free consultations', 'Free medication'],
  partners: [
  'Babcock University Association of Medical Students (BUAMS)',
  'Babcock University Teaching Hospital',
  'Biomedical Laboratory Science Innovation Academy (BMLSIA)'],

  contribution: 160000,
  volunteers: 5
},
{
  id: 'world-heart-day-ilishan',
  name: 'World Heart Day: “Don’t Miss A Beat”',
  location: 'Ilishan Market, Ilishan-Remo',
  state: 'Ogun State',
  date: '25 September 2025',
  image: images.worldHeartDay,
  summary:
  'With EOhealth, we organised a World Heart Day outreach at Ilishan Market focused on heart health, with free checks, consultations, medication and a fitness session.',
  peopleReached: 112,
  reachedLabel: 'community members',
  services: ['Heart health education', 'Vitals', 'Blood glucose', 'BMI', 'Free consultations', 'Free medication', 'Fitness & aerobics'],
  partners: [
  'EOhealth',
  'Babcock University Teaching Hospital',
  'The Cardio Health',
  'Nigerian Medical Laboratory Students’ Association (Babcock University)',
  'Public Health Students’ Association (Babcock University)',
  'Agram Pharmacy',
  'GlucoVive'],

  contribution: 50000,
  volunteers: 3
},
{
  id: 'buth-maternal-health',
  name: 'Maternal Health Outreach',
  location: 'BUTH Obstetrics & Gynaecology Department, Ilishan-Remo',
  state: 'Ogun State',
  date: '10 September 2025',
  image: images.healthEducation,
  summary:
  'With the BUAMS Chaplaincy Committee at Babcock University Teaching Hospital, we supported a maternal health outreach: health education for expecting mothers and infant care items such as diapers and hand-held dopplers.',
  peopleReached: 25,
  reachedLabel: 'mothers',
  services: ['Maternal health education', 'Infant care items'],
  partners: [
  'Babcock University Association of Medical Students (BUAMS)',
  'Mirabel Foundation for Health Empowerment',
  'Nigerian Medical Students’ Association (NiMSA)'],

  contribution: 30000,
  volunteers: 5
},
{
  id: 'odogbolu-community',
  name: 'Odogbolu Community Outreach',
  location: 'Odogbolu',
  state: 'Ogun State',
  date: '28 August 2025',
  image: images.aboutHero,
  summary:
  'With the Babcock University Public Health Department, we ran a community-wide medical outreach in Odogbolu that benefited over 120 people.',
  peopleReached: 120,
  reachedLabel: 'people',
  services: ['Blood glucose', 'Blood pressure', 'BMI', 'Malaria testing', 'Hepatitis B testing', 'Free consultations', 'Free medication'],
  partners: [
  'Babcock University Public Health Department',
  'Public Health Students’ Association (PUHSA), Babcock University',
  'Babcock University Association of Medical Students (BUAMS)',
  'EOhealth'],

  contribution: 60000,
  volunteers: 2
},
{
  id: 'yemisi-alogi-orphanage',
  name: 'Yemisi Alogi Orphanage and Children’s Home',
  location: 'Abeokuta',
  state: 'Ogun State',
  date: '27 April 2025',
  image: images.orphanage,
  summary:
  'TAZhealth’s launch outreach. We tested children and caregivers for malaria, taught malaria prevention and control, and donated mosquito nets and other essential amenities.',
  peopleReached: 20,
  reachedLabel: 'people',
  services: ['Malaria testing', 'Malaria prevention education', 'Mosquito nets & amenities'],
  partners: [
  'NiMSA Medical Outreach Program (Southwest Region)',
  'Standing Committee on Public Health, Babcock Chapter',
  'Technical Office for Maternal Health and Child Nutrition',
  'NiMSA Liaison Office to the World Health Organization',
  'The Campus Lifestyle (TCL) & TCL Foundation'],

  contribution: 100000,
  volunteers: 2
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