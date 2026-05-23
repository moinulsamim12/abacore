"use client";

import { motion } from 'framer-motion';
import { ArrowUpRight, Bot, CalendarDays, Repeat2, Workflow } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';

interface ServiceCardProps {
  iconKey: 'lead-follow-up' | 'crm-workflow' | 'appointment-booking' | 'custom-systems';
  title: string;
  description: string;
  benefit: string;
  outcome: string;
}

const iconMap = {
  'lead-follow-up': Bot,
  'crm-workflow': Workflow,
  'appointment-booking': CalendarDays,
  'custom-systems': Repeat2
} as const;

export function ServiceCard({ iconKey, title, description, benefit, outcome }: ServiceCardProps) {
  const Icon = iconMap[iconKey];

  return (
    <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.35 }} className="group h-full">
      <Card className="relative h-full overflow-hidden border-white/10 bg-white/3 transition-all duration-300 group-hover:border-blue-400/20 group-hover:bg-white/5 group-hover:shadow-[0_28px_80px_rgba(5,8,22,0.6)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.12),transparent_40%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <CardContent className="relative flex h-full flex-col gap-6 p-7">
          <div className="flex items-start justify-between gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/12 bg-white/6 text-blue-100 transition-transform duration-300 group-hover:scale-105 group-hover:bg-blue-500/15">
              <Icon className="h-6 w-6" />
            </div>
            <ArrowUpRight className="h-5 w-5 text-slate-500 transition-colors duration-300 group-hover:text-white" />
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold tracking-tight text-white">{title}</h3>
            <p className="text-sm leading-7 text-slate-300/90">{description}</p>
          </div>

          <div className="mt-auto space-y-4 border-t border-white/10 pt-5">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Business benefit</p>
              <p className="mt-2 text-sm leading-6 text-slate-200/90">{benefit}</p>
            </div>
            <div className="rounded-2xl border border-blue-400/20 bg-blue-500/10 px-4 py-3 text-sm leading-6 text-blue-100/90">
              {outcome}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
