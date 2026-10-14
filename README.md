# Fredrick Akojuru

Personal site of Fredrick Akojuru: public health student at Miva Open University and founder of VitaLink.

Built with Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS v4, GSAP and Lenis.

## Editing content

All copy and data live in typed files under `src/content/`. Components read from there and hold no copy of their own.

| File | What it holds |
|---|---|
| `site.ts` | Name, email, location, socials, navigation |
| `home.ts` | Home page section copy |
| `projects.ts` | Development work |
| `designs.ts` | Design work |
| `photography.ts` | Photo series and photos |
| `research.ts` | Papers, abstracts and conferences |
| `timeline.ts` | Education and experience |
| `awards.ts` | Awards and recognition |
| `vitalink.ts` | VitaLink product modules |

Placeholders are marked `TODO(fred)`. Find them all with:

```bash
git grep -n "TODO(fred)"
```

## Environment variables

All are optional for local development. See `.env.example`.

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for metadata, sitemap and robots |
| `RESEND_API_KEY` | Primary email delivery for the contact form |
| `GMAIL_APP_PASSWORD` | Gmail SMTP fallback for the contact form |
| `CONTACT_EMAIL` | Where contact form messages go (defaults to `site.email`) |
| `NEXT_PUBLIC_GA_ID` | Google Analytics measurement ID |

In development, if no email provider is configured, contact form submissions are written to `messages.txt` in the project root.

## Scripts

```bash
npm run dev
```

```bash
npm run lint
```

```bash
npm run build
```

## License

MIT. See [LICENSE](./LICENSE). This site is built on an MIT-licensed open-source portfolio template.
