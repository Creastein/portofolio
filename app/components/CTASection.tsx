"use client";

import { useLanguage } from '../context/LanguageContext';

export default function CTASection() {
    const { t } = useLanguage();

    return (
        <section className="section cta-section">
            <div className="container text-center">
                <h2 className="cta-text fade-in">
                    {t.cta.text}
                </h2>
                <a href="#contact" className="btn btn-accent mt-4 fade-in stagger-1">{t.cta.btn}</a>
            </div>
        </section>
    );
}
