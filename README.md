# Portfolio site — starter

A single scrolling page (`index.html`) with anchor navigation — About,
Projects, Experience, Skills, Contact — plus `resume.html` (an in-page
résumé viewer with a download button) and a custom `404.html`.
Shares `assets/style.css` and `assets/interactions.js`. Your résumé PDF
is already included as `resume.pdf` at the root.

## What's already decided
- One long page with a sticky nav; nav links jump to `#about`,
  `#projects`, etc. and the active section highlights as you scroll.
- Palette: a light Ivory background with Indigo and Sea Breeze accents,
  and Pear used for small tag/label text.
- Buttons go bold and lift slightly on hover.
- Small sparkle icons next to section numbers, and a hand-drawn
  scribble underline under a couple of key phrases in the hero.
- Scroll-in animation for each section as you reach it (respects
  `prefers-reduced-motion`).
- Structure takes cues from a reference site you liked
  (stat callouts up top, single-page anchor nav, timeline-style
  experience section) without copying its content or exact design.

## What still needs your input
Search each section in `index.html` for `[bracketed placeholder text]`
— project write-ups, your own About paragraph, specific skills/tools,
and a couple of experience bullet points. Also replace the
`mailto:`/GitHub placeholders in the nav and contact section (LinkedIn
is already filled in). Swap `resume.pdf` for a newer version any time
by replacing that file — `resume.html` and the nav/hero buttons all
point to it automatically.

## Deploying to GitHub Pages
1. Create a new repo on GitHub — if you want it at `<username>.github.io`,
   name the repo exactly that; otherwise any name works and the site
   will live at `<username>.github.io/<repo-name>`.
2. Put these files at the repo root (or push them as-is if this folder
   *is* your repo).
3. Commit and push:
   ```
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/<username>/<repo-name>.git
   git push -u origin main
   ```
4. On GitHub: Settings → Pages → Source → deploy from the `main` branch,
   root folder. GitHub gives you a live URL in a minute or two.
5. `404.html` is picked up automatically by GitHub Pages for any
   broken link on the site.

## Local preview
Just open `index.html` in a browser, or run a tiny local server so
relative paths behave exactly like they will on GitHub Pages:
```
python3 -m http.server 8000
```
then visit `http://localhost:8000`.

