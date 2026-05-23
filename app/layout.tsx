import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { cn } from '@/lib/utils';

import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://abacore.tech'),
  title: {
    default: 'Abacore | AI Automation Agency',
    template: '%s | Abacore'
  },
  description:
    'Abacore builds premium AI automation systems that help businesses capture more leads, increase conversions, and scale operations faster.',
  applicationName: 'Abacore',
  keywords: [
    'AI automation agency',
    'lead follow-up automation',
    'CRM automation',
    'workflow automation',
    'AI booking systems'
  ],
  openGraph: {
    title: 'Abacore | AI Automation Agency',
    description:
      'Premium AI automation systems for businesses that want faster lead response, better conversions, and scalable operations.',
    url: 'https://abacore.tech',
    siteName: 'Abacore',
    type: 'website',
    images: ['/opengraph-image']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abacore | AI Automation Agency',
    description:
      'Premium AI automation systems for businesses that want faster lead response, better conversions, and scalable operations.',
    images: ['/opengraph-image']
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={cn(inter.variable, 'dark scroll-smooth')}
      suppressHydrationWarning
    >
      <body className="font-sans bg-[#050816] text-white antialiased">
        <div className="relative isolate min-h-screen overflow-x-hidden">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,#050816_0%,#0a0f1c_45%,#101826_100%)]" />
          <div className="pointer-events-none absolute -left-24 -top-72 -z-10 h-136 w-136 rounded-full bg-[radial-gradient(circle,rgba(110,231,249,0.28),transparent_60%)] blur-3xl" />
          <div className="pointer-events-none absolute -right-40 top-40 -z-10 h-120 w-120 rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.26),transparent_60%)] blur-3xl" />
          <div className="pointer-events-none absolute inset-x-0 -bottom-80 -z-10 h-112 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.22),transparent_60%)] blur-3xl" />

          <SiteHeader />

          <main >{children}</main>

          <SiteFooter />
        </div>
      </body>
    </html>
  );
}