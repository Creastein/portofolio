import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  // ===== LOADING SCREEN =====
  const loader = document.getElementById('loader');

  const hideLoader = () => {
    if (loader) {
      loader.classList.add('hidden');
      document.body.classList.add('loaded');

      // Start typewriter after loader
      if (typeof initTypewriter === 'function') {
        setTimeout(initTypewriter, 500);
      }
    }
  };

  // Hide loader after animation completes
  setTimeout(hideLoader, 1800);

  // ===== CUSTOM CURSOR =====
  const cursorDot = document.querySelector('.cursor-dot');
  const cursorOutline = document.querySelector('.cursor-outline');

  if (cursorDot && cursorOutline && window.matchMedia('(pointer: fine)').matches) {
    let mouseX = 0, mouseY = 0;
    let outlineX = 0, outlineY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Dot follows immediately
      cursorDot.style.left = mouseX + 'px';
      cursorDot.style.top = mouseY + 'px';
    });

    // Smooth outline follow
    const animateOutline = () => {
      outlineX += (mouseX - outlineX) * 0.15;
      outlineY += (mouseY - outlineY) * 0.15;

      cursorOutline.style.left = outlineX + 'px';
      cursorOutline.style.top = outlineY + 'px';

      requestAnimationFrame(animateOutline);
    };
    animateOutline();

    // Hover effects on interactive elements
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

    // Click effects
    document.addEventListener('mousedown', () => {
      cursorDot.classList.add('clicking');
      cursorOutline.classList.add('clicking');
    });

    document.addEventListener('mouseup', () => {
      cursorDot.classList.remove('clicking');
      cursorOutline.classList.remove('clicking');
    });
  }

  // ===== MAGNETIC BUTTONS =====
  const magneticBtns = document.querySelectorAll('.magnetic-btn');

  magneticBtns.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0, 0)';
    });
  });

  // ===== PARTICLES.JS =====
  if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
      particles: {
        number: {
          value: 60,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: ['#667eea', '#764ba2', '#f093fb', '#ffffff']
        },
        shape: {
          type: 'circle'
        },
        opacity: {
          value: 0.5,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: true,
            speed: 2,
            size_min: 0.5,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#667eea',
          opacity: 0.2,
          width: 1
        },
        move: {
          enable: true,
          speed: 1.5,
          direction: 'none',
          random: true,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: true,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'grab'
          },
          onclick: {
            enable: true,
            mode: 'push'
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 0.5
            }
          },
          push: {
            particles_nb: 4
          }
        }
      },
      retina_detect: true
    });
  }

  // ===== PARALLAX SCROLLING =====
  const parallaxElements = document.querySelectorAll('[data-parallax]');

  const handleParallax = () => {
    const scrollY = window.pageYOffset;

    parallaxElements.forEach(el => {
      const speed = parseFloat(el.dataset.parallax) || 0.5;
      const yPos = -(scrollY * speed);
      el.style.backgroundPositionY = `calc(center + ${yPos}px)`;
    });
  };

  window.addEventListener('scroll', handleParallax, { passive: true });

  // ===== SCROLL REVEAL ANIMATIONS =====
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

  // Observe all elements with fade-in class
  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });

  // ===== MOBILE MENU TOGGLE =====
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navbar = document.querySelector('.navbar');

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      mobileToggle.classList.toggle('active');
    });
  }

  // ===== SMOOTH SCROLLING =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      // Close mobile menu if open
      if (navLinks && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        mobileToggle.classList.remove('active');
      }

      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // ===== ACTIVE LINK HIGHLIGHTING =====
  const sections = document.querySelectorAll('section');
  const navItems = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navItems.forEach(a => {
      a.classList.remove('active');
      if (current && a.getAttribute('href').includes(current)) {
        a.classList.add('active');
      }
    });

    // Navbar scrolled state
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // ===== ENHANCED HOVER EFFECTS =====
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function () {
      this.style.transform = 'translateY(-15px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function () {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });

  // Portfolio item effects
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  portfolioItems.forEach(item => {
    item.addEventListener('click', function () {
      this.style.transform = 'scale(0.98)';
      setTimeout(() => {
        this.style.transform = 'scale(1)';
      }, 100);
    });
  });

  // ===== TYPEWRITER EFFECT =====
  function initTypewriter() {
    const typewriterElement = document.querySelector('.typewriter-text');
    if (typewriterElement) {
      const phrases = JSON.parse(typewriterElement.getAttribute('data-text'));
      let phraseIndex = 0;
      let charIndex = 0;
      let isDeleting = false;
      let typeSpeed = 100;

      function type() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
          typewriterElement.textContent = currentPhrase.substring(0, charIndex - 1);
          charIndex--;
          typeSpeed = 50;
        } else {
          typewriterElement.textContent = currentPhrase.substring(0, charIndex + 1);
          charIndex++;
          typeSpeed = 100;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
          isDeleting = true;
          typeSpeed = 2000;
        } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
      }

      type();
    }
  }

  // ===== SMOOTH SCROLL INDICATOR =====
  const scrollDown = document.querySelector('.scroll-down a');
  if (scrollDown) {
    scrollDown.addEventListener('mouseenter', function () {
      this.querySelector('span').style.animationPlayState = 'paused';
    });

    scrollDown.addEventListener('mouseleave', function () {
      this.querySelector('span').style.animationPlayState = 'running';
    });
  }

  // ===== TILT EFFECT FOR CARDS (Optional Performance Enhancement) =====
  if (window.matchMedia('(pointer: fine)').matches) {
    const cards = document.querySelectorAll('.service-card, .portfolio-item');

    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
      });
    });
  }



  // ===== LAZY LOADING FOR BACKGROUND IMAGES =====
  const lazyBackgrounds = document.querySelectorAll('[data-bg]');

  if ('IntersectionObserver' in window) {
    const bgObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          el.style.backgroundImage = `url(${el.dataset.bg})`;
          el.classList.add('bg-loaded');
          bgObserver.unobserve(el);
        }
      });
    }, {
      rootMargin: '100px'
    });

    lazyBackgrounds.forEach(el => bgObserver.observe(el));
  } else {
    // Fallback for browsers without IntersectionObserver
    lazyBackgrounds.forEach(el => {
      el.style.backgroundImage = `url(${el.dataset.bg})`;
    });
  }

  // ===== SERVICE WORKER CLEANUP =====
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(function (registrations) {
      for (let registration of registrations) {
        registration.unregister();
        console.log('ServiceWorker unregistered');
      }
    });
  }

  // ===== PERFORMANCE: DEFER NON-CRITICAL OPERATIONS =====
  requestIdleCallback(() => {
    // Preload next sections' images
    const sections = document.querySelectorAll('section[data-preload]');
    sections.forEach(section => {
      const img = new Image();
      img.src = section.dataset.preload;
    });
  }, { timeout: 2000 });

});

// Polyfill for requestIdleCallback
window.requestIdleCallback = window.requestIdleCallback || function (cb) {
  return setTimeout(() => {
    cb({
      didTimeout: false,
      timeRemaining: () => Math.max(0, 50 - (Date.now() - start))
    });
  }, 1);
};
