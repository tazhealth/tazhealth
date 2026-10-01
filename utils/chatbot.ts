import { pastOutreaches } from '../data/outreaches';
import { team } from '../data/people';
import { site } from '../data/site';

export type ChatLink = {label: string;href: string;external?: boolean;};

export type BotReply = {text: string;links?: ChatLink[];};

export const quickReplies = ['Volunteer', 'Partner with us', 'Our outreaches', 'Donate', 'Contact us'];

const people = pastOutreaches.reduce((n, o) => n + o.peopleReached, 0);
const latest = pastOutreaches[0];
const biggest = pastOutreaches.reduce((a, o) => o.peopleReached > a.peopleReached ? o : a);

const whatsappLink: ChatLink = { label: 'Chat with our team on WhatsApp', href: site.whatsapp, external: true };

export const welcome: BotReply = {
  text: 'Hi there 👋 I’m the TAZhealth assistant. I can tell you about our outreaches, volunteering, partnering or donating. What would you like to know?'
};

const rules: {keywords: string[];reply: () => BotReply;}[] = [
{
  keywords: ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening'],
  reply: () => ({ text: 'Hello! How can I help you today? You can tap one of the options below or type your question.' })
},
{
  keywords: ['volunteer', 'join', 'help out', 'sign up'],
  reply: () => ({
    text: 'We’d love to have you! We need medical volunteers (doctors, nurses, pharmacists, lab scientists), field workers, follow-up callers and general volunteers for things like photography and social media. No medical background is needed for most roles.',
    links: [{ label: 'Join our volunteer community', href: site.volunteerGroup, external: true }]
  })
},
{
  keywords: ['partner', 'sponsor', 'collaborat', 'organisation', 'organization', 'company', 'csr'],
  reply: () => ({
    text: 'Organisations can sponsor an outreach, co-host one in a community they care about, or support us with medicine and screening kits. Every outreach we’ve run so far has been a partnership.',
    links: [{ label: 'Partner with us', href: '/partner' }]
  })
},
{
  keywords: ['donat', 'give', 'money', 'fund', 'support'],
  reply: () => ({
    text: 'Thank you for thinking of us 💚 Donations fund essential drugs, screening equipment and health education at our outreaches.',
    links: [{ label: 'Make a donation', href: '/contact?topic=donate' }]
  })
},
{
  keywords: ['impact', 'how many', 'reached', 'numbers', 'stats'],
  reply: () => ({
    text: `So far we’ve run ${pastOutreaches.length} outreaches and reached ${people.toLocaleString()} people across Ogun and Lagos States. Our biggest was ${biggest.name} in ${biggest.location}, with ${biggest.peopleReached} people in one day.`,
    links: [{ label: 'See all outreaches', href: '/outreaches' }]
  })
},
{
  keywords: ['outreach', 'next', 'upcoming', 'when', 'where', 'event'],
  reply: () => ({
    text: `We run free medical outreaches in underserved communities. Our most recent was ${latest.name} in ${latest.location}, ${latest.state}. You can see what’s coming up and every past outreach on our Outreaches page.`,
    links: [
    { label: 'Upcoming outreaches', href: '/outreaches#upcoming' },
    { label: 'Past outreaches', href: '/outreaches#past' }]

  })
},
{
  keywords: ['service', 'free', 'test', 'check', 'screen', 'malaria', 'blood', 'pressure', 'sugar', 'glucose', 'medic'],
  reply: () => ({
    text: 'At our outreaches we offer free blood pressure and blood sugar checks, BMI screening, malaria and hepatitis B testing, consultations with a doctor, free medication and health education. Everything is free.',
    links: [{ label: 'Find an outreach', href: '/outreaches#upcoming' }]
  })
},
{
  keywords: ['who', 'about', 'mission', 'vision', 'what do you do', 'tazhealth'],
  reply: () => ({
    text: 'TAZhealth is a nonprofit public health initiative expanding healthcare access in underserved Nigerian communities through medical outreach, health education and advocacy for systemic change.',
    links: [{ label: 'About us', href: '/about' }]
  })
},
{
  keywords: ['team', 'founder', 'ceo', 'staff', 'run'],
  reply: () => ({
    text: `TAZhealth was founded by ${team[0].name}, our ${team[0].role}. The core team also includes ${team.
    slice(1).
    map((m) => `${m.name} (${m.role})`).
    join(', ')}.`,
    links: [{ label: 'Meet the team', href: '/about' }]
  })
},
{
  keywords: ['contact', 'email', 'phone', 'call', 'reach', 'talk', 'human', 'whatsapp'],
  reply: () => ({
    text: `You can email us at ${site.email} or chat with our team directly on WhatsApp.`,
    links: [whatsappLink, { label: 'Contact page', href: '/contact' }]
  })
}];


export function getReply(input: string): BotReply {
  const text = input.toLowerCase();
  const match = rules.find((r) => r.keywords.some((k) => new RegExp(`\\b${k}`).test(text)));
  if (match) return match.reply();
  return {
    text: 'I’m not sure about that one yet. Our team can help you directly.',
    links: [whatsappLink]
  };
}
