'use client';
import { useLanguage } from '@/contexts/LanguageProvider';
import { Gem, InfinityIcon, LeafIcon, Rabbit } from 'lucide-react';
import React from 'react';
import Reveal from '@/components/ui/Reveal';

const FeaturesSection = () => {
  const { language } = useLanguage();
  const isDE = language === 'de';

  const features = [
    {
      Icon: Rabbit,
      title: isDE ? 'Ohne Tierversuche' : 'Cruelty-free',
      text: isDE
        ? 'Entwickelt und hergestellt — niemals an Tieren getestet.'
        : 'Developed and made — never tested on animals.',
    },
    {
      Icon: LeafIcon,
      title: isDE ? 'Natürlich' : 'Naturally formulated',
      text: isDE
        ? 'Wir verwenden bewusst natürliche Inhaltsstoffe in unseren Rezepturen.'
        : 'We intentionally use natural ingredients in our formulations.',
    },
    {
      Icon: Gem,
      title: isDE ? 'Modern & wirksam' : 'Modern & effective',
      text: isDE
        ? 'Aktivwirkstoff-Kosmetik im Einklang mit aktuellen Beauty-Trends.'
        : 'Active-ingredient cosmetics in tune with current beauty trends.',
    },
    {
      Icon: InfinityIcon,
      title: isDE ? 'Sichtbare Ergebnisse' : 'Visible results',
      text: isDE
        ? 'Unsere Kundinnen lieben die langanhaltenden Effekte.'
        : 'Our customers love the long-lasting effects.',
    },
  ];

  return (
    <section className='py-24 md:py-32 surface-champagne border-y border-clay/5'>
      <div className='container-page'>
        <Reveal className='max-w-2xl mb-16 md:mb-20'>
          <p className='eyebrow mb-5'>
            {isDE ? 'Unsere Werte' : 'Our principles'}
          </p>
          <h2 className='display-sm text-clay text-balance'>
            {isDE ? (
              <>
                Eine Beauty-Routine,{' '}
                <em className='italic text-bloom font-light'>
                  auf die du dich verlassen kannst
                </em>
                .
              </>
            ) : (
              <>
                A beauty routine{' '}
                <em className='italic text-bloom font-light'>
                  you can rely on
                </em>
                .
              </>
            )}
          </h2>
        </Reveal>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-clay/10 rounded-[1.5rem] overflow-hidden border border-clay/10'>
          {features.map(({ Icon, title, text }, i) => (
            <Reveal
              key={title}
              delay={i * 0.07}
              className='bg-background p-8 md:p-10 flex flex-col gap-5 group transition-colors duration-500 hover:bg-petal-soft'>
              <div className='flex items-center justify-between'>
                <span className='inline-flex h-12 w-12 items-center justify-center rounded-full bg-bloom/10 text-bloom transition-colors duration-500 group-hover:bg-bloom group-hover:text-champagne'>
                  <Icon className='h-5 w-5' />
                </span>
                <span className='font-mono text-xs text-clay-soft/60'>
                  0{i + 1}
                </span>
              </div>
              <h3 className='font-display text-xl md:text-2xl text-clay leading-tight'>
                {title}
              </h3>
              <p className='text-sm text-clay-soft leading-relaxed'>{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
