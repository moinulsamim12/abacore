"use client";

import { motion } from 'framer-motion';

import { SectionHeading } from '@/components/section-heading';
import { caseStudies } from '@/lib/site-data';

export function CaseStudiesSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Case Studies"
          title="Realistic results that reflect the kind of outcomes AI automation can unlock"
          description="These demo-style results show the commercial impact clients typically want from a premium automation partner."
          centered
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              className="rounded-3xl border border-white/10 bg-white/3 p-7 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/20 hover:bg-white/5 hover:shadow-[0_24px_80px_rgba(5,8,22,0.6)]"
            >
              <p className="text-3xl font-semibold tracking-tight text-white">{study.metric}</p>
              <h3 className="mt-4 text-xl font-semibold text-white">{study.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{study.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
