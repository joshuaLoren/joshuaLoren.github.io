# joshualoren.github.io

Personal site: work history, projects, and technical notes. Astro, deployed to GitHub Pages on push to `main`.

```bash
npm install
npm run dev      # http://localhost:4321 (drafts visible)
npm run build    # static output in dist/
```

- **Work history:** `WORK` in `src/site.ts`. Resume PDF: `public/resume.pdf`.
- **Note:** copy `src/content/notes/_template.md`. `draft: true` keeps it off the live site.
- **Project:** add `src/content/projects/<slug>.md`. Set `url` for a live demo and `repo` for source. A markdown body gives it a write-up page at `/projects/<slug>/`; without one, it links straight out.
