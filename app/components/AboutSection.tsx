"use client";

import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function AboutSection() {
    const { t } = useLanguage();

    return (
        <section id="about" className="section about-section">
            <div className="container">
                <div className="about-grid">
                    <div className="about-content-wrapper fade-in stagger-2">
                        <div className="section-header text-left">
                            <h2>{t.about.title}</h2>
                        </div>
                        <div className="about-text">
                            <p className="lead">{t.about.lead}</p>
                            <p>{t.about.p1}</p>
                            <p>{t.about.p2}</p>

                            <div className="about-actions mt-4">
                                <a href="#works" className="btn btn-accent">{t.about.btnWork}</a>
                                <a href="https://drive.google.com/file/d/1xRCIwlYaiQf54mUorn8-TAfmTBL_MXBq/view?usp=sharing" target="_blank" className="btn btn-glitch" data-text={t.about.btnCv}>{t.about.btnCv}</a>
                            </div>
                        </div>
                    </div>
                    <div className="about-image fade-in stagger-1">
                        <div className="image-overlay-gradient"></div>
                        <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '400px' }}>
                            <Image
                                src={`${basePath}/images/about-me.png`}
                                alt="WELLI - Business Analyst and Developer Portrait"
                                fill
                                style={{ objectFit: 'cover', objectPosition: 'center 25%' }}
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="about-img"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
