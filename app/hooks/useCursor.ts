"use client";

import { useEffect, useRef } from 'react';

export function useCursor() {
    const isInitialized = useRef(false);

    useEffect(() => {
        if (isInitialized.current) return;
        isInitialized.current = true;

        const cursorDot = document.querySelector('.cursor-dot') as HTMLElement;
        const cursorOutline = document.querySelector('.cursor-outline') as HTMLElement;

        if (!cursorDot || !cursorOutline || !window.matchMedia('(pointer: fine)').matches) {
            return;
        }

        let mouseX = 0, mouseY = 0;
        let outlineX = 0, outlineY = 0;

        const onMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            cursorDot.style.left = mouseX + 'px';
            cursorDot.style.top = mouseY + 'px';
        };

        document.addEventListener('mousemove', onMouseMove);

        const animateOutline = () => {
            outlineX += (mouseX - outlineX) * 0.15;
            outlineY += (mouseY - outlineY) * 0.15;

            cursorOutline.style.left = outlineX + 'px';
            cursorOutline.style.top = outlineY + 'px';

            requestAnimationFrame(animateOutline);
        };
        animateOutline();

        const interactiveElements = document.querySelectorAll('a, button, input, .service-card, .portfolio-item');

        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorDot.classList.add('hovering');
                cursorOutline.classList.add('hovering');
            });

            el.addEventListener('mouseleave', () => {
                cursorDot.classList.remove('hovering');
                cursorOutline.classList.remove('hovering');
            });
        });

        document.addEventListener('mousedown', () => {
            cursorDot.classList.add('clicking');
            cursorOutline.classList.add('clicking');
        });

        document.addEventListener('mouseup', () => {
            cursorDot.classList.remove('clicking');
            cursorOutline.classList.remove('clicking');
        });

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
        };
    }, []);
}
