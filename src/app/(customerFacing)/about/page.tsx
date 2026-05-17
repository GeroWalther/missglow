'use client';

import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageProvider';

export default function AboutPageV2() {
  const { language } = useLanguage();
  const isDE = language === 'de';

  const values = isDE
    ? [
        {
          title: 'Clean & Green',
          body: 'Bewusst ausgewählte, natürliche Inhaltsstoffe. Jede Komponente durchdacht — für eine Pflege, die wirksam, rein und nachhaltig ist.',
        },
        {
          title: 'Wirksam & ehrlich',
          body: 'Wirkstoffkosmetik mit klinisch belegten Ergebnissen. Keine leeren Versprechen — nur das, was sichtbar funktioniert.',
        },
        {
          title: 'Tierversuchsfrei & vegan',
          body: 'Entwickelt und hergestellt in Deutschland. Niemals an Tieren getestet, 100 % vegan und mit Liebe zum Detail formuliert.',
        },
      ]
    : [
        {
          title: 'Clean & Green',
          body: 'Consciously selected, natural ingredients. Every component well thought out — for care that is effective, pure and sustainable.',
        },
        {
          title: 'Effective & honest',
          body: 'Active cosmetics with clinically proven results. No empty promises — only what visibly works.',
        },
        {
          title: 'Cruelty-free & vegan',
          body: 'Developed and made in Germany. Never tested on animals, 100% vegan and formulated with love and attention to detail.',
        },
      ];

  return (
    <>
      {/* Hero with image + gradient fade */}
      <section className='relative h-[55vh] min-h-[360px] max-h-[560px] overflow-hidden border-b border-border'>
        <Image
          src='/werdeTeil.jpg'
          alt='Miss Glow Beauty — werde Teil'
          fill
          priority
          sizes='100vw'
          className='object-cover'
        />
        <div
          aria-hidden
          className='absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent'
        />
        <div
          aria-hidden
          className='absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--candy)_0%,_transparent_55%)] opacity-40'
        />
        <div className='container-page-v2 relative z-10 h-full flex flex-col justify-end pb-4 sm:pb-6'>
          <p
            className='text-xs uppercase tracking-[0.18em] text-foreground mb-3'
            style={{ fontFamily: 'var(--font-mono)' }}>
            {isDE ? 'Über uns' : 'About us'}
          </p>
          <h1 className='display-v2 text-[clamp(2.25rem,5.5vw,4.5rem)] max-w-3xl whitespace-pre-line tracking-[-0.025em] text-foreground'>
            {isDE ? 'Glow. Beauty. Power.' : 'Glow. Beauty. Power.'}
          </h1>
        </div>
      </section>

      {/* Intro + pull quote + origin */}
      <article className='container-page-v2 pt-16 sm:pt-24 pb-8 max-w-3xl'>
        <p className='text-xl sm:text-2xl text-foreground/90 leading-relaxed'>
          {isDE
            ? 'Bei Miss Glow Beauty glauben wir daran, dass Hautpflege mehr ist als ein Produkt — sie ist ein Gefühl, ein Ritual, ein Moment der Wertschätzung für dich selbst.'
            : 'At Miss Glow Beauty we believe that skincare is more than a product — it is a feeling, a ritual, a moment of appreciation for yourself.'}
        </p>

        <blockquote className='mt-12 sm:mt-16 border-l-4 border-bloom-deep pl-6 sm:pl-8 py-2'>
          <p
            className='text-2xl sm:text-3xl font-light tracking-[-0.01em] text-bloom-deep leading-snug italic'
            style={{ fontFamily: 'var(--font-poppins)' }}>
            &ldquo;Age doesn&rsquo;t matter.&rdquo;
          </p>
        </blockquote>

        <section className='mt-16 space-y-4'>
          <h2
            className='text-2xl sm:text-3xl font-semibold uppercase tracking-tight'
            style={{ fontFamily: 'var(--font-poppins)' }}>
            {isDE ? 'Die Vision' : 'The vision'}
          </h2>
          <p className='text-base sm:text-lg text-muted-foreground leading-relaxed'>
            {isDE
              ? 'Founder Tatjana Schaller hat Miss Glow Beauty aus einer klaren Vision heraus gegründet: Frauen Produkte zu geben, die nicht nur schön aussehen, sondern sich gut anfühlen — innen wie außen.'
              : 'Founder Tatjana Schaller created Miss Glow Beauty from a clear vision: to give women products that not only look beautiful, but feel good — inside and out.'}
          </p>
          <p className='text-base sm:text-lg text-muted-foreground leading-relaxed'>
            {isDE
              ? 'Sie wollte eine Pflegeroutine schaffen, die den Alltag veredelt. Ein kleines tägliches Luxusritual, das die Haut stärkt, regeneriert und mit jeder Anwendung ein Stück mehr zum Strahlen bringt.'
              : 'She wanted to create a care routine that elevates everyday life. A small daily luxury ritual that strengthens and regenerates the skin and makes it shine a little more with every application.'}
          </p>
        </section>

        <section className='mt-12 grid gap-8 lg:grid-cols-5 items-start'>
          <div className='lg:col-span-3 space-y-4'>
            <h2
              className='text-2xl sm:text-3xl font-semibold uppercase tracking-tight'
              style={{ fontFamily: 'var(--font-poppins)' }}>
              {isDE ? 'Die Gründerin' : 'The founder'}
            </h2>
            <p className='text-base sm:text-lg text-muted-foreground leading-relaxed'>
              {isDE
                ? 'Jedes Detail — vom Design bis zur Rezeptur — trägt die Handschrift von Tatjana Schaller, die Schönheit als etwas versteht, das im Inneren beginnt und sich nach außen entfaltet.'
                : 'Every detail — from design to formulation — bears the signature of Tatjana Schaller, who understands beauty as something that begins on the inside and unfolds outward.'}
            </p>
          </div>
          <div className='lg:col-span-2 relative aspect-square rounded-md overflow-hidden bg-blush'>
            <Image
              src='/FrauSchaller.jpeg'
              alt='Founder Tatjana Schaller — Miss Glow Beauty'
              fill
              sizes='(max-width: 1024px) 100vw, 40vw'
              className='object-cover'
            />
          </div>
        </section>
      </article>

      {/* Values band on blush background */}
      <section className='border-y border-border bg-blush/40 mt-16'>
        <div className='container-page-v2 py-20 sm:py-24'>
          <div className='max-w-3xl mb-12 space-y-3'>
            <p
              className='text-xs uppercase tracking-[0.18em] text-muted-foreground'
              style={{ fontFamily: 'var(--font-mono)' }}>
              {isDE ? 'Unsere Werte' : 'Our principles'}
            </p>
            <h2
              className='text-3xl sm:text-4xl font-semibold uppercase tracking-tight'
              style={{ fontFamily: 'var(--font-poppins)' }}>
              {isDE
                ? 'Wirkstoffkosmetik mit Haltung.'
                : 'Active cosmetics with intent.'}
            </h2>
            <p className='text-base sm:text-lg text-muted-foreground'>
              {isDE
                ? 'Drei Prinzipien, die jede unserer Formeln formen.'
                : 'Three principles that shape every one of our formulas.'}
            </p>
          </div>
          <div className='grid gap-8 sm:gap-10 md:grid-cols-3'>
            {values.map((value, i) => (
              <article key={value.title} className='space-y-3'>
                <p
                  className='text-xs uppercase tracking-[0.18em] text-bloom-deep'
                  style={{ fontFamily: 'var(--font-mono)' }}>
                  0{i + 1}
                </p>
                <h3
                  className='text-xl sm:text-2xl font-semibold uppercase tracking-tight'
                  style={{ fontFamily: 'var(--font-poppins)' }}>
                  {value.title}
                </h3>
                <p className='text-sm sm:text-base text-muted-foreground leading-relaxed'>
                  {value.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Closing manifesto + signature card */}
      <article className='container-page-v2 pt-16 sm:pt-20 pb-8 max-w-3xl'>
        <section className='space-y-4'>
          <h2
            className='text-2xl sm:text-3xl font-semibold uppercase tracking-tight'
            style={{ fontFamily: 'var(--font-poppins)' }}>
            {isDE ? 'Mehr als ein Produkt' : 'More than a product'}
          </h2>
          <p className='text-base sm:text-lg text-muted-foreground leading-relaxed'>
            {isDE
              ? 'Miss Glow Beauty ist mehr als ein Produkt. Es ist ein Gefühl. Ein Ritual. Ein Moment nur für dich und deine Schönheit.'
              : 'Miss Glow Beauty is more than a product. It is a feeling. A ritual. A moment just for you and your beauty.'}
          </p>
        </section>

        <section className='mt-16 rounded-md border border-border bg-card p-8 sm:p-10 space-y-4'>
          <h2
            className='text-2xl sm:text-3xl font-semibold uppercase tracking-tight'
            style={{ fontFamily: 'var(--font-poppins)' }}>
            {isDE ? 'Eine Notiz von der Gründerin' : 'A note from the founder'}
          </h2>
          <p className='text-base sm:text-lg text-foreground/85 leading-relaxed'>
            {isDE
              ? 'Mit Liebe entwickelt — für jede Frau, die das Beste für ihre Haut will. Schönheit beginnt im Inneren und entfaltet sich nach außen.'
              : 'Developed with love — for every woman who wants the very best for her skin. Beauty begins on the inside and unfolds outward.'}
          </p>
          <p
            className='italic text-sm sm:text-base text-bloom-deep pt-2'
            style={{ fontFamily: 'var(--font-display)' }}>
            — Tatjana Schaller
          </p>
        </section>

        <section className='mt-16 space-y-4'>
          <h2
            className='text-2xl sm:text-3xl font-semibold uppercase tracking-tight'
            style={{ fontFamily: 'var(--font-poppins)' }}>
            {isDE ? 'Kontaktiere uns' : 'Contact us'}
          </h2>
          <p className='text-base sm:text-lg text-muted-foreground leading-relaxed'>
            {isDE
              ? 'Hast du Fragen oder möchtest du mehr erfahren? Wir sind für dich da.'
              : 'Do you have questions or want to learn more? We are here for you.'}
          </p>
          <dl className='grid gap-4 sm:grid-cols-2 mt-6 text-sm'>
            <div>
              <dt
                className='text-xs uppercase tracking-[0.18em] text-muted-foreground mb-1'
                style={{ fontFamily: 'var(--font-mono)' }}>
                WhatsApp
              </dt>
              <dd>
                <a
                  href='tel:0049015151906996'
                  className='hover:text-bloom-deep'>
                  (0049) 015151906996
                </a>
              </dd>
            </div>
            <div>
              <dt
                className='text-xs uppercase tracking-[0.18em] text-muted-foreground mb-1'
                style={{ fontFamily: 'var(--font-mono)' }}>
                E-Mail
              </dt>
              <dd>
                <a
                  href={`mailto:${process.env.NEXT_PUBLIC_ADMINEMAIL}`}
                  className='hover:text-bloom-deep break-words'>
                  {process.env.NEXT_PUBLIC_ADMINEMAIL}
                </a>
              </dd>
            </div>
          </dl>
        </section>
      </article>

      {/* Closing — soft candy fade rising from below */}
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
            priority
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
