import { defineCollection, z } from 'astro:content';

const personality = defineCollection({
  type: 'content',
  schema: z.object({ assets: z.string().array(), traits: z.string().array() }),
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
    preview: z.object({
      enable: z.boolean(),
      grid: z.object({ rows: z.number(), columns: z.number() }),
    }),
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

// const footer = defineCollection({
//   type: 'content',
//   schema: z.object({
//     email: z.string(),
//     links: z.object({}),
//   }),
// });

export { personality, writing, portfolio, intro };
