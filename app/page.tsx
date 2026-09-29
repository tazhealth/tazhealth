import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
import { HomeHero } from '@/components/home/HomeHero';
import { ProblemSection } from '@/components/home/ProblemSection';
import { ImpactSection } from '@/components/home/ImpactSection';
import { WhatWeDo } from '@/components/home/WhatWeDo';
import { TazAiFeature } from '@/components/home/TazAiFeature';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { PartnersStrip } from '@/components/home/PartnersStrip';
import { GalleryGrid } from '@/components/ui/GalleryGrid';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CtaBand } from '@/components/ui/CtaBand';
import { gallery } from '@/data/images';

export default function Home() {
  return (
    <>
      <HomeHero />
      <ProblemSection />
      <ImpactSection />
      <WhatWeDo />
      <TazAiFeature />

      <section className="bg-white pb-20 lg:pb-28" aria-labelledby="gallery-title">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading id="gallery-title" title="Scenes from the field." intro="Tap any photo to see it up close." />
            <Link href="/outreaches" className="inline-flex items-center gap-2 font-medium text-leaf hover:text-forest">
              All outreaches <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10">
            <GalleryGrid images={gallery.slice(0, 6)} />
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <PartnersStrip />
      <CtaBand
        title="Help us keep the heartbeat going."
        text="Volunteer at an outreach, make follow-up calls from home, or partner with us to bring continuous care to more communities." />

    </>);

}
