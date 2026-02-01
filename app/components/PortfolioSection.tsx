"use client";

import Image from 'next/image';
import { portfolioItems } from '../data/portfolioItems';
import { useLanguage } from '../context/LanguageContext';

export default function PortfolioSection() {
    const { t } = useLanguage();

    return (
        <section id="works" className="section works">
            <div className="container">
                <header className="section-header">
                    <h2 className="section-title">{t.portfolio.title}</h2>
                    <p className="section-subtitle">{t.portfolio.subtitle}</p>
                </header>

                <div className="portfolio-grid">
                    {portfolioItems.map((item, index) => (
                        <a
                            key={index}
                            className={`portfolio-item fade-in stagger-${(index % 6) + 1}`}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View project: ${item.title}`}
                        >
                            <figure className="portfolio-image" style={{ '--bg': `url('${item.image}')` } as any}>
                                <Image
                                    src={item.image}
                                    alt={item.alt}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    style={{ objectFit: 'cover' }}
                                />
                            </figure>
                            <div className="portfolio-overlay">
                                <h3>{item.title}</h3>
                                <span className="category">{item.category}</span>
                                <span className="view-work-btn" aria-hidden="true">{t.portfolio.viewBtn}</span>
                            </div>
                        </a>
                    ))}
                </div>

                <div className="works-cta">
                    <a href="https://creastein.github.io/" className="btn btn-outline" aria-label="View all works">{t.portfolio.viewAll}</a>
                </div>
            </div>
        </section>
    );
}
