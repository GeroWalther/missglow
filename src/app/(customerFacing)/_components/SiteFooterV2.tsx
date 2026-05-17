'use client';

import Link from 'next/link';
import InstagramIcon from '@/components/svg/InstagramIcon';
import TikTokIcon from '@/components/svg/TikTokIcon';
import { useLanguage } from '@/contexts/LanguageProvider';

export default function SiteFooterV2() {
  const { language } = useLanguage();
  const isDE = language === 'de';
  const currentYear = new Date().getFullYear();

  return (
    <footer className='border-t border-border bg-background'>
      <div className='container-page-v2 py-16'>
        <div className='grid gap-12 lg:grid-cols-12'>
          <div className='lg:col-span-5'>
            <Link href='/' className='flex items-center gap-2'>
              <span className='block size-3 rounded-full bg-bloom-deep' />
              <span
                className='text-sm font-extrabold uppercase tracking-tight'
                style={{ fontFamily: 'var(--font-poppins)' }}>
                Miss Glow Beauty
              </span>
            </Link>
            <p className='mt-5 max-w-md text-sm text-muted-foreground leading-relaxed'>
              {isDE
                ? 'Die moderne Naturkosmetik aus Deutschland. Wirkstoffkosmetik für eine strahlende Haut.'
                : 'The modern natural cosmetics from Germany. Active cosmetics for radiant skin.'}
            </p>
            <div className='mt-6 flex items-center gap-3'>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://www.instagram.com/miss.glowbeauty?igsh=MmlzNjJyOWI1MHN5'
                aria-label='Instagram'
                className='inline-flex h-10 w-10 items-center justify-center rounded-md border border-border hover:bg-bloom-deep hover:text-background transition-colors'>
                <InstagramIcon />
              </a>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://www.tiktok.com/@miss.glowbeauty?_t=8p5LX0BIWJc&_r=1'
                aria-label='TikTok'
                className='inline-flex h-10 w-10 items-center justify-center rounded-md border border-border hover:bg-bloom-deep hover:text-background transition-colors'>
                <TikTokIcon />
              </a>
            </div>
          </div>

          <div className='lg:col-span-3'>
            <p
              className='text-xs uppercase tracking-[0.18em] text-muted-foreground mb-4'
              style={{ fontFamily: 'var(--font-mono)' }}>
              {isDE ? 'Kundenservice' : 'Customer service'}
            </p>
            <ul className='space-y-2 text-sm'>
              <li>
                <a
                  href='tel:0049015151906996'
                  className='hover:text-bloom-deep'>
                  (0049) 015151906996
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${process.env.NEXT_PUBLIC_ADMINEMAIL}`}
                  className='hover:text-bloom-deep break-words'>
                  {process.env.NEXT_PUBLIC_ADMINEMAIL}
                </a>
              </li>
            </ul>
          </div>

          <nav className='lg:col-span-4'>
            <p
              className='text-xs uppercase tracking-[0.18em] text-muted-foreground mb-4'
              style={{ fontFamily: 'var(--font-mono)' }}>
              Miss Glow Beauty
            </p>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link href='/imprint' className='hover:text-bloom-deep'>
                  {isDE ? 'Impressum' : 'Imprint'}
                </Link>
              </li>
              <li>
                <Link
                  href='/privacy-policy'
                  className='hover:text-bloom-deep'>
                  {isDE ? 'Datenschutz' : 'Privacy Policy'}
                </Link>
              </li>
              <li>
                <Link href='/returns' className='hover:text-bloom-deep'>
                  {isDE
                    ? 'Widerruf & Rücksendungen'
                    : 'Cancellation & Returns'}
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div
          className='mt-12 pt-6 border-t border-border flex flex-col sm:flex-row justify-between gap-2 text-xs text-muted-foreground uppercase tracking-[0.18em]'
          style={{ fontFamily: 'var(--font-mono)' }}>
          <p>
            &copy; {currentYear} Miss Glow Beauty ·{' '}
            {isDE ? 'Alle Rechte vorbehalten' : 'All rights reserved'}
          </p>
          <p>Made in Germany</p>
        </div>
      </div>
    </footer>
  );
}
