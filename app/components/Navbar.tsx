"use client";

import { useEffect } from 'react';

import Image from 'next/image';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function Navbar() {
    useEffect(() => {
        const mobileToggle = document.querySelector('.mobile-toggle');
        const navLinks = document.querySelector('.nav-links');

        const toggleMenu = () => {
            if (navLinks && mobileToggle) {
                navLinks.classList.toggle('active');
                mobileToggle.classList.toggle('active');
            }
        };

        if (mobileToggle) {
            mobileToggle.addEventListener('click', toggleMenu);
        }

        const navItems = document.querySelectorAll('.nav-links a');
        navItems.forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks && navLinks.classList.contains('active')) {
                    toggleMenu();
                }
            });
        });

        return () => {
            if (mobileToggle) {
                mobileToggle.removeEventListener('click', toggleMenu);
            }
        };
    }, []);

    return (
        <nav className="navbar">
            <div className="container nav-container">
                <a href="#home" className="logo">
                    <Image
                        src={`${basePath}/images/logo.png`}
                        alt="WELLI Logo"
                        width={120}
                        height={52}
                        className="w-auto h-[52px]"
                        priority
                    />
                </a>
                <button className="mobile-toggle" aria-label="Toggle navigation">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <ul className="nav-links">
                    <li><a href="#home" className="active">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#works">Works</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}
