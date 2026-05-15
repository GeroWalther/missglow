import React from 'react';
import HeroComp from '../../components/components/homepage/Hero';
import MarqueeBand from '../../components/components/homepage/MarqueeBand';
import Subscribe from '@/components/components/homepage/EmailSubscription';
import TestimonialsSection from '@/components/components/homepage/Testimonials';
import FeaturesSection from './_components/Features';
import ProductSectionMagicLips from './_components/ProductSectionMagicLips';
import ProductDisplay from './_components/ProductDisplay';
import ProductSectionBetox from './_components/ProductSectionBetox';
import FullBleedCTA from './_components/FullBleedCTA';
import AnimatedStats from './_components/AnimatedStats';

export default function HomePage() {
  return (
    <>
      <HeroComp />
      <MarqueeBand />
      <ProductSectionBetox />
      <ProductDisplay />
      <AnimatedStats />
      <FeaturesSection />
      <ProductSectionMagicLips />
      <TestimonialsSection />
      <FullBleedCTA />
      <Subscribe />
    </>
  );
}
