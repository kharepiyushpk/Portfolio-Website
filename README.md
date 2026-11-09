# Piyush Khare — Portfolio

Personal portfolio built with **Next.js 16 (App Router)**, React 19, TypeScript, Tailwind CSS v4 and Motion.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (all pages are static)
```

## Where to edit

| What | File |
|---|---|
| Name, intro, about, contact, socials | `src/data/profile.ts` |
| Experience timeline and skills | `src/data/profile.ts` (`experience`, `skillGroups`) |
| Projects (each gets its own page at `/projects/<slug>`) | `src/data/projects.ts` |
| Colours / theme | `src/app/globals.css` (`:root` and `.dark`) |

To add a project, add an object to `projects` in `src/data/projects.ts`. Set `featured: true` to show it in
"Selected work" on the home page. `cover` picks the illustration used on the card.

Deploys to Vercel with no extra settings.
