// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: "https://beisenherz.dev",

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap()],

  markdown: {
    shikiConfig: {
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
    },
  },

  adapter: vercel({
    maxDuration: 20,
  }),
});
