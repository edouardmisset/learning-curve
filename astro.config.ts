import sitemap from '@astrojs/sitemap'
import starlight from '@astrojs/starlight'
import astroRelatedContent from '@philnash/astro-related-content'
import { createFixtureEmbeddingProvider } from '@philnash/astro-related-content/testing'
import robots from 'astro-robots'
import { defineConfig } from 'astro/config'
import { BASE_PATH, BASE_WEBSITE_URL } from './src/constants/links.ts'
import { ROBOTS_OPTIONS } from './src/config/astro/robots-options.ts'
import { SITEMAP_OPTIONS } from './src/config/astro/sitemap-options.ts'
import mermaid from 'astro-mermaid'
import { STARLIGHT_OPTIONS } from './src/config/astro/starlight-options.ts'

// https://astro.build/config
export default defineConfig({
  site: BASE_WEBSITE_URL,
  base: BASE_PATH,
  prefetch: true,
  vite: {
    resolve: {
      alias: {
        '~': '/src',
      },
    },
  },
  integrations: [
    astroRelatedContent({
      collections: [
        {
          collection: 'docs',
          include: ['blog/**/*.{md,mdx}'],
        },
      ],
      // NOTE: Using the fixture (keyword-based) embedding provider for this PoC.
      // Replace with the default transformers.js provider (or another real provider)
      // for semantically meaningful related-content rankings in production.
      embeddings: {
        provider: createFixtureEmbeddingProvider(),
      },
      generation: {
        limit: 2,
      },
    }),
    mermaid({
      autoTheme: true,
    }),
    starlight(STARLIGHT_OPTIONS),
    sitemap(SITEMAP_OPTIONS),
    robots(ROBOTS_OPTIONS),
  ],
})
