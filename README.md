# Dev Khatri — Portfolio

React + Vite. Dark, futuristic single-page portfolio with a particle
network background, a terminal boot-sequence hero, and a scroll-drawn
experience timeline.

## Local development

```
npm install
npm run dev
```

## Editing content

All page content lives in `src/components/`, one file per section
(`Hero.jsx`, `About.jsx`, `Experience.jsx`, `Projects.jsx`, `Skills.jsx`,
`Visualizations.jsx`, `Education.jsx`, `Contact.jsx`). Text and data
arrays sit at the top of each file — edit those directly, no need to
touch the JSX layout.

Images live in `public/images/`.

## Deploying to GitHub Pages

1. Push this project to a GitHub repo.
2. Open `vite.config.js` and set `base`:
   - Repo named `<your-username>.github.io` → leave `base: '/'`.
   - Any other repo name, e.g. `portfolio` → set `base: '/portfolio/'`.
3. Run:
   ```
   npm run deploy
   ```
   This builds the site and pushes `dist/` to a `gh-pages` branch
   (via the `gh-pages` package, already installed).
4. In your repo on GitHub: **Settings → Pages → Source**, pick the
   `gh-pages` branch, `/ (root)` folder, and save.
5. Your site will be live at `https://<your-username>.github.io/` or
   `https://<your-username>.github.io/<repo-name>/`, depending on step 2.

Every time you update content, just run `npm run deploy` again.
