'use client';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
  as?: 'div' | 'section' | 'article' | 'header' | 'span';
};

export default function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  once = true,
  as = 'div',
}: RevealProps) {
  const reduce = useReducedMotion();
  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : y },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduce ? 0 : 0.8,
        ease: [0.16, 1, 0.3, 1],
        delay: reduce ? 0 : delay,
      },
    },
  };
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      initial='hidden'
      whileInView='visible'
      viewport={{ once, amount: 0.25 }}
      variants={variants}>
      {children}
    </MotionTag>
  );
}
