import { z, defineCollection } from 'astro:content';

const projectCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    id: z.number(),
    type: z.string(),
    year: z.number(),
    stack: z.array(z.string()).optional(),
    url: z.string().optional(),
    role: z.string(),
  }),
});

export const collections = {
  'project': projectCollection,
};