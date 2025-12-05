import { defineCollection, z } from 'astro:content';

const personality = defineCollection({
  type: 'data',
  schema: z.object({
    assets: z.string().array(),
    traits: z.string().array(),
  }),
});

const preview = z.object({
  enable: z.boolean(),
  grid: z.object({
    rows: z.number(),
    columns: z.number(),
  }),
});

const content = (image) => ({
  title: z.string(),
  summary: z.string(),
  home: preview,
  preview,
  order: z.number().default(9999),
  background: image().refine((img) => img.width >= 1080, {
    message: 'Cover image must be at least 1080 pixels wide!',
  }),
  icon: image().optional(),
});

const writingCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      ...content(image),
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
      ...content(image),

      // Existing screenshot field
      screenshot: z
        .object({
          image: image(),
          altText: z.string(),
        })
        .optional(),

      // Existing platforms field
      platforms: z.string().array(),

      // ⭐ NEW FIELD: disciplines for UX / Visual / Photo / Sound separation
      disciplines: z.string().array().optional(),
    }),
});

// Intro collection (home page text)
const intro = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    greeting: z.string(),
  }),
});

// Footer collection
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

export const collections = {
  personality,
  writing: writingCollection,
  portfolio,
  intro,
  footer,
};
