"use client";
import { useState, useEffect } from 'react';

export function useTypewriter(words: string[], typeSpeed = 150, deleteSpeed = 100, waitTime = 2000) {
    const [text, setText] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[wordIndex % words.length];

        if (!isDeleting && text === currentWord) {
            // Finished typing word, wait before deleting
            const timer = setTimeout(() => {
                setIsDeleting(true);
            }, waitTime);
            return () => clearTimeout(timer);
        } else if (isDeleting && text === '') {
            // Finished deleting, move to next word
            setIsDeleting(false);
            setWordIndex((prev) => prev + 1);
            return;
        }

        const timer = setTimeout(() => {
            setText((prev) => {
                if (isDeleting) {
                    return prev.slice(0, -1);
                } else {
                    return currentWord.slice(0, prev.length + 1);
                }
            });
        }, isDeleting ? deleteSpeed : typeSpeed);

        return () => clearTimeout(timer);
    }, [text, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, waitTime]);

    return { text };
}
