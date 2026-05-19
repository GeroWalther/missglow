'use client';

import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageProvider';

export default function StudyShowcaseV2() {
  const { language } = useLanguage();
  const isDE = language === 'de';

  return (
    <section className='relative border-b border-border'>
      <div className='container-page-v2 py-20 lg:py-24'>
        <div className='max-w-3xl mb-10 lg:mb-14'>
          <p
            className='text-xs uppercase tracking-[0.18em] text-muted-foreground mb-4'
            style={{ fontFamily: 'var(--font-mono)' }}>
            {isDE ? 'Klinisch belegt' : 'Clinically proven'}
          </p>
          <h2 className='display-v2 text-4xl sm:text-5xl lg:text-6xl tracking-[-0.02em] text-green-900'>
            {isDE
              ? 'Sichtbare Ergebnisse, dokumentiert.'
              : 'Visible results, documented.'}
          </h2>
          <p className='mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl'>
            {isDE
              ? 'Bis zu 78 % Lippenaufpolsterung bei Testpersonen im Alter von 18–64 Jahren nach 14 Tagen Anwendung — im direkten Vergleich zur Placebo-Gruppe.'
              : 'Up to 78% lip plumping in subjects aged 18–64 after 14 days of use — measured against a placebo group.'}
          </p>
        </div>

        <div className='relative w-full aspect-[16/9] rounded-md overflow-hidden bg-blush'>
          <Image
            src='/Miss Glow Neue Produkt Bilder 2026/Video Startseite oben.gif'
            alt={
              isDE
                ? 'Magic Lips Serum — klinische Studie'
                : 'Magic Lips Serum — clinical study'
            }
            fill
            unoptimized
            sizes='100vw'
            className='object-contain'
          />
        </div>
      </div>
    </section>
  );
}
