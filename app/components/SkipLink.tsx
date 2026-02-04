"use client";

import { useLanguage } from '../context/LanguageContext';

export default function SkipLink() {
    const { t } = useLanguage();

    return (
        <a
            href="#home"
            className="fixed top-4 left-4 z-[1001] -translate-y-[200%] focus:translate-y-0 transition-transform duration-300 bg-white text-black px-4 py-2 rounded-md font-bold shadow-lg ring-2 ring-violet-500"
            aria-label={t.a11y.skipToContent}
        >
            {t.a11y.skipToContent}
        </a>
    );
}
