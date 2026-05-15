'use client';
import React from 'react';
import ImageSlider from '../_components/ImageSlider';
import MaxWidthWrapper from '../_components/MaxWidthWrapper';

import { Check, Shield } from 'lucide-react';
import { formatCurrency } from '@/lib/formatters';
import { ShareLink } from '../_components/ShareLink';

import AddToCartButton from '../_components/AddToCartButton';
import FAQComponent from '@/components/components/homepage/FAQComp';
import { useLanguage } from '@/contexts/LanguageProvider';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { PRICEMAGICGLOW, productImagesGlowCreme } from '../../../../consts';
import { getSalePrice, useSale } from '@/contexts/SaleProvider';

export default function MagicGlowShopSite() {
  const { language } = useLanguage();
  const { isActive, salePercentage, saleName } = useSale();
  const questions = [
    {
      id: 5,
      question:
        language == 'de'
          ? 'Wie lange hält das Produkt?'
          : 'How long does the product last?',
      answer:
        language == 'de'
          ? 'Die Haltbarkeit des Produkts beträgt 6 Monate nach dem Öffnen.'
          : 'The product has a shelf life of 6 months after opening.',
    },
    {
      id: 6,
      question:
        language == 'de'
          ? 'Ist das Produkt tierversuchsfrei?'
          : 'Is the product cruelty-free?',
      answer:
        language == 'de'
          ? 'Ja, das Produkt ist tierversuchsfrei und 100% Vegan'
          : 'Yes, the product is cruelty-free and 100% vegan.',
    },
    {
      id: 7,
      question:
        language == 'de'
          ? 'Ist das Produkt klinisch getested?'
          : 'Is the product clinically tested?',
      answer:
        language == 'de'
          ? 'Ja, das Produkt wurde in klinischen Studien getestet und ist selbst für empfindliche und sensible Hauttypen geeignet.'
          : 'Yes, the product has been tested in clinical studies and is suitable also for sensitve skin types.',
    },
    {
      id: 8,
      question:
        language == 'de'
          ? 'Welchen effekt hat MAGIC GLOW CREME ?'
          : 'What effect does MAGIC GLOW CREME have?',
      answer:
        language == 'de'
          ? 'MAGIC GLOW CREME besitzt gezielte verjüngende Inhaltsstoffe, die die Hautalterung verlangsamen und die Haut straffen. Die Creme sorgt für eine intensive Hautstraffung und reduziert Falten. Die Haut wird vor oxidativem Stress geschützt und das Zellwachstum wird angeregt. Die Haut fühlt sich nach der Anwendung straffer und jünger an.'
          : 'MAGIC GLOW CREME has targeted rejuvenating ingredients that slow down skin aging and tighten the skin. The cream provides intensive skin tightening and reduces wrinkles. The skin is protected against oxidative stress and cell growth is stimulated. The skin feels firmer and younger after application.',
    },
    {
      id: 9,
      question:
        language == 'de'
          ? 'Für wen ist MAGIC GLOW CREME geeignet?'
          : 'Who is MAGIC GLOW CREME suitable for?',
      answer:
        language == 'de'
          ? 'MAGIC GLOW CREME ist für alle Frauen die sich verjüngen möchten oder länger jung aussehen möchten.'
          : 'MAGIC GLOW CREME is suitable for all women who want to be rejuvenated or look younger for longer.',
    },
    {
      id: 10,
      question:
        language == 'de'
          ? 'Welche Inhaltsstoffe sind in MAGIC GLOW CREME enthalten?'
          : 'What ingredients are in MAGIC GLOW CREME?',
      answer:
        language == 'de'
          ? 'MAGIC GLOW CREME besitzt natürliche OLIGOpeptide, die die Haut verjüngen und straffen. Die Creme enthält auch wertvolle Inhaltsstoffe wie Centella asiatica extract, OLIGO-HA, micro molikulare Hyaluronsäure, palmitoyl tripeptide-1 (welches die Haut von innen heraus verjüngt), Extrakt aus der Wurzel des Baikal-Schädelkappen, Eclipta Prostrata (sorgt für Wohlgefühl) und Centella asiatica acide (welches Endzündungshemend ist und geschmeidigkeit spended).  Diese Inhaltsstoffe sorgen für eine intensive Hautstraffung und reduzieren Falten.'
          : 'MAGIC GLOW CREME has natural OLIGOpeptides that rejuvenate and tighten the skin. The cream also contains valuable ingredients such as Centella asiatica extract, OLIGO-HA, micro-molecular hyaluronic acid, palmitoyl tripeptide-1 (which rejuvenates the skin from the inside out), extract from the root of the Baikal skullcap, Eclipta Prostrata (provides a sense of well-being) and Centella asiatica acide (which is anti-inflammatory and provides suppleness). These ingredients provide intensive skin tightening and reduce wrinkles.',
    },
  ];

  return (
    <MaxWidthWrapper>
      <div className='mx-auto max-w-2xl px-4 py-8 sm:px-6 -mt-10 md:mt-0 lg:grid lg:grid-cols-2 lg:max-w-7xl lg:gap-x-8 lg:px-8'>
        {/* product details */}
        <div className='lg:max-w-lg lg:self-end'>
          <div className='mt-4'>
            <h1 className='text-3xl font-bold tracking-tight text-clay sm:text-4xl'>
              MAGIC GLOW CREME
            </h1>
            <div className='flex gap-3 mt-6 items-center'>
              <p className='text-lg text-muted-foreground'>
                {language == 'de' ? 'Hersteller' : 'Manufactured by'}
              </p>
              <span className='text-xl text-muted-foreground font-semibold'>
                Miss Glow Beauty
              </span>
            </div>
          </div>

          <section className='mt-4'>
            <div className='flex items-center'>
              <div className='flex flex-col'>
                {isActive && (
                  <div className='flex items-center gap-2'>
                    <p className='font-medium text-clay-soft text-lg line-through'>
                      {formatCurrency(PRICEMAGICGLOW)}
                    </p>
                    <span className='text-xs font-bold text-white bg-bloom px-3 py-1.5 rounded-full shadow-md whitespace-nowrap'>
                      -{salePercentage}% {saleName}
                    </span>
                  </div>
                )}
                <p className='font-medium text-clay text-xl'>
                  {formatCurrency(getSalePrice(PRICEMAGICGLOW, salePercentage))}
                </p>
              </div>

              <div className='ml-4 border-l text-muted-foreground border-stone-300 pl-4'>
                <p className='text-lg font-medium'>
                  {language == 'de' ? 'Auf Lager' : 'In stock'}
                </p>
                <p className='text-lg font-medium'>30ml</p>
                <p className='text-lg font-medium'>
                  {language == 'de'
                    ? 'Wird in 1-2 Wochen versendet.'
                    : 'Will be shipped in 1-2 weeks.'}
                </p>
              </div>
            </div>

            <div className='mt-4 space-y-6'>
              <ul className='list-disc ml-5'>
                <li className='text-lg text-clay'>
                  {language == 'de' ? 'Verjüngung' : 'Rejuvenation'}
                </li>
                <li className='text-lg text-clay'>
                  {language == 'de'
                    ? 'Natürliche OLIGOpeptide'
                    : 'Natural OLIGOpeptides'}
                </li>
                <li className='text-lg text-clay'>
                  {language == 'de' ? 'Faltenreduzierung' : 'Reduces wrinkles'}
                </li>
                <li className='text-lg text-clay'>
                  {language == 'de' ? 'ANTI-AGING effekt' : 'ANTI-AGING effect'}
                </li>
                <li className='text-lg text-clay'>
                  {language == 'de'
                    ? 'Verlangsamt die Hautalterung'
                    : 'Slows down skin aging'}
                </li>
                <li className='text-lg text-clay'>
                  {language == 'de' ? 'Zellwachstum' : 'Cell growth'}
                </li>
                <li className='text-lg text-clay'>
                  {language == 'de'
                    ? 'Schutz vor oxidativen Stress'
                    : 'Protection against oxidative stress'}
                </li>
                <li className='text-lg text-clay'>
                  {language == 'de'
                    ? 'Intensive Hautstraffung'
                    : 'Intensive skin tightening'}
                </li>
                <li className='text-lg text-clay'>
                  {language == 'de' ? 'Wohlgefühl' : 'Well-being'}
                </li>
              </ul>
            </div>

            <div className='mt-6 flex items-center'>
              <Check
                aria-hidden='true'
                className='h-6 w-6 flex-shrink-0 text-green-500'
              />
              <p className='ml-2 text-lg text-muted-foreground'>
                {language == 'de' ? 'Lieferbar' : 'Can be shipped'}
              </p>
            </div>
          </section>
        </div>

        {/* product images */}
        <div className='mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center mb-10'>
          <div className='aspect-square rounded-lg'>
            <ImageSlider urls={productImagesGlowCreme} alt={`produkt bilder`} />
          </div>
        </div>

        {/* add to cart part */}
        <div className='mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start'>
          <div>
            <ShareLink
              link={`${process.env.NEXT_PUBLIC_SERVER_URL}/magicGlow`}
            />
            <div className='mt-10'>
              <AddToCartButton
                product={{
                  id: '2',
                  name: 'Magic Glow Creme',
                  price: getSalePrice(PRICEMAGICGLOW, salePercentage),
                  image: productImagesGlowCreme[0],
                  quantity: 1,
                }}
              />
            </div>
            <div className='mt-6 text-center'>
              <div className='group inline-flex text-lg text-medium'>
                <Shield
                  aria-hidden='true'
                  className='mr-2 h-6 w-6 flex-shrink-0 text-clay-soft/70'
                />
                <span className=' text-sm text-muted-foreground hover:text-clay'>
                  {language == 'de'
                    ? 'Kunden Service Rund um die Uhr erreichbar unter'
                    : 'Customer Service available 24/7 at '}
                  <br /> E-Mail : {process.env.NEXT_PUBLIC_ADMINEMAIL}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FAQComponent questions={questions} />

      {/* Product description */}
      <div className='md:px-10 md:pb-20 pb-5'>
        <h4 className=' text-clay font-semibold'>
          {language == 'de' ? 'Produktbeschreibung' : 'Product description'}
        </h4>

        <div className='mt-5 px-3 pb-5'>
          <h5 className='text-center font-semibold text-orange-400'>
            MAGIC GLOW CREME
          </h5>
          <p className=' text-clay leading-snug mt-3'>
            {language == 'de'
              ? 'Ist eine Verbindung aus extrem niedrigen Micro Molekularen Oligo-HA Hyaluronsäure, CENTELLA ASIATICA, Aminosäuren, Vitaminen und einem fortschrittlichen OLIGOPEPTIDE WIRKSTOFF der einen signifikanten ANTI-AGING Effekt bietet und NÄHRSTOFFE für das ZELLWACHSTUM liefert, schützt vor oxidative STRESS und speziell für eine sichtbare Verjüngung entwickelt wurde. '
              : 'Is a compound of extremely low micro-molecular OLIGO-HA hyaluronic acid, CENTELLA ASIATICA, amino acids, vitamins and an advanced OLIGOPEPTIDE ACTIVE INGREDIENT that offers a significant ANTI-AGING effect and provides NUTRIENTS for CELL GROWTH, protects against oxidative STRESS and was specially developed for visible rejuvenation.'}
          </p>
          <p className=' text-clay leading-snug mt-3'>
            {language == 'de'
              ? 'Mit dem Vorteil eine bessere Hautpenetration, maximiert OLIGO-HA die Befeuchtung der Haut und aktiviert gleichzeitig die Stammfunktion der Epidermis, fördert die Zelldifferenzierung und beugt so der vorzeitigen Hautalterung vor. WOHLGEFÜHL und sichtbare VERJÜNGUNG Klinisch nachgewiesene Faltenreduzierung und Verbesserung der Hautstraffung'
              : 'With the advantage of better skin penetration, OLIGO-HA maximizes skin hydration and activates the stem function of the epidermis, promotes cell differentiation and thus prevents premature skin aging. WELL-BEING and visible REJUVENATION Clinically proven wrinkle reduction and improvement of skin tightening'}
          </p>
        </div>

        <div className='flex-col justify-between items-center gap-10 md:grid md:grid-cols-2'>
          <Card className='p-3 max-w-lg my-10 bg-gray-200'>
            <h5 className='text-center font-semibold text-orange-400'>
              MAGIC GLOW CREME
            </h5>
            <p className=' text-clay leading-snug '>
              {language == 'de'
                ? 'MAGIC GLOW CREME besitzt gezielte VERJÜNGENDE OLIGOPEPTIDE und Wirkstoffe natürlichen Ursprungs zur gezielten sichtbaren Faltenreduzierung, HAUTSTRUKTUR verbessernd, HAUTALTERUNG zu verlangsamen. MAGIC GLOW CREME eine wertvolle natürliche Verbindung für eine nachgewiesene FALTENREDUZIERUNG.'
                : 'MAGIC GLOW CREME has targeted REJUVENATING OLIGOPEPTIDES and natural active ingredients for targeted visible wrinkle reduction, improving SKIN STRUCTURE, slowing down SKIN AGING. MAGIC GLOW CREME a valuable natural compound for proven WRINKLE REDUCTION.'}
            </p>
          </Card>
          <Image
            src='/glowcream1.png'
            width={700}
            height={700}
            alt='miss glow'
            className=' max-w-80 rounded-md'
          />
        </div>
        <h4 className=' text-clay font-semibold mt-5'>
          {language == 'de' ? 'Anwendung' : 'Application'}
        </h4>
        <p className=' text-clay'>
          <span className='text-clay font-semibold'>
            {language == 'de' ? '2 mal ' : 'Twice '}
          </span>
          {language == 'de'
            ? 'Täglich auf Gesicht, Hals und Dekollete einmassieren.'
            : 'Daily massage into face, neck and décolleté.'}{' '}
        </p>
        <p className='text-xs text-center mt-10'>
          INCI:Centella asiatica extract, cell aqua, palmitoyl tripeptide-1OLIGO
          -HA hydrolyzed sodium hyaluronate, retinal palmitate, tocopherol,
          L-ascorbic acid, acid Centella asiatica
          {language == 'de'
            ? '(das zum Wohlgefühl beiträgt)'
            : '(which contributes to well-being)'}
        </p>
      </div>
    </MaxWidthWrapper>
  );
}
