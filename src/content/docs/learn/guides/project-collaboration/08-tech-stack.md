---
date: 2025-10-02
title: 'Tech Stack'
description: 'Overview of the technologies and tools used in the project.'
tags: [tech-stack, tools, technologies]
prev:
  link: /learning-curve/learn/guides/project-collaboration/07-git-workflow
  label: Git Workflow
next:
  link: /learning-curve/learn/guides/project-collaboration/09-testing
  label: Testing
---

## Linting and Formatting

We use [`ESLint`](https://eslint.org/) and [`Prettier`](https://prettier.io/)
for code linting and formatting, respectively.
`ESLint` helps us catch bugs, bad practices, etc., during development rather
than in production.
`Prettier` allows us to format our entire codebase uniformly, simplifying code
readability and team integration.

Before each commit, we automatically lint and format the code using
[`husky`](https://typicode.github.io/husky/) and
[`lint-staged`](https://github.com/lint-staged/lint-staged).

## Bundler

The bundler serves the following purposes:

> A module bundler provides a method for arranging and merging multiple
> JavaScript files into a unified single file. Using a JavaScript bundler
> becomes necessary when your project outgrows a single file or when dealing
> with libraries with numerous dependencies. As a result, the end-user's browser
> or client doesn't have to fetch numerous files individually.
>
> [source](https://dev.to/sayanide/the-what-why-and-how-of-javascript-bundlers-4po9)

After initializing this project with `CRA` (create-react-app), which uses the
`webpack` bundler, we switched to `vite`, which uses `esbuild` and
`rollup` depending on the environment (`dev` or `production`).

This change has **dramatically** sped up the start time
(and productivity) in dev mode.

[More info](https://vitejs.dev/guide/why.html)

## Error Handling

Use `react-error-boundary` as a wrapper functional component
[react-error-boundary](https://github.com/bvaughn/react-error-boundary) +
[article](https://kentcdodds.com/blog/use-react-error-boundary-to-handle-errors-in-react)

## Router

- [react-router-dom](https://reactrouter.com/en/main) (industry standard)

## Complex State Management

- Redux + react-redux + [redux-toolkit](https://redux-toolkit.js.org/introduction/getting-started)

## UI Framework

### Different Types of Framework

- CSS module in React => **+** scoped styles
- Preprocessor (SASS) => **+** nesting, mixins, functions
- Utility class library => **+** unified UI | **-** verbose HTML code (many
  classes), risk with the cascade nature of `CSS`
- CSS-in-JS => **+** style components programmatically, create dynamic styles,
  scopes styles
- CSS framework (`Bulma`) => **+** prebuilt components | **-** large bundle size
- Component Library (`Mantine`, `Ant Design`, `MUI`, `Chakra`)

### Selection

## Form

- [**`react-hook-form`**](https://react-hook-form.com/)

## Graphs

- [**`Kendo`** Charts](https://www.telerik.com/kendo-react-ui/components/charts/)

## Table

- [**`Kendo`** Grid](https://www.telerik.com/kendo-react-ui/components/grid/)

## Notifications

- [**`react-toastify`**](https://fkhadra.github.io/react-toastify/introduction/)

## Translation / Localization

- [**`i18n`**](https://www.i18next.com/)

## Real-time Bidirectional Communication

- [**`SignalR`**](https://learn.microsoft.com/en-us/aspnet/signalr/overview/getting-started/introduction-to-signalr)

## HTTP Request

- [**`RTK Query`**](https://redux-toolkit.js.org/rtk-query/overview)

## API Interface (development tool)

- We use [Swagger](https://swagger.io/) to publish available endpoints
  from the API and describe their types.
- To ensure that we receive the correct data format, we validate the
  received data using [zod](https://zod.dev/), which allows inferring the
  type of the data at the same time (no duplication between types and schema).
