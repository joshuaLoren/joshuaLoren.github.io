#!/usr/bin/env bash
# Build and publish dist/ to the gh-pages branch, which GitHub Pages serves.
set -euo pipefail
cd "$(dirname "$0")"
npm run build
touch dist/.nojekyll
tmp=$(mktemp -d)
cp -R dist/. "$tmp"/
cd "$tmp"
git init -q -b gh-pages
git add -A
git commit -qm "Deploy $(date -u +%Y-%m-%dT%H:%MZ)"
git push -qf https://github.com/joshuaLoren/joshuaLoren.github.io.git gh-pages
rm -rf "$tmp"
echo "Deployed. Live in about a minute at https://joshualoren.github.io/"
