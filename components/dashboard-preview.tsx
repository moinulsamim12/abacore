"use client";

import { motion } from 'framer-motion';
import { ArrowUpRight, Bot, CalendarClock, CheckCircle2, MessageSquareMore } from 'lucide-react';

const signalNodes = [
  {
    title: 'Intent captured',
    detail: 'AI scoring prioritizes high-fit leads instantly.',
    accent: 'from-[#6EE7F9]/35 to-[#3B82F6]/30',
    icon: Bot
  },
  {
    title: 'Contextual follow-up',
    detail: 'Smart messaging adapts to every prospect path.',
    accent: 'from-[#6EE7F9]/30 to-[#A855F7]/30',
    icon: MessageSquareMore
  },
  {
    title: 'Calendar conversion',
    detail: 'Appointments are auto-booked without delays.',
    accent: 'from-[#3B82F6]/30 to-[#A855F7]/30',
    icon: CalendarClock
  }
] as const;

export function DashboardPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.25 }}
      className="relative overflow-hidden rounded-4xl border border-white/8 bg-white/4 p-6 shadow-[0_30px_120px_rgba(5,8,22,0.6)] backdrop-blur-2xl sm:p-8"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(110,231,249,0.22),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.2),transparent_40%)]" />
      <div className="relative space-y-8">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Abacore Signal Layer</p>
            <h3 className="mt-2 text-xl font-semibold text-slate-50">Autonomous growth orchestration</h3>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-[#6EE7F9]/35 bg-[#6EE7F9]/12 px-3 py-1 text-xs font-medium text-[#6EE7F9]">
            <CheckCircle2 className="h-3.5 w-3.5" />
            Live
          </div>
        </div>

        <div className="rounded-3xl border border-white/8 bg-white/4 p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Lead response velocity</p>
              <p className="mt-2 text-2xl font-semibold text-slate-50">42 sec average</p>
            </div>
            <div className="rounded-full border border-white/8 bg-white/6 px-3 py-1 text-xs uppercase tracking-[0.22em] text-slate-400">
              +31% faster
            </div>
          </div>
          <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
            <motion.div
              initial={{ width: '25%' }}
              animate={{ width: '88%' }}
              transition={{ duration: 1.4, delay: 0.4 }}
              className="h-full rounded-full bg-linear-to-r from-[#6EE7F9] via-[#3B82F6] to-[#A855F7]"
            />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/8 bg-white/4 p-4">
            <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Active sequences</p>
            <p className="mt-2 text-3xl font-semibold text-slate-50">12 workflows</p>
          </div>
          <div className="rounded-2xl border border-white/8 bg-white/4 p-4">
            <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Pipeline impact</p>
            <p className="mt-2 text-3xl font-semibold text-slate-50">$214k influenced</p>
          </div>
        </div>

        <div className="grid gap-3">
          {signalNodes.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.12 }}
                className="rounded-3xl border border-white/8 bg-white/4 p-4"
              >
                <div className="flex items-start gap-3">
                  <div className={`rounded-2xl bg-linear-to-br ${item.accent} p-3 text-white`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-50">{item.title}</p>
                    <p className="mt-1 text-sm text-slate-400">{item.detail}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="flex items-center justify-between rounded-3xl border border-[#6EE7F9]/30 bg-[#6EE7F9]/12 px-4 py-4 text-sm text-[#6EE7F9]">
          <span>See your automation signals update in real time.</span>
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -left-6 bottom-10 hidden rounded-3xl border border-white/8 bg-white/4 px-4 py-3 text-xs uppercase tracking-[0.24em] text-slate-400 backdrop-blur-xl lg:flex"
      >
        Signal integrity: 99.2%
      </motion.div>
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 7.2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -right-4 top-10 hidden rounded-3xl border border-white/8 bg-white/4 px-4 py-3 text-xs uppercase tracking-[0.24em] text-slate-400 backdrop-blur-xl lg:flex"
      >
        Optimization loop: active
      </motion.div>
    </motion.div>
  );
}
