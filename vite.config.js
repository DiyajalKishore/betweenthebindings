import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        art: resolve(__dirname, 'art.html'),
        buriedbetweenthebindings: resolve(__dirname, 'buriedbetweenbindings.html'),
        creatingcommunity: resolve(__dirname, 'creatingcommunity.html'),
        griefgathersandgrows: resolve(__dirname, 'griefgathersandgrows.html'),
        melvilleartmile: resolve(__dirname, 'melvilleartmile.html'),
        thunee: resolve(__dirname, 'thunee.html'),
        writing: resolve(__dirname, 'writing.html'),
      }
    }
  }
});
