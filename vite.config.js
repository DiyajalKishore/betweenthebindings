import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        about: './about.html',
        story: './story.html',
        writing: './writing.html',
      },
    },
  },
});