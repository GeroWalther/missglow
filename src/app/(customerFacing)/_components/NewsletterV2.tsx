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
    <section className='relative isolate overflow-hidden bg-emerald-100 text-green-900 border-y border-emerald-300'>
      <div className='container-page-v2 relative py-20 sm:py-24'>
        <div className='grid gap-12 lg:grid-cols-12 items-center'>
          <div className='lg:col-span-7'>
            <p
              className='text-xs uppercase tracking-[0.22em] text-green-900/70 mb-6'
              style={{ fontFamily: 'var(--font-mono)' }}>
              {isDE
                ? 'Newsletter · Glow Club exklusiv'
                : 'Newsletter · Glow Club exclusive'}
            </p>

            {/* HUGE −15 % */}
            <div className='flex items-baseline gap-2 sm:gap-4 flex-wrap leading-none'>
              <span
                className='font-bold tracking-[-0.04em] leading-none'
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(6rem, 18vw, 14rem)',
                }}>
                −15
              </span>
              <span
                className='font-bold tracking-[-0.02em] leading-none'
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(3.5rem, 10vw, 8rem)',
                }}>
                %
              </span>
            </div>

            <h2
              className='mt-8 text-2xl sm:text-3xl uppercase tracking-tight'
              style={{ fontFamily: 'var(--font-poppins)' }}>
              {isDE ? 'Werde Teil des Glow Clubs.' : 'Join the Glow Club.'}
            </h2>
            <p className='mt-4 text-base sm:text-lg text-green-900/80 leading-relaxed max-w-xl'>
              {isDE
                ? 'Sichere dir 15 % auf deine erste Bestellung — plus exklusive Vorteile und Erstzugang zu neuen Produkten.'
                : 'Get 15% off your first order — plus exclusive perks and first access to new products.'}
            </p>
            <ul className='mt-6 space-y-2 text-sm text-green-900/80 max-w-md'>
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
              className='bg-background text-foreground border border-border rounded-md p-6 sm:p-8 space-y-4 shadow-xl'>
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
                className='w-full h-11 rounded-md bg-green-900 text-emerald-100 text-sm font-semibold uppercase tracking-wide hover:bg-green-800 transition-colors disabled:opacity-50 inline-flex items-center justify-center gap-2'>
                {isLoading && <Loader2 size={16} className='animate-spin' />}
                {isDE ? 'Einschreiben' : 'Subscribe'}
              </button>
            </form>
            <p className='mt-3 text-xs text-green-900/70'>
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
