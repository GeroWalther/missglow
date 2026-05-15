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
  const { items, discount, isOpen, setIsOpen } = useCart();
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const { itemCount, totalCart, discountedPrice } = useCartTotals(
    items,
    discount
  );
  // console.log(
  //   'ITEMCOUNT: ',
  //   itemCount,
  //   'totalCart: ',
  //   totalCart,
  //   'total: ',
  //   toPay,
  //   'discountedPrice: ',
  //   discountedPrice
  // );

  const { language } = useLanguage();

  useEffect(() => {
    setIsMounted(true);
  }, []);
  // console.log('ITEMS: ', items);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className='group -m-2 flex items-center gap-2 p-2 text-clay hover:text-bloom transition-colors duration-300'>
        <ShoppingCart aria-hidden='true' className='h-5 w-5 flex-shrink-0' />
        <span className='font-mono text-[0.7rem] uppercase tracking-[0.18em] font-medium'>
          {isMounted ? itemCount : 0}
        </span>
      </SheetTrigger>

      <SheetContent
        setOpen={setIsOpen}
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
                      <span className='flex-1 font-bold text-bloom'>
                        {language == 'de' && 'Rabatt'}
                        {language == 'en' && 'Discount'}
                      </span>
                      <span className='font-bold text-bloom'>
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
                  <span>{formatCurrency(discountedPrice + SHIPPING)}</span>
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
                src='/emptyCart.png'
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
                href='/magicLips'
                className={buttonVariants({
                  variant: 'link',
                  size: 'sm',
                  className: 'text-sm text-muted-foreground text-clay-soft',
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
