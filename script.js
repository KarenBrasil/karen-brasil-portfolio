// ─── THEME TOGGLE ───
const themeBtn = document.getElementById('themeToggle');
// (Dark only for now — can extend later)

// ─── ACTIVE NAV ON SCROLL ───
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const observerNav = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(a => a.classList.remove('active'));
      const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => observerNav.observe(s));

// ─── FADE IN ON SCROLL ───
const fadeEls = document.querySelectorAll('.fade-in');
const observerFade = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, entry.target.dataset.delay || 0);
      observerFade.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

fadeEls.forEach((el, i) => {
  el.dataset.delay = i * 60;
  observerFade.observe(el);
});

// ─── NAVBAR SCROLL SHADOW ───
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.style.boxShadow = '0 4px 24px rgba(0,0,0,0.4)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});

// ─── LANGUAGE TOGGLE ───
const langBtn = document.querySelector('.lang-toggle');
if (langBtn) {
  let currentLang = localStorage.getItem('site_lang') || 'pt';
  
  const updateLanguage = (lang) => {
    if (!window.i18n) return; // Wait for translations.js to load
    const dict = i18n[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        // Handle elements that might have icons inside, e.g. CTA buttons
        if (el.tagName === 'A' || el.tagName === 'BUTTON') {
          // Keep SVGs if any
          const svg = el.querySelector('svg');
          if (svg) {
            el.innerHTML = '';
            el.appendChild(svg);
            el.appendChild(document.createTextNode(' ' + dict[key]));
          } else {
            el.innerText = dict[key];
          }
        } else {
          el.innerText = dict[key];
        }
      }
    });

    // Update button visual
    if (lang === 'en') {
      langBtn.innerHTML = '<span class="flag">🇺🇸</span> EN <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path></svg>';
    } else {
      langBtn.innerHTML = '<span class="flag">🇧🇷</span> PT <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path></svg>';
    }
    
    // Also update document language for accessibility
    document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';
  };

  langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'pt' ? 'en' : 'pt';
    localStorage.setItem('site_lang', currentLang);
    updateLanguage(currentLang);
  });

  // Initial load
  updateLanguage(currentLang);
}
