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
import { MAGICELIXIRPRICE, productImagesMagicElixir } from '../../../../consts';
import { getSalePrice, useSale } from '@/contexts/SaleProvider';

export default function MagicElixir() {
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
          ? 'Die Haltbarkeit des Produkts beträgt 12 Monate nach dem Öffnen.'
          : 'The product has a shelf life of 12 months after opening.',
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
          ? 'Welchen effekt hat MAGIC ELIXIR ?'
          : 'What effect does MAGIC ELIXIR have?',
      answer:
        language == 'de'
          ? 'MAGIC ELIXIR ist ein MUST HAVE für jede Frau, MAGIC ELIXIR besitzt 3 hochwertige natürliche Pflanzenstammzellen für das tägliche Wohlgefühl, steigert die Anziehungskraft der Frau, die Frau wirkt attraktiver und zieht magisch positive Erlebnisse an, die Frau die MAGIC ELIXIR benutzt wirkt Selbstbewusster, kann innere Stärke entwickeln, und ihre Attraktivität um mehr als ein vielfaches steigern, sie wird vom Umfeld begehrter wahrgenommen, sie bekommt dadurch ein gesteigertes Selbstwertgefühl, ein Gefühl alles erreichen zu können.'
          : 'MAGIC ELIXIR is a MUST HAVE for every woman, MAGIC ELIXIR has 3 high-quality natural plant stem cells for daily well-being, increases the attractiveness of the woman, the woman is more attractive and attracts magical positive experiences, the woman who uses MAGIC ELIXIR is more self-confident, can develop inner strength, and her attractiveness increases by more than a multiple, she is more desired by her environment, she receives a strengthened sense of self-worth, a feeling of being able to achieve everything.',
    },
    {
      id: 9,
      question:
        language == 'de'
          ? 'Für wen ist MAGIC ELIXIR geeignet?'
          : 'Who is MAGIC ELIXIR suitable for?',
      answer:
        language == 'de'
          ? 'MAGIC ELIXIR ist für alle Frauen geeignet, die ihre Anziehungskraft steigern möchten.'
          : 'MAGIC ELIXIR is suitable for all women who want to increase their attractiveness.',
    },
    {
      id: 10,
      question:
        language == 'de'
          ? 'Welche Inhaltsstoffe sind in MAGIC ELIXIR enthalten?'
          : 'What ingredients are in MAGIC ELIXIR?',
      answer:
        language == 'de'
          ? 'MAGIC ELIXIR besitzt 3 natürliche Pflanzliche Stammzellen, Eclipta prostrata, jasminum officinale, ceratonia siliqua.'
          : 'MAGIC ELIXIR has 3 natural plant stem cells, Eclipta prostrata, jasminum officinale, ceratonia siliqua.',
    },
  ];

  return (
    <MaxWidthWrapper>
      <div className='mx-auto max-w-2xl px-4 py-8 sm:px-6 -mt-10 md:mt-0 lg:grid lg:grid-cols-2 lg:max-w-7xl lg:gap-x-8 lg:px-8'>
        {/* product details */}
        <div className='lg:max-w-lg lg:self-end'>
          <div className='mt-4'>
            <h1 className='text-3xl font-bold tracking-tight text-clay sm:text-4xl'>
              MAGIC ELIXIR
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
                      {formatCurrency(MAGICELIXIRPRICE)}
                    </p>
                    <span className='text-xs font-bold text-white bg-bloom px-3 py-1.5 rounded-full shadow-md whitespace-nowrap'>
                      -{salePercentage}% {saleName}
                    </span>
                  </div>
                )}
                <p className='font-medium text-clay text-xl'>
                  {formatCurrency(getSalePrice(MAGICELIXIRPRICE, salePercentage))}
                </p>
              </div>

              <div className='ml-4 border-l text-muted-foreground border-stone-300 pl-4'>
                <p className='text-lg font-medium'>
                  {language == 'de' ? 'Auf Lager' : 'In stock'}
                </p>
                <p className='text-lg font-medium'>10ml</p>
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
                    ? 'MAGIC ELIXIR steigert die Anziehungskraft der Frau um ein vielfaches'
                    : 'MAGIC ELIXIR increases the attractiveness of the woman by a multiple'}
                </li>
                <li className='text-lg ttext-clay'>
                  {language == 'de'
                    ? 'Fördert das Selbstbewusstsein der Frau'
                    : 'Fosters the self-confidence of the woman'}
                </li>
                <li className='text-lg ttext-clay'>
                  {language == 'de'
                    ? 'Erhöht die Attraktivität'
                    : 'Increases the attractiveness'}
                </li>
                <li className='text-lg ttext-clay'>
                  {language == 'de'
                    ? 'Kann das Begehren wecken nach der Frau die MAGIC ELIXIR benutzt'
                    : 'MAGIC ELIXIR increases the attractiveness of the woman by a multiple'}
                </li>
                <li className='text-lg ttext-clay'>
                  {language == 'de'
                    ? 'Wirkung in Studien bestätigt'
                    : 'Effect confirmed in studies'}
                </li>
                <li className='text-lg ttext-clay'>
                  {language == 'de'
                    ? 'MAGIC ELIXIR ist Dein unsichtbarer Begleiter hinterlasse einen bleibenden Eindruck'
                    : 'MAGIC ELIXIR is your invisible companion, leave a lasting impression'}
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
              urls={productImagesMagicElixir}
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
                  id: '4',
                  name: 'Fresh Eyes Serum',
                  price: getSalePrice(MAGICELIXIRPRICE, salePercentage),
                  image: productImagesMagicElixir[0],
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
            MAGIC ELIXIR
          </h5>
          {/* <p className=' text-clay leading-snug mt-3'>
            {language == 'de'
              ? 'FRESH EYES SERUM besitzt einen Award Winner Wirkstoffzur gezielten sichtbaren Verjüngung der Augenpartie und Faltenreduzierung, Lifting & Straffung der Lider und Fältchen, für strahlende Augenblicke eine wertvolle natürliche Verbindung für eine nachgewiesene FALTENREDUZIERUNG'
              : 'FRESH EYES SERUM has an Award Winner active ingredient for targeted visible rejuvenation of the eye area and wrinkle reduction, lifting & tightening of the eyelids and wrinkles, for radiant moments a valuable natural connection for proven WRINKLE REDUCTION'}
          </p> */}
          <p className=' text-clay leading-snug mt-3'>
            {language == 'de'
              ? 'MAGIC ELIXIR Steigert die Anziehungskraft der Frau, MAGIC ELIXIR wurde speziell entwickelt, um die natürliche Anziehungskraft der Frau zu steigern, die Frau wirkt Selbstbewusst und anziehend auf ihr Umfeld, MAGIC ELIXIR kann dich unwiderstehlich machen und das Wohlbefinden fördern, sorgt für eine unglaubliche Attraktivität die vom Umfeld wahr genommen wird und die Aufmerksamkeit auf Dich zieht.'
              : 'MAGIC ELIXIR increases the attractiveness of the woman, MAGIC ELIXIR was specifically developed to increase the natural attractiveness of the woman, the woman is self-confident and attractive to her environment, MAGIC ELIXIR can make you irresistible and promote well-being, it provides an incredible attractiveness that is appreciated by the environment and attracts attention to you.'}
          </p>
        </div>

        <div className='flex-col justify-between items-center gap-10 md:grid md:grid-cols-2'>
          <Card className='p-3 max-w-lg my-10 bg-gray-200'>
            <h5 className='text-center font-semibold text-pink-400'>
              MAGIC ELIXIR
            </h5>
            <p className=' text-clay leading-snug '>
              {language == 'de'
                ? 'MAGIC ELIXIR ist Dein Geheimnis für unwiderstehliche Anziehungskraft, steigert um ein vielfaches Deine Anziehung, aber eines der wichtigsten emotionalen Bedürfnisse ist es, das andere Geschlecht ( die Person, die Dich interessiert) anzuziehen, begehrt zu werden und attraktiv wahrgenommen zu werden. '
                : ''}
            </p>
          </Card>
          <Image
            src='/MagicElixir.jpg'
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
            ? ' Tägliches auftragen unterstützt die Anziehungskraft und das Wohlbefinden, auf Hals (links und rechts) jeweils an 5 Stellen MAGIC ELIXIR ist KEIN parfume.'
            : ''}
        </p>
        <p className='text-xs text-center mt-10'>
          INCI:Eclipta prostrata, jasminum officinale,ceratonia siliqua
          {language == 'de'
            ? '(das zum Wohlgefühl beiträgt)'
            : '(which contributes to well-being)'}
        </p>
      </div>
    </MaxWidthWrapper>
  );
}
