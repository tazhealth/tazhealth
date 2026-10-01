import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'TAZ AI',
  robots: { index: false, follow: false }
};

export default function TazAiLayout({ children }: LayoutProps<'/taz-ai'>) {
  return children;
}
