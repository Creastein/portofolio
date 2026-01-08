"use client";

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Script from 'next/script';
import ServicesSection from './components/ServicesSection';
import LoadingScreen from './components/LoadingScreen';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function Home() {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    setLoading(false);
    document.body.classList.add('loaded');
  };

  useEffect(() => {
    // Removed old loader logic - now handled by LoadingScreen component
  }, []);

  useEffect(() => {
    if (loading) return;

    const initTypewriter = () => {
      const textElement = document.querySelector('.typewriter-text');
      if (!textElement) return;

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

    setTimeout(initTypewriter, 500);

  }, [loading]);

  useEffect(() => {
    const cursorDot = document.querySelector('.cursor-dot') as HTMLElement;
    const cursorOutline = document.querySelector('.cursor-outline') as HTMLElement;

    if (cursorDot && cursorOutline && window.matchMedia('(pointer: fine)').matches) {
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
    }

    const magneticBtns = document.querySelectorAll('.magnetic-btn');

    magneticBtns.forEach(btn => {
      const htmlBtn = btn as HTMLElement;
      btn.addEventListener('mousemove', (e: any) => {
        const rect = htmlBtn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        htmlBtn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
      });

      btn.addEventListener('mouseleave', () => {
        htmlBtn.style.transform = 'translate(0, 0)';
      });
    });

    const parallaxElements = document.querySelectorAll('[data-parallax]');

    const handleParallax = () => {
      const scrollY = window.pageYOffset;

      parallaxElements.forEach(el => {
        const htmlEl = el as HTMLElement;
        const speed = parseFloat(htmlEl.dataset.parallax || '0.5');
        const yPos = -(scrollY * speed);
        htmlEl.style.backgroundPositionY = `calc(center + ${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleParallax, { passive: true });

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

    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector('.navbar');
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');

    const toggleMenu = () => {
      if (navLinks && mobileToggle) {
        navLinks.classList.toggle('active');
        mobileToggle.classList.toggle('active');
      }
    }

    if (mobileToggle) {
      mobileToggle.addEventListener('click', toggleMenu);
    }

    navItems.forEach(link => {
      link.addEventListener('click', () => {
        if (navLinks && navLinks.classList.contains('active')) {
          toggleMenu();
        }
      });
    });

    const onScroll = () => {
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
    };

    window.addEventListener('scroll', onScroll);

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
  }, []); // Run once on mount

  // Cleanup effect
  // Note: For a robust app, we would return cleanup functions (removeEventListener) in the useEffect above.
  // For this quick port, it's generally okay since it's the main page.

  return (
    <>
      <Script
        src="/particles.js"
        onLoad={() => {
          // Initialize particles after script load
          if (typeof (window as any).particlesJS !== 'undefined') {
            (window as any).particlesJS('particles-js', {
              particles: {
                number: { value: 60, density: { enable: true, value_area: 800 } },
                color: { value: ['#667eea', '#764ba2', '#f093fb', '#ffffff'] },
                shape: { type: 'circle' },
                opacity: { value: 0.5, random: true, anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false } },
                size: { value: 3, random: true, anim: { enable: true, speed: 2, size_min: 0.5, sync: false } },
                line_linked: { enable: true, distance: 150, color: '#667eea', opacity: 0.2, width: 1 },
                move: { enable: true, speed: 1.5, direction: 'none', random: true, straight: false, out_mode: 'out', bounce: false, attract: { enable: true, rotateX: 600, rotateY: 1200 } }
              },
              interactivity: {
                detect_on: 'canvas',
                events: { onhover: { enable: true, mode: 'grab' }, onclick: { enable: true, mode: 'push' }, resize: true },
                modes: { grab: { distance: 140, line_linked: { opacity: 0.5 } }, push: { particles_nb: 4 } }
              },
              retina_detect: true
            });
          }
        }}
      />

      {/* Loading Screen */}
      <LoadingScreen isLoading={loading} onLoadingComplete={handleLoadingComplete} />

      {/* Custom Cursor */}
      <div className="cursor-dot"></div>
      <div className="cursor-outline"></div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="container nav-container">
          <a href="#home" className="logo">
            <img src={`${basePath}/images/logo.png`} alt="WELLI Logo" width="120" height="auto" />
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

      {/* Hero Section */}
      <section id="home" className="hero-section" data-parallax="0.5" style={{ backgroundImage: `url('${basePath}/images/hero-bg.png')` }}>
        <div id="particles-js"></div>
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <span className="subtitle hero-item stagger-1">BUSINESS ANALYST & DEVELOPER</span>
          <h1 className="hero-item stagger-2">
            <span className="typewriter-text" data-text='["SOLUTION ARCHITECT", "PRODUCT ENGINEER"]'></span><span className="cursor">|</span>
          </h1>
          <p className="hero-item stagger-3">I help turn business ideas into simple<br />and useful web experiences.</p>

          <div className="social-icons hero-item stagger-4">
            <a href="https://github.com/Creastein" className="magnetic-btn" target="_blank" aria-label="GitHub"><i className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/welli-" className="magnetic-btn" target="_blank" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://www.instagram.com/_well07/" className="magnetic-btn" target="_blank" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="https://wa.me/085161507114" className="magnetic-btn" target="_blank" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
          </div>

          <div className="scroll-down hero-item stagger-5">
            <a href="#about">SCROLL DOWN <span></span></a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-content-wrapper fade-in stagger-2">
              <div className="section-header text-left">
                <h2>ABOUT ME</h2>
              </div>
              <div className="about-text">
                <p className="lead">I’m a Business Analyst with a background in Information Systems.</p>
                <p>I focus on translating business needs into clear, structured solutions.</p>
                <p>With hands-on frontend experience, I’m able to validate ideas quickly, communicate effectively with developers, and ensure solutions stay aligned with user and business goals.</p>

                <div className="about-actions mt-4">
                  <a href="#works" className="btn btn-accent">SEE MY WORK</a>
                  <a href="https://drive.google.com/file/d/1uscGnRDqBqJEf371elH8P5-FdFHGdj9K/view?usp=drive_link" target="_blank" className="btn btn-glitch" data-text="CHECK MY CV">CHECK MY CV</a>
                </div>
              </div>
            </div>
            <div className="about-image fade-in stagger-1">
              <div className="image-overlay-gradient"></div>
              {/* User's Stylish B&W Portrait */}
              <img src={`${basePath}/images/about-me.png`} alt="WELLI - Business Analyst and Developer Portrait" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills-section bg-light">
        <div className="container">
          <div className="section-header fade-in">
            <h2>My Skills</h2>
            <div className="skills-grid">
              {/* Frontend Development (Large Card) */}
              <div className="skill-card frontend fade-in stagger-1">
                <div className="skill-header">
                  <i className="fas fa-code accent-icon"></i>
                  <h3>Frontend Development</h3>
                </div>
                <div className="skills-tiles-grid">
                  <div className="skill-tile" title="HTML5">
                    <img src="https://cdn.simpleicons.org/html5" alt="HTML5" className="skill-icon-img" />
                  </div>
                  <div className="skill-tile" title="CSS3">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" alt="CSS3" className="skill-icon-img" />
                  </div>
                  <div className="skill-tile" title="JavaScript">
                    <img src="https://cdn.simpleicons.org/javascript" alt="JavaScript" className="skill-icon-img" />
                  </div>
                  <div className="skill-tile" title="React">
                    <img src="https://cdn.simpleicons.org/react" alt="React" className="skill-icon-img" />
                  </div>
                  <div className="skill-tile" title="Vite">
                    <img src="https://cdn.simpleicons.org/vite" alt="Vite" className="skill-icon-img" />
                  </div>
                  <div className="skill-tile" title="Tailwind CSS">
                    <img src="https://cdn.simpleicons.org/tailwindcss" alt="Tailwind CSS" className="skill-icon-img" />
                  </div>
                  <div className="skill-tile" title="Bootstrap">
                    <img src="https://cdn.simpleicons.org/bootstrap" alt="Bootstrap" className="skill-icon-img" />
                  </div>
                  <div className="skill-tile" title="GitHub">
                    <img src="https://cdn.simpleicons.org/github/white" alt="GitHub" className="skill-icon-img" />
                  </div>
                  <div className="skill-tile" title="Draw.io">
                    <img src="https://cdn.simpleicons.org/diagramsdotnet" alt="Draw.io" className="skill-icon-img" />
                  </div>
                </div>
              </div>

              {/* Business Analysis (Wide Card) */}
              <div className="skill-card analysis fade-in stagger-2">
                <div className="skill-header">
                  <i className="fas fa-chart-line accent-icon"></i>
                  <h3>Business & System Analysis</h3>
                </div>
                <div className="analysis-list">
                  <div className="analysis-item">
                    <i className="fas fa-search"></i>
                    <span>System Requirements Analysis</span>
                  </div>
                  <div className="analysis-item">
                    <i className="fas fa-share-alt"></i>
                    <span>Flowchart & Process Design</span>
                  </div>
                  <div className="analysis-item">
                    <i className="fas fa-database"></i>
                    <span>ERD & Database Modeling</span>
                  </div>
                  <div className="analysis-item">
                    <i className="fas fa-file-alt"></i>
                    <span>Technical Documentation</span>
                  </div>
                </div>
              </div>

              {/* Multimedia (Medium Card) */}
              <div className="skill-card multimedia fade-in stagger-3">
                <div className="skill-header">
                  <i className="fas fa-photo-video accent-icon"></i>
                  <h3>Multimedia</h3>
                </div>
                <div className="skills-tiles-grid">
                  <div className="skill-tile" title="OBS Studio">
                    <img src="https://cdn.simpleicons.org/obsstudio/white" alt="OBS" className="skill-icon-img" />
                  </div>
                  <div className="skill-tile" title="CapCut">
                    <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Capcut-icon.svg" alt="CapCut" className="skill-icon-img" />
                  </div>
                  <div className="skill-tile" title="Canva">
                    <img src="https://img.icons8.com/color/48/canva.png" alt="Canva" className="skill-icon-img" />
                  </div>
                </div>
              </div>

              {/* Office (Medium Card) */}
              <div className="skill-card office fade-in stagger-4">
                <div className="skill-header">
                  <i className="fas fa-briefcase accent-icon"></i>
                  <h3>Office Tools</h3>
                </div>
                <div className="skills-tiles-grid">
                  <div className="skill-tile" title="Microsoft Word">
                    <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Microsoft_Office_Word_%282019%E2%80%932025%29.svg" alt="Word" className="skill-icon-img" />
                  </div>
                  <div className="skill-tile" title="Microsoft Excel">
                    <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Microsoft_Office_Excel_%282019%E2%80%932025%29.svg" alt="Excel" className="skill-icon-img" />
                  </div>
                  <div className="skill-tile" title="Microsoft PowerPoint">
                    <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Microsoft_Office_PowerPoint_%282019%E2%80%932025%29.svg" alt="PPT" className="skill-icon-img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Services Section */}
      <ServicesSection />

      {/* Works / Portfolio Section */}
      <section id="works" className="section works">
        <div className="container">
          <header className="section-header">
            <h2 className="section-title">Project</h2>
            <p className="section-subtitle">Portfolio</p>
          </header>

          <div className="portfolio-grid">
            {/* Item 1 */}
            <a className="portfolio-item fade-in stagger-1" href="https://creastein.github.io/portofolio" target="_blank" rel="noopener noreferrer" aria-label="View project: Portfolio">
              <figure className="portfolio-image" style={{ '--bg': `url('${basePath}/images/portofolio.png')` } as any}>
                <img src={`${basePath}/images/portofolio.png`} alt="Portfolio — Personal Portfolio Website" loading="lazy" decoding="async" />
              </figure>
              <div className="portfolio-overlay">
                <h3>Portfolio</h3>
                <span className="category">Web Portfolio · Frontend Development</span>
                <span className="view-work-btn" aria-hidden="true">View Work</span>
              </div>
            </a>

            {/* Item 2 */}
            <a className="portfolio-item fade-in stagger-2" href="https://dancing-mountain-villa.vercel.app/" target="_blank" rel="noopener noreferrer" aria-label="View project: Dancing Mountain Villa">
              <figure className="portfolio-image" style={{ '--bg': `url('${basePath}/images/dancingmountainvilla.png')` } as any}>
                <img src={`${basePath}/images/dancingmountainvilla.png`} alt="Dancing Mountain Villa — Villa Rental Website" loading="lazy" decoding="async" />
              </figure>
              <div className="portfolio-overlay">
                <h3>Dancing Mountain Villa</h3>
                <span className="category">Web Design · React</span>
                <span className="view-work-btn" aria-hidden="true">View Work</span>
              </div>
            </a>

            {/* Item 3 */}
            <a className="portfolio-item fade-in stagger-3" href="https://villa-utamaro.vercel.app/" target="_blank" rel="noopener noreferrer" aria-label="View project: Villa Utamaro">
              <figure className="portfolio-image" style={{ '--bg': `url('${basePath}/images/VillaUtamaro.png')` } as any}>
                <img src={`${basePath}/images/VillaUtamaro.png`} alt="Villa Utamaro — Luxury Villa Website" loading="lazy" decoding="async" />
              </figure>
              <div className="portfolio-overlay">
                <h3>Villa Utamaro</h3>
                <span className="category">Web Design · UI/UX</span>
                <span className="view-work-btn" aria-hidden="true">View Work</span>
              </div>
            </a>

            {/* Item 4 */}
            <a className="portfolio-item fade-in stagger-4" href="#" target="_blank" rel="noopener noreferrer" aria-label="View project: Gereja JHB Salatiga">
              <figure className="portfolio-image" style={{ '--bg': `url('${basePath}/images/GerejaJHBSalatiga.png')` } as any}>
                <img src={`${basePath}/images/GerejaJHBSalatiga.png`} alt="Gereja JHB Salatiga — Church Website" loading="lazy" decoding="async" />
              </figure>
              <div className="portfolio-overlay">
                <h3>Gereja JHB Salatiga</h3>
                <span className="category">Web Design · Community</span>
                <span className="view-work-btn" aria-hidden="true">View Work</span>
              </div>
            </a>

            {/* Item 5 */}
            <a className="portfolio-item fade-in stagger-5" href="https://best1trans.com/" target="_blank" rel="noopener noreferrer" aria-label="View project: Best1Trans">
              <figure className="portfolio-image" style={{ '--bg': `url('${basePath}/images/best1trans.png')` } as any}>
                <img src={`${basePath}/images/best1trans.png`} alt="Best1Trans — Car Rental Service" loading="lazy" decoding="async" />
              </figure>
              <div className="portfolio-overlay">
                <h3>Best1Trans</h3>
                <span className="category">Car Rental · Web Development</span>
                <span className="view-work-btn" aria-hidden="true">View Work</span>
              </div>
            </a>

            {/* Item 6 */}
            <a className="portfolio-item fade-in stagger-6" href="#" target="_blank" rel="noopener noreferrer" aria-label="View project: E-commerce Landing Page">
              <figure className="portfolio-image" style={{ '--bg': `url('${basePath}/images/E-commerceSaaSLandingPage.png')` } as any}>
                <img src={`${basePath}/images/E-commerceSaaSLandingPage.png`} alt="E-commerce Landing Page — SaaS Website" loading="lazy" decoding="async" />
              </figure>
              <div className="portfolio-overlay">
                <h3>E-commerce / SaaS</h3>
                <span className="category">Landing Page · Marketing</span>
                <span className="view-work-btn" aria-hidden="true">View Work</span>
              </div>
            </a>
          </div>

          <div className="works-cta">
            <a href="https://creastein.github.io/" className="btn btn-outline" aria-label="View all works">View All Works</a>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section cta-section">
        <div className="container">
          <h2>A Creative studio passionate about<br />design, art and creativity.</h2>
          <a href="#contact" className="btn btn-white">Contact Me</a>
        </div>
      </section>

      {/* Contact & Footer */}
      <footer id="contact" className="footer">
        <div className="container">
          <div className="contact-content">
            <h2>Let's work together on your next project</h2>
            <a href="mailto:well0711200@gmail.com" className="email-link">well0711200@gmail.com</a>
          </div>
          <div className="footer-social">
            <a href="https://wa.me/085161507114" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
            <a href="https://www.linkedin.com/in/welli-" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://www.instagram.com/_well07/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="https://github.com/Creastein" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fab fa-github"></i></a>
          </div>
          <div className="copyright">
            <p>&copy; 2025 WELLI. All rights reserved. | Powered by Creativity.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
