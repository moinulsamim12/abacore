import { ArrowUpRight, Globe2, ShieldCheck, Sparkles, Target } from 'lucide-react';

import { SectionHeading } from '@/components/section-heading';
import { Card, CardContent } from '@/components/ui/card';

const pillars = [
  {
    icon: Target,
    title: 'Mission-led execution',
    description: 'We automate growth in a way that is tied to commercial outcomes, not just technical novelty.'
  },
  {
    icon: Sparkles,
    title: 'Modern AI-first approach',
    description: 'Every system is built to take advantage of current AI capabilities while remaining stable and maintainable.'
  },
  {
    icon: Globe2,
    title: 'International mindset',
    description: 'Our delivery model is built for global clients across US, UK, Canada, and Australia.'
  },
  {
    icon: ShieldCheck,
    title: 'Reliable architecture',
    description: 'We prioritize clarity, scalability, and operational resilience so the systems keep working as you grow.'
  }
] as const;

export function AboutStory() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About Abacore"
          title="We build AI systems that turn operational complexity into commercial clarity"
          description="Abacore exists to help ambitious businesses automate the parts of growth that should not depend on manual effort."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Card className="border-white/10 bg-white/3">
            <CardContent className="space-y-5 p-7">
              <p className="text-sm uppercase tracking-[0.22em] text-slate-400">Our story</p>
              <p className="text-sm leading-7 text-slate-300/90">
                We help businesses move faster by connecting AI, workflow design, and CRM logic into systems that feel bespoke and dependable.
              </p>
              <p className="text-sm leading-7 text-slate-300/90">
                The result is not just more automation. It is a cleaner revenue operation, faster response times, and a business that scales without adding unnecessary overhead.
              </p>
              <div className="flex items-center gap-3 rounded-2xl border border-blue-400/20 bg-blue-500/10 px-4 py-3 text-sm text-blue-100/90">
                <ArrowUpRight className="h-4 w-4" />
                Built for efficiency, scalability, and premium client experiences.
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 sm:grid-cols-2">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <Card
                  key={pillar.title}
                  className="border-white/10 bg-white/3 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/20 hover:bg-white/5 hover:shadow-[0_24px_80px_rgba(5,8,22,0.6)]"
                >
                  <CardContent className="space-y-4 p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/12 bg-white/6 text-blue-100">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{pillar.title}</h3>
                    <p className="text-sm leading-7 text-slate-300/90">{pillar.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
