'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 transition-colors z-[9999] flex items-center justify-center w-12 h-12 cursor-pointer"
          aria-label="Back to top"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}
          id="back-to-top-btn"
        >
          <i className="fas fa-arrow-up text-xl"></i>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
