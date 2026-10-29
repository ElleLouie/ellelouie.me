# ellelouie.me

Elle Louie's personal portfolio site, built with React, React Router and Vite.

## Running locally

```bash
npm install
npm run dev
```

- `npm run build` builds the site into `dist/` (including `CNAME` and `_redirects` from `public/`)
- `npm run preview` serves the production build
- `npm run lint` checks the code with ESLint

## Adding a project

Projects live in `src/data/projects.js`. Put the images in `src/img/<slug>/`, import them in that file, and add an entry. The comment at the top of the file shows the fields. Each project gets a card on `/portfolio` and its own page at `/portfolio/<slug>`.
