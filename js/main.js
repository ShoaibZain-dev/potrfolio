/**
 * Shoaib — Solutions Beyond Design
 * Main Application Logic (Header, Navigation, ScrollSpy, Animations)
 */

(function () {
  'use strict';

  // 1. Header Sticky & Scroll Effect
  const siteHeader = document.getElementById('site-header');
  const backToTopBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    if (siteHeader) {
      if (scrollPos > 50) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    }

    if (backToTopBtn) {
      if (scrollPos > 400) {
        backToTopBtn.style.opacity = '1';
        backToTopBtn.style.pointerEvents = 'auto';
      } else {
        backToTopBtn.style.opacity = '0';
        backToTopBtn.style.pointerEvents = 'none';
      }
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // 2. Mobile Drawer Navigation
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
      document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  // 3. ScrollSpy Navigation Highlighting
  const sections = document.querySelectorAll('section[id]');

  function scrollSpy() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const navItem = document.querySelector(`.nav-menu a[href*="${sectionId}"]`);

      if (navItem) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navItem.classList.add('active');
        } else {
          navItem.classList.remove('active');
        }
      }
    });
  }

  window.addEventListener('scroll', scrollSpy);

  // 4. Scroll Reveal Animations
  const revealElements = document.querySelectorAll('.fade-in-up');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('visible'));
  }

  // 5. Connect Local Jhelum Categories to Contact Form
  const localCategoryCards = document.querySelectorAll('.category-card');
  const formServiceSelect = document.getElementById('form-service');
  const formMessageText = document.getElementById('form-message');

  localCategoryCards.forEach(card => {
    card.addEventListener('click', () => {
      const categoryName = card.querySelector('.category-title').textContent.trim();
      
      if (formServiceSelect) {
        formServiceSelect.value = 'Local Business Digital Transformation';
      }

      if (formMessageText) {
        formMessageText.value = `Hello Shoaib, I manage a business in Jhelum (${categoryName}). I would like to build a stronger digital presence and discuss a website/branding package.`;
      }

      // Smooth scroll to contact
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

})();
