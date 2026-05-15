'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { formatCurrency } from '@/lib/formatters';
import { StarFilledIcon } from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { getSalePrice, useSale } from '@/contexts/SaleProvider';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';

type pType = {
  id: string;
  name: string;
  price: number;
  priceBeforeDiscount?: number;
  description: string;
  productImgs: string[];
  productLink: string;
};

const ProductInfo = ({
  name,
  price,
  priceBeforeDiscount,
  description,
  productImgs,
  productLink,
}: pType) => {
  const [currImg, setCurrImg] = useState(0);
  const { isActive, salePercentage } = useSale();
  const finalPrice = isActive ? getSalePrice(price, salePercentage) : price;

  return (
    <section id='shop' className='py-24 md:py-32 relative isolate overflow-hidden'>
      <div
        aria-hidden
        className='blob-bloom absolute -top-20 -right-20 h-[400px] w-[400px] rounded-full opacity-60 -z-10'
      />
      <div className='container-page'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center'>
          {/* LEFT — images */}
          <div className='lg:col-span-6 flex gap-4 items-center'>
            <div className='flex flex-col gap-3 shrink-0'>
              {productImgs.map((img: string, i: number) => (
                <button
                  key={i}
                  onClick={() => setCurrImg(i)}
                  aria-label={`Show image ${i + 1}`}
                  className={cn(
                    'relative h-20 w-20 md:h-24 md:w-24 rounded-2xl overflow-hidden border-2 transition-all duration-300',
                    i === currImg
                      ? 'border-bloom shadow-lg'
                      : 'border-clay/10 opacity-60 hover:opacity-100'
                  )}>
                  <Image
                    src={img}
                    fill
                    sizes='96px'
                    alt={`${name} thumbnail`}
                    className='object-cover'
                  />
                </button>
              ))}
            </div>
            <div className='relative flex-1 aspect-[4/5] max-w-[520px] rounded-[1.75rem] overflow-hidden bg-petal-soft shadow-[0_30px_80px_-30px_rgba(56,35,35,0.3)]'>
              <motion.div
                key={currImg}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className='absolute inset-0'>
                <Image
                  src={productImgs[currImg]}
                  fill
                  sizes='(max-width: 1024px) 80vw, 45vw'
                  alt={name}
                  className='object-cover'
                  priority
                />
              </motion.div>
            </div>
          </div>

          {/* RIGHT — info */}
          <div className='lg:col-span-6'>
            <p className='eyebrow mb-5'>Miss Glow Beauty</p>
            <h1 className='display-sm text-clay text-balance'>{name}</h1>

            <div className='mt-5 flex items-center gap-3 text-clay-soft'>
              <div className='flex gap-0.5 text-bloom'>
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarFilledIcon key={i} width={16} height={16} />
                ))}
              </div>
              <span className='text-xs font-mono uppercase tracking-[0.18em]'>
                5.0 · Verified
              </span>
            </div>

            <div className='mt-6 flex items-baseline gap-3'>
              {isActive ? (
                <>
                  <span className='font-display text-4xl text-clay'>
                    {formatCurrency(finalPrice)}
                  </span>
                  <span className='text-clay-soft/60 line-through text-base'>
                    {formatCurrency(price)}
                  </span>
                </>
              ) : (
                <>
                  <span className='font-display text-4xl text-clay'>
                    {formatCurrency(price)}
                  </span>
                  {priceBeforeDiscount && (
                    <span className='text-clay-soft/60 line-through text-base'>
                      {formatCurrency(priceBeforeDiscount)}
                    </span>
                  )}
                </>
              )}
            </div>

            <p className='mt-8 text-base md:text-lg text-clay-soft leading-relaxed max-w-xl text-balance'>
              {description}
            </p>

            <div className='mt-10 flex flex-col sm:flex-row gap-4'>
              <Link href={productLink}>
                <Button variant='bloom' size='lg'>
                  Shop
                  <ArrowUpRight className='ml-2 h-4 w-4 transition-transform duration-500 ease-out-quint group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
