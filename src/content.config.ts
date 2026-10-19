import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const notes = defineCollection({
  loader: glob({ pattern: ['**/*.md', '!**/_*'], base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    project: z.string().optional(), // a projects/ slug
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: ['**/*.md', '!**/_*'], base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    status: z.enum(['Live', 'In progress', 'Archived']),
    stack: z.array(z.string()).default([]),
    url: z.string().optional(), // live demo / POC
    repo: z.string().optional(),
    pkg: z.string().optional(), // published package
    order: z.number().default(100),
  }),
});

export const collections = { notes, projects };
