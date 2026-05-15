'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { formatCurrency } from '@/lib/formatters';
import { getSalePrice, useSale } from '@/contexts/SaleProvider';
import Reveal from '@/components/ui/Reveal';

type StoryRowProps = {
  eyebrow: string;
  title: string;
  description: string;
  benefits: string[];
  price: number;
  productLink: string;
  ctaLabel: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  tone?: 'cream' | 'petal';
};

export default function StoryRow({
  eyebrow,
  title,
  description,
  benefits,
  price,
  productLink,
  ctaLabel,
  image,
  imageAlt,
  reverse = false,
  tone = 'cream',
}: StoryRowProps) {
  const reduce = useReducedMotion();
  const { isActive, salePercentage } = useSale();
  const finalPrice = isActive ? getSalePrice(price, salePercentage) : price;

  return (
    <section
      className={cn(
        'py-24 md:py-32 relative overflow-hidden',
        tone === 'petal' && 'surface-petal'
      )}>
      <div className='container-page'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center'>
          {/* IMAGE */}
          <Reveal
            className={cn(
              'lg:col-span-6 relative',
              reverse ? 'lg:order-2' : 'lg:order-1'
            )}>
            <div className='relative aspect-[4/5] w-full max-w-[560px] mx-auto'>
              <motion.div
                whileHover={reduce ? undefined : { scale: 1.02 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className='absolute inset-0 rounded-[1.75rem] overflow-hidden bg-petal-soft shadow-[0_30px_80px_-30px_rgba(56,35,35,0.3)]'>
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  sizes='(max-width: 1024px) 90vw, 45vw'
                  className='object-cover'
                />
              </motion.div>
              {/* decorative arc */}
              <div
                aria-hidden
                className={cn(
                  'absolute h-40 w-40 rounded-full border border-bloom/30 -z-10',
                  reverse
                    ? '-bottom-6 -right-6 md:-right-12'
                    : '-top-6 -left-6 md:-left-12'
                )}
              />
            </div>
          </Reveal>

          {/* COPY */}
          <Reveal
            delay={0.1}
            className={cn(
              'lg:col-span-6',
              reverse ? 'lg:order-1' : 'lg:order-2'
            )}>
            <p className='eyebrow mb-5'>{eyebrow}</p>
            <h2 className='display-sm text-clay text-balance'>{title}</h2>
            <p className='mt-6 text-base md:text-lg text-clay-soft leading-relaxed text-balance max-w-xl'>
              {description}
            </p>

            <ul className='mt-8 flex flex-wrap gap-2.5'>
              {benefits.map((b) => (
                <li
                  key={b}
                  className='px-4 py-1.5 rounded-full border border-clay/15 text-xs uppercase tracking-[0.18em] text-clay-soft font-mono'>
                  {b}
                </li>
              ))}
            </ul>

            <div className='mt-10 flex flex-col sm:flex-row sm:items-center gap-6'>
              <Link
                href={productLink}
                className={buttonVariants({ variant: 'default', size: 'lg' })}>
                {ctaLabel}
                <ArrowUpRight className='ml-2 h-4 w-4 transition-transform duration-500 ease-out-quint group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
              </Link>
              <div className='flex items-baseline gap-3'>
                {isActive ? (
                  <>
                    <span className='font-display text-3xl text-clay'>
                      {formatCurrency(finalPrice)}
                    </span>
                    <span className='text-clay-soft/60 line-through text-sm'>
                      {formatCurrency(price)}
                    </span>
                  </>
                ) : (
                  <span className='font-display text-3xl text-clay'>
                    {formatCurrency(price)}
                  </span>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
