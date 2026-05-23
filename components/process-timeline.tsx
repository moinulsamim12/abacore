"use client";

import { motion } from 'framer-motion';
import { processSteps } from '@/lib/site-data';

export function ProcessTimeline() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {processSteps.map((step, index) => (
        <motion.div
          key={step.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.55, delay: index * 0.1 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/3 p-7 backdrop-blur-2xl"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_40%)]" />
          <div className="relative space-y-4">
            <div className="flex items-center justify-between">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/12 bg-white/6 text-sm font-semibold text-white">
                0{index + 1}
              </span>
              <span className="text-xs uppercase tracking-[0.22em] text-slate-500">Step {index + 1}</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300/90">{step.description}</p>
            </div>
            <div className="rounded-2xl border border-blue-400/20 bg-blue-500/10 px-4 py-3 text-sm text-blue-100/90">
              {step.detail}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
