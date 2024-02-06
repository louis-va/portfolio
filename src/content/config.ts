import { z, defineCollection } from 'astro:content';

const projectCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    id: z.number(),
    type: z.string(),
    year: z.number(),
    stack: z.array(z.string()).optional(),
    links: z.array(z.object({
      name: z.string(),
      value: z.string(),
      url: z.string(),
    })).optional(),
    roles: z.array(z.string()),
    images: z.array(z.string()).optional(),
  }),
});

export const collections = {
  'projects': projectCollection,
};