import { images } from './images';
import type { FieldStory, Milestone, TeamMember, Testimonial } from '../types/content';

export const testimonials: Testimonial[] = [
{
  quote:
  'After the outreach, I thought that was the end. Then an SMS came in Yoruba asking about my pressure. Somebody still remembered me.',
  name: 'Mama Folake',
  role: 'Community member, Ilaro'
},
{
  quote:
  'I’ve volunteered at outreaches for years. This is the first time I actually knew what happened to patients after we packed up.',
  name: 'Dr. Kemi Oladipo',
  role: 'Volunteer physician'
},
{
  quote: 'They came back to check on us. That is how we knew they were serious about our health.',
  name: 'Baba Sule',
  role: 'Community leader, Kuje'
}];


export const fieldStories: FieldStory[] = [
{
  image: images.consult,
  title: 'The reading that changed a plan',
  quote:
  'My pressure was 190 over 120 and I felt fine. The doctor referred me, and the messages kept reminding me to go. Now I take my drugs every morning.',
  name: 'Mr. Adewale, 64',
  role: 'Patient, Ogbomosho'
},
{
  image: images.phone,
  title: 'Following up in Pidgin',
  quote:
  'When I call and speak Pidgin, people relax. They tell me the truth — whether they bought the drugs, whether they went to the clinic.',
  name: 'Blessing E.',
  role: 'Follow-up officer, volunteer'
},
{
  image: images.motherChild,
  title: 'A mother’s second visit',
  quote:
  'They tested my son for malaria and gave us medicine. One week later, a volunteer called to ask if his fever had gone. It had.',
  name: 'Aisha M.',
  role: 'Mother, Makoko'
}];


export const team: TeamMember[] = [
{
  name: 'Amara Okafor',
  role: 'Founder & Executive Director',
  image: images.team1,
  bio: 'Public health specialist who has organised community outreaches since medical school.',
  linkedin: 'https://linkedin.com',
  x: 'https://x.com'
},
{
  name: 'Dr. Emeka Nwosu',
  role: 'Medical Lead',
  image: images.team2,
  bio: 'Family physician leading clinical protocols, triage rules and referral pathways.',
  linkedin: 'https://linkedin.com',
  x: 'https://x.com'
},
{
  name: 'Zainab Bello',
  role: 'Community Programmes Lead',
  image: images.team3,
  bio: 'Builds trust with community leaders and coordinates volunteers on outreach day.',
  linkedin: 'https://linkedin.com',
  x: 'https://x.com'
},
{
  name: 'Tobi Adeleke',
  role: 'Product Lead, TAZ AI',
  image: images.team4,
  bio: 'Software engineer designing TAZ AI for low-end phones and low-data settings.',
  linkedin: 'https://linkedin.com',
  x: 'https://x.com'
}];


export const milestones: Milestone[] = [
{
  date: 'Late 2024',
  title: 'A question that wouldn’t go away',
  text: 'A group of young doctors and public health students start asking what happens to patients after free medical outreaches.'
},
{
  date: 'Feb 2025',
  title: 'First outreach in Ogbomosho',
  text: '52 people screened, 11 referred. A month later, we couldn’t reach most of them. That became our problem to solve.'
},
{
  date: 'Aug 2025',
  title: 'Paper follow-up pilot',
  text: 'Volunteers called every family from paper registers. It worked — but it could never scale.'
},
{
  date: 'Nov 2025',
  title: 'TAZ AI prototype',
  text: 'Offline registration and instant risk triage tested at our Kuje outreach, with no network at all.'
},
{
  date: 'Mar 2026',
  title: 'Follow-up in five languages',
  text: 'Automatic SMS check-ins in English, Pidgin, Yoruba, Hausa and Igbo go live.'
},
{
  date: 'Jun 2026',
  title: '500 people reached',
  text: 'Across six communities, with more than 70 referrals tracked through to care.'
},
{
  date: 'Next',
  title: 'Continuity for every outreach',
  text: 'Bringing TAZ AI to NGOs, faith groups and primary healthcare networks across Nigeria.'
}];