import React from 'react';

const SkipLink = () => {
  return (
    <a
      href="#home"
      className="fixed top-4 left-4 z-[9999] -translate-y-[200%] bg-[#667eea] text-white px-6 py-3 rounded-lg shadow-xl font-bold transition-transform duration-300 focus:translate-y-0 focus:outline-none focus:ring-4 focus:ring-white/50"
    >
      Skip to content
    </a>
  );
};

export default SkipLink;
