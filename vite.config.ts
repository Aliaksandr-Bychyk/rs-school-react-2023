/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    coverage: {
      all: true,
      provider: 'istanbul',
      exclude: ['src/index.tsx', 'src/entry-client.tsx', 'src/entry-server.tsx'],
    },
  },
  build: {
    minify: false,
    outDir: './dist',
  },
});
