import { readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { DEFAULT_SITE_URL, SEO } from './src/content.js'
import { buildJsonLd, buildRobots, buildSitemap } from './src/seo.js'

// Netlify sets URL to the site's primary URL (custom domain once one is added).
const SITE_URL = (process.env.URL || DEFAULT_SITE_URL).replace(/\/$/, '')

const escapeAttr = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

/** Fills SEO placeholders in index.html and emits sitemap.xml + robots.txt. */
function seo() {
  return {
    name: 'eagle-lux-seo',
    transformIndexHtml(html) {
      const jsonLd = JSON.stringify(buildJsonLd(SITE_URL)).replace(/</g, '\\u003c')
      return html
        .replaceAll('%SITE_URL%', SITE_URL)
        .replaceAll('%SEO_TITLE%', escapeAttr(SEO.title))
        .replaceAll('%SEO_DESCRIPTION%', escapeAttr(SEO.description))
        .replaceAll('%OG_IMAGE%', escapeAttr(`${SITE_URL}${SEO.ogImage}`))
        .replaceAll('%OG_IMAGE_ALT%', escapeAttr(SEO.ogImageAlt))
        .replace('<!--json-ld-->', `<script type="application/ld+json">${jsonLd}</script>`)
    },
    generateBundle() {
      this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: buildSitemap(SITE_URL) })
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: buildRobots(SITE_URL) })
    },
  }
}

/**
 * Renders the React app to static HTML after the client build so search engines
 * and AI crawlers that don't execute JavaScript still receive the full content.
 * The client then hydrates the markup (see src/main.jsx).
 */
function prerender() {
  let outDir
  return {
    name: 'eagle-lux-prerender',
    apply: 'build',
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir)
    },
    async closeBundle() {
      const { createServer } = await import('vite')
      const server = await createServer({
        configFile: false,
        plugins: [react()],
        logLevel: 'error',
        appType: 'custom',
        server: { middlewareMode: true, hmr: false, ws: false },
      })
      try {
        const { render } = await server.ssrLoadModule('/src/entry-server.jsx')
        const file = resolve(outDir, 'index.html')
        const html = await readFile(file, 'utf8')
        await writeFile(file, html.replace('<div id="root"></div>', `<div id="root">${render()}</div>`))
      } finally {
        await server.close()
      }
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), seo(), prerender()],
})
