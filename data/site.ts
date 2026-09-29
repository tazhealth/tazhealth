export type SocialKey = 'instagram' | 'x' | 'linkedin' | 'facebook';

export const site = {
  name: 'TAZhealth',
  mission: 'Bringing continuous care to underserved Nigerian communities - long after the outreach tent comes down.',
  email: 'hello@tazhealth.org',
  phone: '+234 800 000 0000',
  phoneHref: 'tel:+2348000000000',
  whatsappDisplay: '+234 800 000 0000',
  whatsapp: 'https://wa.me/2348000000000?text=Hello%20TAZhealth%2C%20I%27d%20like%20to%20get%20involved.',
  address: 'Ibadan, Oyo State, Nigeria'
};

export const navLinks = [
{ label: 'Home', to: '/' },
{ label: 'About', to: '/about' },
{ label: 'Outreaches', to: '/outreaches' },
// { label: 'TAZ AI', to: '/taz-ai' }, // moving to its own site
{ label: 'Partner', to: '/partner' },
{ label: 'Contact', to: '/contact' }];


export const socials: {key: SocialKey;label: string;href: string;}[] = [
{ key: 'instagram', label: 'Instagram', href: 'https://instagram.com' },
{ key: 'x', label: 'X (Twitter)', href: 'https://x.com' },
{ key: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com' },
{ key: 'facebook', label: 'Facebook', href: 'https://facebook.com' }];


export const partners = [
'Kindred Health Foundation',
'Unity Medical Students’ Assoc.',
'Grace Chapel Health Ministry',
'Oyo Care Network',
'Bloom Pharmacy',
'Ikeja Health Collective',
'Northstar Diagnostics'];