'use client';

import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageProvider';

export default function BrandStoryV2() {
  const { language } = useLanguage();
  const isDE = language === 'de';

  return (
    <section className='container-page-v2 py-24'>
      <div className='grid gap-12 lg:grid-cols-12 lg:gap-16 items-center'>
        <div className='lg:col-span-7 order-2 lg:order-1 space-y-6'>
          <p
            className='text-xs uppercase tracking-[0.18em] text-muted-foreground'
            style={{ fontFamily: 'var(--font-mono)' }}>
            {isDE ? 'Unsere Geschichte' : 'Our story'}
          </p>
          <h2 className='display-v2 text-4xl sm:text-6xl'>
            {isDE
              ? 'Teil deiner täglichen Routine.'
              : "Part of your daily ritual."}
          </h2>
          <p className='text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl'>
            {isDE
              ? 'Miss Glow Beauty wurde mit einem klaren Versprechen gegründet: hochwirksame Naturkosmetik, die Ergebnisse liefert. Jede Formel ist tierversuchsfrei, vegan und in Deutschland entwickelt — für moderne Frauen, die das Beste für ihre Haut wollen.'
              : 'Miss Glow Beauty was founded with a clear promise: highly effective natural cosmetics that deliver results. Every formula is cruelty-free, vegan and developed in Germany — for modern women who want the very best for their skin.'}
          </p>
        </div>
        <div className='lg:col-span-5 order-1 lg:order-2 relative aspect-square rounded-md overflow-hidden bg-blush'>
          <Image
            src='/FrauSchaller.jpeg'
            alt='Miss Glow Beauty founder'
            fill
            sizes='(max-width: 1024px) 100vw, 40vw'
            className='object-cover'
          />
        </div>
      </div>
    </section>
  );
}
