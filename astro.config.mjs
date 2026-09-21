// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // Served from a GitHub Pages project subpath, so assets need the base prefix.
  site: "https://mattgwin.github.io",
  base: "/mattg-win-devportfolio",
  vite: {
    plugins: [tailwindcss()],
  },
});
