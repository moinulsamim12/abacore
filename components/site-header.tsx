'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { navLinks } from '@/lib/site-data';
import { cn } from '@/lib/utils';

export function SiteHeader() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, {
      passive: true
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b backdrop-blur-2xl transition-all duration-500',
        isScrolled
          ? 'border-white/8 bg-[#050816]/90 shadow-[0_20px_60px_rgba(5,8,22,0.5)]'
          : 'border-transparent bg-transparent'
      )}
    >
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/8 bg-white/6 shadow-[0_12px_30px_rgba(5,8,22,0.55)] transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
            <span className="text-lg font-semibold text-slate-50">
              A
            </span>
          </div>
        
          <div>
            <div className="text-lg font-semibold tracking-tight text-slate-50">
              Abacore
            </div>

            <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
              AI Automation Agency
            </p>
          </div>
        </Link> */}
        <Link href="/" className="flex items-center gap-3">
    <Image
    src="/logo.png"
    alt="Abacore Logo"
    width={42}
    height={42}
    className="h-10 w-auto"
    priority
  />

  <span className="text-xl font-semibold tracking-[-0.03em] text-white">
    Abacore
  </span>
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'rounded-full px-4 py-2 text-sm transition-colors duration-300',
                  active
                    ? 'bg-white/8 text-slate-50'
                    : 'text-slate-400 hover:bg-white/5 hover:text-slate-50'
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild size="sm">
            <Link href="/contact">
              Book Free Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <Button
          type="button"
          variant="secondary"
          size="sm"
          className="lg:hidden"
          onClick={() => setMenuOpen((value) => !value)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? (
            <X className="h-4 w-4" />
          ) : (
            <Menu className="h-4 w-4" />
          )}
        </Button>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="border-t border-white/10 bg-[#050816]/95 px-4 py-4 backdrop-blur-2xl lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-2 sm:px-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    'rounded-2xl px-4 py-3 text-sm transition-colors duration-300',
                    pathname === link.href
                      ? 'bg-white/8 text-white'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  )}
                >
                  {link.label}
                </Link>
              ))}

              <Button asChild className="mt-2 w-full">
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                >
                  Book Free Consultation
                </Link>
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}