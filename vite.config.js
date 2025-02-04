import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import htmlMinifier from 'vite-plugin-html-minifier';

export default defineConfig({
  base: '/My_Project_Unix/',
  plugins: [react(),
    htmlMinifier({
      minify: true,
    }),
  ],
})
