export type SocialKey = 'instagram' | 'x' | 'linkedin' | 'tiktok' | 'facebook';

export const site = {
  name: 'TAZhealth',
  mission:
  'To improve health outcomes by ensuring equitable healthcare access and equipping individuals with the resources and knowledge needed to make informed health decisions.',
  email: 'tazhealth.ng@gmail.com',
  phone: '+234 800 000 0000',
  phoneHref: 'tel:+2348000000000',
  whatsappDisplay: '+234 800 000 0000',
  whatsapp: 'https://wa.me/2348000000000?text=Hello%20TAZhealth%2C%20I%27d%20like%20to%20get%20involved.',
  address: 'Ibadan, Oyo State, Nigeria',
  chatRoom: 'https://whatsapp.com/channel/0029VbCaEK79cDDjLlKAiX29'
};

export const navLinks = [
{ label: 'Home', to: '/' },
{ label: 'About', to: '/about' },
{ label: 'Outreaches', to: '/outreaches' },
// { label: 'TAZ AI', to: '/taz-ai' }, // moving to its own site
{ label: 'Partner', to: '/partner' },
{ label: 'Contact', to: '/contact' }];


export const socials: {key: SocialKey;label: string;href: string;}[] = [
{ key: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/tazhealth/' },
{ key: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/company/tazhealth/' },
{ key: 'x', label: 'X (Twitter)', href: 'https://x.com/tazhealth' },
{ key: 'tiktok', label: 'TikTok', href: 'https://www.tiktok.com/@tazhealth2' },
{ key: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61587515452205' }];


export const partners = [
'Babcock University Association of Medical Students (BUAMS)',
'Babcock University Teaching Hospital',
'Babcock University Public Health Department',
'EOhealth',
'NiMSA',
'Mirabel Foundation for Health Empowerment',
'The Campus Lifestyle (TCL) Foundation',
'The Cardio Health',
'DaveStar Hospital',
'Agram Pharmacy',
'GlucoVive',
'BMLSIA'];
