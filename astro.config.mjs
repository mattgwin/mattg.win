// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// Vercel serves from the domain root, GitHub Pages from a project subpath.
// Set PAGES_BASE=/mattg-win-devportfolio when building for Pages.
const base = process.env.PAGES_BASE;

export default defineConfig({
  ...(base ? { site: "https://mattgwin.github.io", base } : {}),
  vite: {
    plugins: [tailwindcss()],
  },
});
