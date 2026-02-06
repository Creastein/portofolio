'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const SkipLink = () => {
  const { t } = useLanguage();

  return (
    <a
      href="#main-content"
      className="skip-link"
    >
      {t.skipToContent}
    </a>
  );
};

export default SkipLink;
