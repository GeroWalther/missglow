'use client';
import { useState } from 'react';

import { Button, buttonVariants } from '@/components/ui/button';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';

import { useMediaQuery } from 'usehooks-ts';
import CheckoutStripe from './CheckoutStripe';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useLanguage } from '@/contexts/LanguageProvider';

export default function CheckoutForm() {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const { language } = useLanguage();

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            className={buttonVariants({
              className: 'w-full bg-pink-500',
            })}>
            {language == 'en' ? 'Checkout' : 'Zur Kasse'}
          </Button>
        </DialogTrigger>
        <DialogContent className='w-full overflow-y-scroll max-h-screen'>
          <DialogHeader>
            <DialogTitle className='font-bold text-stone-800'>
              {language == 'en' ? 'Checkout' : 'Kasse'}
            </DialogTitle>
          </DialogHeader>
          <DialogDescription className='font-semibold text-stone-700'>
            {language == 'en' ? 'Submitting an order' : ' Bestellformular'}{' '}
            <br />
            <span className='font-semibold text-muted-foreground'>
              {language == 'en'
                ? '(Give us your Address and Payment data in order to checkout.)'
                : '  (Gib deine Addressen und Zahlungsinformationen an um zu bestellen)'}
            </span>
          </DialogDescription>
          <CheckoutStripe />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant='default'>Zur Kasse</Button>
      </DrawerTrigger>
      <DrawerContent className='w-full max-h-screen'>
        <DrawerHeader className='text-left pt-0'>
          <DrawerTitle className='font-bold text-stone-800'>Kasse</DrawerTitle>
          <DrawerDescription className='font-semibold text-stone-700'>
            Bestellformular <br />
            <span className='font-semibold text-muted-foreground'>
              Gib deine Addressen und Zahlungsinformationen an um zu bestellen.
            </span>
          </DrawerDescription>
          <ScrollArea className='max-h-[70vh] overflow-auto '>
            <CheckoutStripe />
          </ScrollArea>
        </DrawerHeader>
        <DrawerFooter className='pt-2'>
          <DrawerClose asChild>
            <Button variant='outline'>Abbruch</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
