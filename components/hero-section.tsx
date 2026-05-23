'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  Zap,
  TrendingUp,
  Settings,
  Stars
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const heroStats = [
  {
    value: '95%',
    label: 'Faster Lead Response',
    icon: Zap,
    glow: 'from-cyan-400/20 to-cyan-500/5',
    iconColor: 'text-cyan-300'
  },
  {
    value: '30-50%',
    label: 'Increase In Conversions',
    icon: TrendingUp,
    glow: 'from-blue-400/20 to-blue-500/5',
    iconColor: 'text-blue-300'
  },
  {
    value: '80%',
    label: 'Manual Tasks Automated',
    icon: Settings,
    glow: 'from-purple-400/20 to-purple-500/5',
    iconColor: 'text-purple-300'
  }
];

export function HeroSection() {
  return (
    <section className="relative overflow-x-hidden pt-32 sm:pt-36 lg:pt-40">
      
      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(110,231,249,0.14),transparent_34%),radial-gradient(circle_at_18%_18%,rgba(168,85,247,0.10),transparent_28%),radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.10),transparent_32%)]" />

        <div className="absolute left-1/2 top-0 h-128 w-lg -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="absolute right-0 top-40 h-72 w-72 translate-x-1/3 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      {/* Main */}
      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 pb-24 text-center">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-7"
        >

          {/* NEW PREMIUM BADGE */}
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/4 px-6 py-3 backdrop-blur-2xl shadow-[0_8px_40px_rgba(59,130,246,0.12)]">
            
            <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-br from-cyan-400 via-blue-500 to-purple-500 shadow-[0_0_25px_rgba(59,130,246,0.45)]">
              
              <div className="absolute inset-0 rounded-full bg-linear-to-br from-cyan-400 to-purple-500 blur-md opacity-60" />

              <Stars className="relative z-10 h-4 w-4 text-white" />
            </div>

            <p className="text-sm font-medium tracking-[-0.02em] text-white sm:text-[15px]">
              <span className="bg-linear-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
                ABACORE
              </span>{' '}
              builds AI systems that turn traffic into revenue
            </p>
          </div>

          {/* Heading */}
          <h1 className="mx-auto max-w-5xl text-[42px] font-semibold leading-[1.02] tracking-[-0.02em] text-white sm:text-[56px] lg:text-[68px]">
            
            AI Automation Systems
            <br />

            That Help Businesses

            <br />

            <span className="bg-linear-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Capture More Leads
            </span>

            <span className="text-white">
              {' '}and
            </span>

            <br />

            <span className="bg-linear-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Scale Faster
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto max-w-2xl text-[16px] leading-8 text-slate-400 sm:text-[18px]">
            We build intelligent AI automation systems that automate
            lead follow-ups, CRM workflows, appointment booking,
            and customer communication.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Button
            asChild
            size="lg"
            className="h-14 rounded-full bg-linear-to-r from-cyan-400 to-purple-500 px-9 text-[15px] font-medium text-black shadow-[0_12px_45px_rgba(59,130,246,0.35)] transition-all duration-300 hover:scale-[1.02] hover:opacity-90"
          >
            <Link href="/contact">
              Book Free Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="secondary"
            className="h-14 rounded-full border border-white/10 bg-white/3 px-9 text-[15px] text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/6"
          >
            <Link href="/services">
              View Services
            </Link>
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-20 grid w-full max-w-5xl gap-5 md:grid-cols-3"
        >
          {heroStats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/3 p-7 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-white/5"
              >
                {/* Glow */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${stat.glow} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />

                <div className="relative flex items-center gap-5">
                  
                  {/* Icon */}
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/4">
                    <Icon className={`h-7 w-7 ${stat.iconColor}`} />
                  </div>

                  {/* Text */}
                  <div className="text-left">
                    <p className="text-[38px] font-semibold leading-none tracking-tighter text-white">
                      {stat.value}
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-14 flex items-center gap-4 text-[11px] uppercase tracking-[0.26em] text-slate-500"
        >
          <div className="h-px w-14 bg-white/10" />

          <p>
            Trusted By Forward-Thinking Teams Worldwide
          </p>

          <div className="h-px w-14 bg-white/10" />
        </motion.div>
      </div>
    </section>
  );
}