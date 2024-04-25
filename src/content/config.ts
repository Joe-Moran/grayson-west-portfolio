import { defineCollection, z } from 'astro:content';

const personality = defineCollection({
  type: 'content',
  schema: z.object({ assets: z.string().array(), traits: z.string().array() }),
});

const preview = z.object({
  enable: z.boolean(),
  grid: z.object({ rows: z.number(), columns: z.number() }),
});

const content = z.object({
  title: z.string(),
  summary: z.string(),
  featured: z.boolean(),
  preview,
});

const writing = defineCollection({
  type: 'content',
  schema: z.object({
    content,
    previewImage: z.string(),
  }),
});

const portfolio = defineCollection({
  type: 'content',
  schema: z.object({
    content,
    screenshot: z.object({ image: z.string(), altText: z.string() }),
    screenshotBackground: z.string(),
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

// TODO: implement this for more customizable footer content

// const footer = defineCollection({
//   type: 'content',
//   schema: z.object({
//     email: z.string(),
//     links: z.object({}),
//   }),
// });

export { personality, writing, portfolio, intro };
