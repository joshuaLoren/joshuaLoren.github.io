---
title: astro glob() loader doesn't skip _ files
date: 2026-10-19
system: til
lines:
  - src/pages/ ignores _files, content collections don't
  - "pattern: ['**/*.md', '!**/_*']"
---

```ts
loader: glob({ pattern: ['**/*.md', '!**/_*'], base: './src/content/log' }),
```
