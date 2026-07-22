# Learning Curve

A curated collection of programming concepts, development guides, and code
snippets. This repository serves as a personal knowledge base and reference for
software engineering best practices.

[Website](https://edouardmisset.github.io/learning-curve/)

## 📚 What's Inside

The content is organized into four main sections:

### 📝 Blog

In-depth articles exploring core engineering concepts:

- **Algorithms & Data Structures** ([Sorting](src/content/docs/blog/09-sorting-algorithms.mdx), [Trees](src/content/docs/blog/21-data-structures.mdx), [Big O](src/content/docs/blog/14-algorithm-strategies.mdx))
- **Design Patterns** ([Singleton, Factory, Observer](src/content/docs/blog/20-design-patterns.mdx))
- **Software Principles** ([SOLID](src/content/docs/blog/11-solid-principles.mdx), [DRY](src/content/docs/blog/10-dry-principle.mdx), [ACID](src/content/docs/blog/13-acid.mdx))
- **Language Fundamentals** ([Generics](src/content/docs/blog/02-generics.mdx), [Memoization](src/content/docs/blog/04-memoization.mdx), [Debouncing](src/content/docs/blog/06-debouncing-throttling.mdx))
- **Git Workflows** ([Rebase](src/content/docs/blog/08-git-rebase.mdx), [Bisect](src/content/docs/blog/07-git-bisect.mdx))

### 📘 Learn

Practical guides and tutorials for setting up and maintaining projects:

- **Project Setup** ([Oxlint](src/content/docs/learn/guides/project/oxlint.mdx), [Oxfmt](src/content/docs/learn/guides/project/oxfmt.mdx), [TypeScript Go](src/content/docs/learn/guides/project/tsgo.mdx), [Husky](src/content/docs/learn/guides/project/husky.mdx), [EditorConfig](src/content/docs/learn/guides/project/editorconfig.mdx))
- **Collaboration** ([Writing guidelines](src/content/docs/learn/guides/project-collaboration/11-writing-guidelines.mdx), [Pull Request templates](src/content/docs/reference/templates/pr-template.md))
- **Tutorials** ([Step-by-step implementations](src/content/docs/learn/tutorials/index.mdx))

### ✂️ Snippets

Ready-to-use code blocks for everyday tasks:

- **TypeScript**: [Helper functions](src/content/docs/reference/snippets/typescript/helpers.mdx), array/object manipulation, regex patterns.
- **CSS**: [Layouts](src/content/docs/reference/snippets/css/layouts/), resets, utility classes.
- **Shell**: [Automation scripts](src/content/docs/reference/snippets/shell/) and CLI utilities.
- **SQL**: [Common queries](src/content/docs/reference/snippets/sql/crud.mdx) and CRUD operations.

### 🗂️ Reference

Quick lookup resources:

- **Cheatsheets**: [VS Code shortcuts](src/content/docs/reference/cheatsheets/vs-code-shortcuts.mdx), terminal commands.
- **Templates**: [PR descriptions](src/content/docs/reference/templates/pr-template.md), [bug reports](src/content/docs/reference/templates/bug-report-template.md), [feature requests](src/content/docs/reference/templates/feature-request-template.md).
- **Tooling**: [Configuration files](src/content/docs/reference/tools/setup.md) and setup guides.

## 🚀 Quick Start

To run this knowledge base locally:

```bash
# Install dependencies
pnpm install

# Start the dev server
pnpm dev
```

> Built with [Astro](https://astro.build) and [Starlight](https://starlight.astro.build).

## AI Discovery

This site publishes static AI discovery signals that work on GitHub Pages:

- `public/robots.txt` for crawler policy and the sitemap entrypoint.
- `public/llms.txt` and `public/llms-full.txt` for machine-readable site guidance.
- `src/pages/[...slug].md.ts` for self-hosted markdown alternates that append `.md` to the canonical page path.
- `src/route-data.ts` for `rel="alternate"` markdown discovery and JSON-LD metadata.

Maintenance notes:

- Prefer updating the canonical HTML page first; the `.md` alternate is derived from the same content entry.
- Keep high-value sections listed in `llms.txt` focused on blog posts, guides, references, and snippets.
- GitHub Pages cannot attach custom `Link` or `X-Robots-Tag` headers, so discovery is implemented with static files and HTML head tags instead.

## License

This project is licensed under the terms of the [LICENSE](LICENSE) file.
