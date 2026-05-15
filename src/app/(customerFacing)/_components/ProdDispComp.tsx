'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

type pType = {
  name: string;
  productImg: string;
  link: string;
};

const ProdDispComp = ({ name, productImg, link }: pType) => {
  const reduce = useReducedMotion();
  return (
    <Link
      href={link}
      className='group block relative overflow-hidden rounded-[1.5rem] bg-petal-soft border border-clay/5'>
      <div className='relative aspect-[4/5] overflow-hidden'>
        <motion.div
          initial={false}
          whileHover={reduce ? undefined : { scale: 1.04 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className='absolute inset-0'>
          <Image
            src={productImg}
            alt={name}
            fill
            sizes='(max-width: 768px) 90vw, 33vw'
            className='object-cover'
          />
        </motion.div>
        <div className='absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-clay/80 via-clay/30 to-transparent' />
        <div className='absolute inset-x-0 bottom-0 p-6 md:p-7 flex items-end justify-between gap-4'>
          <div>
            <p className='font-mono text-[0.65rem] uppercase tracking-[0.22em] text-champagne/80 mb-1'>
              Miss Glow
            </p>
            <h3 className='font-display text-xl md:text-2xl text-champagne tracking-tight leading-tight'>
              {name}
            </h3>
          </div>
          <span className='shrink-0 h-11 w-11 rounded-full bg-champagne text-clay flex items-center justify-center transition-all duration-500 ease-out-quint group-hover:bg-bloom group-hover:text-champagne group-hover:rotate-45'>
            <ArrowUpRight className='h-4 w-4' />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProdDispComp;
