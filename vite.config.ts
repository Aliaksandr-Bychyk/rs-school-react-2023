/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import istanbul from 'vite-plugin-istanbul';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    react(),
    istanbul({
      cypress: true,
      requireEnv: false,
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    coverage: {
      all: true,
      provider: 'istanbul',
      exclude: ['src/index.tsx', 'src/entry-client.tsx', 'src/entry-server.tsx', 'server.ts'],
    },
  },
  build: {
    minify: false,
    outDir: './dist',
  },
  server: {
    host: true,
    port: 5173,
  },
});
