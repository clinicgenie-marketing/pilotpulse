# AGENTS.md

## Cursor Cloud specific instructions

PilotPulse is a single Next.js 14 (App Router) marketing/landing site — TypeScript + Tailwind CSS, no backend, database, or automated tests. Standard scripts live in `package.json` (`dev`, `build`, `start`, `lint`); run instructions are in `README.md`.

- Dependencies are installed automatically by the startup update script (`npm ci`), so you do not need to reinstall them.
- Start the dev server with `npm run dev` (serves http://localhost:3000). Run it in a tmux session so it persists.
- The contact form (`src/components/sections/ContactForm.tsx`) is intentionally stubbed: it validates and shows a client-side confirmation but does not POST anywhere. This is expected, not a bug.
- There is no test framework configured; "testing" means lint, build, and manual browser checks.
