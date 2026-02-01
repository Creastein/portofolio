"use client";
import { useEffect } from 'react';

export function useTypewriter(selector: string, typingSpeed: number = 100) {
    useEffect(() => {
        const elements = document.querySelectorAll(selector);

        elements.forEach(element => {
            const htmlElement = element as HTMLElement;
            const dataText = htmlElement.getAttribute('data-text');

            if (!dataText) return;

            let words: string[];
            try {
                words = JSON.parse(dataText);
            } catch {
                words = [dataText];
            }

            let wordIndex = 0;
            let charIndex = 0;
            let isDeleting = false;
            let currentText = '';

            const type = () => {
                const currentWord = words[wordIndex % words.length];

                if (isDeleting) {
                    currentText = currentWord.substring(0, charIndex - 1);
                    charIndex--;
                } else {
                    currentText = currentWord.substring(0, charIndex + 1);
                    charIndex++;
                }

                htmlElement.textContent = currentText;

                let typeSpeed = typingSpeed;

                if (isDeleting) {
                    typeSpeed /= 2;
                }

                if (!isDeleting && charIndex === currentWord.length) {
                    // Pause at end of word
                    typeSpeed = 2000;
                    isDeleting = true;
                } else if (isDeleting && charIndex === 0) {
                    isDeleting = false;
                    wordIndex++;
                    typeSpeed = 500;
                }

                setTimeout(type, typeSpeed);
            };

            // Start typing after a short delay
            setTimeout(type, 1000);
        });
    }, [selector, typingSpeed]);
}
