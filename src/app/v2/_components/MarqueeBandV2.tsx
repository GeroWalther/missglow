'use client';

import { useLanguage } from '@/contexts/LanguageProvider';

export default function MarqueeBandV2() {
  const { language } = useLanguage();
  const isDE = language === 'de';
  const items = isDE
    ? [
        'Tierversuchsfrei',
        'Vegan',
        'Made in Germany',
        'Wirkstoffkosmetik',
        'Dermatologisch getestet',
        'Glow Look',
      ]
    : [
        'Cruelty-free',
        'Vegan',
        'Made in Germany',
        'Active cosmetics',
        'Dermatologist-tested',
        'Glow Look',
      ];

  return (
    <section className='relative border-y border-border bg-candy/60 overflow-hidden'>
      <div className='flex w-max animate-[gam-marquee_40s_linear_infinite] py-4 whitespace-nowrap'>
        <MarqueeTrack items={items} />
        <MarqueeTrack items={items} ariaHidden />
      </div>
      <style>{`
        @keyframes gam-marquee {
          from { transform: translate3d(0, 0, 0); }
          to   { transform: translate3d(-50%, 0, 0); }
        }
      `}</style>
    </section>
  );
}

function MarqueeTrack({
  items,
  ariaHidden,
}: {
  items: string[];
  ariaHidden?: boolean;
}) {
  return (
    <div className='flex shrink-0' aria-hidden={ariaHidden}>
      {items.map((item, i) => (
        <span
          key={i}
          className='mx-8 font-bold uppercase tracking-tight text-2xl sm:text-3xl text-foreground inline-flex items-center gap-8'
          style={{ fontFamily: 'var(--font-poppins)' }}>
          {item}
          <span aria-hidden className='text-foreground/40'>
            /
          </span>
        </span>
      ))}
    </div>
  );
}
