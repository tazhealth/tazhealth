import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import { SiteLayout } from "@/components/layout/SiteLayout";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "TAZhealth: Continuous Community Care",
  description:
    "Bringing continuous care to underserved Nigerian communities - long after the outreach tent comes down.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${hankenGrotesk.variable} antialiased`}>
      <body className="bg-white font-sans text-ink">
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
