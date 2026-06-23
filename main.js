const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');
const navLinks = document.querySelectorAll('.site-nav a');
const filterChips = document.querySelectorAll('.filter-chip');
const teacherCards = document.querySelectorAll('.teacher-card');
const yearNode = document.getElementById('year');
const contactForm = document.querySelector('.contact-card');

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

filterChips.forEach((chip) => {
  chip.addEventListener('click', () => {
    const target = chip.dataset.filter;

    filterChips.forEach((item) => item.classList.remove('is-active'));
    chip.classList.add('is-active');

    teacherCards.forEach((card) => {
      const categories = (card.dataset.category || '').split(' ');
      const matches = target === 'all' || categories.includes(target);
      card.classList.toggle('is-hidden', !matches);
    });
  });
});

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    window.alert('Form arayuzu hazir. Isterseniz bir sonraki adimda WhatsApp, e-posta veya backend entegrasyonu ekleyebilirim.');
  });
}