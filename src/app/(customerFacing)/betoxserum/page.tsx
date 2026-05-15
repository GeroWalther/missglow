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
import { BETOXPRICE, productImgsBetox } from '../../../../consts';
import { getSalePrice, useSale } from '@/contexts/SaleProvider';

export default function BetoxSerum() {
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
          ? 'Welchen effekt hat BETOX SERUM ?'
          : 'What effect does BETOX SERUM have?',
      answer:
        language == 'de'
          ? 'Sichtbarer Soforteffekt. Bereits etwa 10 Minuten nach dem Auftragen kann man eine deutliche Glättung, besonders um die Augenpartie und Stirn, wahrnehmen. Intensive Feuchtigkeitsversorgung & Elastizität. Das Ergebnis: ein frischer, aufgepolsterter Teint und eine verbesserte Hautstruktur und Glättung'
          : 'Visible instant effect: within about 10 minutes of application you can notice a clear smoothing, especially around the eye area and forehead. Provides deep hydration and elasticity, leaving the complexion fresh, plumped, and refined with improved skin texture.',
    },
    {
      id: 9,
      question:
        language == 'de'
          ? 'Für wen ist BETOX SERUM geeignet?'
          : 'Who is BETOX SERUM suitable for?',
      answer:
        language == 'de'
          ? 'BETOX SERUM ist für alle Frauen geeignet, die eine natürliche Verjüngung haben möchten ohne chemie, auch für eine sensible Huat geeignet'
          : 'BETOX SERUM is suitable for anyone seeking natural rejuvenation without harsh chemicals and is gentle enough for sensitive skin.',
    },
    {
      id: 10,
      question:
        language == 'de'
          ? 'Welche Inhaltsstoffe sind in BETOX SERUM enthalten? '
          : 'What ingredients are in BETOX SERUM?',
      answer:
        language == 'de'
          ? 'BETOX SERUM ist aus natürlichen Bioaktiven Ingredinets formuliert aus hochwertigen Wirkstoffen'
          : 'BETOX SERUM is formulated with natural bioactive ingredients crafted from high-quality actives.',
    },
  ];

  return (
    <MaxWidthWrapper>
      <div className='mx-auto max-w-2xl px-4 py-8 sm:px-6 -mt-10 md:mt-0 lg:grid lg:grid-cols-2 lg:max-w-7xl lg:gap-x-8 lg:px-8'>
        {/* product details */}
        <div className='lg:max-w-lg lg:self-end'>
          <div className='mt-4'>
            <h1 className='text-3xl font-bold tracking-tight text-clay sm:text-4xl'>
              BETOX SERUM
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
                      {formatCurrency(BETOXPRICE)}
                    </p>
                    <span className='text-xs font-bold text-white bg-bloom px-3 py-1.5 rounded-full shadow-md whitespace-nowrap'>
                      -{salePercentage}% {saleName}
                    </span>
                  </div>
                )}
                <p className='font-medium text-clay text-xl'>
                  {formatCurrency(getSalePrice(BETOXPRICE, salePercentage))}
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
                    ? 'Sichtbarer Soforteffekt Bereits etwa 10 Minuten nach dem Auftragen kann man eine deutliche Glättung, besonders um die Augenpartie und Stirn, wahrnehmen'
                    : 'Visible instant effect: around 10 minutes after application you can notice a clear smoothing, especially around the eye area and forehead.'}
                </li>
                <li className='text-lg ttext-clay'>
                  {language == 'de'
                    ? 'Das B-Tox Serum ist eine intensive Anti-Aging-Pflege, die speziell entwickelt wurde, um mimische Falten, also Linien, die durch wiederholte Muskelbewegungen entstehen (z. B. Stirnrunzeln oder Lachen) sichtbar zu reduzieren.'
                    : 'B-Tox Serum is an intensive anti-aging treatment developed to visibly reduce expression lines that are formed by repeated muscle movements (e.g., frowning or laughing).'}
                </li>
                <li className='text-lg ttext-clay'>
                  {language == 'de'
                    ? 'Glättung durch biomimetische Peptide'
                    : 'Smoothing through biomimetic peptides.'}
                </li>
                <li className='text-lg ttext-clay'>
                  {language == 'de'
                    ? 'Das Serum enthält sogenannte biomimetische Peptide. Diese sind winzige, hautaktive Eiweißbausteine, die den natürlichen Wirkmechanismus von Botulinumtoxin (Botox) nachahmen – jedoch ohne Injektion. Sie wirken, indem sie die Mikrokontraktionen der Gesichtsmuskulatur leicht entspannen. Dadurch werden feine Linien und Falten optisch geglättet, und die Haut wirkt entspannter und ebenmäßiger.'
                    : 'The serum uses biomimetic peptides—tiny, skin-active protein fragments that replicate the natural mechanism of botulinum toxin without injections. They gently relax micro-contractions in facial muscles, softening fine lines and giving the complexion a calmer, more even look.'}
                </li>
                <li className='text-lg ttext-clay'>
                  {language == 'de'
                    ? 'Intensive Feuchtigkeitsversorgung & Elastizität Zusätzlich enthält das Serum Feuchtigkeitsspender wie 8D Hyaluronsäure, die tief in die Haut eindringen. Diese Wirkstoffe binden Wasser in den Hautschichten, was sie praller, glatter und elastischer macht. Das Ergebnis: ein frischer, aufgepolsterter Teint und eine verbesserte Hautstruktur.'
                    : 'Intensive hydration and elasticity: the serum delivers moisturizers such as 8D hyaluronic acid that penetrate deeply, bind water within the skin layers, and leave the complexion plumper, smoother, and more elastic for a refreshed, refined texture.'}
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
            <ImageSlider urls={productImgsBetox} alt={`produkt bilder`} />
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
                  id: '6',
                  name: 'BETOX SERUM',
                  price: getSalePrice(BETOXPRICE, salePercentage),
                  image: productImgsBetox[0],
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
            BETOX SERUM
          </h5>
          <p className=' text-clay leading-snug mt-3'>
            {language == 'de'
              ? 'Viele Frauen möchten jünger aussehen, aber ohne chemische Produkte oder Operationen. BeTOX EYE LIFT Serum bietet Ihnen alles in einem Produkt: ein natürliches Peptid, das die gleiche molekulare Struktur wie Botox hat, aber mit viel mehr Sicherheit. Entwickelt in Zusammenarbeit mit Experten der Neurowissenschaften. Es ist der erste kosmetische Wirkstoff, der innerhalb von 10 Minuten wirkt. Sichtbar glatter und nachhaltig verjüngt in nur 10 Minuten. BETOX Serum wirkt sofort mit nachgewiesener Wirksamkeit. Die Wirkung der preisgekrönten Wirkstoffe wurde in Studien bestätigt. Dies liegt daran, dass in diesem hochwirksamen BeTOX EYE LIFT Serum ein Wirkstoff enthalten ist, der die Muskelkontraktion stimuliert. BETOX Serum entspannt die Muskelkontraktion und ist eine sichere und natürliche Alternative. BETOX Serum reduziert Falten innerhalb eines Monats um 64 %, zusätzlich zu dieser Wirkung kommt eine 120-stündige tiefe Feuchtigkeit der Haut hinzu. Entspannen Sie die Mimikfalten und Fältchen um Mund, Nase, Augen, Stirn und Braue.'
              : 'Many women want to look younger, but without chemical products or operations. BeTOX EYE LIFT Serum offers you everything in one product: a natural peptide that has the same molecular structure as Botox, but with much greater safety. Developed in collaboration with neuroscience experts. It is the first cosmetic active ingredient that works within 10 minutes. Visibly smoother and sustainably rejuvenated in just 10 minutes. BETOX Serum acts immediately with proven effectiveness. The effect of the award-winning ingredients has been confirmed in studies. This is because this highly effective BeTOX EYE LIFT Serum contains an ingredient that stimulates muscle contraction. BETOX Serum relaxes muscle contraction and is a safe and natural alternative. BETOX Serum reduces wrinkles within a month by 64%, and in addition, provides a 120-hour effect of deep skin hydration. Relax mimic wrinkles and fine lines around the mouth, nose, eyes, forehead, and brow.'}
          </p>
          <div className='mt-10 flex flex-col items-center gap-6 md:flex-row md:items-start justify-between'>
            <Card className='p-3 bg-gray-200 md:max-w-md'>
              <h5 className='text-center font-semibold text-pink-400 mb-5'>
                BETOX SERUM
              </h5>
              <div className='text-clay leading-snug space-y-4'>
                {language == 'de' ? (
                  <>
                    <p>
                      Reduziert sichtbare Falten durch mimische
                      Muskelbewegungen, da biomimetische Peptide eingesetzt
                      werden, die dem Effekt von Botulinumtoxin ähnlich sind.
                    </p>
                    <ul className='list-disc pl-6 space-y-2'>
                      <li>
                        Hydratisiert tief die Haut und verbessert Elastizität
                        und Hauttonus.
                      </li>
                      <li>
                        Sofortiger Effekt: Bereits nach ca. 10 Minuten sichtbare
                        Glättung der Augenpartie.
                      </li>
                      <li>
                        Langfristige Nutzung: Innerhalb eines Monats ist eine
                        Reduzierung der Faltentiefe von{' '}
                        <span className='font-semibold'>–64&nbsp;%</span> bei
                        mimischen Falten gegeben, bei regelmäßiger Anwendung.
                      </li>
                    </ul>
                  </>
                ) : (
                  <>
                    <p>
                      Reduces visible wrinkles caused by facial muscle movement
                      by leveraging biomimetic peptides that mirror the effect
                      of botulinum toxin.
                    </p>
                    <ul className='list-disc pl-6 space-y-2'>
                      <li>
                        Deeply hydrates the skin while improving elasticity and
                        skin tone.
                      </li>
                      <li>
                        Instant effect: a visibly smoother eye contour after
                        roughly 10 minutes.
                      </li>
                      <li>
                        Long-term use: within one month, wrinkle depth in
                        expression lines is reduced by{' '}
                        <span className='font-semibold'>–64&nbsp;%</span> with
                        consistent application.
                      </li>
                    </ul>
                  </>
                )}
              </div>
            </Card>
            <Image
              src='/betox.png'
              width={700}
              height={700}
              alt='miss glow betox serum'
              className='max-w-80 rounded-md md:self-center'
            />
          </div>
        </div>
        <h4 className=' text-clay font-semibold mt-5'>
          {language == 'de' ? 'Anwendung' : 'Application'}
        </h4>
        <p className=' text-clay'>
          <span className='text-clay font-semibold'>
            {language == 'de' ? '2 mal ' : 'Twice '}
          </span>
          {language == 'de'
            ? 'Für optimale Ergebnisse jeden Morgen nach der Reinigung auf Stirn und Augenpartie einmassieren Empfehlung: Täglich anwenden, um das beste Ergebnis zu erzielen und Falten nach 1 Monat um bis zu 64 % zu reduzieren.'
            : 'For optimal results, massage onto forehead and eye area after cleansing daily. Recommendation: Daily application to achieve the best result and reduce wrinkles by up to 64% in 1 month.'}
        </p>
        <p className='text-clay font-semibold mt-10'>HERO INGREDIENTS </p>
        <p className='text-clay font-semibold'>BIO-aktiver Wirkstoff</p>
        <ul>
          <li>Natürliches Protein</li>
          <li>Aloe Vera</li>
          <li>8D Hyaluronsäure</li>
          <li>Munapsis</li>
          <li>Sirtalice</li>
          <li>Centella Asiatica</li>
        </ul>

        <p className='text-xs text-center mt-10'>
          INCI:Centella asiatica extract, cell aqua, aloe barbadensis extract,
          8D Sodium Hyaluronate, OLIGO -HA hydrolyzed sodium hyaluronate,
          Munapsis, Sirtalice, Centella asiatica aceide
          {language == 'de'
            ? '(das zum Wohlgefühl beiträgt)'
            : '(which contributes to well-being)'}
        </p>
      </div>
    </MaxWidthWrapper>
  );
}
