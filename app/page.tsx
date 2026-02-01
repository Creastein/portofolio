"use client";

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useScrollSpy } from './hooks/useScrollSpy';
import { LanguageProvider } from './context/LanguageContext';

import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';

// Lazy load below-the-fold sections
const SkillsSection = dynamic(() => import('./components/SkillsSection'), { ssr: true });
const ServicesSection = dynamic(() => import('./components/ServicesSection'), { ssr: true });
const PortfolioSection = dynamic(() => import('./components/PortfolioSection'), { ssr: true });
const CTASection = dynamic(() => import('./components/CTASection'), { ssr: true });
const ContactFooter = dynamic(() => import('./components/ContactFooter'), { ssr: true });

export default function Home() {
  const [loading, setLoading] = useState(true);

  useScrollSpy();

  const handleLoadingComplete = () => {
    setLoading(false);
    document.body.classList.add('loaded');
  };

  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });

    // 3D Card tilt effect
    if (window.matchMedia('(pointer: fine)').matches) {
      const cards = document.querySelectorAll('.service-card, .portfolio-item');

      cards.forEach(card => {
        const htmlCard = card as HTMLElement;
        let ticking = false;

        card.addEventListener('mousemove', (e: any) => {
          if (!ticking) {
            window.requestAnimationFrame(() => {
              const rect = htmlCard.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;

              const centerX = rect.width / 2;
              const centerY = rect.height / 2;
              const maxRotate = 10;

              const rotateX = ((y - centerY) / centerY) * -maxRotate;
              const rotateY = ((x - centerX) / centerX) * maxRotate;

              let scale = 1;
              let translateY = 0;

              if (htmlCard.classList.contains('service-card')) {
                scale = 1.02;
                translateY = -15;
              } else if (htmlCard.classList.contains('portfolio-item')) {
                scale = 1;
                translateY = -5;
              }

              htmlCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale}) translateY(${translateY}px)`;

              ticking = false;
            });

            ticking = true;
          }
        });

        card.addEventListener('mouseleave', () => {
          htmlCard.style.transform = '';
        });
      });
    }

    return () => {
      observer.disconnect();
    };
  }, [loading]);

  return (
    <LanguageProvider>
      {/* Loading Screen */}
      <LoadingScreen isLoading={loading} onLoadingComplete={handleLoadingComplete} />

      {/* Custom Cursor */}
      <CustomCursor />

      <main className="relative min-h-screen bg-slate-900 text-slate-200 overflow-x-hidden">
        {/* Navigation */}
        <Navbar />

        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <AboutSection />

        {/* Skills Section */}
        <SkillsSection />

        {/* Services Section */}
        <ServicesSection />

        {/* Works / Portfolio Section */}
        <PortfolioSection />

        {/* Call to Action */}
        <CTASection />

        {/* Contact & Footer */}
        <ContactFooter />
      </main>
    </LanguageProvider>
  );
}
