# joshualoren.github.io

Personal site: work history, projects, and technical notes. Astro, deployed to GitHub Pages on push to `main`.

```bash
npm install
npm run dev      # http://localhost:4321 (drafts visible)
npm run build    # static output in dist/
```

- **Work history:** `WORK` in `src/site.ts`. Resume PDF: `public/resume.pdf`.
- **Note:** copy `src/content/notes/_template.md`. `draft: true` keeps it off the live site.
- **Project:** `src/content/projects/<slug>.md` with a markdown body gets a write-up page. Notes link to it via `project: <slug>`.
