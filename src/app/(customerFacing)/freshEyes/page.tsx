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
import { FRESHEZESPRICE, productImagesFresh } from '../../../../consts';
import { getSalePrice, useSale } from '@/contexts/SaleProvider';

export default function FreshEyeShopSite() {
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
          ? 'Welchen effekt hat FRESH EYES SERUM ?'
          : 'What effect does FRESH EYES SERUM have?',
      answer:
        language == 'de'
          ? 'FRESH EYES SERUM besitzt besitzt Liftingwirkung mit einem Preisgekrönten Wirkstoff. Award Winner in seiner Wirksamkeit. 8D 8-fache Hyaloronsäure aus extrem micro Molekülen für eine bessere Feuchtigkeitsversorgung der empfindlichen Augenpartie. FRESH EYES SERUM zögert die Hautalterung hinaus und sorgt für eine sichtbare Verjüngung der Augenpartie.'
          : 'FRESH EYES SERUM has a lifting effect with an award-winning active ingredient. Award Winner in its effectiveness. 8D 8-fold hyaluronic acid from extremely micro molecules for better moisturization of the sensitive eye area. FRESH EYES SERUM delays skin aging and provides visible rejuvenation of the eye area.',
    },
    {
      id: 9,
      question:
        language == 'de'
          ? 'Für wen ist FRESH EYES SERUM geeignet?'
          : 'Who is FRESH EYES SERUM suitable for?',
      answer:
        language == 'de'
          ? 'FRESH EYES SERUM ist für alle Frauen die sich verjüngen möchten oder länger jung aussehen möchten.'
          : 'FRESH EYES SERUM is suitable for all women who want to be rejuvenated or look younger for longer.',
    },
    {
      id: 10,
      question:
        language == 'de'
          ? 'Welche Inhaltsstoffe sind in FRESH EYES SERUM enthalten?'
          : 'What ingredients are in FRESH EYES SERUM?',
      answer:
        language == 'de'
          ? 'FRESH EYES SERUM besitzt natürliche AWARD WINNER Wirkstoffe mit einer excellenten Lifting Wirkung zur Verjüngung der Augenpartie, das modernste OLIGO-Aminosäuren WIRKSTOFF für eine sichtbare Verjüngung und Faltenreduzierung. Die einzigartige Formel enthält Centella Asiatica extract  (die beste erforschte Heilpflanze zum bilden von Körpereigenem Kollagen um bis zu 77%), Vitamine und eine extrem niedrige Micro Molekulare Oligo-HA Hyaluronsäure, eine 8D Hyaluronsäure diese besitzt eine 8fache kombination aus verschiedenen Hyaluronsöuren zur optimalen intensiven ANTI-AGING Behandlung der Augenpartie für frische und wunderschöne Augenblicke.'
          : "FRESH EYES SERUM has natural AWARD WINNER active ingredients with an excellent lifting effect for rejuvenation of the eye area, the most modern OLIGO-amino acid ACTIVE INGREDIENT for visible rejuvenation and wrinkle reduction. The unique formula contains Centella Asiatica extract (the best researched medicinal plant for the formation of the body's own collagen by up to 77%), vitamins and an extremely low micro-molecular OLIGO-HA hyaluronic acid, an 8D hyaluronic acid this has an 8-fold combination of different hyaluronic acids for optimal intensive ANTI-AGING treatment of the eye area for fresh and beautiful moments.",
    },
  ];

  return (
    <MaxWidthWrapper>
      <div className='mx-auto max-w-2xl px-4 py-8 sm:px-6 -mt-10 md:mt-0 lg:grid lg:grid-cols-2 lg:max-w-7xl lg:gap-x-8 lg:px-8'>
        {/* product details */}
        <div className='lg:max-w-lg lg:self-end'>
          <div className='mt-4'>
            <h1 className='text-3xl font-bold tracking-tight text-clay sm:text-4xl'>
              FRESH EYES SERUM
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
                      {formatCurrency(FRESHEZESPRICE)}
                    </p>
                    <span className='text-xs font-bold text-white bg-bloom px-3 py-1.5 rounded-full shadow-md whitespace-nowrap'>
                      -{salePercentage}% {saleName}
                    </span>
                  </div>
                )}
                <p className='font-medium text-clay text-xl'>
                  {formatCurrency(getSalePrice(FRESHEZESPRICE, salePercentage))}
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
                <li className='text-lg ttext-clay'>
                  {language == 'de'
                    ? 'Anti Aging Aktivität'
                    : 'Anti-aging activity'}
                </li>
                <li className='text-lg ttext-clay'>
                  {language == 'de'
                    ? 'Lifting und Straffung der Lieder und Fältchen'
                    : 'Lifting and tightening of the eyelids and wrinkles'}
                </li>
                <li className='text-lg ttext-clay'>
                  {language == 'de'
                    ? 'Auch für die intensive Behandlung der Stirnfalten geeignet'
                    : 'Also suitable for the intensive treatment of forehead wrinkles'}
                </li>
                <li className='text-lg ttext-clay'>
                  {language == 'de'
                    ? 'Sichtbare Verjüngung der Augenpartie und Faltenreduzierung'
                    : 'Visible rejuvenation of the eye area and wrinkle reduction'}
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
                    ? 'Verlangsamt die Hautalterung'
                    : 'Slows down skin aging'}
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
            <ImageSlider urls={productImagesFresh} alt={`produkt bilder`} />
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
                  id: '3',
                  name: 'Fresh Eyes Serum',
                  price: getSalePrice(FRESHEZESPRICE, salePercentage),
                  image: productImagesFresh[0],
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
          <h5 className='text-center font-semibold text-blue-400'>
            FRESH EYES SERUM
          </h5>
          {/* <p className=' text-clay leading-snug mt-3'>
            {language == 'de'
              ? 'FRESH EYES SERUM besitzt einen Award Winner Wirkstoffzur gezielten sichtbaren Verjüngung der Augenpartie und Faltenreduzierung, Lifting & Straffung der Lider und Fältchen, für strahlende Augenblicke eine wertvolle natürliche Verbindung für eine nachgewiesene FALTENREDUZIERUNG'
              : 'FRESH EYES SERUM has an Award Winner active ingredient for targeted visible rejuvenation of the eye area and wrinkle reduction, lifting & tightening of the eyelids and wrinkles, for radiant moments a valuable natural connection for proven WRINKLE REDUCTION'}
          </p> */}
          <p className=' text-clay leading-snug mt-3'>
            {language == 'de'
              ? 'FRESH EYES SERUM besitzt besitzt Liftingwirkung mit einem Preisgekrönten Wirkstoff. Award Winner in seiner Wirksamkeit. 8D 8-fache Hyaloronsäure aus extrem micro Molekülen für eine bessere Feuchtigkeitsversorgung der empfindlichen Augenpartie. FRESH EYES SERUM zögert die Hautalterung hinaus und sorgt für eine sichtbare Verjüngung der Augenpartie.'
              : 'FRESH EYES SERUM has a lifting effect with an award-winning active ingredient. Award Winner in its effectiveness. 8D 8-fold hyaluronic acid from extremely micro molecules for better moisturization of the sensitive eye area. FRESH EYES SERUM delays skin aging and provides visible rejuvenation of the eye area.'}
          </p>
        </div>

        <div className='flex-col justify-between items-center gap-10 md:grid md:grid-cols-2'>
          <Card className='p-3 max-w-lg my-10 bg-gray-200'>
            <h5 className='text-center font-semibold text-blue-400'>
              FRESH EYES SERUM
            </h5>
            <p className=' text-clay leading-snug '>
              {language == 'de'
                ? 'FRESH EYES SERUM besitzt einen Award Winner Wirkstoffzur gezielten sichtbaren Verjüngung der Augenpartie und Faltenreduzierung, Lifting & Straffung der Lider und Fältchen, für strahlende Augenblicke eine wertvolle natürliche Verbindung für eine nachgewiesene FALTENREDUZIERUNG'
                : 'FRESH EYES SERUM has an Award Winner active ingredient for targeted visible rejuvenation of the eye area and wrinkle reduction, lifting & tightening of the eyelids and wrinkles, for radiant moments a valuable natural connection for proven WRINKLE REDUCTION'}
            </p>
          </Card>
          <Image
            src='/FRESH.png'
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
            ? ' Täglich auf Stirn und Augenpartie auftragen und einmassieren.'
            : ' Apply and massage onto forehead and eye area twice daily.'}
        </p>
        <p className='text-xs text-center mt-10'>
          INCI:Centella asiatica extract, cell aqua, aloe barbadensis
          extract,OLIGO -HA hydrolyzed sodium hyaluronate, acetyl
          Hexapeptide-1,baicalin extract, Centella asiatica
          {language == 'de'
            ? '(das zum Wohlgefühl beiträgt)'
            : '(which contributes to well-being)'}
        </p>
      </div>
    </MaxWidthWrapper>
  );
}
