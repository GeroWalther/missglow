'use client';
import { useLanguage } from '@/contexts/LanguageProvider';
import { Quote, ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { galleryImages } from '../../../../consts';
import Reveal from '@/components/ui/Reveal';
import { cn } from '@/lib/utils';

const TestimonialsSection = () => {
  const { language } = useLanguage();
  const isDE = language === 'de';

  const testimonials = [
    {
      text: isDE
        ? 'Ich habe Miss Glow für die ganze Familie und es spart so viel Zeit. Außerdem ist alles biologisch, vegan und plastikfrei.'
        : 'I use Miss Glow for the whole family — it saves so much time. Everything is organic, vegan and plastic-free.',
      name: 'Hannah',
      role: isDE ? 'Verifizierte Kundin' : 'Verified customer',
    },
    {
      text: isDE
        ? 'Eine großartige Erfahrung. Die Produkte sind hochwertig und haben meine Haut spürbar verbessert.'
        : 'A wonderful experience. The products are high quality and have noticeably improved my skin.',
      name: 'Tatiana',
      role: isDE ? 'Verifizierte Kundin' : 'Verified customer',
    },
    {
      text: isDE
        ? 'Ich bin begeistert. Wirksam, sanft und meine Hautprobleme sind verschwunden.'
        : 'I am thrilled. Effective, gentle — and my skin problems are gone.',
      name: 'Heidi',
      role: isDE ? 'Verifizierte Kundin' : 'Verified customer',
    },
    {
      text: isDE
        ? 'Die Kosmetik von Miss Glow Beauty bringt meine Haut zum Strahlen — ich fühle mich großartig.'
        : 'Cosmetics from Miss Glow Beauty make my skin glow — I feel amazing.',
      name: 'Sabine',
      role: isDE ? 'Verifizierte Kundin' : 'Verified customer',
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    skipSnaps: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const scrollTo = useCallback(
    (i: number) => emblaApi && emblaApi.scrollTo(i),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect();
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  return (
    <section
      id='testimonials'
      className='py-24 md:py-32 surface-champagne border-y border-clay/5'>
      <div className='container-page'>
        <Reveal className='flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20'>
          <div className='max-w-2xl'>
            <p className='eyebrow mb-5'>
              {isDE ? 'Stimmen' : 'Voices'}
            </p>
            <h2 className='display-sm text-clay text-balance'>
              {isDE ? (
                <>
                  Was unsere Kundinnen{' '}
                  <em className='italic text-bloom font-light'>erleben</em>.
                </>
              ) : (
                <>
                  What our customers{' '}
                  <em className='italic text-bloom font-light'>experience</em>.
                </>
              )}
            </h2>
          </div>
          <div className='hidden md:flex gap-2'>
            <button
              onClick={scrollPrev}
              aria-label='Previous'
              className='h-11 w-11 rounded-full border border-clay/15 flex items-center justify-center hover:bg-clay hover:text-champagne transition-all duration-500 ease-out-quint'>
              <ArrowLeft className='h-4 w-4' />
            </button>
            <button
              onClick={scrollNext}
              aria-label='Next'
              className='h-11 w-11 rounded-full border border-clay/15 flex items-center justify-center hover:bg-clay hover:text-champagne transition-all duration-500 ease-out-quint'>
              <ArrowRight className='h-4 w-4' />
            </button>
          </div>
        </Reveal>

        <div className='overflow-hidden' ref={emblaRef}>
          <div className='flex gap-6 md:gap-8'>
            {testimonials.map((t, i) => (
              <figure
                key={i}
                className='shrink-0 grow-0 basis-[88%] sm:basis-[60%] lg:basis-[42%] xl:basis-[36%] bg-background rounded-[1.5rem] border border-clay/10 p-8 md:p-10 flex flex-col gap-6'>
                <Quote className='h-8 w-8 text-bloom' strokeWidth={1.5} />
                <blockquote className='font-display text-xl md:text-2xl text-clay leading-snug tracking-tight text-balance'>
                  {t.text}
                </blockquote>
                <figcaption className='mt-auto pt-4 border-t border-clay/10'>
                  <p className='font-display text-lg text-clay'>{t.name}</p>
                  <p className='font-mono text-[0.65rem] uppercase tracking-[0.22em] text-clay-soft mt-1'>
                    {t.role}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* dots */}
        <div className='flex items-center justify-center gap-2 mt-10'>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={cn(
                'h-1.5 rounded-full transition-all duration-500 ease-out-quint',
                i === selectedIndex
                  ? 'w-8 bg-bloom'
                  : 'w-1.5 bg-clay/20 hover:bg-clay/40'
              )}
            />
          ))}
        </div>

        {/* gallery */}
        <Reveal
          delay={0.2}
          className='mt-20 md:mt-28 grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4'>
          {galleryImages.slice(0, 12).map((src, index) => (
            <figure
              key={index}
              className='relative aspect-square overflow-hidden rounded-2xl bg-petal-soft'>
              <Image
                src={src}
                alt='Miss Glow Beauty lifestyle'
                fill
                sizes='(max-width: 768px) 33vw, 16vw'
                className='object-cover transition-transform duration-700 ease-out-quint hover:scale-110'
              />
            </figure>
          ))}
        </Reveal>
      </div>
    </section>
  );
};

export default TestimonialsSection;
