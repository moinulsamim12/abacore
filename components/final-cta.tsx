import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';

export function FinalCta() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-4xl border border-white/12 bg-[linear-gradient(135deg,rgba(59,130,246,0.2),rgba(139,92,246,0.18),rgba(255,255,255,0.04))] p-8 shadow-[0_30px_90px_rgba(5,8,22,0.6)] sm:p-10 lg:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(6,182,212,0.2),transparent_35%)]" />
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl space-y-3">
              <p className="text-sm uppercase tracking-[0.28em] text-blue-100/80">Ready to scale?</p>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Book a consultation and map your first automation win</h2>
              <p className="text-base leading-7 text-slate-200/90">
                We&apos;ll help you identify the highest-leverage workflows, estimate the ROI, and design a system your team can actually use.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">
                  Book Free Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
