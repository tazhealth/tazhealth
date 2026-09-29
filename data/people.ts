import { images } from './images';
import type { FieldStory, Milestone, TeamMember, Testimonial } from '../types/content';

export const testimonials: Testimonial[] = [
{
  quote:
  'After the outreach, I thought that was the end. Then an SMS came in Yoruba asking about my pressure. Somebody still remembered me.',
  name: 'Mama Folake',
  role: 'Community member'
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
  role: 'Community leader'
}];


export const fieldStories: FieldStory[] = [
{
  image: images.consult,
  title: 'The reading that changed a plan',
  quote:
  'My pressure was 190 over 120 and I felt fine. The doctor referred me, and the messages kept reminding me to go. Now I take my drugs every morning.',
  name: 'Mr. Adewale, 64',
  role: 'Patient'
},
{
  image: images.phone,
  title: 'Following up in Pidgin',
  quote:
  'When I call and speak Pidgin, people relax. They tell me the truth - whether they bought the drugs, whether they went to the clinic.',
  name: 'Blessing E.',
  role: 'Follow-up officer, volunteer'
},
{
  image: images.motherChild,
  title: 'A mother’s second visit',
  quote:
  'They tested my son for malaria and gave us medicine. One week later, a volunteer called to ask if his fever had gone. It had.',
  name: 'Aisha M.',
  role: 'Mother'
}];


export const team: TeamMember[] = [
{
  name: 'OjiChukwujife Chuka-Utazi',
  role: 'Founder & CEO',
  image: '/team/ojichukwujife-chuka-utazi.jpg',
  bio: 'Doctor in training, 2025 UN Millennium Fellow and Top 150 Outstanding Young Nigerian. His outreaches have reached 15,000+ people.',
  linkedin: 'https://linkedin.com',
  x: 'https://x.com'
},
{
  name: 'Kamal Ayisat',
  role: 'Chief Operating Officer',
  image: '/team/kamal-ayisat.jpg',
  bio: 'Oversees TAZhealth’s operations, making sure our outreaches and initiatives are well coordinated and carried out effectively.',
  linkedin: 'https://linkedin.com',
  x: 'https://x.com'
},
{
  name: 'Offor Chidoziem Francis',
  role: 'Chief Technology Officer',
  image: '/team/offor-chidoziem-francis.jpg',
  bio: 'Leads TAZhealth’s technology, building the digital tools behind our outreaches and patient follow-up.',
  linkedin: 'https://linkedin.com',
  x: 'https://x.com'
},
{
  name: 'Olukare David',
  role: 'Media Director',
  image: '/team/olukare-david.jpg',
  bio: 'Oversees TAZhealth’s media, from our online platforms and health advocacy content to publicity for every outreach.',
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
  date: 'Apr 2025',
  title: 'TAZhealth launches',
  text: 'Our first outreach, at Yemisi Alogi Orphanage in Abeokuta: malaria testing, prevention talks and mosquito nets for 20 children and caregivers.'
},
{
  date: 'Aug 2025',
  title: 'Our first community-wide outreach',
  text: '120 people in Odogbolu screened for blood pressure, glucose, malaria and hepatitis B, with free consultations and medication.'
},
{
  date: 'Sep 2025',
  title: 'Mothers and hearts',
  text: 'Health education for 25 expecting mothers at BUTH, then World Heart Day at Ilishan Market for 112 community members.'
},
{
  date: 'Oct 2025',
  title: 'Health Fair 2.0',
  text: 'Free checks, consultations and medication for 121 students, staff and beneficiaries at Babcock University.'
},
{
  date: 'Dec 2025',
  title: '1,018 people reached',
  text: 'Two outreaches in one day, 500 people in Sagamu and 120 in Isheri Osun, Lagos, took us past a thousand across seven outreaches.'
},
{
  date: 'Next',
  title: 'Continuity for every outreach',
  text: 'Bringing TAZ AI to NGOs, faith groups and primary healthcare networks across Nigeria.'
}];
