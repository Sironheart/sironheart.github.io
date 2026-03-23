import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    image: z.string().optional(),
    description: z.string(),
    publishedAt: z.date(),
  }),
});

export const collections = {
  blog,
};
