import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';
import { readdirSync } from 'fs';
import { resolve } from 'path';

const root = fileURLToPath(new URL('.', import.meta.url));

const input = Object.fromEntries(
  readdirSync(root)
    .filter((file) => file.endsWith('.html'))
    .map((file) => [file.replace('.html', ''), resolve(root, file)])
);

export default defineConfig({
  build: {
    rollupOptions: { input },
  },
});