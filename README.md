# Eagle Lux Multi Services — Landing Page

A premium, single-page marketing website for **Eagle Lux Multi Services**, a professional notary office at 18 SW Front St Ste 100, Milford, Delaware. The site introduces the business and its owner, Jesula Jean, explains the five notary services offered, and turns visitors into appointment requests through click-to-call links, email links and a validated contact form.

## Sections

Header with sticky navigation and mobile menu · Hero · Trust & benefits · About Us · Our Notary Services (5 cards) · Why Choose Us · How It Works · Service Area with Google Map and Business Hours · FAQs (accordion) · Contact with appointment request form · Footer.

## Tech stack

- **React 19** + **Vite** (static single-page build)
- **Tailwind CSS v4**, configured with the logo palette in `src/index.css`
- **Lucide** icons
- **Netlify Forms** for appointment requests (AJAX submission, honeypot spam protection)
- **Netlify Image CDN** (`/.netlify/images`) serves responsive WebP versions of the photography and logo
- Fonts: Jost (display) and Manrope (body) from Google Fonts

## Running locally

```bash
npm install
netlify dev        # recommended: emulates Netlify Forms and the Image CDN
# or
npm run dev        # plain Vite (images routed through /.netlify/images won't load)
```

Production build: `npm run build` (output in `dist/`). Netlify runs this automatically on deploy using `netlify.toml`.

## Form submissions

Appointment requests appear in the Netlify dashboard under **Forms → appointment**. Add an email notification there (Forms → Submission notifications) to receive new requests by email.

## Editing content

Business details, hours, services and FAQs all live in `src/data.js`. Update that file to change phone numbers, hours or copy across the whole site.
