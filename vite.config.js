import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        story: resolve(__dirname, 'story.html'),
        writing: resolve(__dirname, 'writing.html'),
      },
    },
  },
});