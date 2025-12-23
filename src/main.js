import './style.css'
import '@fortawesome/fontawesome-free/css/all.min.css'


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

  // ===== TILT EFFECT FOR CARDS (Key Performance Optimization) =====
  if (window.matchMedia('(pointer: fine)').matches) {
    const cards = document.querySelectorAll('.service-card, .portfolio-item');
    
    cards.forEach(card => {
      let ticking = false;
      
      card.addEventListener('mousemove', (e) => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Calculate rotation based on cursor position
            // Center of card is 0,0
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Max rotation deg
            const maxRotate = 10;
            
            const rotateX = ((y - centerY) / centerY) * -maxRotate; // Invert X for natural tilt
            const rotateY = ((x - centerX) / centerX) * maxRotate; 

            // Determine specific scale based on card type to match CSS
            let scale = 1;
            let translateY = 0;
            
            if (card.classList.contains('service-card')) {
              scale = 1.02;
              translateY = -15; // Match CSS .service-card:hover
            } else if (card.classList.contains('portfolio-item')) {
              scale = 1; // Portfolio item container doesn't scale, its image does
              translateY = -5; // A slight lift for portfolio items
            }

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale}) translateY(${translateY}px)`;
            
            ticking = false;
          });
          
          ticking = true;
        }
      });

      card.addEventListener('mouseleave', () => {
        // Clear manual transform so CSS takes over (or reset to default)
        card.style.transform = '';
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
        if (!import.meta.env.PROD) console.log('ServiceWorker unregistered');
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
window.requestIdleCallback = window.requestIdleCallback || function (cb, options) {
  const start = Date.now();
  const timeout = (options && options.timeout) || 1;
  return setTimeout(() => {
    cb({
      didTimeout: false,
      timeRemaining: () => Math.max(0, 50 - (Date.now() - start))
    });
  }, timeout);
};
