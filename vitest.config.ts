import { getViteConfig } from 'astro/config';
import react from '@vitejs/plugin-react';
export default getViteConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['src/**/*.test.jsx', 'src/**/*.test.js', 'src/**/*.test.tsx'],
    setupFiles: ['./setupTest.js'],
  },
});
