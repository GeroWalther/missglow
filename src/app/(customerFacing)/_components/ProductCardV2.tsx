'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { formatCurrency } from '@/lib/formatters';
import { getSalePrice, useSale } from '@/contexts/SaleProvider';
import { useLanguage } from '@/contexts/LanguageProvider';

export type V2Product = {
  id: string;
  slug: string;
  name: string;
  shortDescriptionDE: string;
  shortDescriptionEN: string;
  price: number;
  image: string;
};

export default function ProductCardV2({ product }: { product: V2Product }) {
  const { language } = useLanguage();
  const { isActive, salePercentage } = useSale();
  const isDE = language === 'de';
  const description = isDE
    ? product.shortDescriptionDE
    : product.shortDescriptionEN;
  const finalPrice = isActive
    ? getSalePrice(product.price, salePercentage)
    : product.price;

  return (
    <article className='group flex flex-col rounded-md border border-border bg-card overflow-hidden hover:shadow-lg transition-shadow'>
      <Link
        href={product.slug}
        className='relative block aspect-[4/5] bg-blush'>
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
          className='object-contain p-6 transition-transform duration-500 group-hover:scale-105'
        />
        <span
          className='absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-background/85 backdrop-blur px-2.5 py-1 text-[10px] uppercase tracking-wider opacity-0 group-hover:opacity-100 transition'
          style={{ fontFamily: 'var(--font-mono)' }}>
          {isDE ? 'Produkt ansehen' : 'View product'}
          <ArrowUpRight className='size-3' />
        </span>
      </Link>
      <div className='flex flex-col gap-3 p-6'>
        <div>
          <Link href={product.slug} className='hover:underline'>
            <h3
              className='text-xl font-semibold uppercase tracking-tight'
              style={{ fontFamily: 'var(--font-poppins)' }}>
              {product.name}
            </h3>
          </Link>
          <p className='mt-2 text-sm text-muted-foreground leading-relaxed'>
            {description}
          </p>
        </div>
        <div className='flex items-center justify-between mt-2'>
          <div className='flex items-baseline gap-2'>
            <p
              className='text-lg sm:text-xl font-medium tracking-tight'
              style={{ fontFamily: 'var(--font-poppins)' }}>
              {formatCurrency(finalPrice)}
            </p>
            {isActive && (
              <span className='text-sm text-muted-foreground line-through'>
                {formatCurrency(product.price)}
              </span>
            )}
          </div>
          <Link
            href={product.slug}
            className='inline-flex items-center justify-center gap-1 h-10 px-4 rounded-md bg-bloom-deep text-background text-xs font-semibold uppercase tracking-wide hover:opacity-90 transition-opacity'>
            {isDE ? 'Kaufen' : 'Shop'}
            <ArrowUpRight className='size-3.5' />
          </Link>
        </div>
      </div>
    </article>
  );
}
