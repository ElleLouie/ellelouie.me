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

## Editing content

The site is one page (projects, about, contact) plus a page per project.

- **Projects:** `src/data/projects.js`. Put images in `src/img/<slug>/`, import them there, and add an entry (the comment at the top shows the fields). A project without a `cover` shows as "coming soon".
- **3D models:** baked `.glb` files go in `public/models/` and are linked from a project's `model` field
- **Food journal pages:** `src/data/journal.js` (paintings go in `src/img/food-journal/`)
- **About facts:** `src/data/about.js`
- **Email and links:** `src/data/socials.js`
- **Project ideas to build next:** `docs/project-ideas.md`
