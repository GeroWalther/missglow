'use client';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const LogoOverlay: React.FC = () => {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    // skip on subsequent visits within the session
    if (sessionStorage.getItem('missglow-intro-seen') === '1') {
      setShowLogo(false);
      return;
    }
    const timer = setTimeout(() => {
      setShowLogo(false);
      sessionStorage.setItem('missglow-intro-seen', '1');
    }, 2400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showLogo && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className='fixed inset-0 z-[60] flex justify-center items-center surface-petal'>
          <div className='flex flex-col items-center justify-center gap-6'>
            <motion.div
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
              <Image
                src='/lippe.png'
                width={260}
                height={80}
                alt='Miss Glow Beauty'
                priority
              />
            </motion.div>
            <motion.p
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
              className='font-mono text-[0.7rem] uppercase tracking-[0.3em] text-clay-soft'>
              Willkommen · Welcome · Bienvenue
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LogoOverlay;
