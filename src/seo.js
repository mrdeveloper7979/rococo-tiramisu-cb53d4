// Build-time SEO helpers (used by vite.config.js). Generated from content.js so
// the structured data always matches what visitors see on the page.
import { BUSINESS, FAQS, SEO, SERVICES } from './content.js'

export function buildJsonLd(siteUrl) {
  const url = `${siteUrl}/`
  const bizId = `${url}#business`

  const business = {
    '@type': ['Notary', 'ProfessionalService'],
    '@id': bizId,
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    url,
    logo: `${siteUrl}/img/logo.png`,
    image: `${siteUrl}${SEO.ogImage}`,
    description:
      'Notary office in Milford, Delaware offering apostille or authentication assistance, notarial copy certification, jurats, notarial acknowledgements and signature witnessing.',
    telephone: BUSINESS.phoneE164,
    email: BUSINESS.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.street,
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.region,
      postalCode: BUSINESS.postalCode,
      addressCountry: 'US',
    },
    areaServed: [
      { '@type': 'City', name: 'Milford, Delaware' },
      { '@type': 'AdministrativeArea', name: 'Kent County, Delaware' },
      { '@type': 'AdministrativeArea', name: 'Sussex County, Delaware' },
    ],
    employee: { '@type': 'Person', name: BUSINESS.owner, jobTitle: 'Owner' },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '10:00',
        closes: '18:00',
      },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'appointments',
      telephone: BUSINESS.phoneE164,
      email: BUSINESS.email,
      areaServed: 'US',
      availableLanguage: 'English',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Notary Services',
      itemListElement: SERVICES.map((s) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          '@id': `${url}#service-${s.key}`,
          name: s.title,
          serviceType: s.title,
          description: s.description,
          provider: { '@id': bizId },
          areaServed: { '@type': 'City', name: 'Milford, Delaware' },
        },
      })),
    },
  }

  return {
    '@context': 'https://schema.org',
    '@graph': [
      business,
      {
        '@type': 'WebSite',
        '@id': `${url}#website`,
        url,
        name: BUSINESS.name,
        publisher: { '@id': bizId },
        inLanguage: 'en-US',
      },
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: SEO.title,
        description: SEO.description,
        isPartOf: { '@id': `${url}#website` },
        about: { '@id': bizId },
        inLanguage: 'en-US',
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faqs`,
        mainEntity: FAQS.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  }
}

export const buildSitemap = (siteUrl) => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
    <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`

export const buildRobots = (siteUrl) => `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`
