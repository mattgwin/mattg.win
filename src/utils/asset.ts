// Prefixes a public/ path with Astro's base so it also resolves when the site
// is served from a GitHub Pages project subpath rather than a domain root.
export function asset(path: string): string {
  return `${import.meta.env.BASE_URL.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
}
