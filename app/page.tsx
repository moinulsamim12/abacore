import type { Metadata } from 'next';

import { CaseStudiesSection } from '@/components/case-studies';
import { FinalCta } from '@/components/final-cta';
import { HeroSection } from '@/components/hero-section';
import { ProcessTimeline } from '@/components/process-timeline';
import { ServicesSection } from '@/components/services-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { WhyChooseUsSection } from '@/components/why-choose-us';

export const metadata: Metadata = {
  title: 'Abacore | AI Automation Agency',
  description:
    'Abacore builds AI automation systems that help businesses capture more leads, improve conversion rates, and scale faster.'
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm uppercase tracking-[0.22em] text-blue-100/80">Process</p>
            <h2 className="text-4xl font-semibold tracking-[-0.02em] text-white sm:text-5xl lg:text-6xl">
              A simple three-step workflow that keeps implementation fast and strategic
            </h2>
            <p className="text-base leading-8 text-slate-300/90 sm:text-lg">
              We keep delivery focused on the fastest high-ROI automation opportunities so you see value quickly and retain full visibility into the system.
            </p>
          </div>
          <div className="mt-12">
            <ProcessTimeline />
          </div>
        </div>
      </section>
      <WhyChooseUsSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <FinalCta />
    </>
  );
}
