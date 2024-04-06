import { defineCollection, z } from 'astro:content';

const personality = defineCollection({
  type: 'content',
  schema: z.object({ icon: z.string(), text: z.string() }),
});

const writing = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    previewImage: z.string(),
  }),
});

export { personality, writing };
