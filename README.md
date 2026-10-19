# joshualoren.github.io

Personal engineering site — writing, projects, and notes. Built with [Astro](https://astro.build), deployed to GitHub Pages on every push to `main`.

```bash
npm install
npm run dev      # http://localhost:4321 (drafts visible)
npm run build    # static output in dist/
```

## Adding things

- **A post:** copy `src/content/writing/_template.md` to `src/content/writing/my-post.md`, edit the frontmatter, write. `draft: true` keeps it off the live site.
- **A TIL:** copy `src/content/til/_template.md`. Short is the point.
- **A series entry:** add `series: dispute-engine` to a post's frontmatter. Define new series in `SERIES` in `src/site.ts`.
- **Now page:** `src/pages/now.md`. Update the date when you edit it.
- **A project:** add a file to `src/content/projects/` (`status`: live | building | archived; `order` sorts the list).
- **About page:** `src/pages/about.md`. Site name, tagline, and social links: `src/site.ts`.
