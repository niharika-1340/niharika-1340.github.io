# Portfolio site — starter

A single scrolling page (`index.html`) with anchor navigation — About,
Projects, Experience, Skills, Contact — plus a custom `404.html`.
Shares `assets/style.css`, `assets/cursor.js`, and `assets/interactions.js`.

## What's already decided
- One long page with a sticky nav; nav links jump to `#about`,
  `#projects`, etc. and the active section highlights as you scroll.
- Palette: Indigo (#4B005F) + Lavender Veil (#F6D7FF) from your trend
  reference, purple family only — the green tones were left out.
- Custom cursor: a purple ring that follows the pointer and morphs into
  a rounded-edge square over links.
- Animations: a scrolling skills marquee near the top, and each section
  fades/slides in as you scroll to it (all respect
  `prefers-reduced-motion` and are skipped on touch devices).
- Structure takes cues from a reference site you liked
  (stat callouts up top, single-page anchor nav, timeline-style
  experience section) without copying its content or exact design.

## What still needs your input
Search each section in `index.html` for `[bracketed placeholder text]`
— project write-ups, your own About paragraph, specific skills/tools,
and a couple of experience bullet points. Also replace `resume.pdf`
and the `mailto:`/GitHub/LinkedIn placeholders in the nav and contact
section.

## Deploying to GitHub Pages
1. Create a new repo on GitHub — if you want it at `<username>.github.io`,
   name the repo exactly that; otherwise any name works and the site
   will live at `<username>.github.io/<repo-name>`.
2. Put these files at the repo root (or push them as-is if this folder
   *is* your repo).
3. Add your real `resume.pdf` next to `index.html` if you want the
   résumé links to work.
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
6. `404.html` is picked up automatically by GitHub Pages for any
   broken link on the site.

## Local preview
Just open `index.html` in a browser, or run a tiny local server so
relative paths behave exactly like they will on GitHub Pages:
```
python3 -m http.server 8000
```
then visit `http://localhost:8000`.

