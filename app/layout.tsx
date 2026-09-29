import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { SiteLayout } from "@/components/layout/SiteLayout";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "TAZhealth: Continuous Community Care",
  description:
    "Bringing continuous care to underserved Nigerian communities - long after the outreach tent comes down.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${montserrat.variable} antialiased`}>
      <body className="bg-white font-sans text-ink">
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
