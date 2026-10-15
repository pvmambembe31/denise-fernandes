document.documentElement.classList.add('js');

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Abrir menu' : 'Fechar menu');
  navigation?.classList.toggle('is-open', !isOpen);
});

navigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'Abrir menu');
    navigation.classList.remove('is-open');
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && navigation?.classList.contains('is-open')) {
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'Abrir menu');
    navigation.classList.remove('is-open');
    menuButton?.focus();
  }
});

document.querySelector('#year').textContent = new Date().getFullYear();

document.querySelector('.site-footer a[href="#topo"]')?.addEventListener('click', (event) => {
  event.preventDefault();
  const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
  window.scrollTo({ top: 0, behavior });
});

let progressFrame = 0;
const updateProgress = () => {
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
  document.querySelector('.site-header')?.style.setProperty('--scroll-progress', String(Math.min(1, Math.max(0, progress))));
  progressFrame = 0;
};
window.addEventListener('scroll', () => {
  if (!progressFrame) progressFrame = window.requestAnimationFrame(updateProgress);
}, { passive: true });
updateProgress();

if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }
  }, { threshold: 0.08, rootMargin: '0px 0px 30px 0px' });
  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
} else {
  document.querySelectorAll('.reveal').forEach((element) => element.classList.add('is-visible'));
}
