# joshualoren.github.io

Personal engineering site — writing, projects, and notes. Built with [Astro](https://astro.build), deployed to GitHub Pages on every push to `main`.

```bash
npm install
npm run dev      # http://localhost:4321 (drafts visible)
npm run build    # static output in dist/
```

## Adding things

- **A post:** copy `src/content/writing/_template.md` to `src/content/writing/my-post.md`, edit the frontmatter, write. `draft: true` keeps it off the live site.
- **A project:** add a file to `src/content/projects/` (`status`: live | building | archived; `order` sorts the list).
- **About page:** `src/pages/about.md`. Site name, tagline, and social links: `src/site.ts`.
