'use client';
import { useLanguage } from '@/contexts/LanguageProvider';
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
  useReducedMotion,
} from 'framer-motion';
import { useEffect, useRef } from 'react';
import Reveal from '@/components/ui/Reveal';

type StatProps = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  caption: string;
  decimals?: number;
};

function StatCounter({
  value,
  suffix = '',
  prefix = '',
  label,
  caption,
  decimals = 0,
}: StatProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) =>
    decimals > 0 ? latest.toFixed(decimals) : Math.round(latest).toString()
  );
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      motionValue.set(value);
      return;
    }
    const controls = animate(motionValue, value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
    });
    return () => controls.stop();
  }, [inView, value, motionValue, reduce]);

  return (
    <div className='flex flex-col gap-3'>
      <p className='eyebrow'>{label}</p>
      <p className='font-display text-5xl md:text-7xl text-clay leading-none tracking-tight tabular-nums'>
        {prefix}
        <motion.span ref={ref}>{rounded}</motion.span>
        {suffix}
      </p>
      <p className='text-sm text-clay-soft leading-relaxed max-w-[240px]'>
        {caption}
      </p>
    </div>
  );
}

export default function AnimatedStats() {
  const { language } = useLanguage();
  const isDE = language === 'de';

  return (
    <section className='py-24 md:py-32 surface-petal'>
      <div className='container-page'>
        <Reveal className='max-w-2xl mb-16 md:mb-20'>
          <p className='eyebrow mb-5'>
            {isDE ? 'Klinisch bewiesen' : 'Clinically proven'}
          </p>
          <h2 className='display-sm text-clay text-balance'>
            {isDE ? (
              <>
                Zahlen, die für sich{' '}
                <em className='italic text-bloom font-light'>sprechen</em>.
              </>
            ) : (
              <>
                Numbers that{' '}
                <em className='italic text-bloom font-light'>speak</em>.
              </>
            )}
          </h2>
        </Reveal>

        <Reveal
          delay={0.1}
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8'>
          <StatCounter
            value={64}
            suffix='%'
            prefix='−'
            label={isDE ? 'Falten' : 'Wrinkles'}
            caption={
              isDE
                ? 'weniger sichtbare Falten in 30 Tagen — BETOX Serum.'
                : 'fewer visible wrinkles in 30 days — BETOX Serum.'
            }
          />
          <StatCounter
            value={78}
            suffix='%'
            prefix='+'
            label={isDE ? 'Volumen' : 'Volume'}
            caption={
              isDE
                ? 'mehr Lippenvolumen mit Magic Lips Serum.'
                : 'more lip volume with Magic Lips Serum.'
            }
          />
          <StatCounter
            value={96}
            suffix='%'
            label={isDE ? 'Kundinnen' : 'Customers'}
            caption={
              isDE
                ? 'würden Miss Glow weiterempfehlen.'
                : 'would recommend Miss Glow.'
            }
          />
          <StatCounter
            value={100}
            suffix='%'
            label={isDE ? 'Tierversuchsfrei' : 'Cruelty-free'}
            caption={
              isDE
                ? 'ohne Tierversuche, vegan und made in Germany.'
                : 'no animal testing, vegan and made in Germany.'
            }
          />
        </Reveal>
      </div>
    </section>
  );
}
