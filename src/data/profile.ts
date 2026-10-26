interface Profile {
  name: string;
  role: string;
  email: string | null;
  github: string | null;
  telegram: string | null;
  available: boolean;
  about: string;
  employment: {
    company: string;
    position: string;
    responsibilities: string;
    since: string | null;
  };
}

// Replace these values with your own details. Unset contacts are not rendered as links.
export const profile: Profile = {
  name: 'Максим',
  role: 'Веб- и мобильный разработчик',
  email: 'maxmaxretpro@gmail.com',
  github: 'https://github.com/cry4death',
  telegram: 'https://t.me/youaremy6996',
  available: true,
  about: 'Разрабатываю сайты на Laravel и WordPress. В Lighthouse сделал каталог услуг и врачей, панель управления и интеграцию с медицинской системой. Сейчас работаю над сайтом MARÉA и приложением для Lighthouse на Flutter.',
  employment: {
    company: 'ООО «ЗАРГА Медика»',
    position: 'Инженер-программист',
    responsibilities: 'Единственный разработчик в компании. Разрабатываю и поддерживаю сайты и приложения: от интерфейсов и серверной части до запуска.',
    since: '15 июня 2026',
  },
};

export interface SkillGroup {
  label: string;
  group: 'core' | 'practice' | 'additional';
  description: string;
  items: string[];
  evidence?: { href: string; title: string };
}

export const skills: SkillGroup[] = [
  { label: 'Backend', group: 'core', description: 'Каталог клиники, административная панель, команды импорта и валидация данных.', items: ['PHP', 'Laravel', 'Filament', 'Composer', 'Laravel Artisan'] },
  { label: 'Frontend', group: 'core', description: 'Адаптивные интерфейсы Lighthouse и MARÉA, расширения редактора Tiptap.', items: ['HTML', 'CSS', 'JavaScript', 'Blade', 'Livewire', 'Tailwind CSS', 'Tiptap'] },
  { label: 'Базы данных', group: 'core', description: 'Проектирование таблиц, связи моделей, миграции и импорт каталога.', items: ['SQL', 'MySQL', 'Eloquent ORM', 'Миграции'] },
  { label: 'Мобильная разработка', group: 'core', description: 'Приложение Lighthouse на Flutter: состояние экранов, маршруты, HTTP-запросы и хранение токенов.', items: ['Flutter', 'Dart', 'Riverpod', 'Dio', 'go_router', 'flutter_secure_storage'] },
  {
    label: 'API и интеграции', group: 'practice',
    description: 'Подключение внешних сервисов, разбор JSON, токены, таймауты и обработка недоступности API.',
    items: ['REST API', 'HTTP / HTTPS', 'JSON', 'Dio', 'Laravel HTTP Client', 'Token Authentication'],
    evidence: { href: '/projects/lighthouse/#mis-integration', title: 'Lighthouse: сбой медицинской системы' },
  },
  {
    label: 'DevOps и развёртывание', group: 'practice',
    description: 'Сборка через npm и Composer, сценарий обновления Laravel и проверки в GitHub Actions. Портфолио опубликовано на GitHub Pages.',
    items: ['Git', 'GitHub Actions', 'CI/CD', 'Bash', 'GitHub Pages', 'Vite', 'npm', 'Node.js', 'Composer'],
    evidence: { href: '/notes/portfolio/#deployment', title: 'Портфолио: публикация из GitHub' },
  },
  {
    label: 'Качество и безопасность', group: 'practice',
    description: 'Unit, Feature и E2E-тесты, подмена внешних HTTP-запросов, статический анализ, валидация форм и политики доступа.',
    items: ['Pest', 'Playwright', 'PHPStan', 'Larastan', 'Pint', 'Mocking', 'Input Validation', 'Authorization'],
    evidence: { href: '/projects/lighthouse-mobile/#session-recovery', title: 'Flutter: сессия при обрыве сети' },
  },
  {
    label: 'SEO и производительность', group: 'practice',
    description: 'Метаинформация, структурированные данные, sitemap, robots.txt и canonical. Кэширование ответов МИС и адаптивная вёрстка.',
    items: ['Technical SEO', 'Schema.org', 'Sitemap XML', 'robots.txt', 'Canonical URLs', 'IndexNow'],
    evidence: { href: '/projects/lighthouse/#seo', title: 'Lighthouse: индексирование и метаданные' },
  },
  { label: 'WordPress и магазин', group: 'additional', description: 'Gutenberg и блочная тема, собственный плагин, типы записей и таксономии. Магазин WooCommerce — в разработке.', items: ['WordPress', 'Gutenberg', 'ACF', 'PHP', 'WooCommerce'], evidence: { href: '/projects/marea/#booking-fallback', title: 'MARÉA: онлайн-запись и резервный сценарий' } },
  { label: 'Это портфолио', group: 'additional', description: 'Astro, TypeScript и Markdown; подключены MDX и Astro Sitemap. GitHub Pages — текущая публикация. Sass установлен; оформление написано на CSS. Конфигурация Cloudflare Workers через Wrangler подготовлена для альтернативного развёртывания.', items: ['Astro', 'TypeScript', 'Markdown', 'MDX', 'Astro Sitemap', 'Sass', 'GitHub Pages', 'Wrangler', 'Cloudflare Workers'], evidence: { href: '/notes/portfolio/', title: 'Как устроено портфолио' } },
];

// Technologies Maxim confirmed using during his university studies.
export const studySkills = [
  {
    label: '.NET и Windows', icon: 'dotnet',
    description: 'Приложения на C# с WPF и Windows Forms. Веб-приложения на ASP.NET Core.',
    items: ['C#', '.NET', 'WPF', 'Windows Forms', 'ASP.NET Core'],
  },
  {
    label: 'Java, Android и C++', icon: 'java',
    description: 'Учебные проекты на Java и Spring, работа в Android Studio. Программирование на C++.',
    items: ['Java', 'Spring', 'Android Studio', 'C++'],
  },
  {
    label: 'Дизайн и графика', icon: 'figma',
    description: 'Макеты в Figma, растровая и векторная графика, анимация в After Effects.',
    items: ['Figma', 'Photoshop', 'Illustrator', 'After Effects'],
  },
];
