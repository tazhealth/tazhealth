import { site, socials } from '../data/site';

/** Public address of the live site. Override with NEXT_PUBLIC_SITE_URL if the domain changes. */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.tazhealth.org').replace(/\/$/, '');

export const SITE_DESCRIPTION =
'TAZhealth is a Nigerian nonprofit expanding healthcare access in underserved communities through free medical outreaches, health education and advocacy.';

export const KEYWORDS = [
'TAZhealth',
'free medical outreach Nigeria',
'community health Nigeria',
'nonprofit healthcare Nigeria',
'health outreach Ogun State',
'health outreach Lagos',
'free health screening',
'health education',
'volunteer doctors Nigeria',
'public health initiative'];


/** schema.org description of TAZhealth, rendered once in the root layout. */
export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'NGO',
  '@id': `${SITE_URL}/#organization`,
  name: 'TAZhealth Initiative',
  alternateName: 'TAZhealth',
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  image: `${SITE_URL}/opengraph-image`,
  description: SITE_DESCRIPTION,
  email: site.email,
  foundingDate: '2025-04',
  areaServed: { '@type': 'Country', name: 'Nigeria' },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Plot 2 Citiscape Villa, Asokoro Extension',
    addressLocality: 'Abuja',
    addressCountry: 'NG'
  },
  sameAs: socials.map((s) => s.href)
};


export const breadcrumbJsonLd = (items: {name: string;path: string;}[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: `${SITE_URL}${item.path === '/' ? '' : item.path}`
  }))
});

/** Serialises JSON-LD safely for a <script> tag. */
export const jsonLdScript = (data: unknown) => ({ __html: JSON.stringify(data).replace(/</g, '\\u003c') });
