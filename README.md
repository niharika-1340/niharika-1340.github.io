# Portfolio site — starter

A 4-page static site: `index.html` (home), `about.html`, `projects.html`,
and `404.html`, sharing `assets/style.css` and `assets/cursor.js`.

## What's already decided
- Dark dusk-violet mode on Home and Projects; lighter lavender-white mode
  on About. One purple accent shared across both, plus terracotta as a
  secondary accent.
- Custom cursor: a purple ring that follows the pointer and morphs into
  a pill over links (respects `prefers-reduced-motion` and touch devices).
- No dedicated contact/blog/now page — those links live in the footer.

## What still needs your input
Search each HTML file for `[bracketed placeholder text]` — those are the
spots that need your actual project write-ups, personal story, resume
file, and real social links. Also replace `resume.pdf` and the
`mailto:`/GitHub/LinkedIn placeholders in the footer of every page.

## Deploying to GitHub Pages
1. Create a new repo on GitHub — if you want it at `<username>.github.io`,
   name the repo exactly that; otherwise any name works and the site
   will live at `<username>.github.io/<repo-name>`.
2. Put these files at the repo root (or push them as-is if this folder
   *is* your repo).
3. Add your real `resume.pdf` next to `index.html` if you want the
   footer link to work.
4. Commit and push:
   ```
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/<username>/<repo-name>.git
   git push -u origin main
   ```
5. On GitHub: Settings → Pages → Source → deploy from the `main` branch,
   root folder. GitHub gives you a live URL in a minute or two.
6. The `404.html` file is picked up automatically by GitHub Pages for
   any broken link on the site.

## Local preview
Just open `index.html` in a browser, or run a tiny local server so
relative paths behave exactly like they will on GitHub Pages:
```
python3 -m http.server 8000
```
then visit `http://localhost:8000`.
