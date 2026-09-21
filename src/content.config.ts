import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// One Markdown file per project. The frontmatter drives the card on the home
// page; the body becomes the /projects/<slug> detail page. `link` is optional and
// only renders the "View live project" button when a project is actually public.
const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    name: z.string(),
    // Long form, shown on the detail page.
    description: z.string(),
    // One line, shown on the home page card.
    tagline: z.string(),
    // Circular mark on the card. Falls back to `monogram` when the project
    // has no real logo of its own.
    logo: z.string().optional(),
    monogram: z.string().optional(),
    link: z.string().url().optional(),
    image: z.string().optional(),
    images: z.array(z.string()).default([]),
    skills: z.array(z.string()).default([]),
    // Controls card order on the home page, lowest first.
    order: z.number(),
  }),
});

export const collections = { projects };
