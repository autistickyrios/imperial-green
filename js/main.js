/* ============================================
   THE IMPERIAL GREEN — Main JS
============================================ */

const BOOKING_URL = 'https://bookings.theimperialgreen.com/?propertyId=11531';

/* ---- Sticky Header ---- */
(function () {
  const header = document.getElementById('header');
  if (!header) return;

  function onScroll() {
    if (window.scrollY > 60) {
      header.classList.add('scrolled');
      header.classList.remove('transparent');
    } else {
      header.classList.remove('scrolled');
      header.classList.add('transparent');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ---- Mobile Menu ---- */
(function () {
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  if (!hamburger || !mobileNav) return;

  hamburger.addEventListener('click', () => {
    const open = hamburger.classList.toggle('open');
    if (open) {
      mobileNav.classList.add('open');
      document.body.style.overflow = 'hidden';
    } else {
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
})();

/* ---- Booking Bar ---- */
(function () {
  const form = document.getElementById('booking-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    window.open(BOOKING_URL, '_blank');
  });

  // Set default dates
  const checkin = document.getElementById('checkin');
  const checkout = document.getElementById('checkout');
  if (checkin && checkout) {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dayAfter = new Date(today);
    dayAfter.setDate(dayAfter.getDate() + 2);

    const fmt = d => d.toISOString().split('T')[0];
    checkin.min = fmt(today);
    checkin.value = fmt(tomorrow);
    checkout.min = fmt(dayAfter);
    checkout.value = fmt(dayAfter);

    checkin.addEventListener('change', () => {
      const d = new Date(checkin.value);
      d.setDate(d.getDate() + 1);
      checkout.min = fmt(d);
      if (new Date(checkout.value) <= new Date(checkin.value)) {
        checkout.value = fmt(d);
      }
    });
  }
})();

/* ---- Lightbox ---- */
(function () {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  const lightboxImg = lightbox.querySelector('.lightbox-img');
  const closeBtn = lightbox.querySelector('.lightbox-close');
  const prevBtn = lightbox.querySelector('.lightbox-prev');
  const nextBtn = lightbox.querySelector('.lightbox-next');

  let items = [];
  let current = 0;

  function buildItems() {
    items = Array.from(document.querySelectorAll('.gallery-item[data-src]'));
  }

  function open(index) {
    buildItems();
    current = index;
    show(current);
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  function show(index) {
    if (!items.length) return;
    current = (index + items.length) % items.length;
    const src = items[current].getAttribute('data-src');
    const alt = items[current].getAttribute('data-alt') || 'Gallery image';
    if (lightboxImg) {
      lightboxImg.src = src;
      lightboxImg.alt = alt;
    }
  }

  document.querySelectorAll('.gallery-item[data-src]').forEach((item, i) => {
    item.addEventListener('click', () => open(i));
  });

  if (closeBtn) closeBtn.addEventListener('click', close);
  if (prevBtn)  prevBtn.addEventListener('click', () => show(current - 1));
  if (nextBtn)  nextBtn.addEventListener('click', () => show(current + 1));

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) close();
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape')     close();
    if (e.key === 'ArrowLeft')  show(current - 1);
    if (e.key === 'ArrowRight') show(current + 1);
  });
})();

/* ---- Reveal on Scroll ---- */
(function () {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  els.forEach(el => observer.observe(el));
})();

/* ---- Smooth Scroll for anchor links ---- */
(function () {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      const headerH = document.getElementById('header')?.offsetHeight || 80;
      const top = el.getBoundingClientRect().top + window.scrollY - headerH;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();

/* ---- Active nav link on scroll ---- */
(function () {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(a => a.classList.remove('active'));
        const match = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (match) match.classList.add('active');
      }
    });
  }, { rootMargin: '-50% 0px -50% 0px' });

  sections.forEach(s => observer.observe(s));
})();
