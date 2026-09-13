/**
 * Shoaib — Solutions Beyond Design
 * Portfolio Filtering & Interactive Case Study Modal
 */

(function () {
  'use strict';

  // Project Database for Rich Modal Showcase
  const projectsData = {
    'lumina-coffee': {
      title: 'Lumina Coffee Roasters — Visual Identity & Packaging',
      category: 'Graphic Design',
      categoryBadge: 'Branding & Identity',
      image: 'assets/images/project-branding.svg',
      client: 'Artisan Cafe & Bakery (Lahore & Islamabad)',
      timeline: '3 Weeks',
      tools: 'Adobe Illustrator, Photoshop, Figma',
      overview: 'Complete brand creation for a specialty coffee roastery aiming to combine artisanal warmth with sleek modern minimalism. The package included logo design, packaging bags, bespoke cups, loyalty cards, and social media launch assets.',
      challenge: 'The client needed an identity distinct from conventional dark-roast coffee aesthetics that could attract young professionals and specialty coffee connoisseurs.',
      solution: 'Crafted a bespoke geometric monogram with electric blue and deep navy accents, coupled with tactile packaging mockups and clear brand guidelines that elevated their shelf presence by 140%.'
    },
    'apex-realestate': {
      title: 'Apex Real Estate Portal — High-Converting Web Platform',
      category: 'Web Development',
      categoryBadge: 'Web Development',
      image: 'assets/images/project-web.svg',
      client: 'Apex Estate Developers (Jhelum & Rawalpindi)',
      timeline: '4 Weeks',
      tools: 'HTML5, CSS3, Vanilla JS, Responsive Design',
      overview: 'A premium, ultra-responsive property portal designed for local buyers and overseas Pakistani investors looking for verified residential and commercial opportunities.',
      challenge: 'Outdated property websites were slow, confusing, and lacked direct mobile communication links, causing lost leads among overseas investors in the UK and Gulf.',
      solution: 'Engineered a modern web portal featuring 1-click WhatsApp inquiry buttons for each property, optimized search filters, fast asset loading, and mobile-first responsiveness that doubled qualified inquiries in the first 30 days.'
    },
    'optiflow-ai': {
      title: 'OptiFlow AI — Business Automation & Customer Engine',
      category: 'AI Projects',
      categoryBadge: 'AI Solutions',
      image: 'assets/images/project-ai.svg',
      client: 'E-Commerce & Digital Logistics Firm',
      timeline: '5 Weeks',
      tools: 'AI NLP APIs, Automation Workflows, Webhook Integration',
      overview: 'An intelligent AI-powered support and CRM routing system that automates incoming customer requests from WhatsApp, website forms, and social media.',
      challenge: 'Manual customer support took an average of 45 minutes to respond, resulting in cart abandonment and high customer dissatisfaction during peak hours.',
      solution: 'Implemented an AI workflow solution capable of instant intent recognition, bilingual English/Urdu customer handling, and automatic ticket resolution in under 2 seconds, reducing manual workload by 68%.'
    },
    'velvet-threads': {
      title: 'Velvet Threads — Luxury Apparel E-Commerce Experience',
      category: 'Web Development',
      categoryBadge: 'Web Development',
      image: 'assets/images/project-ecommerce.svg',
      client: 'Boutique Fashion House (Karachi & UK)',
      timeline: '3.5 Weeks',
      tools: 'UI/UX Design, HTML5/CSS3, JavaScript, Payment Flow UI',
      overview: 'High-end responsive fashion catalog and checkout experience highlighting handcrafted fabrics, eastern wear, and global courier tracking.',
      challenge: 'Presenting luxury garments with fast image loading speeds on mobile networks while delivering an international high-fashion brand feel.',
      solution: 'Created an airy, elegant UI featuring micro-interactions, responsive sizing charts, currency switching, and smooth cart flows with 99+ mobile score performance.'
    },
    'jhelum-eats': {
      title: 'Jhelum Eats — Local Restaurant Digital Transformation',
      category: 'Graphic Design',
      categoryBadge: 'Branding & Local Digital',
      image: 'assets/images/project-jhelum.svg',
      client: 'Fine Dining Grill & Lounge (Civil Lines, Jhelum)',
      timeline: '2 Weeks',
      tools: 'Graphic Design, QR Menu, Google Business Optimization',
      overview: 'A full digital transformation package for a prominent local Jhelum restaurant, transitioning them from traditional paper operations to modern digital ordering and local search dominance.',
      challenge: 'Third-party delivery apps charged 20-30% commissions, and the restaurant was virtually invisible on Google Maps searches within Jhelum.',
      solution: 'Designed an interactive contactless QR digital menu, optimized their Google Business profile to #1 in local food searches, and set up a direct commission-free WhatsApp ordering system that saved the client over PKR 150,000 monthly.'
    },
    'novatech-kit': {
      title: 'NovaTech Solutions — Corporate Rebranding & Marketing Kit',
      category: 'Branding',
      categoryBadge: 'Digital Branding',
      image: 'assets/images/project-marketing.svg',
      client: 'B2B Enterprise Software Provider (Dubai & Pakistan)',
      timeline: '3 Weeks',
      tools: 'Adobe Creative Suite, Figma, Pitch Deck Design',
      overview: 'Comprehensive brand overhaul including executive pitch decks, 40+ branded social media marketing templates, exhibition rollups, and digital stationery.',
      challenge: 'The company was expanding into the GCC market and required a polished, trustworthy international identity that aligned with global tech leaders.',
      solution: 'Developed a cohesive visual design language centered around precision deep blue palettes and electric cyan accents that helped them successfully close their enterprise funding round.'
    }
  };

  // Filter Buttons Functionality
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioCards = document.querySelectorAll('.portfolio-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active class
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      portfolioCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterValue === 'all' || cardCategory === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  // Modal Interaction
  const modalOverlay = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const viewProjectBtns = document.querySelectorAll('.btn-view-project');

  // Modal elements to populate
  const modalImg = document.getElementById('modal-img');
  const modalCatTag = document.getElementById('modal-cat-tag');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalClient = document.getElementById('modal-client');
  const modalTimeline = document.getElementById('modal-timeline');
  const modalTools = document.getElementById('modal-tools');
  const modalChallenge = document.getElementById('modal-challenge');
  const modalSolution = document.getElementById('modal-solution');
  const modalWhatsappLink = document.getElementById('modal-whatsapp-link');

  viewProjectBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = btn.getAttribute('data-project');
      const project = projectsData[projectId];

      if (project && modalOverlay) {
        modalImg.src = project.image;
        modalImg.alt = project.title;
        modalCatTag.textContent = project.categoryBadge;
        modalTitle.textContent = project.title;
        modalDesc.textContent = project.overview;
        modalClient.textContent = project.client;
        modalTimeline.textContent = project.timeline;
        modalTools.textContent = project.tools;
        modalChallenge.textContent = project.challenge;
        modalSolution.textContent = project.solution;

        // Customize WhatsApp inquiry button
        const whatsappMsg = encodeURIComponent(
          `Hello Shoaib, I am interested in your project work on "${project.title}". I would like to discuss a similar solution for my business.`
        );
        modalWhatsappLink.href = `https://wa.me/923229131403?text=${whatsappMsg}`;

        // Open Modal
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeModal() {
    if (modalOverlay) {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

})();
