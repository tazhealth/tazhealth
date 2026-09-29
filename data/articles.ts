import { images } from './images';

export type Article = {
  slug: string;
  title: string;
  category: 'Health Tips' | 'Field Stories' | 'TAZ AI';
  date: string;
  author: string;
  image: string;
  excerpt: string;
  body: string[];
};

// Placeholder articles - replace with posts written by the TAZhealth team.
export const articles: Article[] = [
{
  slug: 'know-your-blood-pressure',
  title: 'High blood pressure has no symptoms. Here’s why you should check yours.',
  category: 'Health Tips',
  date: 'Sep 12, 2026',
  author: 'TAZhealth Team',
  image: images.hero,
  excerpt: 'Many people we screen feel perfectly fine, yet their readings are dangerously high.',
  body: [
  'At almost every outreach, we meet someone who feels completely well but has a blood pressure reading that should send them straight to a clinic. High blood pressure often has no warning signs, which is why it is called a silent condition.',
  'Left untreated, it raises the risk of stroke, heart disease and kidney problems. The good news is that it is easy to check, and often manageable with the right medication and daily habits.',
  'Have your blood pressure checked at least once a year, and more often if you are over 40, have diabetes, or have a family history of hypertension. If a reading is high, see a health worker; do not stop or change medication without advice.',
  'Small changes help too: less salt, more fruit and vegetables, regular walking, and cutting down on alcohol and smoking.']

},
{
  slug: 'why-we-come-back',
  title: 'Why we keep calling after the outreach tent comes down',
  category: 'Field Stories',
  date: 'Aug 28, 2026',
  author: 'TAZhealth Team',
  image: images.phone,
  excerpt: 'A screening is only the start. What happens in the weeks after decides whether care actually happens.',
  body: [
  'Our first outreach taught us a hard lesson. We screened dozens of people and referred several to a clinic, but a month later we could reach very few of them.',
  'Since then, every person we meet leaves with a follow-up plan. Volunteers call, SMS reminders go out in the language people speak, and referrals are tracked until the visit actually happens.',
  'It is slower work than a single day of screening, but it is the difference between finding a problem and helping someone deal with it.']

},
{
  slug: 'malaria-prevention-at-home',
  title: 'Simple ways to protect your family from malaria',
  category: 'Health Tips',
  date: 'Aug 10, 2026',
  author: 'TAZhealth Team',
  image: images.malariaTalk,
  excerpt: 'Malaria is preventable. A few everyday habits make a real difference, especially for children.',
  body: [
  'Malaria remains one of the most common reasons people visit a clinic in Nigeria, and young children and pregnant women are most at risk.',
  'Sleep under an insecticide-treated net every night, clear stagnant water around the house where mosquitoes breed, and use window screens where you can.',
  'If anyone in the family has a fever, get tested quickly rather than guessing. A rapid test takes minutes, and early treatment prevents serious illness.']

}];
