import { defineCollection, z } from 'astro:content';

const personality = defineCollection({
  type: 'content',
  schema: z.object({ icon: z.string(), text: z.string() }),
});

export { personality };
