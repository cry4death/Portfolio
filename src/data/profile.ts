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
  github: null,
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

export const skills: { label: string; description: string; items: string[] }[] = [
  { label: 'Backend', description: 'Каталоги, админ-панели, формы и интеграция с медицинской системой в Lighthouse.', items: ['PHP', 'Laravel', 'Filament', 'REST API'] },
  { label: 'Frontend', description: 'Адаптивные интерфейсы Lighthouse и MARÉA. Расширения редактора контента на Tiptap.', items: ['HTML', 'CSS', 'JavaScript', 'Blade', 'Livewire', 'Tailwind CSS', 'Tiptap'] },
  { label: 'Базы данных', description: 'Модели и связи для врачей, услуг и контента. Запросы, миграции и импорт данных.', items: ['SQL', 'MySQL', 'Eloquent ORM', 'Миграции'] },
  { label: 'WordPress и магазин', description: 'Собственная тема и плагин MARÉA, поля услуг и специалистов. Магазин на WooCommerce — в разработке.', items: ['WordPress', 'WooCommerce', 'ACF', 'PHP'] },
  { label: 'Инфраструктура', description: 'Сборка фронтенда, сценарий развёртывания и автоматические проверки проекта.', items: ['Git', 'Vite', 'GitHub Actions', 'Shell'] },
  { label: 'Тестирование', description: 'Проверки логики, HTTP-сценариев и браузерных взаимодействий в Lighthouse.', items: ['Pest', 'Playwright', 'PHPStan', 'Larastan', 'Pint'] },
  { label: 'Мобильная разработка', description: 'Рабочий прототип Lighthouse: Riverpod, go_router, Dio и Laravel API.', items: ['Flutter', 'Dart'] },
  { label: 'Это портфолио', description: 'Astro и TypeScript для страниц и контента. Описания проектов в Markdown, конфигурация публикации для Cloudflare Workers.', items: ['Astro', 'TypeScript', 'Markdown', 'Cloudflare Workers'] },
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
