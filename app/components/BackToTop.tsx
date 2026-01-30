"use client";

import { useEffect, useState } from 'react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={`fixed bottom-8 right-8 w-12 h-12 rounded-full text-white shadow-lg flex items-center justify-center transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 ${
        isVisible ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-4 invisible'
      }`}
      style={{
        background: 'var(--primary-gradient, linear-gradient(135deg, #667eea 0%, #764ba2 100%))',
        zIndex: 9999
      }}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <i className="fas fa-arrow-up text-lg"></i>
    </button>
  );
}
