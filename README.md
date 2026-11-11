# joshualoren.github.io

Personal site: work history, projects, and technical notes. Astro. `main` holds source; `./deploy.sh` builds and pushes `dist/` to `gh-pages`, which Pages serves. The 2019 site is preserved on `legacy-2019`.

```bash
npm install
npm run dev      # http://localhost:4321 (drafts visible)
npm run build    # static output in dist/
```

- **Work history:** `WORK` in `src/site.ts`. Resume PDF: `public/resume.pdf`.
- **Note:** copy `src/content/notes/_template.md`. `draft: true` keeps it off the live site.
- **Projects list:** generated. Edit the private master list at `~/development/hub/projects.yaml` (only `public: true` entries reach this site), then run `node ~/development/hub/build.mjs` to rewrite `src/data/projects.json`. A `src/content/projects/<slug>.md` with a body adds a write-up page.
