'use client';
import React, { ReactNode, useState } from 'react';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { ScrollArea } from './ui/scroll-area';
import { Sheet, SheetContent, SheetFooter, SheetTrigger } from './ui/sheet';
import { Button } from './ui/button';
import Cart from '@/app/(customerFacing)/_components/Cart';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageProvider';
import { cn } from '@/lib/utils';

export default function MobilNav({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const { language } = useLanguage();
  const isDE = language === 'de';

  const links: { href: string; label: string }[] = [
    { href: '/', label: isDE ? 'Start' : 'Home' },
    { href: '/magicLips', label: 'Magic Lips Serum' },
    { href: '/freshEyes', label: 'Fresh Eyes Serum' },
    { href: '/magicGlow', label: 'Magic Glow Cream' },
    { href: '/magicElixir', label: 'Magic Elixir' },
    { href: '/faceCleanser', label: 'Face Cleanser' },
    { href: '/betoxserum', label: 'Betox Serum' },
    { href: '/about', label: isDE ? 'Über uns' : 'About' },
  ];

  return (
    <div>
      <Sheet open={open}>
        <SheetTrigger asChild>
          <Button
            onClick={() => setOpen((p) => !p)}
            variant='outline'
            size='icon'
            className='shrink-0 md:hidden border-clay/15 text-clay'>
            <Menu className='h-5 w-5' />
            <span className='sr-only'>Toggle mobile navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent
          setOpen={setOpen}
          side='left'
          className={cn(
            'flex flex-col bg-champagne border-r border-clay/10 p-0'
          )}>
          <ScrollArea className='h-full'>
            <div className='flex items-center justify-between px-6 pt-6'>
              <Image
                src='/lippe.png'
                width={120}
                height={40}
                alt='Miss Glow Beauty'
              />
              <button
                onClick={() => setOpen(false)}
                aria-label='Close menu'
                className='h-9 w-9 rounded-full flex items-center justify-center text-clay hover:bg-clay/5'>
                <X className='h-5 w-5' />
              </button>
            </div>

            <div className='px-6 pt-8'>
              <div className='rounded-2xl bg-petal-soft p-4 mb-8'>
                <Cart />
              </div>
            </div>

            <nav className='flex flex-col gap-1 px-6 pb-6'>
              {links.map((l) => (
                <Link
                  key={l.href}
                  onClick={() => setOpen(false)}
                  href={l.href}
                  className='font-display text-2xl text-clay hover:text-bloom transition-colors duration-300 py-2'>
                  {l.label}
                </Link>
              ))}
              <div className='mt-6'>{children}</div>
            </nav>

            <SheetFooter className='px-6 pb-8 mt-auto'>
              <p className='font-mono text-[0.65rem] uppercase tracking-[0.22em] text-clay-soft'>
                Miss Glow Beauty · Made in Germany
              </p>
            </SheetFooter>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </div>
  );
}
