"use client";

import { useRef, useState, MouseEvent } from 'react';
import './ServicesSection.css';
import { servicesData } from '../data/servicesData';
import { useLanguage } from '../context/LanguageContext';

interface ServiceCardProps {
    title: string;
    description: string;
    icon: string;
    index: number;
}

const ServiceCard = ({ title, description, icon, index }: ServiceCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePos({ x, y });

        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = (e.clientX - centerX) / (rect.width / 2);
        const deltaY = (e.clientY - centerY) / (rect.height / 2);

        const rotateX = deltaY * -10;
        const rotateY = deltaX * 10;

        if (cardRef.current) {
            cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        }
    };

    const handleMouseLeave = () => {
        if (cardRef.current) {
            cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
        }
    };

    return (
        <div
            ref={cardRef}
            className="premium-service-card"
            data-index={index}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                '--mouse-x': `${mousePos.x}%`,
                '--mouse-y': `${mousePos.y}%`,
                '--delay': `${index * 0.15}s`
            } as any}
        >
            <div className="card-glow"></div>
            <div className="card-spotlight"></div>
            <div className="card-content">
                <div className="card-icon">
                    <i className={`fas ${icon}`}></i>
                </div>
                <div className="card-text-wrapper">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default function ServicesSection() {
    const { t } = useLanguage();

    return (
        <section id="services" className="premium-services-section">
            <div className="premium-services-container">
                <div className="premium-services-header">
                    <h2>{t.services.title}</h2>
                    <p>{t.services.subtitle}</p>
                </div>

                <div className="premium-services-grid">
                    {t.services.items.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            description={service.description}
                            icon={servicesData[index]?.icon || 'fa-code'} // Fallback or strict index match
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
