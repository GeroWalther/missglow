'use client';
import React, { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { useLanguage } from '@/contexts/LanguageProvider';
import { Loader2, Sparkles } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

function Subscribe() {
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
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className='py-24 md:py-32 surface-petal'>
      <div className='container-page'>
        <Reveal className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start'>
          {/* Copy */}
          <div className='lg:col-span-5'>
            <p className='eyebrow mb-5'>
              {isDE ? 'Newsletter · 15 % Rabatt' : 'Newsletter · 15% off'}
            </p>
            <h2 className='display-sm text-clay text-balance'>
              {isDE ? (
                <>
                  Werde Teil des{' '}
                  <em className='italic text-bloom font-light'>Glow Clubs</em>.
                </>
              ) : (
                <>
                  Join the{' '}
                  <em className='italic text-bloom font-light'>Glow Club</em>.
                </>
              )}
            </h2>
            <p className='mt-6 text-clay-soft text-base md:text-lg leading-relaxed'>
              {isDE
                ? 'Genieße 15 % Rabatt auf deine erste Bestellung — plus Erstzugang zu neuen Produkten, Events und Beauty-Tipps.'
                : 'Enjoy 15% off your first order — plus first access to new products, events and beauty tips.'}
            </p>
            <ul className='mt-8 space-y-3 text-sm text-clay'>
              {[
                isDE
                  ? 'Einführung neuer Produkte'
                  : 'Introduction to new products',
                isDE ? 'Bevorstehende Live-Events' : 'Upcoming live-events',
                isDE ? 'Fachkundige Beratung' : 'Expert advice',
                isDE
                  ? 'Kundenkarte mit exklusiven Rabatten'
                  : 'Loyalty card with exclusive discounts',
              ].map((item) => (
                <li key={item} className='flex items-start gap-3'>
                  <Sparkles className='h-4 w-4 text-bloom mt-0.5 shrink-0' />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <form
            onSubmit={subscribe}
            className='lg:col-span-7 bg-background rounded-[1.75rem] p-8 md:p-10 border border-clay/10 shadow-[0_30px_80px_-40px_rgba(56,35,35,0.25)]'>
            <div className='space-y-5'>
              <FormField
                id='subscribe-name'
                label={isDE ? 'Name' : 'Name'}
                inputRef={inputName}
                type='text'
                required
              />
              <FormField
                id='subscribe-email'
                label='E-Mail'
                inputRef={inputEl}
                type='email'
                required
              />
              <FormField
                id='subscribe-email-confirm'
                label={isDE ? 'E-Mail bestätigen' : 'Confirm e-mail'}
                inputRef={inputElRep}
                type='email'
                required
              />
            </div>

            <p className='mt-6 text-xs text-clay-soft/85 leading-relaxed'>
              {isDE
                ? '* Kein Spam. Mit dem Klick auf „Einschreiben" akzeptierst du unsere Datenschutzbestimmungen und Nutzungsbedingungen. Die Kundenkarte ist auf Anfrage beim Kundenservice erhältlich.'
                : '* No spam. By clicking "Subscribe" you accept our privacy policy and terms of use. The loyalty card is available on request from customer service.'}
            </p>

            <Button
              type='submit'
              variant='bloom'
              size='lg'
              className='mt-6 w-full'
              disabled={isLoading}>
              {isLoading && <Loader2 size={18} className='animate-spin mr-2' />}
              {isDE ? 'Einschreiben' : 'Subscribe'}
            </Button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function FormField({
  id,
  label,
  inputRef,
  type,
  required,
}: {
  id: string;
  label: string;
  inputRef: React.MutableRefObject<HTMLInputElement | null>;
  type: string;
  required?: boolean;
}) {
  return (
    <div className='relative'>
      <input
        id={id}
        ref={inputRef}
        type={type}
        required={required}
        placeholder=' '
        className='peer w-full h-14 px-5 pt-5 pb-1 rounded-xl border border-clay/15 bg-background text-clay placeholder-transparent focus:outline-none focus:border-bloom focus:ring-2 focus:ring-bloom/15 transition-all duration-300'
      />
      <label
        htmlFor={id}
        className='absolute left-5 top-1.5 text-[0.65rem] font-mono uppercase tracking-[0.18em] text-clay-soft peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:font-sans peer-placeholder-shown:tracking-normal peer-focus:top-1.5 peer-focus:text-[0.65rem] peer-focus:font-mono peer-focus:uppercase peer-focus:tracking-[0.18em] peer-focus:text-bloom transition-all duration-300 pointer-events-none'>
        {label}
      </label>
    </div>
  );
}

export default Subscribe;
