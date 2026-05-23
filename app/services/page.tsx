import type { Metadata } from 'next';

import { FinalCta } from '@/components/final-cta';
import { SectionHeading } from '@/components/section-heading';
import { ServicesSection } from '@/components/services-section';
import { WhyChooseUsSection } from '@/components/why-choose-us';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Explore Abacore services including AI lead follow-up automation, CRM workflow automation, booking systems, and custom AI business systems.'
};

export default function ServicesPage() {
  return (
    <>
      <section className="py-24 pt-32 sm:py-32 sm:pt-36">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Services"
            title="Automation services built to improve conversion, speed, and operational clarity"
            description="Each engagement is scoped to your funnel and delivered with a premium, systems-first approach that fits modern businesses."
          />
        </div>
      </section>
      <ServicesSection />
      <WhyChooseUsSection />
      <FinalCta />
    </>
  );
}
