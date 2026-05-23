import type { Metadata } from 'next';

import { FinalCta } from '@/components/final-cta';
import { PricingSection } from '@/components/pricing-section';
import { SectionHeading } from '@/components/section-heading';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'View Abacore pricing packages for starter, growth, and scale automation systems with clear setup and monthly investment.'
};

export default function PricingPage() {
  return (
    <>
      <section className="py-24 pt-32 sm:py-32 sm:pt-36">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Pricing"
            title="Transparent pricing for premium automation delivery"
            description="Choose a package that fits your current lead volume, then expand as you need more workflows, integrations, and operational support."
          />
        </div>
      </section>
      <PricingSection />
      <section className="pb-8 pt-0 sm:pb-12">
        <div className="mx-auto max-w-4xl px-4 text-center text-sm leading-7 text-slate-400 sm:px-6 lg:px-8">
          Setup pricing covers strategy, implementation, and launch. Monthly retainers cover monitoring, optimization, and ongoing support.
        </div>
      </section>
      <FinalCta />
    </>
  );
}
