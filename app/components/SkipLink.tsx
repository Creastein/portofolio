"use client";

import { useLanguage } from '../context/LanguageContext';

export default function SkipLink() {
    const { t } = useLanguage();

    return (
        <a
            href="#home"
            className="fixed top-4 left-4 z-[10005] -translate-y-[200%] transform rounded bg-white px-4 py-2 font-bold text-black shadow-lg transition-transform focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
        >
            {t.skipToContent}
        </a>
    );
}
