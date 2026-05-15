'use client';
import { X, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageProvider';
import { useSale } from '@/contexts/SaleProvider';

export default function SaleBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const { isActive, salePercentage, saleName, saleUntil } = useSale();
  const { language } = useLanguage();
  if (!isVisible || !isActive) return null;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    if (language === 'de') {
      return date.toLocaleDateString('de-DE', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      });
    }
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <div className='relative bg-clay text-champagne py-2.5 px-4 z-50 border-b border-champagne/10'>
      <div className='container-page flex items-center justify-center gap-3 text-center'>
        <Sparkles className='h-3.5 w-3.5 text-bloom shrink-0' />
        <div className='flex flex-col md:flex-row items-center gap-1 md:gap-3 text-xs md:text-sm font-mono tracking-[0.12em] uppercase'>
          <span className='font-medium'>{saleName}</span>
          <span className='hidden md:inline opacity-40'>·</span>
          <span className='font-display tracking-tight normal-case text-base md:text-lg text-bloom'>
            −{salePercentage}%
          </span>
          <span className='hidden md:inline opacity-40'>·</span>
          <span className='opacity-70'>
            {language === 'de' ? 'Bis' : 'Until'} {formatDate(saleUntil)}
          </span>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className='absolute right-3 md:right-6 p-1 hover:bg-champagne/10 rounded-full transition-colors'
          aria-label='Close banner'>
          <X className='h-4 w-4' />
        </button>
      </div>
    </div>
  );
}
