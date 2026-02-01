"use client";

import { useLanguage } from '../context/LanguageContext';

export default function ContactFooter() {
    const { t } = useLanguage();

    return (
        <footer id="contact" className="contact-footer">
            <div className="container">
                <div className="footer-content text-center">
                    <h2 className="section-title fade-in">{t.footer.title}</h2>
                    <div className="social-links fade-in stagger-1">
                        <a href="https://github.com/creastein" target="_blank" aria-label="GitHub"><i className="fab fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/welli-welli-098553229/" target="_blank" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                        <a href="https://www.instagram.com/welli_freelancer/" target="_blank" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                        <a href="mailto:welli@example.com" aria-label="Email"><i className="fas fa-envelope"></i></a>
                    </div>
                    <p className="copyright fade-in stagger-2">
                        {t.footer.copyright}
                    </p>
                </div>
            </div>
        </footer>
    );
}
