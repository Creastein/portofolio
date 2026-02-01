"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { en } from '../data/locales/en';
import { id } from '../data/locales/id';

type Language = 'en' | 'id';
type Translations = typeof en;

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<Language>('en');

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        // Optional: Persist to localStorage
        if (typeof window !== 'undefined') {
            localStorage.setItem('language', lang);
        }
    };

    // Load from localStorage on mount (client-side only)
    React.useEffect(() => {
        const savedLimit = localStorage.getItem('language') as Language;
        if (savedLimit && (savedLimit === 'en' || savedLimit === 'id')) {
            setLanguageState(savedLimit);
        }
    }, []);

    const t = language === 'en' ? en : id;

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
