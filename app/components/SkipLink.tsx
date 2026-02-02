"use client";

import { useLanguage } from '../context/LanguageContext';

export default function SkipLink() {
  const { t } = useLanguage();

  return (
    <a
      href="#home"
      className="absolute left-[20px] -top-[9999px] z-[10002] bg-[#667eea] text-white px-6 py-3 rounded-b-[5px] font-semibold transition-all duration-300 shadow-md outline-2 outline-white focus:top-0 focus:outline"
    >
      {t.common?.skipToContent || "Skip to content"}
    </a>
  );
}
