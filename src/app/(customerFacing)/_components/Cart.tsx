'use client';
import { ShoppingCart } from 'lucide-react';

import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import Image from 'next/image';
import { useCart } from '@/hooks/use-cart-hook';
import CartItem from './CartItem';
import { useEffect, useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { formatCurrency } from '@/lib/formatters';

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useLanguage } from '@/contexts/LanguageProvider';
import { SHIPPING } from '../../../../consts';
import useCartTotals from '@/hooks/use-to-pay';
import CheckoutForm from '../checkout/_components/CheckoutForm';
import DiscountCodeInput from './DiscountCodeInput';

export default function Cart() {
  const { items, discount } = useCart();
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const { itemCount, totalCart, toPay, discountedPrice } = useCartTotals(
    items,
    discount
  );
  const { language } = useLanguage();

  useEffect(() => {
    setIsMounted(true);
  }, []);
  // console.log('ITEMS: ', items);

  return (
    <Sheet>
      <SheetTrigger className='group -m-2 flex items-center p-2'>
        <ShoppingCart
          aria-hidden='true'
          className='h-6 w-6 flex-shrink-0 text-stone-100 group-hover:text-orange-200'
        />
        <span className='ml-2 text-sm font-medium text-orange-100 group-hover:text-orang-200'>
          {isMounted ? itemCount : 0}
        </span>
      </SheetTrigger>

      <SheetContent
        setOpen={setOpen}
        className='flex w-full flex-col pr-0 sm:max-w-lg'>
        <SheetHeader className='space-y-2.5 pr-6'>
          <SheetTitle>
            {language == 'de' && ' Warenkorb'}
            {language == 'en' && 'Cart'} ({itemCount})
          </SheetTitle>
        </SheetHeader>
        {itemCount > 0 ? (
          <>
            <ScrollArea>
              <div className='flex w-full flex-col pr-6'>
                {items.map(({ product }: any) => (
                  <CartItem key={product.id} product={product} />
                ))}
              </div>
            </ScrollArea>
            <div className='space-y-4 pr-6'>
              <Separator />
              <DiscountCodeInput />
              <div className='space-y-1-5 text-sm'>
                <div className='flex'>
                  <span className='flex-1'>Subtotal</span>
                  <span>{formatCurrency(totalCart)}</span>
                </div>
                {discount > 0 && (
                  <>
                    <div className='flex'>
                      <span className='flex-1 font-bold text-pink-700'>
                        {language == 'de' && 'Rabatt'}
                        {language == 'en' && 'Discount'}
                      </span>
                      <span className='font-bold text-pink-700'>
                        - {discount} %
                      </span>
                    </div>
                    <div className='flex'>
                      <span className='flex-1'></span>
                      <span>{formatCurrency(discountedPrice)}</span>
                    </div>
                  </>
                )}

                <div className='flex'>
                  <span className='flex-1'>
                    {language == 'de' && 'Versand'}
                    {language == 'en' && 'Shipping'}
                  </span>
                  <span>{formatCurrency(SHIPPING)}</span>
                </div>

                <div className='flex'>
                  <span className='flex-1'>Total</span>
                  {discount > 0 ? (
                    <span>{formatCurrency(discountedPrice + SHIPPING)}</span>
                  ) : (
                    <span>{formatCurrency(toPay)}</span>
                  )}
                </div>
              </div>
              <SheetFooter>
                <SheetTrigger asChild>
                  <CheckoutForm />
                </SheetTrigger>
              </SheetFooter>
            </div>
          </>
        ) : (
          <div className='flex h-full flex-col items-center justify-center space-y-1'>
            <div
              aria-hidden='true'
              className='relative mb-4 h-60 w-60 text-muted-foreground'>
              <Image
                src={process.env.NEXT_PUBLIC_SERVER_URL + '/emptyCart.png'}
                fill
                alt='empty shopping cart image'
              />
            </div>
            <div className='text-xl font-semibold'>
              {language == 'de' && 'Der Warenkorb ist leer.'}
              {language == 'en' && 'Your cart is empty.'}
            </div>
            <SheetTrigger asChild>
              <Link
                href='/missGlow'
                className={buttonVariants({
                  variant: 'link',
                  size: 'sm',
                  className: 'text-sm text-muted-foreground text-stone-600',
                })}>
                {language == 'de' && 'Füge Produkte hinzu.'}
                {language == 'en' && 'Add products to cart.'}
              </Link>
            </SheetTrigger>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
