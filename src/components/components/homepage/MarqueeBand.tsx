'use client';
import { useLanguage } from '@/contexts/LanguageProvider';
import { Sparkles } from 'lucide-react';
import React from 'react';

export default function MarqueeBand() {
  const { language } = useLanguage();
  const phrases =
    language === 'de'
      ? [
          'Tierversuchsfrei',
          'Vegan',
          'Made in Germany',
          'Dermatologisch getestet',
          'Aktivwirkstoffe',
          'Natürlich strahlend',
          'Glow Look',
        ]
      : [
          'Cruelty-free',
          'Vegan',
          'Made in Germany',
          'Dermatologist-tested',
          'Active ingredients',
          'Naturally radiant',
          'Glow Look',
        ];

  // double to enable seamless loop
  const items = [...phrases, ...phrases];

  return (
    <section
      aria-label='Brand promises'
      className='relative overflow-hidden border-y border-clay/10 bg-clay text-champagne py-6 md:py-7'>
      <div className='flex animate-marquee whitespace-nowrap'>
        {[0, 1].map((groupIdx) => (
          <ul
            key={groupIdx}
            aria-hidden={groupIdx === 1}
            className='flex shrink-0 items-center gap-12 pr-12'>
            {items.map((phrase, i) => (
              <li
                key={`${groupIdx}-${i}`}
                className='flex items-center gap-12'>
                <span className='font-display text-2xl md:text-4xl tracking-tight'>
                  {phrase}
                </span>
                <Sparkles className='h-4 w-4 text-bloom shrink-0' />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
