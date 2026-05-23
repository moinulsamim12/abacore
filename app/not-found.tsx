import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-4 py-24 sm:px-6 lg:px-8">
      <div className="max-w-xl space-y-6 text-center">
        <p className="text-sm uppercase tracking-[0.24em] text-slate-400">404</p>
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Page not found</h1>
        <p className="text-base leading-7 text-slate-300">
          The page you were looking for does not exist. Return to the homepage to explore Abacore&apos;s AI automation services.
        </p>
        <Button asChild>
          <Link href="/">Go home</Link>
        </Button>
      </div>
    </section>
  );
}
