import { SectionHeading } from '@/components/section-heading';
import { PricingCard } from '@/components/pricing-card';
import { pricingPlans } from '@/lib/site-data';

export function PricingSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Pricing"
          title="Clear, premium pricing for teams that want automation with ROI"
          description="Choose the package that matches your lead volume and complexity today, then scale into more advanced workflows as the business grows."
          centered
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <PricingCard
              key={plan.name}
              name={plan.name}
              setup={plan.setup}
              monthly={plan.monthly}
              bestFor={plan.bestFor}
              leadVolume={plan.leadVolume}
              features={plan.features}
              featured={plan.featured}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
