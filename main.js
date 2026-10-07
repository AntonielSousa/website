'use strict';

const WHATSAPP_NUMBER = '558499507938';

function openWhatsApp(message) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

function openMenu() {
  document.body.classList.add('menu-expanded');
  document.querySelector('.open-menu')?.setAttribute('aria-expanded', 'true');
  document.querySelector('.close-menu')?.setAttribute('aria-expanded', 'true');
}

function closeMenu() {
  document.body.classList.remove('menu-expanded');
  document.querySelector('.open-menu')?.setAttribute('aria-expanded', 'false');
  document.querySelector('.close-menu')?.setAttribute('aria-expanded', 'false');
}

function addToCart(productName) {
  openWhatsApp(`Olá! Vi o site da Soluty Tecnologia e gostaria de solicitar informações/orçamento sobre: ${productName}.`);
}

function initializeSwiper() {
  if (!document.querySelector('.banner-swiper') || typeof Swiper === 'undefined') return;

  new Swiper('.banner-swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    keyboard: {
      enabled: true
    }
  });
}

function initializeScrollReveal() {
  if (typeof ScrollReveal === 'undefined') return;

  ScrollReveal({
    origin: 'bottom',
    distance: '24px',
    duration: 700,
    easing: 'ease-out',
    reset: false,
    interval: 80
  }).reveal(`
    #promo-hero-banner .promo-banner-content,
    #welcome-content .col-a,
    #welcome-content .col-b,
    #welcome-content .stats,
    #products header,
    #products .product-card,
    #ton .ton-copy,
    #ton .ton-benefit,
    #ton .ton-showcase,
    #testimonials header,
    #testimonials .feedback-card,
    #banner-slider-area header,
    .banner-swiper,
    #about,
    #contact .col-a,
    #contact .col-b
  `);
}

function initializeSearch() {
  const input = document.getElementById('searchInput');
  const form = document.getElementById('searchForm');
  const cards = [...document.querySelectorAll('.product-card')];

  if (!input || cards.length === 0) return;

  const filterProducts = () => {
    const term = input.value
      .toLocaleLowerCase('pt-BR')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .trim();

    cards.forEach((card) => {
      const searchable = `${card.dataset.name || ''} ${card.textContent || ''}`
        .toLocaleLowerCase('pt-BR')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');

      card.style.display = searchable.includes(term) ? 'flex' : 'none';
    });
  };

  input.addEventListener('input', filterProducts);
  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    filterProducts();
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  });
}

function initializeSmoothNavigation() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      event.preventDefault();
      closeMenu();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

function updateNavigationState() {
  const navigation = document.getElementById('navigation');
  const backToTopButton = document.getElementById('backToTopButton');

  navigation?.classList.toggle('scroll', window.scrollY > 8);
  backToTopButton?.classList.toggle('show', window.scrollY > 550);

  const sections = ['welcome-content', 'products', 'ton', 'testimonials', 'banner-slider-area', 'contact']
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  const currentPosition = window.scrollY + window.innerHeight * 0.35;
  let currentSection = sections[0];

  sections.forEach((section) => {
    if (section.offsetTop <= currentPosition) currentSection = section;
  });

  document.querySelectorAll('.menu a[href^="#"]').forEach((link) => {
    link.classList.remove('active');
  });

  if (currentSection) {
    document
      .querySelector(`.menu a[href="#${currentSection.id}"]`)
      ?.classList.add('active');
  }
}

function initializeTonTracking() {
  document.querySelectorAll('a[href*="ton.com.br/catalogo"]').forEach((link) => {
    link.addEventListener('click', () => {
      try {
        localStorage.setItem('soluty_last_cta', 'ton');
        localStorage.setItem('soluty_last_cta_at', new Date().toISOString());
      } catch (_) {
        // Navegação continua normalmente mesmo se o storage estiver indisponível.
      }
    });
  });
}

function initializeExternalLinks() {
  document.querySelectorAll('a[target="_blank"]').forEach((link) => {
    const rel = link.getAttribute('rel') || '';
    if (!rel.includes('noopener')) link.setAttribute('rel', `${rel} noopener noreferrer`.trim());
  });
}

function initializeCurrentYear() {
  document.querySelectorAll('[data-current-year]').forEach((element) => {
    element.textContent = new Date().getFullYear();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initializeSwiper();
  initializeScrollReveal();
  initializeSearch();
  initializeSmoothNavigation();
  initializeTonTracking();
  initializeExternalLinks();
  initializeCurrentYear();
  updateNavigationState();
});

window.addEventListener('scroll', updateNavigationState, { passive: true });
window.addEventListener('resize', updateNavigationState);

// Mantém compatibilidade com os onclick já usados no HTML.
window.openMenu = openMenu;
window.closeMenu = closeMenu;
window.addToCart = addToCart;
window.openWhatsApp = openWhatsApp;
