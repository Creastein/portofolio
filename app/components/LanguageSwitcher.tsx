"use client";

import { useLanguage } from '../context/LanguageContext';

export default function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="language-switcher">
            <button
                onClick={() => setLanguage('en')}
                className={`lang-btn ${language === 'en' ? 'active' : ''}`}
                aria-label="Switch to English"
            >
                EN
            </button>
            <span className="separator">|</span>
            <button
                onClick={() => setLanguage('id')}
                className={`lang-btn ${language === 'id' ? 'active' : ''}`}
                aria-label="Switch to Indonesian"
            >
                ID
            </button>

            <style jsx>{`
        .language-switcher {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-left: 20px;
          font-weight: 600;
          font-size: 0.9rem;
        }
        
        .lang-btn {
          background: none;
          border: none;
          cursor: pointer;
          color: rgba(255, 255, 255, 0.5);
          transition: color 0.3s ease;
          padding: 2px;
          font-family: inherit;
        }

        .lang-btn:hover {
          color: rgba(255, 255, 255, 0.8);
        }

        .lang-btn.active {
          color: #ffffff;
          text-decoration: underline;
          text-decoration-color: var(--primary-color);
          text-underline-offset: 4px;
        }

        .separator {
          color: rgba(255, 255, 255, 0.2);
        }

        @media (max-width: 768px) {
          .language-switcher {
            margin-left: 0;
            margin-top: 20px;
            justify-content: center;
          }
        }
      `}</style>
        </div>
    );
}
