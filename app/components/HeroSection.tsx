"use client";

import { useEffect } from 'react';
import Script from 'next/script';
import { useTypewriter } from '../hooks/useTypewriter';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function HeroSection() {
    useTypewriter('.typewriter-text', 200);

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

                // If it's the background section
                if (htmlEl.classList.contains('hero-section')) {
                    htmlEl.style.backgroundPositionY = `calc(center + ${yPos}px)`;
                } else {
                    // For text elements
                    htmlEl.style.transform = `translateY(${yPos}px)`;
                }
            });
        };

        window.addEventListener('scroll', handleParallax, { passive: true });

        // Spotlight effect
        const heroSection = document.getElementById('home');
        const handleSpotlight = (e: MouseEvent) => {
            if (!heroSection) return;
            const rect = heroSection.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            heroSection.style.setProperty('--mouse-x', `${x}%`);
            heroSection.style.setProperty('--mouse-y', `${y}%`);
        };

        if (heroSection) {
            heroSection.addEventListener('mousemove', handleSpotlight);
        }

        return () => {
            window.removeEventListener('scroll', handleParallax);
            if (heroSection) {
                heroSection.removeEventListener('mousemove', handleSpotlight);
            }
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

            <section id="home" tabIndex={-1} className="hero-section outline-none" data-parallax="0.5" style={{ backgroundImage: `url('${basePath}/images/hero-bg.png')` }}>
                <div id="particles-js"></div>
                <div className="hero-overlay"></div>
                <div className="container hero-content">
                    <span className="subtitle hero-item stagger-1" data-parallax="0.2">BUSINESS ANALYST & DEVELOPER</span>
                    <h1 className="hero-item stagger-2" data-parallax="0.1">
                        <span className="typewriter-text" data-text='["WEB & SYSTEM ANALYST", "PRODUCT ENGINEER"]'></span><span className="cursor">|</span>
                    </h1>
                    <p className="hero-item stagger-3" data-parallax="0.15">I help turn business ideas into simple<br />and useful web experiences.</p>

                    <div className="social-icons hero-item stagger-4" data-parallax="0.05">
                        <a href="https://github.com/Creastein" className="magnetic-btn" target="_blank" aria-label="GitHub"><i className="fab fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/welli-" className="magnetic-btn" target="_blank" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                        <a href="https://www.instagram.com/_well07/" className="magnetic-btn" target="_blank" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                        <a href="https://wa.me/085161507114" className="magnetic-btn" target="_blank" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
                    </div>

                    <div className="scroll-down hero-item stagger-5">
                        <a href="#about">SCROLL DOWN <span></span></a>
                    </div>
                </div>
            </section>
        </>
    );
}
