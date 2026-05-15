import React from 'react';
import { LanguageProvider } from '@/contexts/LanguageProvider';
import { SaleProvider } from '@/contexts/SaleProvider';

import Image from 'next/image';
import { Toaster } from 'sonner';
import Footer from './_components/Footer';
import LogoOverlay from './_components/LogoOverlay';
import SiteHeader from './_components/SiteHeader';
import SaleBanner from './_components/SaleBanner';

export const dynamic = 'force-dynamic';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LanguageProvider>
      <SaleProvider>
        <main className='relative bg-background text-foreground'>
          <SaleBanner />
          <LogoOverlay />
          <SiteHeader />
          <Image
            src='/award.png'
            width={120}
            height={120}
            alt=''
            aria-hidden
            className='fixed right-3 bottom-3 md:right-6 md:bottom-6 w-20 md:w-24 h-auto z-40 drop-shadow-xl pointer-events-none'
          />
          <div>{children}</div>
          <Footer />
          <Toaster position='top-center' richColors />
        </main>
      </SaleProvider>
    </LanguageProvider>
  );
}
