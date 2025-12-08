import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    mdx(),         // ← add MDX integration here
  ],
  output: 'server',
  vite: {
    ssr: {
      external: ['node:buffer'],
    },
    build: {
      minify: false,
    },
  },
  adapter: cloudflare({ imageService: 'cloudflare' }),
});
