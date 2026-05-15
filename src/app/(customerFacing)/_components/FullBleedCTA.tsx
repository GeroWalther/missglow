'use client';
import { useLanguage } from '@/contexts/LanguageProvider';
import { buttonVariants } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function FullBleedCTA() {
  const { language } = useLanguage();
  const isDE = language === 'de';

  return (
    <section className='relative isolate overflow-hidden'>
      {/* image */}
      <div className='relative h-[80vh] min-h-[560px] w-full'>
        <Image
          src='/lippenVivo.png'
          alt=''
          fill
          sizes='100vw'
          className='object-cover'
        />
        {/* overlays */}
        <div className='absolute inset-0 bg-gradient-to-b from-clay/30 via-clay/40 to-clay/70' />
        <div className='absolute inset-0 bg-gradient-to-r from-clay/60 via-transparent to-transparent' />

        {/* content */}
        <div className='absolute inset-0 flex items-center'>
          <div className='container-page'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className='max-w-2xl text-champagne'>
              <p className='font-mono text-[0.7rem] uppercase tracking-[0.22em] text-champagne/80 mb-5'>
                {isDE ? 'Beginne dein Ritual' : 'Start your ritual'}
              </p>
              <h2 className='display text-balance text-champagne'>
                {isDE ? (
                  <>
                    Dein{' '}
                    <em className='italic font-light text-petal'>Glow Look</em>{' '}
                    beginnt hier.
                  </>
                ) : (
                  <>
                    Your{' '}
                    <em className='italic font-light text-petal'>Glow Look</em>{' '}
                    starts here.
                  </>
                )}
              </h2>
              <p className='mt-6 text-lg text-champagne/85 max-w-xl leading-relaxed'>
                {isDE
                  ? 'Entdecke die komplette Miss Glow Beauty Kollektion — Wirkstoffkosmetik für eine sichtbar strahlende Haut.'
                  : 'Discover the full Miss Glow Beauty collection — active cosmetics for visibly radiant skin.'}
              </p>
              <div className='mt-10 flex flex-col sm:flex-row gap-4'>
                <Link
                  href='#shop'
                  className={buttonVariants({ variant: 'bloom', size: 'lg' })}>
                  {isDE ? 'Zur Kollektion' : 'Shop the collection'}
                  <ArrowUpRight className='ml-2 h-4 w-4 transition-transform duration-500 ease-out-quint group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
                </Link>
                <Link
                  href='/about'
                  className='inline-flex items-center justify-center gap-2 h-14 px-10 text-base rounded-full text-champagne border border-champagne/30 hover:bg-champagne hover:text-clay transition-all duration-500 ease-out-quint'>
                  {isDE ? 'Mehr erfahren' : 'Learn more'}
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
