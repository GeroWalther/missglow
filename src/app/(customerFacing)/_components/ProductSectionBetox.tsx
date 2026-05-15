'use client';
import React from 'react';
import StoryRow from './StoryRow';
import { useLanguage } from '@/contexts/LanguageProvider';
import { BETOXPRICE, productImgsBetox } from '../../../../consts';

export default function ProductSectionBetox() {
  const { language } = useLanguage();
  const isDE = language === 'de';

  return (
    <StoryRow
      eyebrow={isDE ? 'Augenpflege · Botox-Effekt' : 'Eye care · Botox effect'}
      title={isDE ? 'BETOX Serum' : 'BETOX Serum'}
      description={
        isDE
          ? 'Augenpflege mit „Botox Effekt": BETOX Serum reduziert Falten innerhalb eines Monats um 64 %. Intensive Feuchtigkeit für die empfindliche Augenpartie — Fältchen werden aufgepolstert und entspannt.'
          : 'Eye care with “Botox effect”: BETOX Serum reduces wrinkles by 64% within one month. Intensive moisture for the sensitive eye area — fine lines are plumped and relaxed.'
      }
      benefits={
        isDE
          ? ['−64 % Falten', 'Aufpolsterung', 'Sofortpflege', 'Klinisch belegt']
          : ['−64% wrinkles', 'Plumping', 'Instant care', 'Clinically proven']
      }
      price={BETOXPRICE}
      productLink='/betoxserum'
      ctaLabel={isDE ? 'Zum Produkt' : 'Shop product'}
      image={productImgsBetox[0]}
      imageAlt='Betox Serum'
      tone='petal'
    />
  );
}
