import { defineCollection, z } from 'astro:content';

const articoli = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.string(),
    excerpt: z.string(),
    publishedAt: z.coerce.date(),
    readTime: z.string().default('2 min'),
    featured: z.boolean().default(false),
    issue: z.string().optional(),
    cover: z.string().optional(),
  }),
});

export const collections = { articoli };
