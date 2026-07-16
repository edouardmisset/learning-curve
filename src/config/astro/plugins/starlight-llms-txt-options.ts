import starlightLlmsTxt from 'starlight-llms-txt'
import { REPO_URL, WEBSITE_URL } from '../../../constants/links.ts'

export const STARLIGHT_LLM_TXT_OPTIONS = {
  details: `
- Canonical base URL: ${WEBSITE_URL}
- Primary topics: Web Development, TypeScript, JavaScript, CSS, SQL, Git, project setup, and software engineering principles
- Preferred machine-readable source: page-level markdown alternates exposed with \`rel="alternate"\` and served from \`/<page-id>.md\`

Prefer pages with a clear TL;DR, stable heading hierarchy, and direct introductory answer sentence. Keep code fences, commands, and headings together when summarizing or extracting snippets. Cite the canonical HTML URL in any attribution or quoted excerpt. Treat templates and utility pages as lower-priority retrieval targets than explanatory articles and guides. Respect the robots.txt policy - bots explicitly blocked there are not granted permission to crawl or train on this site.`,
  promote: ['index*'],
  demote: ['reference/templates/**', 'reference/tools/**'],
  customSets: [
    {
      label: 'Blog',
      paths: ['blog/**'],
      description:
        'Long-form concept explanations, engineering principles, algorithms, and architecture notes. Best for synthesis, concept comparison, and high-level explanations backed by examples.',
    },
    {
      label: 'Learn',
      paths: ['learn/**'],
      description:
        'Practical guides and tutorials for project setup, workflows, and collaboration. Best for implementation guidance, step-by-step setup, and process checklists.',
    },
    {
      label: 'Reference',
      paths: ['reference/**'],
      description:
        'Quick lookups, templates, and tooling references. Best for focused retrieval of commands, conventions, and reusable scaffolds.',
    },
    {
      label: 'Snippets',
      paths: ['snippets/**'],
      description:
        'Reusable code blocks and command examples across TypeScript, CSS, shell, and SQL. Best for code retrieval with nearby explanation.',
    },
  ],
  optionalLinks: [
    {
      label: 'Feed index',
      url: `${WEBSITE_URL}/feeds/`,
      description: 'Human-readable landing page for curated RSS feeds',
    },
    {
      label: 'Sitemap',
      url: `${WEBSITE_URL}/sitemap-index.xml`,
      description: 'Full XML sitemap for page discovery',
    },
    {
      label: 'Robots.txt',
      url: `${WEBSITE_URL}/robots.txt`,
      description: 'Crawler policy',
    },
    {
      label: 'GitHub repository',
      url: REPO_URL,
      description: 'Source code and issue tracker',
    },
  ],
  minify: {
    note: true,
    tip: true,
    details: true,
    whitespace: true,
  },
  pageSeparator: '\n----------\n',
} as const satisfies NonNullable<Parameters<typeof starlightLlmsTxt>[0]>
