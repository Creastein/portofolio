"use client";

import { useEffect, useCallback } from 'react';

export function useScrollSpy() {
    const handleScroll = useCallback(() => {
        const sections = document.querySelectorAll('section');
        const navItems = document.querySelectorAll('.nav-links a');
        const navbar = document.querySelector('.navbar');

        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id') || '';
            }
        });

        navItems.forEach(a => {
            a.classList.remove('active');
            if (current && a.getAttribute('href')?.includes(current)) {
                a.classList.add('active');
            }
        });

        if (window.scrollY > 50) {
            navbar?.classList.add('scrolled');
        } else {
            navbar?.classList.remove('scrolled');
        }
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);
}
