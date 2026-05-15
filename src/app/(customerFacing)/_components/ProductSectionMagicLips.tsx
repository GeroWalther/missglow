'use client';
import React from 'react';
import StoryRow from './StoryRow';
import { useLanguage } from '@/contexts/LanguageProvider';
import { MAGICLIPSPRICE, productImgsLips } from '../../../../consts';

export default function ProductSectionMagicLips() {
  const { language } = useLanguage();
  const isDE = language === 'de';

  return (
    <StoryRow
      eyebrow={isDE ? 'Lippenpflege · Plumping' : 'Lip care · Plumping'}
      title={isDE ? 'MAGIC LIPS Serum' : 'MAGIC LIPS Serum'}
      description={
        isDE
          ? 'Bis zu 78 % mehr Lippenvolumen — absolute Aufpolsterung und intensive Pflege. Hocheffektive Wirkstoffkosmetik für sichtbar attraktivere Lippen.'
          : 'Up to 78% more lip volume — full plumping and intensive care. Highly effective active cosmetics for visibly more attractive lips.'
      }
      benefits={
        isDE
          ? ['+78 % Volumen', 'Intensiv-Pflege', 'Wirkstoff-Kosmetik']
          : ['+78% volume', 'Intensive care', 'Active cosmetics']
      }
      price={MAGICLIPSPRICE}
      productLink='/magicLips'
      ctaLabel={isDE ? 'Zum Produkt' : 'Shop product'}
      image={productImgsLips[0]}
      imageAlt='Magic Lips Serum'
      reverse
      tone='cream'
    />
  );
}
