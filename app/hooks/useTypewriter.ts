"use client";

import { useEffect, useRef } from 'react';

export function useTypewriter(selector: string, delay: number = 500) {
    const isInitialized = useRef(false);

    useEffect(() => {
        if (isInitialized.current) return;

        const initTypewriter = () => {
            const textElement = document.querySelector(selector);
            if (!textElement) return;

            isInitialized.current = true;

            const textArray = JSON.parse(textElement.getAttribute('data-text') || '[]');
            const typeSpeed = 100;
            const deleteSpeed = 50;
            const waitTime = 2000;

            let textIndex = 0;
            let charIndex = 0;
            let isDeleting = false;

            const type = () => {
                const current = textIndex % textArray.length;
                const fullTxt = textArray[current];

                if (isDeleting) {
                    textElement.textContent = fullTxt.substring(0, charIndex - 1);
                    charIndex--;
                } else {
                    textElement.textContent = fullTxt.substring(0, charIndex + 1);
                    charIndex++;
                }

                let typeSpeedReal = typeSpeed;

                if (isDeleting) {
                    typeSpeedReal = deleteSpeed;
                }

                if (!isDeleting && charIndex === fullTxt.length) {
                    typeSpeedReal = waitTime;
                    isDeleting = true;
                } else if (isDeleting && charIndex === 0) {
                    isDeleting = false;
                    textIndex++;
                    typeSpeedReal = 500;
                }

                setTimeout(type, typeSpeedReal);
            };

            type();
        };

        const timer = setTimeout(initTypewriter, delay);
        return () => clearTimeout(timer);
    }, [selector, delay]);
}
