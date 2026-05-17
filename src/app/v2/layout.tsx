import React from 'react';
import { LanguageProvider } from '@/contexts/LanguageProvider';
import { SaleProvider } from '@/contexts/SaleProvider';
import { Toaster } from 'sonner';
import SiteHeaderV2 from './_components/SiteHeaderV2';
import SiteFooterV2 from './_components/SiteFooterV2';
import SaleBanner from '@/app/(customerFacing)/_components/SaleBanner';

export const dynamic = 'force-dynamic';

export default function V2Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <LanguageProvider>
      <SaleProvider>
        <div className='min-h-screen bg-background text-foreground antialiased'>
          <SaleBanner />
          <SiteHeaderV2 />
          <main>{children}</main>
          <SiteFooterV2 />
          <Toaster position='top-center' richColors />
        </div>
      </SaleProvider>
    </LanguageProvider>
  );
}
