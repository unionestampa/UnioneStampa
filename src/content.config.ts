import { defineCollection, z } from 'astro:content';

const articoli = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.string(),
    kind: z.enum(['relazioni', 'articoli', 'libri']).default('articoli'),
    themes: z.array(z.enum(['politica', 'società', 'giovani', 'editoria', 'scuola', 'lavoro', 'arte'])).default([]),
    excerpt: z.string(),
    publishedAt: z.coerce.date(),
    readTime: z.string().default('2 min'),
    featured: z.boolean().default(false),
    issue: z.string().optional(),
    issueOrder: z.number().optional(),
    pageType: z.enum(['article', 'photography']).default('article'),
    subtitle: z.string().optional(),
    byline: z.string().optional(),
    cover: z.string().optional(),
  }),
});

export const collections = { articoli };
