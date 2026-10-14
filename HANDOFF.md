# Handoff: portfolio content pass (14 Oct 2026)

This file is for Fred and for any Claude Code / Codex session that picks up the project.

## What changed

All copy lives in `src/content/*`. Pages only render it.

- **About** (`/about`): a four-paragraph first-person story, plus the template's "What I do" (Services) and "My tech stack" sections. The stack is the template's original list with Supabase, Supabase Postgres, Vercel and Resend added. Icons are in `public/stack/`. Education, research, experience and awards come from the content files.
- **VitaLink** (`/vitalink`): role, problem, what it is, 7 modules, who it serves, stack, current stage, 2 featured posts from vitalink.africa/blog, and buttons for the website, contact and VitaCard waitlist. Blog covers load from cdn.sanity.io, which is allowed in `next.config.mjs` (`images.remotePatterns`).
- **Work** (`/work`): the hub page. A sticky sub-nav jumps to four sections: Development (the existing project list with hover previews and filters), Research & fieldwork, Design and Photography. Design and Photography show a "coming soon" panel until `designs.ts` / `photography.ts` have real items. `/design` and `/photography` still exist as full pages.
- **Contact** (`/contact`): the template form is unchanged. Below it are five "how I can help" cards, each pre-selecting a topic through `?topic=`, plus location and social links.
- **Projects**: real write-ups for TLMN DOHRMP and the MOSYF Convention Portal. Short write-ups for the six older projects come from the old site.
- **Timeline**: `formatRange` now hides unconfirmed dates instead of printing "TODO". Research items with no status hide the status.

## Rules for anyone editing copy

- No em dashes. Plain first person, with no "visionary", "groundbreaking" or "passionate".
- Never describe VitaMind AI as diagnosing. Use "clinical decision support", "flags", "assists clinicians".
- Do not add user, hospital, revenue or funding numbers for VitaLink until Fred confirms they are real and public.
- DOHRMP screenshots must use a demo workspace with made-up records. Never use real staff, patient or beneficiary data.

## Still to confirm (search the code for `TODO(fred)`)

1. APTECH dates: the resumes say both 2020 to 2022 and 2021 to 2023 (`timeline.ts`).
2. Start year for freelance work, and the end year for GlintSell (`timeline.ts`).
3. Exact submitted titles of the APHTReS and NFPC abstracts, and the NFPC status (`research.ts`).
4. DOHRMP full stack: database, auth, UI library (`projects.ts`).
5. Screenshots for DOHRMP and MOSYF. Both use `/work/placeholder.webp` for now.
6. Years for the older projects (`projects.ts`).
7. The kinds of photography shoots offered (`home.ts`, `photography.ts`).
8. `public/fredrick-akojuru-cv.pdf` is actually a JPEG renamed to .pdf. It is the old AlienDev CV and shows a street address. Replace it with a current, real PDF without the home address.

## Running locally

`pnpm install`, then `pnpm dev`. `pnpm lint` and `pnpm build` pass as of this handoff.
