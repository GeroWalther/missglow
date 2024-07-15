import React from 'react';
import ImageSlider from '../_components/ImageSlider';
import MaxWidthWrapper from '../_components/MaxWidthWrapper';

import { Check, Shield } from 'lucide-react';
import { formatCurrency } from '@/lib/formatters';
import { ShareLink } from '../_components/ShareLink';
import { Button } from '@/components/ui/button';

const productImages = ['/512-1.jpg', '/512-2.jpg', '/512.jpg'];

export default async function MissGlowShopSite() {
  return (
    <MaxWidthWrapper>
      <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:grid-cols-2 lg:max-w-7xl lg:gap-x-8 lg:px-8'>
        {/* product details */}
        <div className='lg:max-w-lg lg:self-end'>
          <div className='mt-4'>
            <h1 className='text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl'>
              Miss Glow Lips
            </h1>
            <div className='flex gap-3 mt-6 items-center'>
              <p className='text-lg text-muted-foreground'>Sold by: </p>
              <span className='text-xl text-muted-foreground font-semibold'>
                Miss Glow Beauty GMBH.
              </span>
            </div>
          </div>

          <section className='mt-4'>
            <div className='flex items-center'>
              <p className='font-medium text-stone-900 text-xl'>
                {formatCurrency(89)}
              </p>

              <div className='ml-4 border-l text-muted-foreground border-stone-300 pl-4'>
                <p className='text-lg font-medium'>Auf Lager</p>
                <p className='text-lg font-medium'>
                  Wird in 1-2 Wochen versendet.
                </p>
              </div>
            </div>

            <div className='mt-4 space-y-6'>
              <p className='text-lg text-muted-foreground'>
                Beschreibung für ein kosmetisches Lippenprodukt.
              </p>
            </div>

            <div className='mt-6 flex items-center'>
              <Check
                aria-hidden='true'
                className='h-6 w-6 flex-shrink-0 text-green-500'
              />
              <p className='ml-2 text-lg text-muted-foreground'>Lieferbar</p>
            </div>
          </section>
        </div>

        {/* product images */}
        <div className='mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center mb-10'>
          <div className='aspect-square rounded-lg'>
            <ImageSlider urls={productImages} alt={`produkt bilder`} />
          </div>
        </div>

        {/* add to cart part */}
        <div className='mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start'>
          <div>
            <ShareLink
              link={`${process.env.NEXT_PUBLIC_SERVER_URL}/missGlow`}
            />
            <div className='mt-10'>
              {/* TODO Add to cart */}
              <Button className=' bg-orange-400 font-semibold w-full'>
                In den Warenkorb
              </Button>
            </div>
            <div className='mt-6 text-center'>
              <div className='group inline-flex text-lg text-medium'>
                <Shield
                  aria-hidden='true'
                  className='mr-2 h-6 w-6 flex-shrink-0 text-stone-400'
                />
                <span className=' text-sm text-muted-foreground hover:text-stone-700'>
                  Kunden Service Rund um die Uhr erreichbar unter <br /> Email :{' '}
                  {process.env.ADMINEMAIL}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* More images and Product description */}
    </MaxWidthWrapper>
  );
}