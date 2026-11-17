# AGENTS.md

## What this is
Single-page, static marketing site for Eagle Lux Multi Services (notary office, Milford, DE). React + Vite + Tailwind v4, deployed on Netlify. No server code and no database.

## Layout
- `index.html` — SEO metadata, Open Graph, JSON-LD (`Notary` schema), font links, and a **hidden static copy of the `appointment` form** so Netlify Forms detects it at deploy time.
- `src/data.js` — single source of truth for business info, hours, nav items, the five services (with Lucide icons) and FAQ copy.
- `src/components/ui.jsx` — shared helpers: `img()`/`srcSet()` for Netlify Image CDN URLs, `Reveal` (IntersectionObserver scroll-in), `Eyebrow`, `SectionHeading`, `ButtonLink`.
- `src/components/*` — one file per section (Info.jsx holds ServiceArea + Faq; WhyUs.jsx holds WhyUs + HowItWorks).
- `src/App.jsx` — composes sections; owns the selected `service` state so service-card and footer CTAs pre-select the contact form dropdown.
- `public/img/` — logo (trimmed from the client upload) and AI-generated photography (hero, about, detail). `public/favicon.png` is cropped from the logo emblem.

## Conventions
- Brand palette is defined as Tailwind theme tokens in `src/index.css`: `ink` #000, `gold-dark` #7F5B25, `gold` #B5913A, `gold-light` #E5D069, white, plus two derived neutrals (`ivory`, `charcoal`). Do not introduce unrelated colors.
- Accessibility: use `gold-dark` (not `gold`) for text on white backgrounds; `gold`/`gold-light` are for dark backgrounds and decorative accents.
- `.text-foil` / `.bg-foil` give the metallic gold look — use sparingly.
- Always reference images through `img()` (Image CDN) rather than raw `/img/*.png`.

## Netlify Forms
- Form name `appointment`; fields: fullName, phone, email, service, preferredDate, message, plus `bot-field` honeypot and `subject`. If you add/rename a field in `Contact.jsx`, mirror it in the hidden form in `index.html`.
- Submission is AJAX (`fetch('/')`, URL-encoded) with client-side validation in `Contact.jsx`.

## Content rules from the client
Do not add testimonials, reviews, certifications, awards, years of experience, statistics, mobile-service claims, extra locations, or services beyond the five listed. FAQ answers must avoid legal guarantees and note that requirements vary.
