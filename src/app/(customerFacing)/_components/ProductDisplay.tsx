'use client';
import React from 'react';
import {
  productImagesFresh,
  productImagesGlowCreme,
  productImgsLips,
} from '../../../../consts';
import ProdDispComp from './ProdDispComp';
import { useLanguage } from '@/contexts/LanguageProvider';
import Reveal from '@/components/ui/Reveal';

export default function ProductDisplay() {
  const { language } = useLanguage();
  const isDE = language === 'de';
  return (
    <section id='shop' className='py-24 md:py-32'>
      <div className='container-page'>
        <Reveal className='flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20'>
          <div className='max-w-2xl'>
            <p className='eyebrow mb-5'>
              {isDE ? 'Die Kollektion' : 'The collection'}
            </p>
            <h2 className='display-sm text-clay text-balance'>
              {isDE ? (
                <>
                  Drei Rituale. Eine{' '}
                  <em className='italic text-bloom font-light'>Routine</em>.
                </>
              ) : (
                <>
                  Three rituals. One{' '}
                  <em className='italic text-bloom font-light'>routine</em>.
                </>
              )}
            </h2>
          </div>
          <p className='max-w-md text-clay-soft text-base md:text-lg leading-relaxed'>
            {isDE
              ? 'Aufeinander abgestimmte Wirkstoffkosmetik für deinen täglichen Glow.'
              : 'Carefully formulated active cosmetics for your daily glow.'}
          </p>
        </Reveal>

        <Reveal
          delay={0.05}
          className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7'>
          <ProdDispComp
            name={isDE ? 'Magic Lips Serum' : 'Magic Lips Serum'}
            productImg={productImgsLips[0]}
            link='/magicLips'
          />
          <ProdDispComp
            name={isDE ? 'Magic Glow Cream' : 'Magic Glow Cream'}
            productImg={productImagesGlowCreme[0]}
            link='/magicGlow'
          />
          <ProdDispComp
            name={isDE ? 'Fresh Eyes Serum' : 'Fresh Eyes Serum'}
            productImg={productImagesFresh[0]}
            link='/freshEyes'
          />
        </Reveal>
      </div>
    </section>
  );
}
