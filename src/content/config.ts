import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
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
