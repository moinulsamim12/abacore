"use client";

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

interface PricingCardProps {
  name: string;
  setup: string;
  monthly: string;
  bestFor: string;
  leadVolume: string;
  features: readonly string[];
  featured?: boolean;
}

export function PricingCard({ name, setup, monthly, bestFor, leadVolume, features, featured }: PricingCardProps) {
  return (
    <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.35 }} className="h-full">
      <Card
        className={
          featured
            ? 'relative h-full overflow-hidden border-blue-400/30 bg-[linear-gradient(180deg,rgba(59,130,246,0.18),rgba(255,255,255,0.04))] shadow-[0_30px_90px_rgba(59,130,246,0.3)]'
            : 'relative h-full overflow-hidden border-white/10 bg-white/3'
        }
      >
        {featured ? (
          <div className="absolute right-5 top-5">
            <Badge className="border-blue-400/30 bg-blue-500/15 text-blue-100/90">Most Popular</Badge>
          </div>
        ) : null}
        <CardHeader className="space-y-5">
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Package</p>
            <h3 className="text-2xl font-semibold text-white">{name}</h3>
            <p className="text-sm leading-6 text-slate-300/90">{bestFor}</p>
          </div>
          <div className="grid grid-cols-2 gap-3 rounded-3xl border border-white/10 bg-slate-950/50 p-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Setup</p>
              <p className="mt-2 text-2xl font-semibold text-white">{setup}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Monthly</p>
              <p className="mt-2 text-2xl font-semibold text-white">{monthly}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-2xl border border-blue-400/20 bg-blue-500/10 px-4 py-3 text-sm text-blue-100/90">
            Lead volume: {leadVolume}
          </div>

          <div className="space-y-3">
            {features.map((feature) => (
              <div key={feature} className="flex items-start gap-3 text-sm leading-6 text-slate-200">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-200">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <Button asChild className="w-full" variant={featured ? 'default' : 'secondary'}>
            <a href="/contact">Book Free Consultation</a>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
