'use client';

import React, { useRef, useState } from 'react';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageProvider';

export default function NewsletterV2() {
  const { language } = useLanguage();
  const isDE = language === 'de';
  const inputEl = useRef<HTMLInputElement | null>(null);
  const inputElRep = useRef<HTMLInputElement | null>(null);
  const inputName = useRef<HTMLInputElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const subscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const email = inputEl.current?.value ?? '';
    const repeatEmail = inputElRep.current?.value ?? '';
    const emailIsValid = email === repeatEmail;
    try {
      const res = await fetch('/api/subscribe', {
        body: JSON.stringify({
          email,
          name: inputName.current?.value,
          emailIsValid,
        }),
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
      });
      const { msg, error } = await res.json();
      if (error) toast.error(error);
      if (msg) toast.success(msg);
      if (inputEl.current) inputEl.current.value = '';
      if (inputElRep.current) inputElRep.current.value = '';
      if (inputName.current) inputName.current.value = '';
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className='border-y border-border bg-blush/60'>
      <div className='container-page-v2 py-20 sm:py-24'>
        <div className='grid gap-10 lg:grid-cols-12 items-center'>
          <div className='lg:col-span-7 space-y-5'>
            <p
              className='text-xs uppercase tracking-[0.18em] text-muted-foreground'
              style={{ fontFamily: 'var(--font-mono)' }}>
              {isDE ? 'Newsletter · 15 % Rabatt' : 'Newsletter · 15% off'}
            </p>
            <h2 className='display-v2 text-3xl sm:text-5xl'>
              {isDE
                ? 'Werde Teil des Glow Clubs.'
                : 'Join the Glow Club.'}
            </h2>
            <p className='text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl'>
              {isDE
                ? 'Sichere dir 15 % auf deine erste Bestellung — plus exklusive Vorteile und Erstzugang zu neuen Produkten.'
                : 'Get 15% off your first order — plus exclusive perks and first access to new products.'}
            </p>
            <ul className='space-y-2 text-sm text-foreground/80 max-w-md'>
              <li className='flex items-start gap-2'>
                <span className='text-bloom-deep font-semibold'>•</span>
                {isDE
                  ? 'Einführung neuer Produkte'
                  : 'First access to new products'}
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-bloom-deep font-semibold'>•</span>
                {isDE ? 'Bevorstehende Live-Events' : 'Upcoming live events'}
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-bloom-deep font-semibold'>•</span>
                {isDE ? 'Fachkundige Beratung' : 'Expert advice'}
              </li>
            </ul>
          </div>
          <div className='lg:col-span-5'>
            <form
              onSubmit={subscribe}
              className='bg-background border border-border rounded-md p-6 sm:p-8 space-y-4'>
              <input
                ref={inputName}
                type='text'
                placeholder={isDE ? 'Name' : 'Name'}
                required
                className='w-full h-11 px-4 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-bloom-deep'
              />
              <input
                ref={inputEl}
                type='email'
                placeholder='E-Mail'
                required
                className='w-full h-11 px-4 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-bloom-deep'
              />
              <input
                ref={inputElRep}
                type='email'
                placeholder={isDE ? 'E-Mail bestätigen' : 'Confirm e-mail'}
                required
                className='w-full h-11 px-4 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-bloom-deep'
              />
              <button
                type='submit'
                disabled={isLoading}
                className='w-full h-11 rounded-md bg-bloom-deep text-background text-sm font-semibold uppercase tracking-wide hover:opacity-90 transition-opacity disabled:opacity-50 inline-flex items-center justify-center gap-2'>
                {isLoading && <Loader2 size={16} className='animate-spin' />}
                {isDE ? 'Einschreiben' : 'Subscribe'}
              </button>
            </form>
            <p className='mt-3 text-xs text-muted-foreground'>
              {isDE
                ? '* Kein Spam. Du akzeptierst unsere Datenschutzbestimmungen.'
                : '* No spam. You agree to our privacy policy.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
