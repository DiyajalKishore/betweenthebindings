import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'about.html',
        art: 'art.html',
        buriedbetweenbindings: 'buriedbetweenbindings.html',
        creatingcommunity: 'creatingcommunity.html',
        griefgathersandgrows: 'griefgathersandgrows.html',
        melvilleartmile: 'melvilleartmile.html',
        thunee: 'thunee.html',
        writing: 'writing.html'
      }
    }
  }
});
