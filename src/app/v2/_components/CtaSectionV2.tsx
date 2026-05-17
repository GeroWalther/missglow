'use client';

import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import LinkButtonV2 from './LinkButtonV2';
import { useLanguage } from '@/contexts/LanguageProvider';

export default function CtaSectionV2() {
  const { language } = useLanguage();
  const isDE = language === 'de';

  const headline = isDE
    ? 'Strahle länger.\nPflege tiefer.\nGlow stärker.'
    : 'Glow longer.\nNourish deeper.\nShine brighter.';

  return (
    <section className='container-page-v2 py-24'>
      <div className='relative overflow-hidden rounded-md border border-border min-h-[420px] lg:min-h-[480px]'>
        <Image
          src='/lippenVivo.png'
          alt=''
          fill
          sizes='100vw'
          className='object-cover'
        />
        <div
          aria-hidden
          className='absolute inset-0 bg-gradient-to-r from-bloom-deep/85 via-bloom-deep/55 to-transparent'
        />
        <div
          aria-hidden
          className='absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--candy)_0%,_transparent_55%)] opacity-25'
        />
        <div className='relative p-10 sm:p-16 lg:p-24 text-background max-w-3xl'>
          <h2 className='display-v2 text-4xl sm:text-6xl whitespace-pre-line'>
            {headline}
          </h2>
          <p className='mt-6 text-lg opacity-90 max-w-xl'>
            {isDE
              ? 'Wirkstoffkosmetik für ein sichtbar strahlendes Hautbild — entdecke die volle Miss Glow Beauty Kollektion.'
              : 'Active cosmetics for a visibly radiant complexion — discover the full Miss Glow Beauty collection.'}
          </p>
          <LinkButtonV2
            href='#products'
            size='lg'
            variant='candy'
            className='mt-8'>
            {isDE ? 'Jetzt entdecken' : 'Shop the collection'}
            <ArrowUpRight className='ml-1 size-4' />
          </LinkButtonV2>
        </div>
      </div>
    </section>
  );
}
