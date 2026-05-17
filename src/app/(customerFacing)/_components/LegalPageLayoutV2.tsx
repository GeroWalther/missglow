'use client';

import Image from 'next/image';
import { ReactNode } from 'react';

type Props = {
  eyebrow: string;
  title: string;
  heroImage: string;
  heroAlt?: string;
  children: ReactNode;
};

export default function LegalPageLayoutV2({
  eyebrow,
  title,
  heroImage,
  heroAlt = '',
  children,
}: Props) {
  return (
    <>
      {/* Hero with image + gradient fade */}
      <section className='relative h-[42vh] min-h-[280px] max-h-[440px] overflow-hidden border-b border-border'>
        <Image
          src={heroImage}
          alt={heroAlt}
          fill
          priority
          sizes='100vw'
          className='object-cover'
        />
        <div
          aria-hidden
          className='absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent'
        />
        <div
          aria-hidden
          className='absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--candy)_0%,_transparent_55%)] opacity-40'
        />
        <div className='container-page-v2 relative z-10 h-full flex flex-col justify-end pb-4 sm:pb-6'>
          <p
            className='text-xs uppercase tracking-[0.18em] text-foreground mb-3'
            style={{ fontFamily: 'var(--font-mono)' }}>
            {eyebrow}
          </p>
          <h1
            className='text-[clamp(2.25rem,5.5vw,4.5rem)] max-w-3xl whitespace-pre-line tracking-[-0.025em] text-foreground uppercase leading-[1.05] font-normal'
            style={{ fontFamily: 'var(--font-poppins)' }}>
            {title}
          </h1>
        </div>
      </section>

      <article className='container-page-v2 pt-16 sm:pt-24 pb-16 max-w-3xl space-y-12 sm:space-y-16'>
        {children}
      </article>

      {/* Closing crest with candy fade rising from below */}
      <section className='relative overflow-hidden'>
        <div
          aria-hidden
          className='absolute inset-x-0 bottom-0 h-full bg-[radial-gradient(ellipse_at_bottom,_var(--candy)_0%,_transparent_65%)] opacity-50 pointer-events-none'
        />
        <div
          aria-hidden
          className='absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(ellipse_at_bottom_center,_var(--bloom-deep)_0%,_transparent_75%)] opacity-15 pointer-events-none'
        />
        <div className='relative container-page-v2 pt-12 sm:pt-16 pb-16 sm:pb-20 flex flex-col items-center'>
          <Image
            src='/lippe.png'
            alt='Miss Glow Beauty'
            width={600}
            height={500}
            className='h-auto w-56 sm:w-72 md:w-80'
          />
          <p
            className='-mt-24 sm:-mt-28 italic text-foreground/80 text-xl sm:text-2xl text-center'
            style={{ fontFamily: 'var(--font-display)' }}>
            ..... made for your glow.
          </p>
        </div>
      </section>
    </>
  );
}

/** Reusable v2-styled section heading inside legal prose. */
export function LegalH2({ children }: { children: ReactNode }) {
  return (
    <h2
      className='text-2xl sm:text-3xl font-semibold uppercase tracking-tight mt-2'
      style={{ fontFamily: 'var(--font-poppins)' }}>
      {children}
    </h2>
  );
}

/** Subsection heading. */
export function LegalH3({ children }: { children: ReactNode }) {
  return (
    <h3
      className='text-lg sm:text-xl font-semibold uppercase tracking-tight'
      style={{ fontFamily: 'var(--font-poppins)' }}>
      {children}
    </h3>
  );
}

/** Section wrapper that vertically stacks paragraphs under a heading. */
export function LegalSection({ children }: { children: ReactNode }) {
  return <section className='space-y-4'>{children}</section>;
}

/** Standard body paragraph. */
export function LegalP({ children }: { children: ReactNode }) {
  return (
    <p className='text-base sm:text-lg text-muted-foreground leading-relaxed'>
      {children}
    </p>
  );
}
