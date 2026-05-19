'use client';

import { useLanguage } from '@/contexts/LanguageProvider';
import ProductCardV2, { V2Product } from './ProductCardV2';
import {
  BETOXPRICE,
  FACECLEANSERPRICE,
  FRESHEZESPRICE,
  LONGEVITYPRICE,
  MAGICELIXIRPRICE,
  MAGICLIPSPRICE,
  PRICEMAGICGLOW,
  productImagesFaceCleanser,
  productImagesFresh,
  productImagesGlowCreme,
  productImagesLongevity,
  productImagesMagicElixir,
  productImgsBetox,
  productImgsLips,
} from '../../../../consts';

export default function ProductsHighlightV2() {
  const { language } = useLanguage();
  const isDE = language === 'de';

  const products: V2Product[] = [
    {
      id: '1',
      slug: '/magicLips',
      name: 'Magic Lips Serum',
      shortDescriptionDE:
        'Bis zu 78 % mehr Lippenvolumen — Wirkstoffkosmetik für volle, gepflegte Lippen.',
      shortDescriptionEN:
        'Up to 78% more lip volume — active cosmetics for full, well-cared lips.',
      price: MAGICLIPSPRICE,
      image: productImgsLips[0],
    },
    {
      id: '2',
      slug: '/magicGlow',
      name: 'Magic Glow Cream',
      shortDescriptionDE:
        'Tagespflege mit Sofort-Glow-Effekt für ein strahlendes Hautbild.',
      shortDescriptionEN:
        'Day cream with instant-glow effect for a radiant complexion.',
      price: PRICEMAGICGLOW,
      image: productImagesGlowCreme[0],
    },
    {
      id: '3',
      slug: '/freshEyes',
      name: 'Fresh Eyes Serum',
      shortDescriptionDE:
        'Intensive Pflege für die Augenpartie — sichtbar frischer Blick.',
      shortDescriptionEN:
        'Intensive eye-area care — a visibly fresher look.',
      price: FRESHEZESPRICE,
      image: productImagesFresh[0],
    },
    {
      id: '4',
      slug: '/betoxserum',
      name: 'Betox Serum',
      shortDescriptionDE:
        '−64 % Falten in 30 Tagen. Wirkstoffkosmetik mit Botox-Effekt.',
      shortDescriptionEN:
        '−64% wrinkles in 30 days. Active cosmetics with botox effect.',
      price: BETOXPRICE,
      image: productImgsBetox[0],
    },
    {
      id: '5',
      slug: '/magicElixir',
      name: 'Magic Elixir',
      shortDescriptionDE:
        'Konzentriertes Anti-Aging-Elixier für jugendliche, strahlende Haut.',
      shortDescriptionEN:
        'Concentrated anti-aging elixir for youthful, radiant skin.',
      price: MAGICELIXIRPRICE,
      image: productImagesMagicElixir[0],
    },
    {
      id: '6',
      slug: '/faceCleanser',
      name: 'Face Cleanser',
      shortDescriptionDE:
        'Sanfte Reinigung, die Make-up und Unreinheiten zuverlässig entfernt.',
      shortDescriptionEN:
        'Gentle cleansing that reliably removes make-up and impurities.',
      price: FACECLEANSERPRICE,
      image: productImagesFaceCleanser[0],
    },
    {
      id: '7',
      slug: '/longevity',
      name: 'Longevity Beauty',
      shortDescriptionDE:
        'Wohlbefinden, Energie & Beauty Support — Where Nature Meets Science.',
      shortDescriptionEN:
        'Wellbeing, energy & beauty support — Where Nature Meets Science.',
      price: LONGEVITYPRICE,
      image: productImagesLongevity[0],
    },
  ];

  return (
    <section id='products' className='container-page-v2 py-24'>
      <div className='flex flex-col gap-4 mb-12 max-w-2xl'>
        <p
          className='text-xs uppercase tracking-[0.18em] text-muted-foreground'
          style={{ fontFamily: 'var(--font-mono)' }}>
          {isDE ? 'Die Kollektion' : 'The collection'}
        </p>
        <h2 className='display-v2 text-4xl sm:text-6xl'>
          {isDE
            ? 'Sieben Rituale. Ein Glow.'
            : 'Seven rituals. One radiant glow.'}
        </h2>
      </div>
      <div className='grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10'>
        {products.map((product) => (
          <ProductCardV2 key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
