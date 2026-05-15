'use client';
import InstagramIcon from '@/components/svg/InstagramIcon';
import TikTokIcon from '@/components/svg/TikTokIcon';
import { useLanguage } from '@/contexts/LanguageProvider';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

export default function Footer() {
  const { language } = useLanguage();
  const isDE = language === 'de';
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-clay text-champagne pt-24 pb-10'>
      <div className='container-page'>
        <div className='grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-champagne/10'>
          {/* Brand block */}
          <div className='md:col-span-5'>
            <Image
              src='/lippe.png'
              width={160}
              height={48}
              alt='Miss Glow Beauty'
              className='brightness-0 invert mb-6'
            />
            <p className='font-display text-3xl md:text-4xl leading-[1.1] text-balance max-w-md tracking-tight'>
              {isDE ? (
                <>
                  Die moderne{' '}
                  <em className='italic font-light text-petal'>
                    Naturkosmetik
                  </em>
                  .
                </>
              ) : (
                <>
                  The modern{' '}
                  <em className='italic font-light text-petal'>
                    natural cosmetics
                  </em>
                  .
                </>
              )}
            </p>
            <div className='mt-8 flex items-center gap-4'>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://www.instagram.com/miss.glowbeauty?igsh=MmlzNjJyOWI1MHN5'
                className='h-11 w-11 rounded-full border border-champagne/15 flex items-center justify-center hover:bg-champagne hover:text-clay transition-all duration-500 ease-out-quint'>
                <InstagramIcon />
              </a>
              <a
                target='_blank'
                rel='noreferrer'
                href='https://www.tiktok.com/@miss.glowbeauty?_t=8p5LX0BIWJc&_r=1'
                className='h-11 w-11 rounded-full border border-champagne/15 flex items-center justify-center hover:bg-champagne hover:text-clay transition-all duration-500 ease-out-quint'>
                <TikTokIcon />
              </a>
            </div>
          </div>

          {/* Customer service */}
          <div className='md:col-span-3'>
            <p className='font-mono text-[0.65rem] uppercase tracking-[0.22em] text-champagne/60 mb-5'>
              {isDE ? 'Kundenservice' : 'Customer service'}
            </p>
            <ul className='space-y-3 text-sm text-champagne/85'>
              <li>
                <p className='text-champagne/55 text-xs mb-0.5'>WhatsApp</p>
                <a
                  href='tel:0049015151906996'
                  className='hover:text-petal transition-colors'>
                  (0049) 015151906996
                </a>
              </li>
              <li>
                <p className='text-champagne/55 text-xs mb-0.5'>E-Mail</p>
                <a
                  href={`mailto:${process.env.NEXT_PUBLIC_ADMINEMAIL}`}
                  className='hover:text-petal transition-colors break-words'>
                  {process.env.NEXT_PUBLIC_ADMINEMAIL}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <nav className='md:col-span-4'>
            <p className='font-mono text-[0.65rem] uppercase tracking-[0.22em] text-champagne/60 mb-5'>
              Miss Glow Beauty
            </p>
            <ul className='space-y-3 text-sm text-champagne/85'>
              <li>
                <Link
                  href='/imprint'
                  className='hover:text-petal transition-colors'>
                  {isDE ? 'Impressum' : 'Imprint'}
                </Link>
              </li>
              <li>
                <Link
                  href='/privacy-policy'
                  className='hover:text-petal transition-colors'>
                  {isDE ? 'Datenschutz' : 'Privacy Policy'}
                </Link>
              </li>
              <li>
                <Link
                  href='/returns'
                  className='hover:text-petal transition-colors'>
                  {isDE
                    ? 'Widerruf & Rücksendungen'
                    : 'Cancellation & Returns'}
                </Link>
              </li>
              <li>
                <Link
                  href='/about'
                  className='hover:text-petal transition-colors'>
                  {isDE ? 'Über uns' : 'About'}
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className='pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-champagne/55 font-mono uppercase tracking-[0.18em]'>
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
