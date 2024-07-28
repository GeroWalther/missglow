import { Product, useCart } from '@/hooks/use-cart-hook';
import { formatCurrency } from '@/lib/formatters';

import { ImageIcon, X } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageProvider';

export default function CartItem({
  product,
  invoice = false,
}: {
  product: Product;
  invoice?: boolean;
}) {
  const { removeItem } = useCart();
  const { language } = useLanguage();
  const label = language == 'en' ? 'Natural Cosmetic' : 'Naturkosmetik';
  return (
    <div className='space-y-3 py-2'>
      <div className='flex items-start justify-between gap-4'>
        <div className='flex items-center space-x-4'>
          <div className='relative aspect-square h-16 w-16 min-w-fit overflow-hidden rounded'>
            {product.image ? (
              <Image
                src={product.image}
                alt={label}
                fill
                className='absolute object-cover'
              />
            ) : (
              <div className='flex h-full items-center justify-center bg-secondary'>
                <ImageIcon
                  aria-hidden='true'
                  className='h-4 w-4 text-muted-foreground'
                />
              </div>
            )}
          </div>

          <div className='flex flex-col self-start'>
            <span className='line-clamp-1 text-sm font-medium mb-1'>
              {product.name}
            </span>

            <span className='line-clamp-1 text-xs capitalize text-muted-foreground'>
              {label}
            </span>

            {!invoice && (
              <div className='mt-4 text-xs text-muted-foreground'>
                <button
                  onClick={() => removeItem(product.id)}
                  className='flex items-center gap-0.5'>
                  <X className='w-3 h-4' />
                  {language == 'en' ? 'Remove' : 'Entfernen'}
                </button>
              </div>
            )}
          </div>
        </div>

        <div className='flex flex-col space-y-1 font-medium'>
          <span className='ml-auto line-clamp-1 text-sm'>
            {product.quantity}x
          </span>
          <span className='ml-auto line-clamp-1 text-sm'>
            {formatCurrency(product.price)}
          </span>
        </div>
      </div>
    </div>
  );
}
