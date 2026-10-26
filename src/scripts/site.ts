import { withBase } from '../utils/paths';

const themeToggle = document.querySelector<HTMLButtonElement>('.theme-toggle');
const themeMedia = matchMedia('(prefers-color-scheme: dark)');
let explicitTheme = false;
try { explicitTheme = ['dark', 'light'].includes(localStorage.getItem('portfolio-theme') ?? ''); } catch {}
function updateTheme(dark: boolean) {
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  themeToggle?.setAttribute('aria-label', dark ? 'Включить светлую тему' : 'Включить тёмную тему');
  themeToggle?.setAttribute('aria-pressed', String(dark));
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#131722' : '#f8f9fc');
}
updateTheme(document.documentElement.dataset.theme === 'dark');
themeToggle?.addEventListener('click', () => {
  const dark = document.documentElement.dataset.theme !== 'dark';
  updateTheme(dark);
  explicitTheme = true;
  try { localStorage.setItem('portfolio-theme', dark ? 'dark' : 'light'); } catch {}
});
themeMedia.addEventListener('change', (event) => { if (!explicitTheme) updateTheme(event.matches); });

const menuToggle = document.querySelector<HTMLButtonElement>('.menu-toggle');
function closeMenu() {
  menuToggle?.setAttribute('aria-expanded', 'false');
  menuToggle?.setAttribute('aria-label', 'Открыть меню');
  document.querySelector('.site-header')?.classList.remove('menu-expanded');
}
menuToggle?.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
  document.querySelector('.site-header')?.classList.toggle('menu-expanded', open);
});
document.querySelectorAll('#main-navigation a').forEach((link) => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuToggle?.getAttribute('aria-expanded') === 'true') { closeMenu(); menuToggle.focus(); }
});
matchMedia('(min-width: 761px)').addEventListener('change', closeMenu);

const filters = document.querySelectorAll<HTMLButtonElement>('[data-filter]');
const cards = document.querySelectorAll<HTMLElement>('[data-category]');
filters.forEach((button) => button.addEventListener('click', () => {
  const filter = button.dataset.filter;
  filters.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
  let count = 0;
  cards.forEach((card) => {
    const visible = filter === 'all' || card.dataset.category === filter;
    card.hidden = !visible;
    if (visible) count++;
  });
  const status = document.querySelector('[data-filter-status]');
  if (status) status.textContent = `Показано проектов: ${count}`;
}));

const copyButton = document.querySelector<HTMLButtonElement>('[data-copy-email]');
copyButton?.addEventListener('click', async () => {
  const email = copyButton.dataset.copyEmail;
  if (!email) return;
  const status = document.querySelector('[data-copy-status]');
  try {
    await navigator.clipboard.writeText(email);
    if (status) status.textContent = 'Адрес скопирован';
  } catch { if (status) status.textContent = `Скопируйте адрес: ${email}`; }
});

const sections = document.querySelectorAll<HTMLElement>('section[id]');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      document.querySelectorAll('#main-navigation a').forEach((link) => {
        if (link.getAttribute('href') === withBase(`/#${entry.target.id}`)) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-15% 0px -60% 0px', threshold: 0 });
  sections.forEach((section) => observer.observe(section));
}
