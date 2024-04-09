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

const portfolio = defineCollection({
  type: 'content',
  schema: z.object({
    // FIXME: reuse these attributes for all written content. Use composition over inheritence?
    title: z.string(),
    summary: z.string(),
    screenshot: z.string(),
    'screenshot-background': z.string(),
    platforms: z.string().array().nonempty(),
  }),
});

// TODO: is this the best approach for making the intro easily editable?
const intro = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    highlight: z.string(),
  }),
});

export { personality, writing, portfolio, intro };
