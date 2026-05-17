'use client';

import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageProvider';
import type { ProductContent } from './productContentV2';

export default function FaqV2({ faq }: { faq: ProductContent['faq'] }) {
  const { language } = useLanguage();
  const isDE = language === 'de';
  // Start with every entry expanded — admin can still collapse individuals.
  const [openIndices, setOpenIndices] = useState<Set<number>>(
    () => new Set(faq.map((_, i) => i))
  );

  function toggle(i: number) {
    setOpenIndices((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  }

  return (
    <section className='space-y-4'>
      <p
        className='text-xs uppercase tracking-[0.18em] text-muted-foreground'
        style={{ fontFamily: 'var(--font-mono)' }}>
        FAQ
      </p>
      <h2
        className='text-2xl sm:text-3xl font-semibold uppercase tracking-tight'
        style={{ fontFamily: 'var(--font-poppins)' }}>
        {isDE ? 'Häufig gestellte Fragen' : 'Frequently asked questions'}
      </h2>

      <ul className='mt-6 divide-y divide-border border-y border-border'>
        {faq.map((item, i) => {
          const isOpen = openIndices.has(i);
          return (
            <li key={i}>
              <button
                type='button'
                onClick={() => toggle(i)}
                aria-expanded={isOpen}
                className='w-full flex items-center justify-between gap-4 py-5 text-left hover:text-bloom-deep transition-colors'>
                <span
                  className='text-base sm:text-lg font-medium uppercase tracking-tight'
                  style={{ fontFamily: 'var(--font-poppins)' }}>
                  {isDE ? item.question.de : item.question.en}
                </span>
                <span className='shrink-0'>
                  {isOpen ? (
                    <Minus className='size-4' />
                  ) : (
                    <Plus className='size-4' />
                  )}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className='overflow-hidden'>
                    <p className='pb-5 pr-8 text-sm sm:text-base text-muted-foreground leading-relaxed'>
                      {isDE ? item.answer.de : item.answer.en}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
