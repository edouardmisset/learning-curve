import {
  defineRouteMiddleware,
  type StarlightRouteData,
} from '@astrojs/starlight/route-data'
import { BASE_WEBSITE_URL } from '~/constants/links'
import { buildJsonLd, getRawPath, toAbsoluteSiteUrl } from '~/utils/discovery'

type HeadTag = {
  tag: string
  attrs?: Record<string, string | boolean | undefined> | undefined
  content?: string | undefined
}

type DiscoveryFrontmatter = {
  description?: string
  excerpt?: string
}

export const onRequest = defineRouteMiddleware(context => {
  const route = context.locals.starlightRoute

  collapseBlogTags(route.sidebar)
  updateDiscoveryHead(route, context.site ?? BASE_WEBSITE_URL)
})

function collapseBlogTags(sidebar: StarlightRouteData['sidebar']): void {
  const tagsSidebarGroup = sidebar.find(
    item =>
      item.type === 'group' &&
      item.entries.some(
        entry => entry.type === 'link' && entry.href.includes('/blog/tags/'),
      ),
  )

  if (tagsSidebarGroup) tagsSidebarGroup.collapsed = true
}

function updateDiscoveryHead(
  route: StarlightRouteData,
  site: URL | string,
): void {
  for (const tag of getDiscoveryHeadTags(route, site)) {
    upsertHeadTag(route.head, tag)
  }
}

function getDiscoveryHeadTags(
  route: StarlightRouteData,
  site: URL | string,
): HeadTag[] {
  const pageId = route.id || 'index'
  const data = route.entry.data as DiscoveryFrontmatter
  const fallbackDescription = data.description ?? data.excerpt

  const ogImageUrl = toAbsoluteSiteUrl(`/og/${pageId}.png`, site)
  const rawDocumentUrl = toAbsoluteSiteUrl(getRawPath(pageId), site)
  const jsonLd = JSON.stringify(buildJsonLd(route, site, ogImageUrl))

  const tags: HeadTag[] = [
    {
      tag: 'meta',
      attrs: { property: 'og:image', content: ogImageUrl },
    },
    {
      tag: 'meta',
      attrs: { name: 'twitter:image', content: ogImageUrl },
    },
    {
      tag: 'link',
      attrs: {
        rel: 'alternate',
        type: 'text/markdown',
        title: 'Markdown source',
        href: rawDocumentUrl,
      },
    },
    {
      tag: 'script',
      attrs: { type: 'application/ld+json' },
      content: jsonLd,
    },
  ]

  if (fallbackDescription) {
    tags.push({
      tag: 'meta',
      attrs: { name: 'description', content: fallbackDescription },
    })
    tags.push({
      tag: 'meta',
      attrs: { property: 'og:description', content: fallbackDescription },
    })
  }

  return tags
}

function upsertHeadTag(head: HeadTag[], tag: HeadTag): void {
  const existingIndex = head.findIndex(entry => matchesHeadTag(entry, tag))

  if (existingIndex === -1) {
    head.push(tag)
    return
  }

  head[existingIndex] = tag
}

function matchesHeadTag(current: HeadTag, next: HeadTag): boolean {
  if (current.tag !== next.tag) return false

  if (current.tag === 'script')
    return current.attrs?.['type'] === next.attrs?.['type']

  return (
    current.attrs?.['name'] === next.attrs?.['name'] &&
    current.attrs?.['property'] === next.attrs?.['property'] &&
    current.attrs?.['rel'] === next.attrs?.['rel'] &&
    current.attrs?.['type'] === next.attrs?.['type']
  )
}
