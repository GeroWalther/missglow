'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NavBarComp from './NavBarComp';
import { cn } from '@/lib/utils';

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-40 transition-all duration-500 ease-out-quint',
        scrolled
          ? 'glass-nav border-b border-clay/10 py-3'
          : 'bg-transparent py-5'
      )}>
      <div className='container-page flex items-center justify-between gap-6'>
        <Link href='/' className='shrink-0 flex items-center'>
          <Image
            src='/lippe.png'
            width={140}
            height={48}
            alt='Miss Glow Beauty'
            priority
            className={cn(
              'transition-all duration-500 ease-out-quint',
              scrolled ? 'h-10 w-auto' : 'h-12 w-auto'
            )}
          />
        </Link>
        <NavBarComp />
      </div>
    </header>
  );
}
