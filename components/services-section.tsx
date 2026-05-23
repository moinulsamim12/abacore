import { ArrowUpRight } from 'lucide-react';

import { SectionHeading } from '@/components/section-heading';
import { ServiceCard } from '@/components/service-card';
import { services } from '@/lib/site-data';

const serviceIcons = ['lead-follow-up', 'crm-workflow', 'appointment-booking', 'custom-systems'] as const;

export function ServicesSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="High-impact systems designed to convert attention into revenue"
          description="Abacore builds automation systems that improve response time, reduce manual work, and create a smoother path from lead to booked conversation."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((service, index) => {
            return (
              <ServiceCard
                key={service.title}
                iconKey={serviceIcons[index]}
                title={service.title}
                description={service.description}
                benefit={service.benefit}
                outcome={service.outcome}
              />
            );
          })}
        </div>

        <div className="mt-10 flex items-center justify-between rounded-3xl border border-white/10 bg-white/4 px-6 py-4 text-sm text-slate-300/90">
          <span>Custom systems are scoped around your funnel, team structure, and growth target.</span>
          <ArrowUpRight className="h-4 w-4 text-slate-500" />
        </div>
      </div>
    </section>
  );
}
