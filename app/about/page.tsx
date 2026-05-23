import type { Metadata } from 'next';

import { AboutStory } from '@/components/about-story';
import { FinalCta } from '@/components/final-cta';
import { ProcessTimeline } from '@/components/process-timeline';
import { SectionHeading } from '@/components/section-heading';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn how Abacore helps global businesses automate growth using AI-first systems, clear strategy, and scalable delivery.'
};

export default function AboutPage() {
  return (
    <>
      <section className="py-24 pt-32 sm:py-32 sm:pt-36">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="About"
            title="A modern AI automation partner built for efficiency and scale"
            description="Abacore helps businesses remove manual friction from the moments that matter most: lead handling, communication, and operational flow."
          />
        </div>
      </section>
      <AboutStory />
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Delivery"
            title="How we approach every engagement"
            description="Our process is designed to stay focused on ROI, speed, and the specific workflow improvements that move the business forward."
          />
          <div className="mt-12">
            <ProcessTimeline />
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
