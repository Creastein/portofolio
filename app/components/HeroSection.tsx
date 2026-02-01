"use client";

import { useEffect } from 'react';
import Script from 'next/script';
import { useTypewriter } from '../hooks/useTypewriter';
import { useLanguage } from '../context/LanguageContext';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function HeroSection() {
    const { t } = useLanguage();
    const { text } = useTypewriter(t.hero.roles, 100, 50, 2000);

    useEffect(() => {
        // Magnetic button effect
        const magneticBtns = document.querySelectorAll('.magnetic-btn');

        magneticBtns.forEach(btn => {
            const htmlBtn = btn as HTMLElement;

            const handleMouseMove = (e: MouseEvent) => {
                const rect = htmlBtn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                htmlBtn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
            };

            const handleMouseLeave = () => {
                htmlBtn.style.transform = 'translate(0, 0)';
            };

            btn.addEventListener('mousemove', handleMouseMove as EventListener);
            btn.addEventListener('mouseleave', handleMouseLeave);
        });

        // Parallax effect
        const parallaxElements = document.querySelectorAll('[data-parallax]');

        const handleParallax = () => {
            const scrollY = window.pageYOffset;

            parallaxElements.forEach(el => {
                const htmlEl = el as HTMLElement;
                const speed = parseFloat(htmlEl.dataset.parallax || '0.5');
                const yPos = -(scrollY * speed);
                htmlEl.style.backgroundPositionY = `calc(center + ${yPos}px)`;
            });
        };

        window.addEventListener('scroll', handleParallax, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleParallax);
            // Cleanup for magnetic buttons
            magneticBtns.forEach(btn => {
                const htmlBtn = btn as HTMLElement;
                const handleMouseMove = (e: MouseEvent) => {
                    const rect = htmlBtn.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;
                    htmlBtn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
                };
                const handleMouseLeave = () => {
                    htmlBtn.style.transform = 'translate(0, 0)';
                };
                btn.removeEventListener('mousemove', handleMouseMove as EventListener);
                btn.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    return (
        <>
            <Script
                src="/particles.js"
                onLoad={() => {
                    if (typeof (window as any).particlesJS !== 'undefined') {
                        (window as any).particlesJS('particles-js', {
                            particles: {
                                number: { value: 60, density: { enable: true, value_area: 800 } },
                                color: { value: ['#667eea', '#764ba2', '#f093fb', '#ffffff'] },
                                shape: { type: 'circle' },
                                opacity: { value: 0.5, random: true, anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false } },
                                size: { value: 3, random: true, anim: { enable: true, speed: 2, size_min: 0.5, sync: false } },
                                line_linked: { enable: true, distance: 150, color: '#667eea', opacity: 0.2, width: 1 },
                                move: { enable: true, speed: 1.5, direction: 'none', random: true, straight: false, out_mode: 'out', bounce: false, attract: { enable: true, rotateX: 600, rotateY: 1200 } }
                            },
                            interactivity: {
                                detect_on: 'canvas',
                                events: { onhover: { enable: true, mode: 'grab' }, onclick: { enable: true, mode: 'push' }, resize: true },
                                modes: { grab: { distance: 140, line_linked: { opacity: 0.5 } }, push: { particles_nb: 4 } }
                            },
                            retina_detect: true
                        });
                    }
                }}
            />

            <section id="home" className="hero-section">
                {/* ... particles ... */}
                <div id="particles-js" className="particles-container"></div>

                <div className="container hero-container">
                    <div className="hero-content">
                        <p className="hero-subtitle fade-in">{t.hero.subtitle}</p>
                        <h1 className="hero-title fade-in stagger-1">
                            I am a <span className="highlight-text type-writer">{text}</span>
                            <span className="cursor">|</span>
                        </h1>
                        <p className="hero-description fade-in stagger-2">
                            {t.hero.description}
                        </p>

                        <div className="hero-actions fade-in stagger-3">
                            <div className="social-icons">
                                {/* ... icons ... */}
                                {/* keep existing icons */}
                                <a href="https://github.com/Creastein" target="_blank" className="social-icon" aria-label="GitHub"><i className="fab fa-github"></i></a>
                                <a href="https://www.linkedin.com/in/welli-" target="_blank" className="social-icon" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                                <a href="https://www.instagram.com/_well07/" target="_blank" className="social-icon" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                                <a href="https://wa.me/085161507114" target="_blank" className="social-icon" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="scroll-indicator fade-in stagger-4">
                        <div className="mouse">
                            <div className="wheel"></div>
                        </div>
                        <div className="arrow-scroll">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <p>{t.hero.scrollDown}</p>
                    </div>
                </div>

                <div className="hero-overlay"></div>
            </section>
        </>
    );
}
