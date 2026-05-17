'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Check, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { formatCurrency } from '@/lib/formatters';
import { useLanguage } from '@/contexts/LanguageProvider';
import { getSalePrice, useSale } from '@/contexts/SaleProvider';
import AddToCartButton from '@/app/(customerFacing)/_components/AddToCartButton';
import FaqV2 from './FaqV2';
import { PRODUCTS_V2, type ProductContent } from './productContentV2';

export default function ProductPageV2({ product }: { product: ProductContent }) {
  const { language } = useLanguage();
  const { isActive, salePercentage, saleName } = useSale();
  const isDE = language === 'de';
  const [currImg, setCurrImg] = useState(0);

  const finalPrice = isActive
    ? getSalePrice(product.price, salePercentage)
    : product.price;

  const others = PRODUCTS_V2.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className='container-page-v2 py-12 sm:py-16'>
      <Link
        href='/v2'
        className='inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground'
        style={{ fontFamily: 'var(--font-mono)' }}>
        <ArrowLeft className='size-3.5' />
        {isDE ? 'Zurück zur Kollektion' : 'Back to the collection'}
      </Link>

      {/* HERO */}
      <div className='mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16 items-start'>
        {/* Image gallery */}
        <div className='space-y-4'>
          <div className='relative aspect-square rounded-md border border-border bg-blush overflow-hidden'>
            <motion.div
              key={currImg}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className='absolute inset-0'>
              <Image
                src={product.images[currImg]}
                alt={product.name}
                fill
                priority
                sizes='(max-width: 1024px) 100vw, 50vw'
                className='object-cover'
              />
            </motion.div>
          </div>
          {product.images.length > 1 && (
            <div className='grid grid-cols-5 gap-2 sm:gap-3'>
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setCurrImg(i)}
                  aria-label={`Show image ${i + 1}`}
                  className={cn(
                    'relative aspect-square rounded-sm overflow-hidden border bg-blush transition',
                    i === currImg
                      ? 'border-bloom-deep'
                      : 'border-border opacity-70 hover:opacity-100'
                  )}>
                  <Image
                    src={img}
                    alt=''
                    fill
                    sizes='120px'
                    className='object-cover'
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info column */}
        <div className='lg:sticky lg:top-24 space-y-6'>
          <div>
            <p
              className='text-xs uppercase tracking-[0.18em] text-muted-foreground'
              style={{ fontFamily: 'var(--font-mono)' }}>
              Miss Glow Beauty
            </p>
            <h1
              className='text-3xl sm:text-4xl mt-3 uppercase tracking-[-0.02em] leading-[1.05]'
              style={{ fontFamily: 'var(--font-poppins)' }}>
              {product.name}
            </h1>
            <p
              className='mt-4 text-base sm:text-lg font-semibold uppercase tracking-[0.12em] leading-snug'
              style={{ fontFamily: 'var(--font-poppins)' }}>
              <span
                className='px-1.5 py-0.5 box-decoration-clone'
                style={{
                  background:
                    'linear-gradient(180deg, transparent 0%, transparent 18%, var(--candy) 18%, var(--candy) 92%, transparent 92%)',
                }}>
                {isDE ? product.tagline.de : product.tagline.en}
              </span>
            </p>
            <p className='mt-4 text-lg text-muted-foreground leading-relaxed'>
              {isDE ? product.shortDesc.de : product.shortDesc.en}
            </p>
          </div>

          <div className='flex items-baseline gap-3'>
            <p
              className='text-xl sm:text-2xl font-medium tracking-tight'
              style={{ fontFamily: 'var(--font-poppins)' }}>
              {formatCurrency(finalPrice)}
            </p>
            {isActive && (
              <>
                <span className='text-base text-muted-foreground line-through'>
                  {formatCurrency(product.price)}
                </span>
                <span className='text-[10px] font-semibold uppercase tracking-wider bg-bloom-deep text-background px-2.5 py-1 rounded-full'>
                  −{salePercentage}% {saleName}
                </span>
              </>
            )}
          </div>

          <div className='flex items-center gap-6 text-sm text-muted-foreground'>
            <span>
              <span
                className='block text-xs uppercase tracking-[0.18em] text-muted-foreground/70 mb-0.5'
                style={{ fontFamily: 'var(--font-mono)' }}>
                {isDE ? 'Inhalt' : 'Size'}
              </span>
              {isDE ? product.volume.de : product.volume.en}
            </span>
            <span className='h-8 w-px bg-border' />
            <span>
              <span
                className='block text-xs uppercase tracking-[0.18em] text-muted-foreground/70 mb-0.5'
                style={{ fontFamily: 'var(--font-mono)' }}>
                {isDE ? 'Versand' : 'Shipping'}
              </span>
              {isDE ? product.shippingNote.de : product.shippingNote.en}
            </span>
          </div>

          <AddToCartButton
            product={{
              id: product.id,
              name: product.name,
              price: finalPrice,
              image: product.images[0],
              quantity: 1,
            }}
          />

          <div className='flex items-center gap-3 rounded-md border border-bloom-deep/30 bg-bloom-deep/5 px-4 py-3'>
            <ShieldCheck className='size-5 text-bloom-deep shrink-0' />
            <p className='text-sm font-semibold text-bloom-deep'>
              {isDE
                ? 'Tierversuchsfrei · Vegan · Made in Germany'
                : 'Cruelty-free · Vegan · Made in Germany'}
            </p>
          </div>
        </div>
      </div>

      {/* DETAILS */}
      <div className='mt-16 grid gap-12 lg:grid-cols-3 lg:gap-16'>
        <div className='lg:col-span-2 space-y-10'>
          <section className='space-y-4'>
            <p
              className='text-xs uppercase tracking-[0.18em] text-muted-foreground'
              style={{ fontFamily: 'var(--font-mono)' }}>
              Details
            </p>
            <div className='space-y-4 text-base text-foreground/80 leading-relaxed'>
              {(isDE
                ? product.longDescParagraphs.de
                : product.longDescParagraphs.en
              ).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className='pt-2 space-y-2'>
              {(isDE ? product.highlights.de : product.highlights.en).map(
                (h, i) => (
                  <p
                    key={i}
                    className='inline-block mr-2 mb-2 font-semibold uppercase tracking-[0.06em] text-sm sm:text-base'
                    style={{ fontFamily: 'var(--font-poppins)' }}>
                    <span
                      className='px-1.5 py-0.5 box-decoration-clone'
                      style={{
                        background:
                          'linear-gradient(180deg, transparent 0%, transparent 18%, var(--candy) 18%, var(--candy) 92%, transparent 92%)',
                      }}>
                      {h}
                    </span>
                  </p>
                )
              )}
            </div>
          </section>

          <section className='space-y-3 rounded-md border border-border bg-card p-6 sm:p-8'>
            <h2
              className='text-xl sm:text-2xl font-semibold uppercase tracking-tight'
              style={{ fontFamily: 'var(--font-poppins)' }}>
              {isDE ? product.applicationTitle.de : product.applicationTitle.en}
            </h2>
            <p className='text-base text-muted-foreground leading-relaxed'>
              {isDE ? product.applicationBody.de : product.applicationBody.en}
            </p>
          </section>

          <FaqV2 faq={product.faq} />
        </div>

        {/* Right rail */}
        <aside className='space-y-8 lg:sticky lg:top-24 self-start'>
          <section className='space-y-4'>
            <p
              className='text-xs uppercase tracking-[0.18em] text-muted-foreground'
              style={{ fontFamily: 'var(--font-mono)' }}>
              {isDE ? 'Highlights' : 'Highlights'}
            </p>
            <ul className='space-y-2.5'>
              {(isDE ? product.features.de : product.features.en).map((f) => (
                <li key={f} className='flex items-start gap-2.5 text-sm'>
                  <Check className='size-4 text-bloom-deep shrink-0 mt-0.5' />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </section>

          <section
            className='space-y-3 border-t border-border pt-6 text-xs text-muted-foreground leading-relaxed'
            style={{ fontFamily: 'var(--font-mono)' }}>
            {isDE ? product.inci.de : product.inci.en}
          </section>
        </aside>
      </div>

      {/* You may also like */}
      {others.length > 0 && (
        <section className='mt-24 sm:mt-32 border-t border-border pt-16'>
          <div className='flex items-baseline justify-between mb-8'>
            <h2
              className='text-2xl sm:text-3xl font-semibold uppercase tracking-tight'
              style={{ fontFamily: 'var(--font-poppins)' }}>
              {isDE ? 'Das könnte dir auch gefallen' : 'You may also like'}
            </h2>
          </div>
          <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {others.map((p) => (
              <Link
                key={p.id}
                href={`/v2/${p.slug}`}
                className='group flex flex-col rounded-md border border-border bg-card overflow-hidden hover:shadow-lg transition-shadow'>
                <div className='relative aspect-[4/5] bg-blush'>
                  <Image
                    src={p.images[0]}
                    alt={p.name}
                    fill
                    sizes='(max-width: 640px) 100vw, 33vw'
                    className='object-cover transition-transform duration-500 group-hover:scale-105'
                  />
                </div>
                <div className='p-6 flex flex-col gap-2'>
                  <h3
                    className='text-xl font-semibold uppercase tracking-tight'
                    style={{ fontFamily: 'var(--font-poppins)' }}>
                    {p.name}
                  </h3>
                  <p className='text-sm text-muted-foreground line-clamp-2'>
                    {isDE ? p.shortDesc.de : p.shortDesc.en}
                  </p>
                  <div className='mt-3 flex items-center justify-between'>
                    <p
                      className='text-xl font-semibold'
                      style={{ fontFamily: 'var(--font-poppins)' }}>
                      {formatCurrency(p.price)}
                    </p>
                    <span
                      className='inline-flex items-center gap-1 text-xs uppercase tracking-wider text-muted-foreground group-hover:text-foreground'
                      style={{ fontFamily: 'var(--font-mono)' }}>
                      {isDE ? 'Ansehen' : 'View'}
                      <ArrowUpRight className='size-3.5' />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className='mt-10'>
            <Link
              href='/v2#products'
              className='inline-flex items-center justify-center gap-2 h-12 px-7 rounded-md border border-border text-sm font-semibold uppercase tracking-wide hover:bg-foreground hover:text-background transition-colors'>
              {isDE ? 'Zur Kollektion' : 'Shop the collection'}
              <ArrowUpRight className='size-4' />
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
