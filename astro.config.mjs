import { defineConfig } from 'astro/config';
import partytown from "@astrojs/partytown";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://kuroshitec.com/',
  integrations: [sitemap(), partytown()],
  /*FOR REDIRECTS
  redirects: {
    'OLD_PATH': 'NEW_PATH'
  }*/
});
