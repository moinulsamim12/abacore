import Link from 'next/link';

import { navLinks } from '@/lib/site-data';

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#050816]/80">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="space-y-4">
            <div className="text-2xl font-semibold tracking-tight text-white">Abacore</div>
            <p className="max-w-md text-sm leading-7 text-slate-300/90">
              Building AI systems that power modern businesses.
            </p>
            <p className="max-w-md text-sm leading-7 text-slate-400/90">
              Premium automation for global teams that want faster lead response, stronger conversion rates, and more scalable operations.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-200">Quick Links</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-300/90">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-200">Social</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-300/90">
              <a href="#" className="transition-colors hover:text-white">
                LinkedIn
              </a>
              <a href="#" className="transition-colors hover:text-white">
                X / Twitter
              </a>
              <a href="#" className="transition-colors hover:text-white">
                YouTube
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Abacore. All rights reserved.</p>
          <p>Global AI automation systems for US, UK, Canada, and Australia.</p>
        </div>
      </div>
    </footer>
  );
}
