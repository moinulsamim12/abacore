import type { Metadata } from 'next';

import { ContactForm } from '@/components/contact-form';
import { SectionHeading } from '@/components/section-heading';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Abacore to book a consultation, discuss your automation goals, and explore a premium AI systems build.'
};

export default function ContactPage() {
  return (
    <section className="py-24 pt-32 sm:py-32 sm:pt-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Start a conversation about your automation goals"
          description="Share your current process, the tools you use, and where you want the business to move faster."
        />

        <div className="mt-12">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
