'use client';
import { useLanguage } from '@/contexts/LanguageProvider';
import { buttonVariants } from '../../ui/button';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function HeroComp() {
  const { language } = useLanguage();
  const reduce = useReducedMotion();

  const headlineLines =
    language === 'de'
      ? ['Die moderne', 'Naturkosmetik.']
      : ['The modern', 'natural cosmetics.'];

  return (
    <section className='relative isolate overflow-hidden pt-12 md:pt-20 pb-24 md:pb-36'>
      {/* Soft gradient blobs */}
      <div
        aria-hidden
        className='blob-bloom absolute -top-32 -left-20 h-[520px] w-[520px] rounded-full opacity-80 -z-10'
      />
      <div
        aria-hidden
        className='blob-bloom-deep absolute top-40 -right-20 h-[480px] w-[480px] rounded-full opacity-60 -z-10'
      />

      <div className='container-page'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center'>
          {/* LEFT — Copy */}
          <div className='lg:col-span-7'>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className='eyebrow mb-6'>
              {language === 'de'
                ? 'Miss Glow Beauty · Made in Germany'
                : 'Miss Glow Beauty · Made in Germany'}
            </motion.p>

            <h1 className='display text-balance text-clay'>
              {headlineLines.map((line, i) => (
                <span key={i} className='block overflow-hidden'>
                  <motion.span
                    initial={{ y: reduce ? 0 : '110%' }}
                    animate={{ y: '0%' }}
                    transition={{
                      duration: 0.95,
                      ease: [0.16, 1, 0.3, 1],
                      delay: 0.05 + i * 0.12,
                    }}
                    className='inline-block'>
                    {i === headlineLines.length - 1 ? (
                      <>
                        {language === 'de' ? 'Natur' : 'natural '}
                        <em className='italic text-bloom font-light'>
                          {language === 'de' ? 'kosmetik.' : 'cosmetics.'}
                        </em>
                      </>
                    ) : (
                      line
                    )}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.85,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.4,
              }}
              className='mt-8 max-w-xl text-lg md:text-xl text-clay-soft leading-relaxed text-balance'>
              {language === 'de'
                ? 'Willkommen zu deiner neuen Lieblingsmarke. Aktivwirkstoffe, sichtbare Ergebnisse und ein Gefühl, das bleibt.'
                : 'Welcome to your new favorite brand. Active ingredients, visible results, and a feeling that stays.'}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.85,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.55,
              }}
              className='mt-10 flex flex-col sm:flex-row gap-4 items-start sm:items-center'>
              <Link
                href='#shop'
                className={buttonVariants({ variant: 'bloom', size: 'lg' })}>
                {language === 'de' ? 'Jetzt entdecken' : 'Shop the collection'}
                <ArrowRight className='ml-2 h-4 w-4 transition-transform duration-500 ease-out-quint group-hover:translate-x-1' />
              </Link>
              <Link
                href='/about'
                className={buttonVariants({ variant: 'ghost', size: 'lg' })}>
                {language === 'de' ? 'Unsere Geschichte' : 'Our story'}
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.85 }}
              className='mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-clay-soft font-mono uppercase tracking-[0.18em]'>
              <span>·{language === 'de' ? ' Tierversuchsfrei' : ' Cruelty-free'}</span>
              <span>·{language === 'de' ? ' Vegan' : ' Vegan'}</span>
              <span>· {language === 'de' ? 'Dermatologisch getestet' : 'Dermatologist-tested'}</span>
              <span>·{language === 'de' ? ' Made in Germany' : ' Made in Germany'}</span>
            </motion.div>
          </div>

          {/* RIGHT — Hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.1,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.2,
            }}
            className='lg:col-span-5 relative aspect-[4/5] w-full max-w-[520px] mx-auto'>
            <div className='absolute inset-0 rounded-[2rem] overflow-hidden bg-petal-soft shadow-[0_30px_80px_-30px_rgba(56,35,35,0.35)]'>
              <Image
                src='/MagicGlowCreme1.JPG'
                alt='Miss Glow Beauty hero product'
                fill
                priority
                sizes='(max-width: 1024px) 90vw, 40vw'
                className='object-cover'
              />
              {/* Subtle inner glow */}
              <div className='absolute inset-0 bg-gradient-to-tr from-bloom/10 via-transparent to-champagne/30 mix-blend-overlay' />
            </div>

            {/* Floating credential pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1 }}
              className='absolute -bottom-6 -left-6 md:-left-12 bg-champagne backdrop-blur rounded-2xl px-5 py-4 shadow-xl border border-clay/5'>
              <p className='font-mono text-[0.65rem] uppercase tracking-[0.22em] text-clay-soft'>
                {language === 'de' ? 'Bestätigt' : 'Verified'}
              </p>
              <p className='font-display text-2xl text-clay leading-none mt-1'>
                +64%
              </p>
              <p className='text-[0.7rem] text-clay-soft mt-1 leading-tight max-w-[140px]'>
                {language === 'de'
                  ? 'weniger Falten in 30 Tagen'
                  : 'fewer wrinkles in 30 days'}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* scroll cue */}
      <div className='absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-clay-soft'>
        <span className='font-mono text-[0.65rem] uppercase tracking-[0.25em]'>
          {language === 'de' ? 'Scroll' : 'Scroll'}
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className='h-8 w-px bg-clay-soft/40'
        />
      </div>
    </section>
  );
}

// Legacy canvas export kept for backwards-compat (no longer used)
export function Canvas({ className }: { className?: string }) {
  return null;
}
