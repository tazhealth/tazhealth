import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { KEYWORDS, SITE_DESCRIPTION, SITE_URL, jsonLdScript, organizationJsonLd, websiteJsonLd } from "@/utils/seo";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "TAZhealth | Free Medical Outreaches for Underserved Nigerian Communities",
    template: "%s · TAZhealth",
  },
  description: SITE_DESCRIPTION,
  keywords: KEYWORDS,
  applicationName: "TAZhealth",
  authors: [{ name: "TAZhealth Initiative", url: SITE_URL }],
  creator: "TAZhealth Initiative",
  publisher: "TAZhealth Initiative",
  category: "health",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: "TAZhealth",
    title: "TAZhealth | Free Medical Outreaches for Underserved Nigerian Communities",
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    site: "@tazhealth",
    creator: "@tazhealth",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  formatDetection: { telephone: false },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${montserrat.variable} antialiased`}>
      <body className="bg-white font-sans text-ink">
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(organizationJsonLd)} />
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(websiteJsonLd)} />
        <SiteLayout>{children}</SiteLayout>
        <Analytics />
      </body>
    </html>
  );
}
