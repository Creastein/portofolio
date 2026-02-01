"use client";

import { useEffect } from 'react';
import Image from 'next/image';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function AboutSection() {
    useEffect(() => {
        const handleParallax = () => {
            const scrollY = window.pageYOffset;
            const aboutSection = document.querySelector('.about-section') as HTMLElement;

            if (!aboutSection) return;

            // Get section position relative to viewport
            const sectionTop = aboutSection.offsetTop;
            const sectionHeight = aboutSection.offsetHeight;
            const windowHeight = window.innerHeight;

            // Check if section is in view
            if (scrollY + windowHeight > sectionTop && scrollY < sectionTop + sectionHeight) {
                const elements = document.querySelectorAll('.about-section [data-parallax]');

                elements.forEach(el => {
                    const htmlEl = el as HTMLElement;
                    const speed = parseFloat(htmlEl.dataset.parallax || '0.1');

                    // Calculate relative scroll from when section enters view
                    // We largely want the effect to be subtle and relative to the section's position
                    // Using (scrollY - sectionTop) ensures the transform is 0 when scroll is exactly at section top
                    // but we might want it relative to center. Let's stick to a simple translation
                    // based on global scroll but dampened, or relative to section start.

                    // Using global scrollY like HeroSection for consistent feel, 
                    // but subtracting a base value so they don't start wildly shifted.
                    // We'll subtract sectionTop so the shift starts from 0 when we reach the section.

                    const yPos = -((scrollY - sectionTop) * speed);
                    htmlEl.style.transform = `translateY(${yPos}px)`;
                });
            }
        };

        window.addEventListener('scroll', handleParallax, { passive: true });
        return () => window.removeEventListener('scroll', handleParallax);
    }, []);

    return (
        <section id="about" className="section about-section">
            <div className="container">
                <div className="about-grid">
                    <div className="about-content-wrapper fade-in stagger-2">
                        <div className="section-header text-left" data-parallax="0.1">
                            <h2>ABOUT ME</h2>
                        </div>
                        <div className="about-text">
                            <p className="lead" data-parallax="0.08">I'm a Business Analyst with a background in Information Systems.</p>
                            <p data-parallax="0.06">I focus on translating business needs into clear, structured solutions.</p>
                            <p data-parallax="0.04">With hands-on frontend experience, I'm able to validate ideas quickly, communicate effectively with developers, and ensure solutions stay aligned with user and business goals.</p>

                            <div className="about-actions mt-4" data-parallax="0.02">
                                <a href="#works" className="btn btn-accent">SEE MY WORK</a>
                                <a href="https://drive.google.com/file/d/1xRCIwlYaiQf54mUorn8-TAfmTBL_MXBq/view?usp=sharing" target="_blank" className="btn btn-glitch" data-text="CHECK MY CV">CHECK MY CV</a>
                            </div>
                        </div>
                    </div>
                    <div className="about-image fade-in stagger-1" data-parallax="0.12">
                        <div className="image-overlay-gradient"></div>
                        <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '400px' }}>
                            <Image
                                src={`${basePath}/images/about-me.png`}
                                alt="WELLI - Business Analyst and Developer Portrait"
                                fill
                                style={{ objectFit: 'cover', objectPosition: 'center 25%' }}
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="about-img"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
