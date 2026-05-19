'use client';

import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import LinkButtonV2 from './LinkButtonV2';
import { useLanguage } from '@/contexts/LanguageProvider';

export default function HeroV2() {
  const { language } = useLanguage();
  const isDE = language === 'de';

  const headline = isDE
    ? 'Strahle länger.\nPflege tiefer.\nGlow stärker.'
    : 'Glow longer.\nNourish deeper.\nShine brighter.';

  return (
    <section className='relative overflow-hidden border-b border-border'>
      <div
        aria-hidden
        className='absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--candy)_0%,_transparent_55%)] opacity-60'
      />

      <div className='container-page-v2 relative pt-20 pb-20 lg:pt-28 lg:pb-28'>
        <div className='grid lg:grid-cols-12 gap-10 items-center'>
          <div className='lg:col-span-7'>
            <p
              className='text-xs uppercase tracking-[0.18em] text-muted-foreground mb-6'
              style={{ fontFamily: 'var(--font-mono)' }}>
              Miss Glow Beauty · Made in Germany
            </p>
            <h1 className='display-v2 text-[clamp(2.75rem,7.5vw,6.5rem)] max-w-3xl whitespace-pre-line tracking-[-0.025em] text-green-900'>
              {headline}
            </h1>

            <p className='mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl leading-relaxed'>
              {isDE
                ? 'Wirkstoffkosmetik aus Deutschland — tierversuchsfrei, vegan und entwickelt für sichtbare Ergebnisse.'
                : 'Active cosmetics from Germany — cruelty-free, vegan and developed for visible results.'}
            </p>

            <div className='mt-10 flex flex-wrap gap-3'>
              <LinkButtonV2 href='#products' size='lg'>
                {isDE ? 'Jetzt entdecken' : 'Shop the collection'}
                <ArrowUpRight className='ml-1 size-4' />
              </LinkButtonV2>
              <LinkButtonV2 href='/about' size='lg' variant='outline'>
                {isDE ? 'Unsere Geschichte' : 'Our story'}
              </LinkButtonV2>
            </div>
          </div>

          <div className='lg:col-span-5 lg:self-start flex flex-col items-center'>
            <div className='relative w-full aspect-square max-w-[520px] rounded-md overflow-hidden bg-blush'>
              <Image
                src='/Miss Glow Neue Produkt Bilder 2026/Video fur startseite.gif'
                alt='Miss Glow Beauty — hero'
                fill
                priority
                unoptimized
                sizes='(max-width: 1024px) 80vw, 40vw'
                className='object-contain'
              />
            </div>
            <p
              className='italic text-foreground/80 text-xl sm:text-2xl text-center mt-4'
              style={{ fontFamily: 'var(--font-display)' }}>
              ..... made for your glow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
