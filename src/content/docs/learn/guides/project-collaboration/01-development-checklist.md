---
date: 2025-10-02
title: 'Dev Checklist'
description: 'Checklist to ensure code quality and adherence to project standards before committing.'
tags: [checklist, development, quality]
prev:
  link: /learning-curve/learn/guides/project-collaboration/00-getting-started
  label: Getting Started
next:
  link: /learning-curve/learn/guides/project-collaboration/02-naming-conventions
  label: Naming Conventions
---

Before you commit any changes, please check your work against these requirements

## 0. Prerequisites

See the [Getting Started](/learning-curve/learn/guides/project-collaboration/00-getting-started)

## 1. Config

- Make sure you have the correct **`env`** variables (`cp .env.dev .env` & modify the required values...)
- Make sure you have the correct **`cypress.env.json`** variables (`cp
cypress.env.json.dev cypress.env.json` & modify the required values...) for
  end-to-end testing
- For Windows' users, disable git's `CRLF` line ending: `sh git config --system core.autocrlf false`

## 2. Dev

- Make sure you follow the **[folder](/learning-curve/learn/guides/project-collaboration/03-folder-structure) and [component](/learning-curve/learn/guides/project-collaboration/04-component-structure) structure**
- Make sure you follow the **[naming](/learning-curve/learn/guides/project-collaboration/02-naming-conventions) conventions**

## 3. Test

- Make sure you **manually test** your code
- Make sure the **unit tests** pass (`pnpm test`)
- Make sure the end-to-end (**e2e**) tests pass (`pnpm test:e2e`)

## 4. Commit

- Make sure your code is **linted** (`pnpm lint`)
- Make sure you do not have **unused variables** (check your linter)
- Make sure you do not have **unused imports** (check your linter)
- Make sure your code is **formatted** (`pnpm format`)
- Make sure your code passes **static code analysis** checks (`pnpm type:checking`)
- Make sure your commit message follows the [**conventional commits**](/learning-curve/learn/guides/project-collaboration/05-conventional-commits) guidelines

## 5. Merge

- Make sure you are **up to date with the `main`** branch and there are no conflicts (`git merge main`)

**Closing thoughts**: these can be automated, some already are on `save` or on
`commit`. Don't hesitate to automate more if you can (weather in your editor or
more globally in the workspace for everyone...)
