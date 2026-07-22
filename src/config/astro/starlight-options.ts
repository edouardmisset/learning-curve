import starlight from '@astrojs/starlight'
import catppuccin from '@catppuccin/starlight'
import starlightBlog from 'starlight-blog'
import starlightKbd from 'starlight-kbd'
import starlightLinksValidator from 'starlight-links-validator'
import starlightLlmsTxt from 'starlight-llms-txt'
import { BASE_PATH, PATHS, REPO_URL, SITE_NAME } from '../../constants/links.ts'
import { CATPPUCCIN_OPTIONS } from './plugins/catppuccin-options.ts'
import { STARLIGHT_BLOG_OPTIONS } from './plugins/starlight-blog-options.ts'
import { STARLIGHT_KBD_OPTIONS } from './plugins/starlight-kbd-options.ts'
import { STARLIGHT_LLM_TXT_OPTIONS } from './plugins/starlight-llms-txt-options.ts'

type SidebarItem = NonNullable<
  Parameters<typeof starlight>[0]['sidebar']
>[number]

const autogenerateGroup = (
  label: string,
  directory: string,
  options?: { collapsed?: boolean },
): SidebarItem =>
  ({
    label,
    items: [{ autogenerate: { directory } }],
    ...(options?.collapsed === undefined
      ? {}
      : { collapsed: options.collapsed }),
  }) as unknown as SidebarItem

export const STARLIGHT_OPTIONS = {
  title: SITE_NAME,
  description: 'Bits and pieces I learned during my coding journey!',
  tagline: 'Bits and pieces I learned during my coding journey!',
  favicon: '/favicon.ico',
  head: [
    {
      tag: 'link',
      attrs: {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
    },
    {
      tag: 'link',
      attrs: {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
    },
    {
      tag: 'link',
      attrs: {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
    },
    {
      tag: 'link',
      attrs: {
        rel: 'manifest',
        href: `${BASE_PATH}/site.webmanifest`,
      },
    },
    {
      tag: 'script',
      attrs: {
        src: `${BASE_PATH}/mermaid-fullscreen.js`,
        defer: true,
      },
    },
  ],
  plugins: [
    catppuccin(CATPPUCCIN_OPTIONS),
    starlightKbd(STARLIGHT_KBD_OPTIONS),
    starlightLinksValidator(),
    starlightLlmsTxt(STARLIGHT_LLM_TXT_OPTIONS),
    starlightBlog(STARLIGHT_BLOG_OPTIONS),
  ],
  customCss: [
    '@fontsource-variable/atkinson-hyperlegible-next/index.css',
    './src/styles/custom.css',
  ],
  routeMiddleware: './src/route-data.ts',
  editLink: {
    baseUrl: `${REPO_URL}/edit/main/`,
  },
  social: [
    {
      icon: 'github',
      label: 'GitHub',
      href: REPO_URL,
    },
  ],
  sidebar: [
    {
      label: 'Blog',
      link: PATHS.blog(),
    },
    {
      label: 'Learn',
      items: [
        {
          label: 'Tutorials',
          collapsed: false,
          items: [
            {
              label: 'Data Analysis',
              link: PATHS.tutorials('data-analysis/00-workflow'),
            },
          ],
        },
        {
          label: 'Guides',
          collapsed: false,
          items: [
            {
              label: 'Project Setup',
              link: PATHS.guides('project'),
            },
            {
              label: 'Team Collaboration',
              link: PATHS.guides('project-collaboration/00-getting-started'),
            },
          ],
        },
      ],
    },
    {
      label: 'Reference',
      items: [
        autogenerateGroup('Cheatsheets', 'reference/cheatsheets'),
        autogenerateGroup('Templates', 'reference/templates'),
        autogenerateGroup('Tools', 'reference/tools'),
      ],
    },
    autogenerateGroup('Snippets', 'snippets', { collapsed: true }),
  ],
  lastUpdated: true,
} as const satisfies Parameters<typeof starlight>[0]
