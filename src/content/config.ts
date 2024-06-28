import { defineCollection, z } from 'astro:content';

const personality = defineCollection({
  type: 'data',
  schema: z.object({ assets: z.string().array(), traits: z.string().array() }),
});

const preview = z.object({
  enable: z.boolean(),
  grid: z.object({ rows: z.number(), columns: z.number() }),
});

const content = {
  title: z.string(),
  summary: z.string(),
  home: preview,
  preview,
};

const writingCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      ...content,
      background: image().refine((img) => img.width >= 1080, {
        message: 'Cover image must be at least 1080 pixels wide!',
      }),
      icon: image().optional(),
    }),
});

const portfolio = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      ...content,
      background: image().refine((img) => img.width >= 1080, {
        message: 'Cover image must be at least 1080 pixels wide!',
      }),
      screenshot: z.object({ image: image(), altText: z.string() }),
      platforms: z.string().array(),
    }),
});

// TODO: is this the best approach for making the intro easily editable?
const intro = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    greeting: z.string(),
  }),
});

const footer = defineCollection({
  type: 'data',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      email: z.string(),
      links: z
        .object({
          title: z.string(),
          url: z.string(),
          image: image().optional(),
        })
        .array(),
    }),
});

export const collections = { personality, writing: writingCollection, portfolio, intro, footer };
