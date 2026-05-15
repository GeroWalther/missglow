'use client';
import { useLanguage } from '@/contexts/LanguageProvider';
import React from 'react';
import MaxWidthWrapper from '../_components/MaxWidthWrapper';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

export default function AboutPage() {
  const { language } = useLanguage();
  return (
    <MaxWidthWrapper className='mb-10'>
     
      <div className='bg-gradient-to-r from-pink-400 via-pink-600 to-orange-400 p-2 rounded-lg shadow-2xl'>
        <h1 className='font-bold text-white text-center text-3xl mb-2'>
          {language === 'de' ? '✨ Über uns' : '✨ About Us'}
          <br/>
           MISS GLOW BEAUTY
        </h1>
       
        <Card className='bg-white bg-opacity-90 p-8 rounded-lg shadow-lg'>
          <div>
            <div className='space-y-6'>
              <h3 className='text-gray-800 text-2xl font-bold'>
                {language === 'de'
                  ? 'Glow. Beauty. Power.'
                  : 'Glow. Beauty. Power.'}
              </h3>
              <p className='text-gray-700 text-lg italic'>
                {language === 'de'
                  ? 'Created by Tatjana Schaller.'
                  : 'Created by Tatjana Schaller.'}
              </p>
              
              <Image
                src='/FrauSchaller.jpeg'
                alt='Founder Tatjana Schaller Miss Glow Beauty'
                width={200}
                height={300}
                className='rounded-lg shadow-lg my-6'
              />
              <p className='text-sm text-gray-600 italic'>Founder Tatjana Schaller Miss Glow Beauty</p>
              
              <p className='text-gray-700 text-lg leading-relaxed'>
                {language === 'de'
                  ? 'Bei MISS GLOW BEAUTY glaube ich daran, dass Hautpflege mehr ist als nur ein Produkt – sie ist ein Gefühl, ein Ritual, ein Moment der Wertschätzung für dich selbst. Meine Mission ist es, biologische, hochwertige Kosmetik zu schaffen, die Ergebnisse liefert und sichtbar Ausstrahlung von innen nach außen schenkt.'
                  : 'At MISS GLOW BEAUTY, we believe that skincare is more than just a product – it is a feeling, a ritual, a moment of appreciation for yourself. Our mission is to create organic, high-quality cosmetics that deliver results and visibly grant radiance from the inside out.'}
              </p>
              
              <p className='text-gray-700 text-lg leading-relaxed'>
                {language === 'de'
                  ? 'Founder Tatjana Schaller hat MISS GLOW BEAUTY aus einer klaren Vision heraus gegründet: Frauen Produkte zu geben, die nicht nur schön aussehen, sondern sich gut anfühlen – innen wie außen.'
                  : 'Founder Tatjana Schaller created MISS GLOW BEAUTY from a clear vision: to give women products that not only look beautiful, but feel good – inside and out.'}
              </p>
              
              <p className='text-gray-700 text-lg leading-relaxed'>
                {language === 'de'
                  ? 'Sie wollte eine Pflegeroutine schaffen, die den Alltag veredelt. Ein kleines tägliches Luxusritual, das die Haut stärkt, regeneriert und mit jeder Anwendung ein Stück mehr zum Strahlen bringt. Kosmetik, die den Alterungsprozess sichtbar verlangsamt, verjüngend wirkt und echte Hautlösungen bietet.'
                  : 'She wanted to create a care routine that elevates everyday life. A small daily luxury ritual that strengthens, regenerates the skin and makes it shine a little more with each application. Cosmetics that visibly slow down the aging process, have a rejuvenating effect and offer real skin solutions.'}
              </p>
              
              <p className='text-gray-700 text-lg leading-relaxed'>
                {language === 'de'
                  ? 'Unsere exklusive Clean & Green Beauty Formel wird mit größter Sorgfalt entwickelt. Jeder Inhaltsstoff ist bewusst ausgewählt, jede Komponente durchdacht – für eine Pflege, die wirksam, rein und nachhaltig ist. Jedes Detail – vom Design bis zur Rezeptur – trägt die Handschrift von Tatjana Schaller, die Schönheit als etwas versteht, das im Inneren beginnt und sich nach außen entfaltet.'
                  : 'Our exclusive Clean & Green Beauty formula is developed with the greatest care. Every ingredient is consciously selected, every component well thought out – for care that is effective, pure and sustainable. Every detail – from design to formulation – bears the signature of Tatjana Schaller, who understands beauty as something that begins on the inside and unfolds outward.'}
              </p>
              
              <div className='border-l-4 border-pink-500 pl-4 py-2 my-6'>
                <p className='text-gray-800 text-lg font-semibold'>
                  {language === 'de'
                    ? 'MISS GLOW BEAUTY ist mehr als ein Produkt.'
                    : 'MISS GLOW BEAUTY is more than a product.'}
                </p>
                <p className='text-gray-800 text-lg'>
                  {language === 'de'
                    ? 'Es ist ein Gefühl.'
                    : 'It is a feeling.'}
                </p>
                <p className='text-gray-800 text-lg'>
                  {language === 'de'
                    ? 'Ein Ritual.'
                    : 'A ritual.'}
                </p>
                <p className='text-gray-800 text-lg'>
                  {language === 'de'
                    ? 'Ein Moment nur für dich und deine Schönheit.'
                    : 'A moment just for you and your beauty.'}
                </p>
              </div>
              
              <p className='text-gray-700 text-lg font-semibold'>
                {language === 'de'
                  ? 'Getreu dem Motto:'
                  : 'True to the motto:'}
              </p>
              <p className='text-2xl font-bold text-bloom italic'>
                &quot;Age doesn&apos;t matter.&quot;
              </p>
              
              <p className='text-gray-700 text-lg italic mt-4'>
                {language === 'de'
                  ? 'Mit Liebe entwickelt.'
                  : 'Developed with love.'}
              </p>
              <p className='text-gray-700 text-lg italic'>
                {language === 'de'
                  ? 'Von Tatjana Schaller.'
                  : 'By Tatjana Schaller.'}
              </p>
            </div>

            <div className='space-y-4 mt-10 pt-6 border-t-2 border-pink-200'>
              <h3 className='text-gray-800 text-xl font-semibold'>
                {language === 'de' ? 'KONTAKTIERE UNS' : 'CONTACT US'}
              </h3>
              <p className='text-gray-700 text-lg'>
                {language === 'de'
                  ? 'Hast du Fragen oder möchtest du mehr erfahren? Wir sind für dich da.'
                  : 'Do you have questions or want to learn more? We are here for you.'}
              </p>
            </div>
            <address className='text-lg flex-col md:flex mt-5'>
              <div className='mb-2'>
                <p>Whats App</p>
                <a
                  href='tel:0049015151906996'
                  className='text-gray-600 hover:text-gray-400'>
                  (0049) 015151906996
                </a>
              </div>
              <div>
                <p>E-Mail</p>
                <a
                  href={`mailto:${process.env.NEXT_PUBLIC_ADMINEMAIL}`}
                  className='text-gray-600 hover:text-gray-400'>
                  {process.env.NEXT_PUBLIC_ADMINEMAIL}
                </a>
              </div>
            </address>
          </div>

          <Image
            src='/werdeTeil.jpg'
            alt='werde teil von Miss Glow Beauty Foto'
            width={500}
            height={1000}
            className='rounded-lg shadow-lg mt-10'
          />
      
        </Card>
      </div>
    </MaxWidthWrapper>
  );
}
