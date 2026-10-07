# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start dev server at http://localhost:4321
npm run build     # static build → dist/
npm run preview   # serve the dist/ output locally
```

No linting or test scripts are configured yet.

## Architecture

**Astro 4 static site** — output is plain HTML/CSS with minimal JS. No JS framework (React, Vue, etc.) is used.

- `src/pages/index.astro` — single page, imports all section components in order
- `src/layouts/Layout.astro` — HTML shell with all SEO meta tags (OG, Twitter card, canonical). Accepts `title`, `description`, `canonical`, `ogImage` props with sensible defaults.
- `src/components/` — one `.astro` file per page section (Hero, Navbar, Services, etc.)
- `src/styles/global.css` — all design tokens as CSS custom properties on `:root` (colors, spacing, radius). No utility framework.
- `src/utils/whatsapp.ts` — **single source of truth for all WhatsApp links**. Every CTA that opens WhatsApp must call `whatsappLink()` from here. The number is read from `PUBLIC_WHATSAPP_NUMBER` env var; never hardcode it elsewhere.
- `src/pages/sitemap.xml.ts` — generates sitemap at build time.

## Environment variables

| Variable | Purpose |
|---|---|
| `PUBLIC_WHATSAPP_NUMBER` | WhatsApp number in format `573XXXXXXXXX` (Colombia). Defaults to a placeholder if unset. |
| `PUBLIC_CONTACT_EMAIL` | Contact email shown in the footer. If unset, the email link is hidden entirely. |

Copy `.env.example` → `.env` and set the real number before developing locally.

## Deployment

Target: **Cloudflare Pages** at `tics.dpersa.com`.

- Build command: `npm run build`
- Output directory: `dist`
- Set `PUBLIC_WHATSAPP_NUMBER` as an environment variable in Cloudflare Pages dashboard.

## Pending configuration

Three things are intentionally left as placeholders and must be filled before going live:

1. **WhatsApp number** — `PUBLIC_WHATSAPP_NUMBER` env var
2. **Contact email** — `PUBLIC_CONTACT_EMAIL` env var (footer hides the link if unset)
3. **Formspree form ID** — `YOUR_FORM_ID` in `src/components/Contact.astro` (the form action URL)
