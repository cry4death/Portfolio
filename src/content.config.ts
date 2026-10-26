import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['Веб-сайты', 'Мобильные приложения']),
    tags: z.array(z.string()),
    visual: z.enum(['lighthouse', 'marea', 'mobile']),
    status: z.enum(['Опубликован', 'В разработке', 'Рабочий прототип']),
    order: z.number(),
    demo: z.boolean().default(false),
    liveUrl: z.url().optional(),
    sourceUrl: z.url().optional(),
    summary: z.object({
      role: z.string(), task: z.string(), contributions: z.array(z.string()), result: z.string(),
      period: z.string().optional(), team: z.string().optional(),
    }).optional(),
    galleryTitle: z.string().default('Экраны проекта'),
    gallery: z.array(z.object({
      src: z.string(),
      alt: z.string(),
      caption: z.string(),
      width: z.number(),
      height: z.number(),
      kind: z.enum(['desktop', 'phone', 'mockup', 'design']),
    })).default([]),
  }),
});

const notes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tag: z.string(),
    minutes: z.number(),
    demo: z.boolean().default(true),
  }),
});

export const collections = { projects, notes };
