'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageProvider';
import Cart from '@/app/(customerFacing)/_components/Cart';
import LanguageSwitcher from '@/app/(customerFacing)/_components/SwitchLang';

export default function SiteHeaderV2() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { language } = useLanguage();
  const isDE = language === 'de';

  const NAV_LINKS = [
    { href: '/', key: 'home', label: isDE ? 'Start' : 'Home' },
    {
      href: '/#products',
      key: 'shop',
      label: isDE ? 'Boutique' : 'Boutique',
    },
    { href: '/about', key: 'about', label: isDE ? 'Über uns' : 'About' },
  ];

  return (
    <header className='sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-xl'>
      <div className='container-page-v2 flex h-16 items-center justify-between'>
        <Link href='/' className='flex items-center gap-2 group'>
          <span className='block size-3 rounded-full bg-bloom-deep transition group-hover:scale-110' />
          <span
            className='text-sm font-extrabold uppercase tracking-tight'
            style={{ fontFamily: 'var(--font-poppins)' }}>
            Miss Glow Beauty
          </span>
        </Link>

        <nav className='hidden lg:flex items-center gap-1'>
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-3 py-2 text-sm font-medium uppercase tracking-wide transition-colors',
                  active
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                )}>
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className='flex items-center gap-2'>
          <LanguageSwitcher />
          <div className='flex items-center'>
            <Cart />
          </div>
          <button
            type='button'
            aria-label={isDE ? 'Menü' : 'Menu'}
            className='lg:hidden inline-flex size-9 items-center justify-center rounded-md border border-border'
            onClick={() => setOpen((v) => !v)}>
            {open ? <X className='size-4' /> : <Menu className='size-4' />}
          </button>
        </div>
      </div>

      {open && (
        <nav className='lg:hidden border-t border-border bg-background'>
          <div className='container-page-v2 flex flex-col py-4 gap-1'>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className='px-2 py-3 text-base font-medium uppercase tracking-wide hover:underline'>
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
