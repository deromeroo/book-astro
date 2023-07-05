import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'server',
  site: 'https://deromeroo.github.io',
<<<<<<< HEAD
  base: '/book-astro',
  adapter: vercel()
});
=======
  base: '/book-astro',

});
>>>>>>> 71a2a83d1b1a3d71b98e4cf05a72ff5bd0649592
