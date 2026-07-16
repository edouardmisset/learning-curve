import { getCollection } from 'astro:content'
import { OGImageRoute } from 'astro-og-canvas'

const FONT_FAMILY_STACK = [
  'Atkinson Hyperlegible Next Variable',
  'Segoe UI',
  'Roboto',
  'Arial',
  'sans-serif',
] as const

// Get all entries from the `docs` content collection.
const entries = await getCollection('docs')

// Map the entries to an object keyed by route path.
const pages = Object.fromEntries(entries.map(({ data, id }) => [id, data]))

export const { getStaticPaths, GET } = await OGImageRoute({
  // Pass down the documentation pages.
  pages,
  // Define a function called for each page to customize the generated image.
  getImageOptions: (_id, page: (typeof entries)[number]['data']) => {
    return {
      // Use the page title and description as the image title and description.
      title: page.title,
      description: page.description ?? page.excerpt ?? '',
      // Customize various colors and add a border.
      bgGradient: [
        [30, 32, 48],
        [36, 39, 58],
      ],
      border: {
        color: [202, 158, 230],
        width: 10,
        side: 'inline-start',
      },
      logo: {
        path: './public/apple-touch-icon.png',
      },
      fonts: [
        './node_modules/@fontsource-variable/atkinson-hyperlegible-next/files/atkinson-hyperlegible-next-latin-wght-normal.woff2',
      ],
      font: {
        title: {
          families: [...FONT_FAMILY_STACK],
        },
        description: {
          families: [...FONT_FAMILY_STACK],
        },
      },
      padding: 120,
    }
  },
})
