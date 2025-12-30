"use client";

import { useEffect, useRef, useState, MouseEvent } from 'react';
import './ServicesSection.css';

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

        // 3D Tilt
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
                    <img src={icon} alt={`${title} Icon`} width="48" height="48" />
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
    const services = [
        {
            title: "Business & System Analysis",
            description: "Analyze business processes, identify problems, and translate requirements into clear system and feature definitions.",
            icon: "/portofolio/icons/bar-chart-2.svg"
        },
        {
            title: "Frontend Web Development",
            description: "Build clean, responsive, and user-friendly web interfaces using modern frontend technologies.",
            icon: "/portofolio/icons/code.svg"
        },
        {
            title: "UI Implementation from Requirements",
            description: "Turn business and user requirements into practical, intuitive, and functional user interfaces.",
            icon: "/portofolio/icons/layers.svg"
        },
        {
            title: "System & Feature Design",
            description: "Design system flows, page structures, and features that align with real business goals.",
            icon: "/portofolio/icons/git-branch.svg"
        },
        {
            title: "Website for Small Business & Personal Use",
            description: "Create simple and effective websites tailored for small businesses and personal portfolios.",
            icon: "/portofolio/icons/globe.svg"
        }
    ];

    return (
        <section id="services" className="premium-services-section">
            <div className="premium-services-container">
                <div className="premium-services-header">
                    <h2>Services</h2>
                    <p>Comprehensive solutions to bring your digital vision to life with creativity and precision.</p>
                </div>

                <div className="premium-services-grid">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
