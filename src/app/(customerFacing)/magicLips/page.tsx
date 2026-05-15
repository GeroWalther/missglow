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
import { MAGICLIPSPRICE, productImgsLips } from '../../../../consts';
import { getSalePrice, useSale } from '@/contexts/SaleProvider';

export default function MagicLipsShopSite() {
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
          ? 'Welchen effekt hat MAGIC LIPS SERUM'
          : 'What effect does MAGIC LIPS SERUM have?',
      answer:
        language == 'de'
          ? 'Das Produkt hat eine aufpolsternde Wirkung auf die Lippen. Nach nur 1 Anwendung sind sofort sichtbar volle Lippen. Es verleiht der Lippenpartie ein volles und definiertes Aussehen und reduziert Rillen und Lippenfältchen. Eine verbesserte Definition der Lippen, ebenfalls wird das natürliche Lippenrot hervorgehoben. Lippen aufpolsternde Wirkung bis zu 78%. Wohlgeformte weiche Lippen.'
          : 'The product has a plumping effect on the lips. Visible full lips after just 1 application. It gives the lip area a full and defined appearance and reduces lip lines and wrinkles. Improved definition of the lips, also enhances the natural lip color. Lip plumping effect up to 78%. Well-shaped soft lips.',
    },
    {
      id: 9,
      question:
        language == 'de'
          ? 'Für wen ist MAGIC LIPS SERUM geeignet?'
          : 'Who is MAGIC LIPS SERUM suitable for?',
      answer:
        language == 'de'
          ? 'MAGIC LIPS SERUM ist eine hilfe für jede Frau, um die hautalterung hinauszuzögern, die Mundpartie zu verfüngen und die lippen zu aufzupolstern.'
          : 'MAGIC LIPS SERUM is a help for every women. To delay skin aging, to shape the mouth area and to plump the lips.',
    },
    {
      id: 10,
      question:
        language == 'de'
          ? 'Welche Inhaltsstoffe sind in MAGIC LIPS SERUM enthalten?'
          : 'What ingredients are in MAGIC LIPS SERUM?',
      answer:
        language == 'de'
          ? 'MAGIC LIPS SERUM besteht aus hoch effektiven biologischen Inhaltsstoffen, die die Lippen bis zu 78% aufpolstern. Die Formel besitzt einen wertvollen Wirkstoffkomplex aus einer 8-fachen Hyaluronsäure, OLIGO-Aminosäuren,Biologischer Senfsprossen extrakt, Vitanin ACE, Wurzel von Baikal-Helmkraut und eclipta prostrata ( die verjüngend wirkt und den Alterungsprozess verlangsamt) und ecologischer Aloe Vera. Diese Inhaltsstoffe sorgen für eine intensive Lippenaufpolsterung, Lippeneuchtigkeit und Pflege der Lippen nach nur einer Anwendung.'
          : 'MAGIC LIPS SERUM consists of highly effective organic ingredients that plump the lips up to 78%. The formula has a valuable active ingredient complex of an 8-fold hyaluronic acid, OLIGO amino acids, purified extract of organic mustard sprouts, Vitanin ACE, root of Baikal skullcap and eclipta prostrata (which has a rejuvenating effect and slows down the aging process) and ecological aloe vera. These ingredients provide intensive lip plumping, lip moisture and lip care after just one application.',
    },
  ];

  return (
    <MaxWidthWrapper>
      <div className='mx-auto max-w-2xl px-4 py-8 sm:px-6 -mt-10 md:mt-0 lg:grid lg:grid-cols-2 lg:max-w-7xl lg:gap-x-8 lg:px-8'>
        <div className='lg:max-w-lg lg:self-end'>
          <div className='mt-4'>
            <h1 className='text-3xl font-bold tracking-tight text-clay sm:text-4xl'>
              MAGIC LIPS SERUM
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
                      {formatCurrency(MAGICLIPSPRICE)}
                    </p>
                    <span className='text-xs font-bold text-white bg-bloom px-3 py-1.5 rounded-full shadow-md whitespace-nowrap'>
                      -{salePercentage}% {saleName}
                    </span>
                  </div>
                )}
                <p className='font-medium text-clay text-xl'>
                  {formatCurrency(getSalePrice(MAGICLIPSPRICE, salePercentage))}
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
                  {language == 'de'
                    ? '78% Aufpolsternde Wirkung auf die Lippen'
                    : '78% Plumping effect on the lips'}
                </li>
                <li className='text-lg text-clay'>
                  {language == 'de'
                    ? 'Nach nur 1 Anwendung sofort sichtbar volle Lippen'
                    : 'Visible full lips after just 1 application'}
                </li>
                <li className='text-lg text-clay'>
                  {language == 'de'
                    ? 'Verleiht der Lippenpartie ein volles und definiertes Aussehen'
                    : 'Gives the lip area a full and defined appearance'}
                </li>
                <li className='text-lg text-clay'>
                  {language == 'de'
                    ? 'Reduziert Rillen und Lippenfältchen'
                    : 'Reduces lip lines and wrinkles'}
                </li>
                <li className='text-lg text-clay'>
                  {language == 'de'
                    ? 'Eine verbesserte Definition der Lippen, ebenfalls wird das natürliche Lippenrot'
                    : 'Improved definition of the lips, also enhances the natural lip color'}
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
            <ImageSlider urls={productImgsLips} alt={`produkt bilder`} />
          </div>
        </div>

        {/* add to cart part */}
        <div className='mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start'>
          <div>
            <ShareLink
              link={`${process.env.NEXT_PUBLIC_SERVER_URL}/magicLips`}
            />
            <div className='mt-10'>
              <AddToCartButton
                product={{
                  id: '1',
                  name: 'Magic Lips Serum',
                  price: getSalePrice(MAGICLIPSPRICE, salePercentage),
                  image: productImgsLips[0],
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

      {/*Product description */}
      <div className='md:px-10 md:pb-20 pb-5'>
        <h4 className=' text-clay font-semibold mb-6'>
          {language == 'de' ? 'Produktbeschreibung' : 'Product description'}
        </h4>
        <div className='flex-col justify-between items-center gap-10 md:grid md:grid-cols-2'>
          <Card className='p-3 max-w-lg mb-10'>
            <h5 className='text-center font-semibold'>
              In einer In-Vivo STUDIE:
            </h5>
            <p className=' text-clay leading-snug'>
              {language == 'de'
                ? 'Stellten die Probanden nach 29 tägiger Anwendung eine dramatischeVerbesserung der Lippenfülle bis zu 78% und der Lippenfeuchtigkeit fest.Die Pliseefältchen haben sich um 40% reduziert, die Lippenfeuchtigkeitund Lippenvolumen um bis zu 78% erhöht, die Lippenkontur hat sich verbessert, ebenfalls die Lippenlinie hat eine bessere Definition erhalten.'
                : 'After 29 days of use, the subjects noticed a dramatic improvement in lip fullness of up to 78% and lip moisture. The pleated wrinkles have been reduced by 40%, lip moisture and lip volume have increased by up to 78%, the lip contour has improved, and the lip line has received better definition.'}
            </p>
          </Card>
          <Image
            src='/lippenVivo2.jpg'
            width={700}
            height={700}
            alt='vivo study'
            className=' max-w-80 md:-mt-10'
          />
        </div>
        <h4 className=' text-clay font-semibold mt-5'>
          {language == 'de' ? 'Anwendung' : 'Application'}
        </h4>
        <p className=' text-clay'>
          {language == 'de'
            ? ' kann täglich auf Lippen und Mundregion aufgetragen werden, das tägliche benutzen lässt das Lippenvolumen bis zu 78% aufpolstern.'
            : ' can be applied daily to lips and mouth area, daily use plumps the lip volume up to 78%.'}
        </p>
        <p className='text-xs text-center mt-10'>
          INCI: Centella Asiatica extract, Brassica Alba Sprout Extract
          Tripeptide-1, VitaminACE, OLIGO-Aminosäuren, rubusidaeusacide extract,
          eclipta{' '}
          {language == 'de'
            ? '(das zum Wohlgefühl beiträgt)'
            : '(which contributes to well-being)'}
        </p>

        <div className='mt-16 px-3 pb-10'>
          <h5 className='font-semibold'>Was ist MAGIC LIPS SERUM ?</h5>
          <p className=' text-clay leading-snug mt-3'>
            MAGIC LIPS SERUM
            {language == 'de'
              ? ' besitzt ein hochaktives OLIGOpeptid, das speziell für die Mund und Lippenpartie entwickelt wurde, die Protein- und Proteoglyjansynthese aktiviert und so die Dichte des Bindegewebes erhöht.'
              : ' has a highly active OLIGO peptide that was specially developed for the mouth and lip area, activates protein and proteoglycan synthesis, thus increasing the density of the connective tissue.'}
          </p>
          <p className=' text-clay leading-snug mt-3'>
            {language == 'de'
              ? 'MAGIC LIPS SERUM spendet den Lippen Feuchtigkeit und stellt Glykosaminoglykane und Kollagen wieder. '
              : 'MAGIC LIPS SERUM moisturizes the lips and restores glycosaminoglycans and collagen.'}
            <span className=' font-semibold'>
              {language == 'de'
                ? 'erhöht die Lippenfeuchtigkeit und verleiht jugendliches Lippenvolumen bis zu 78%.'
                : 'increases lip moisture and gives youthful lip volume up to 78%.'}
            </span>
          </p>
          <p className=' text-clay leading-snug mt-3'>
            MAGIC LIPS SERUM
            {language == 'de'
              ? ' verbessert die Lippenkontur und verleiht der Lippenlinie eine bessere Definition.'
              : ' improves the lip contour and gives the lip line a better definition.'}
          </p>
          <p className=' text-clay leading-snug mt-3'>
            MAGIC LIPS SERUM
            {language == 'de'
              ? ' strafft und definiert die Lippenkonturen spürbar, spendet Feuchtigkeit und restrukturiert die Lippen.'
              : ' visibly tightens and defines the lip contours, moisturizes and restructures the lips.'}
          </p>
          <p className=' text-clay leading-snug font-semibold mt-3'>
            {language == 'de'
              ? ' Diese ANTI-AGING Behandlung der LIPPEN ist Cosmezeutisch und basiert auf einem Botenpeptid, das Glykosaminoglkane und Kollagen wiederherstellt.'
              : ' This ANTI-AGING treatment of the LIPS is Cosmeceutical and is based on a messenger peptide that restores glycosaminoglycans and collagen.'}
          </p>
          <div className='md:ml-20 ml-10 mt-12'>
            <span className='font-bold text-bloom-deep '>
              {language == 'de'
                ? 'SOFORT SICHTBARE WIRKSAMKEIT'
                : 'INSTANTLY VISIBLE EFFECTIVENESS'}
            </span>
          </div>
          <div className='mt-10'>
            <span className='font-bold text-bloom-deep '>
              {language == 'de'
                ? 'MAGIC LIPS SERUM führt zu einer Verbesserung von Aussehen, Definition und Farbe der Lippen. Erhöht das Lippen Volumen bis zu 78%'
                : 'MAGIC LIPS SERUM leads to an improvement in the appearance, definition and color of the lips. Increases lip volume up to 78%'}
            </span>
          </div>
          <p className=' text-clay leading-snug mt-3'>
            {language == 'de'
              ? ' besitzt einen ANTI-AGING Wirkstoff Centella Asiatica die beste wissenschaftlich erforschte Heilpflanze, ist das non-plus-ultra im Kampf gegen die Hautalterung, eine ausgezeichnete Minderung von Falten im Mund-Lippenbereich besitzen OLIGO-Aminosäuren, leistungsstarke Wirkstoffe, zur VERJÜNGUNG der Mundpartie und die Lippen deutlich voller bis zu 78%. voluminöser und faltenfreier in Szene setzten.'
              : ' has an ANTI-AGING active ingredient Centella Asiatica the best scientifically researched medicinal plant, is the non-plus-ultra in the fight against skin aging, have an excellent reduction of wrinkles in the mouth-lip area OLIGO amino acids, powerful active ingredients, for rejuvenation of the mouth area and the lips significantly fuller up to 78%. more voluminous and wrinkle-free in the scene.'}
          </p>
          <div className='mt-5'>
            <span className='font-bold text-bloom-deep '>
              {language == 'de'
                ? 'Wohlgeformte bis zu 78% mehr Lippenvolumen, weiche sinnliche Lippen ohne Rillen und Fältchen.'
                : 'Well-shaped up to 78% more lip volume, soft sensual lips without grooves and wrinkles.'}
            </span>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
