import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const writing = defineCollection({
  loader: glob({ pattern: ['**/*.{md,mdx}', '!**/_*'], base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    series: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const til = defineCollection({
  loader: glob({ pattern: ['**/*.md', '!**/_*'], base: './src/content/til' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    status: z.enum(['live', 'building', 'archived']),
    stack: z.array(z.string()).default([]),
    url: z.string().optional(),
    repo: z.string().optional(),
    order: z.number().default(100),
  }),
});

export const collections = { writing, til, projects };
