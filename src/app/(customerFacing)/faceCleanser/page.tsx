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
import {
  FACECLEANSERPRICE,
  productImagesFaceCleanser,
} from '../../../../consts';
import { getSalePrice, useSale } from '@/contexts/SaleProvider';

export default function FaceCleanser() {
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
          ? 'Welchen effekt hat FACE CLEANSER ?'
          : 'What effect does FACE CLEANSER have?',
      answer:
        language == 'de'
          ? 'FACE CLEANSER hat mehrere positve Effekte auf die Haut: Tiefenreinigung: Entfernt Make-up, überschüssigen Talg und Schmutz aus den Poren für ein klares Hautbild.Verfeinertes Hautbild: Wirkt entzündungshemmend und reduziert Hautunreinheiten.Feuchtigkeitsspendend: Enthält Hyaluronsäure, die die Haut optimal mit Feuchtigkeit versorgt. Schonend und pflegend: Geeignet für empfindliche Haut, ohne sie auszutrocknen. Strahlende Haut: Stellt das natürliche Hautgleichgewicht wieder her und sorgt für einen frischen, gesunden Glow.'
          : 'FACE CLEANSER has several positive effects on the skin: Deep cleansing: Removes make-up, excess oil and dirt from the pores for a clear skin appearance. Refined skin: Acts anti-inflammatory and reduces skin impurities. Moisturizing: Contains hyaluronic acid that optimally moisturizes the skin. Gentle and protective: Suitable for sensitive skin, without drying it out. Radiant skin: Restores the natural skin balance and provides a fresh, healthy glow.',
    },
    {
      id: 9,
      question:
        language == 'de'
          ? 'Für wen ist FACE CLEANSER geeignet?'
          : 'Who is FACE CLEANSER suitable for?',
      answer:
        language == 'de'
          ? 'FACE CLEANSER ist für alle Frauen geeignet, die eine tiefere und sanfte Reinigung der Haut benötigen, um ein klares Hautbild zu erhalten. Es ist besonders gut für empfindliche und sensible Haut geeignet.'
          : 'FACE CLEANSER is suitable for all women who need a deeper and gentleskin cleansing to achieve a clear skin appearance. It is particularly good for sensitive and sensitive skin types.',
    },
    {
      id: 10,
      question:
        language == 'de'
          ? 'Welche Inhaltsstoffe sind in FACE CLEANSER enthalten? '
          : 'What ingredients are in FACE CLEANSER?',
      answer:
        language == 'de'
          ? 'FACE CLEANSER besitzt natürliche hochwertige Wirkstoffe mit einer intensiven Wirkung zur Reinigung und Pflege der Gesichtspartie. Die einzigartige Formel enthält Centella Asiatica extract  (die beste erforschte Heilpflanze zum bilden von Körpereigenem Kollagen um bis zu 77%), Vitamine und eine extrem niedrige Micro Molekulare Hyaluronsäure,diese besitzt eine 8fache kombination aus verschiedenen Hyaluronsöuren zur optimalen intensiven ANTI-AGING Behandlung für mehr frische und strahlende Haut.'
          : "FACE CLEANSER contains natural high-quality active ingredients with an intensive effect for cleansing and care of the skin. The unique formula contains Centella Asiatica extract (the best researched medicinal plant for the formation of the body's own collagen by up to 77%), vitamins and an extremely low micro-molecular hyaluronic acid, this has an 8-fold combination of different hyaluronic acids for optimal intensive ANTI-AGING treatment for more fresh and radiant skin.",
    },
  ];

  return (
    <MaxWidthWrapper>
      <div className='mx-auto max-w-2xl px-4 py-8 sm:px-6 -mt-10 md:mt-0 lg:grid lg:grid-cols-2 lg:max-w-7xl lg:gap-x-8 lg:px-8'>
        {/* product details */}
        <div className='lg:max-w-lg lg:self-end'>
          <div className='mt-4'>
            <h1 className='text-3xl font-bold tracking-tight text-clay sm:text-4xl'>
              FACE CLEANSER
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
                      {formatCurrency(FACECLEANSERPRICE)}
                    </p>
                    <span className='text-xs font-bold text-white bg-bloom px-3 py-1.5 rounded-full shadow-md whitespace-nowrap'>
                      -{salePercentage}% {saleName}
                    </span>
                  </div>
                )}
                <p className='font-medium text-clay text-xl'>
                  {formatCurrency(getSalePrice(FACECLEANSERPRICE, salePercentage))}
                </p>
              </div>

              <div className='ml-4 border-l text-muted-foreground border-stone-300 pl-4'>
                <p className='text-lg font-medium'>
                  {language == 'de' ? 'Auf Lager' : 'In stock'}
                </p>
                <p className='text-lg font-medium'>50ml</p>
                <p className='text-lg font-medium'>
                  {language == 'de'
                    ? 'Wird in 1-2 Wochen versendet.'
                    : 'Will be shipped in 1-2 weeks.'}
                </p>
              </div>
            </div>

            <div className='mt-4 space-y-6'>
              <ul className='list-disc ml-5'>
                <li className='text-lg ttext-clay'>
                  {language == 'de'
                    ? 'Reinigt die Poren und entfernt selbst das Make up für ein klares und glattes Hautgefühl'
                    : 'Cleans the pores and removes make-up for a clear and smooth skin feel'}
                </li>
                <li className='text-lg ttext-clay'>
                  {language == 'de'
                    ? 'Entzündungshemmend verfeinert das Hautbild '
                    : 'Anti-inflammatory refines the skin'}
                </li>
                <li className='text-lg ttext-clay'>
                  {language == 'de'
                    ? 'Für empfindliche Haut geeignet'
                    : 'Suitable for sensitive skin'}
                </li>
                <li className='text-lg ttext-clay'>
                  {language == 'de' ? 'Strahlendes Hautbild' : 'Radiant skin'}
                </li>
                <li className='text-lg ttext-clay'>
                  {language == 'de'
                    ? 'Wirkung in Studien bestätigt'
                    : 'Effect confirmed in studies'}
                </li>
                <li className='text-lg ttext-clay'>
                  {language == 'de'
                    ? 'Sichtbar frischer und straffer'
                    : 'Visibly fresher and firmer'}
                </li>
                <li className='text-lg ttext-clay'>
                  {language == 'de'
                    ? 'Stellt das natürliche Hautgleichgewicht wieder her, enthält Hyaluronsäure zur optimalen Reinigung und Pflege der Gesichtshaut '
                    : 'Restores the natural skin balance, contains hyaluronic acid for optimal cleansing and care of the skin'}
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
            <ImageSlider
              urls={productImagesFaceCleanser}
              alt={`produkt bilder`}
            />
          </div>
        </div>

        {/* add to cart part */}
        <div className='mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start'>
          <div>
            <ShareLink
              link={`${process.env.NEXT_PUBLIC_SERVER_URL}/freshEyes`}
            />
            <div className='mt-10'>
              <AddToCartButton
                product={{
                  id: '5',
                  name: 'Fresh Eyes Serum',
                  price: getSalePrice(FACECLEANSERPRICE, salePercentage),
                  image: productImagesFaceCleanser[0],
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

      {/* More images and Product description */}
      <div className='md:px-10 md:pb-20 pb-5'>
        <h4 className=' text-clay font-semibold'>
          {language == 'de' ? 'Produktbeschreibung' : 'Product description'}
        </h4>

        <div className='mt-5 px-3 pb-5'>
          <h5 className='text-center font-semibold text-pink-400'>
            FACE CLEANSER
          </h5>
          {/* <p className=' text-clay leading-snug mt-3'>
            {language == 'de'
              ? 'FRESH EYES SERUM besitzt einen Award Winner Wirkstoffzur gezielten sichtbaren Verjüngung der Augenpartie und Faltenreduzierung, Lifting & Straffung der Lider und Fältchen, für strahlende Augenblicke eine wertvolle natürliche Verbindung für eine nachgewiesene FALTENREDUZIERUNG'
              : 'FRESH EYES SERUM has an Award Winner active ingredient for targeted visible rejuvenation of the eye area and wrinkle reduction, lifting & tightening of the eyelids and wrinkles, for radiant moments a valuable natural connection for proven WRINKLE REDUCTION'}
          </p> */}
          <p className=' text-clay leading-snug mt-3'>
            {language == 'de'
              ? 'FACE CLEANSER besitzt positive Effekte auf die Haut, reduziert Rötungen und irritationen, ideal für gestresste Haut. Unterstützt die natürliche Schutzbarriere der Haut und bringt sie ins Gleichgewicht. Anti-Aging Wirkung durch die 8D 8-fache Hyaloronsäure aus extrem micro Molekülen für eine bessere Feuchtigkeitsversorgung der Haut.FACE CLEANSER verleiht der Haut ein frisches Hautgefühl, reinigt und pflegt selbst die sensible Haut, zögert die Hautalterung hinaus und sorgt für eine sichtbare gepflegte Haut.'
              : 'FACE CLEANSER has positive effects on the skin, reduces redness and irritation, ideal for stressed skin. Supports the natural protective barrier of the skin and brings it into balance. Anti-Aging effect through the 8D 8-fold hyaluronic acid from extremely micro molecules for better moisturization of the skin.FACE CLEANSER gives the skin a fresh skin feel, cleanses and cares for the sensitive skin, delays skin aging and provides a visible well-cared-for skin.'}
          </p>
        </div>

        <div className='flex-col justify-between items-center gap-10 md:grid md:grid-cols-2'>
          <Card className='p-3 max-w-lg my-10 bg-gray-200'>
            <h5 className='text-center font-semibold text-pink-400'>
              FACE CLEANSER
            </h5>
            <p className=' text-clay leading-snug '>
              {language == 'de'
                ? 'FACE CLEANSER bereitet die Gesichtshaut gründlich auf die Pflege vor, sodass nachfolgende Pflegeprodukte besser aufgenommen werden können. '
                : 'FACE CLEANSER thoroughly prepares the skin for care, so that subsequent care products can be better absorbed.'}
            </p>
          </Card>
          <Image
            src='/FaceCleanser.jpeg'
            width={700}
            height={700}
            alt='miss glow fresh eyes'
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
            ? 'Morgens und Abends auf die Gesichtshaut einen ganzen push FACE CLEANSER mit etwas Wasser aufemulgieren und das Gesicht reinigen, entfernt selbst Augen Make Up'
            : 'Clean the skin with FACE CLEANSER morning and evening. Apply and massage onto the skin with a little water to emulsify and cleanse the skin, removes eye make-up.'}
        </p>
        <p className='text-xs text-center mt-10'>
          INCI:Centella asiatica extract, cell aqua, aloe barbadensis
          extract,OLIGO -HA hydrolyzed sodium hyaluronate, Lactococcus ferment,
          Centella asiatica aceide
          {language == 'de'
            ? '(das zum Wohlgefühl beiträgt)'
            : '(which contributes to well-being)'}
        </p>
      </div>
    </MaxWidthWrapper>
  );
}
