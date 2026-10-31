import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.limpiezasfernet.com',
  output: 'static',
  build: {
    format: 'preserve'
  }
});
