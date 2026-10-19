import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// One chronological stream: experiments, eval runs, gotchas. `lines` is the
// terse summary shown in the feed; the markdown body is the full entry.
const log = defineCollection({
  loader: glob({ pattern: ['**/*.md', '!**/_*'], base: './src/content/log' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    system: z.string(), // a systems/ slug, or a free tag like "til"
    lines: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const systems = defineCollection({
  loader: glob({ pattern: ['**/*.md', '!**/_*'], base: './src/content/systems' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    status: z.enum(['live', 'building', 'archived']),
    stack: z.array(z.string()).default([]),
    metric: z.string().optional(),
    url: z.string().optional(),
    repo: z.string().optional(),
    order: z.number().default(100),
  }),
});

export const collections = { log, systems };
