import { ArrowUpRight, Globe2, Layers3, Rocket, ShieldCheck, Sparkles, Zap } from 'lucide-react';

import { SectionHeading } from '@/components/section-heading';
import { whyChooseUs } from '@/lib/site-data';

const icons = [ShieldCheck, Zap, Sparkles, Rocket, Layers3, Globe2] as const;

export function WhyChooseUsSection() {
  return (
    <section className="border-y border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="A premium automation partner focused on measurable business outcomes"
          description="Abacore combines strategy, systems thinking, and modern AI integrations to build reliable workflows that scale with your operation."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {whyChooseUs.map((item, index) => {
            const Icon = icons[index];

            return (
              <div
                key={item}
                className="group rounded-3xl border border-white/10 bg-white/3 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/20 hover:bg-white/5 hover:shadow-[0_22px_70px_rgba(5,8,22,0.6)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/12 bg-white/6 text-blue-100 transition-colors group-hover:bg-blue-500/15">
                    <Icon className="h-5 w-5" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-slate-500 transition-colors group-hover:text-white" />
                </div>
                <p className="mt-5 text-lg font-medium tracking-tight text-white">{item}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
