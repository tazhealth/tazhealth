import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Outreaches',
  description:
  'See our upcoming free medical outreach and every outreach so far, from Abeokuta to Sagamu: screenings, consultations, medicine and health education.',
  alternates: { canonical: '/outreaches' }
};

export default function OutreachesLayout({ children }: LayoutProps<'/outreaches'>) {
  return children;
}
