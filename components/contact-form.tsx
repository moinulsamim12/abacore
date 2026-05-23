"use client";

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, Mail, Send } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { contactChannels } from '@/lib/site-data';

type FormState = {
  fullName: string;
  email: string;
  company: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  fullName: '',
  email: '',
  company: '',
  message: ''
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);

  const errors = useMemo<FormErrors>(() => {
    const nextErrors: FormErrors = {};

    if (!form.fullName.trim()) nextErrors.fullName = 'Please enter your full name.';
    if (!form.company.trim()) nextErrors.company = 'Tell us about your company.';
    if (!form.message.trim() || form.message.trim().length < 20) {
      nextErrors.message = 'Share a little more detail about your goal.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = 'Enter a valid email address.';

    return nextErrors;
  }, [form]);

  const hasErrors = Object.keys(errors).length > 0;

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setSubmitted(false);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTouched({ fullName: true, email: true, company: true, message: true });

    if (Object.keys(errors).length > 0) return;

    setSubmitted(true);
    setForm(initialState);
    setTouched({});
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-5"
      >
        {contactChannels.map((channel) => (
          <Card key={channel.title} className="border-white/10 bg-white/3">
            <CardContent className="flex items-start gap-4 p-6">
              <div className="mt-0.5 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/12 bg-white/6 text-blue-100">
                {channel.title === 'Book a consultation' ? (
                  <Send className="h-5 w-5" />
                ) : channel.title === 'Email automation support' ? (
                  <Mail className="h-5 w-5" />
                ) : (
                  <CalendarDays className="h-5 w-5" />
                )}
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">{channel.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300/90">{channel.detail}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <Card className="border-white/10 bg-white/3">
          <CardHeader className="space-y-3">
            <p className="text-sm uppercase tracking-[0.22em] text-slate-400">Send a message</p>
            <h3 className="text-2xl font-semibold text-white">Let&apos;s design the right automation system</h3>
            <p className="text-sm leading-7 text-slate-300/90">
              Share a few details about your business and we&apos;ll respond with a strategy conversation and next steps.
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  label="Full Name"
                  value={form.fullName}
                  placeholder="Your name"
                  error={touched.fullName ? errors.fullName : undefined}
                  onBlur={() => setTouched((current) => ({ ...current, fullName: true }))}
                  onChange={(value) => updateField('fullName', value)}
                />
                <Field
                  label="Email"
                  value={form.email}
                  placeholder="you@company.com"
                  error={touched.email ? errors.email : undefined}
                  onBlur={() => setTouched((current) => ({ ...current, email: true }))}
                  onChange={(value) => updateField('email', value)}
                />
              </div>

              <Field
                label="Company"
                value={form.company}
                placeholder="Company name"
                error={touched.company ? errors.company : undefined}
                onBlur={() => setTouched((current) => ({ ...current, company: true }))}
                onChange={(value) => updateField('company', value)}
              />

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-200">Message</label>
                <Textarea
                  value={form.message}
                  placeholder="Tell us what you want to automate and what success looks like."
                  onBlur={() => setTouched((current) => ({ ...current, message: true }))}
                  onChange={(event) => updateField('message', event.target.value)}
                  className={touched.message && errors.message ? 'border-rose-400/40 focus:border-rose-400/60 focus:ring-rose-400/20' : ''}
                />
                {touched.message && errors.message ? <p className="text-sm text-rose-300">{errors.message}</p> : null}
              </div>

              <Button type="submit" className="w-full" disabled={hasErrors && Object.values(touched).some(Boolean)}>
                Book Free Consultation
                <Send className="h-4 w-4" />
              </Button>

              <p className="text-xs leading-6 text-slate-400">
                By submitting this form, you agree to be contacted about your inquiry. Calendly integration placeholder available for live booking.
              </p>
              {submitted ? (
                <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-100">
                  Thanks. Your message has been prepared for automation routing and we&apos;ll be in touch shortly.
                </div>
              ) : null}
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

interface FieldProps {
  label: string;
  value: string;
  placeholder: string;
  error?: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
}

function Field({ label, value, placeholder, error, onChange, onBlur }: FieldProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-slate-200">{label}</label>
      <Input
        value={value}
        placeholder={placeholder}
        onBlur={onBlur}
        onChange={(event) => onChange(event.target.value)}
        className={error ? 'border-rose-400/40 focus:border-rose-400/60 focus:ring-rose-400/20' : ''}
      />
      {error ? <p className="text-sm text-rose-300">{error}</p> : null}
    </div>
  );
}
