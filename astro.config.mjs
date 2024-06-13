import { defineConfig } from 'astro/config';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://kuroshitec.com/',
  integrations: [sitemap()],
  /*FOR REDIRECTS
  redirects: {
    'OLD_PATH': 'NEW_PATH'
  }*/
});