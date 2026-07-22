---
date: 2025-10-02
title: 'Folder Structure'
description: 'Overview of the recommended folder structure for components and pages.'
tags: [folder, structure, organization]
prev:
  link: /learning-curve/learn/guides/project-collaboration/02-naming-conventions
  label: Naming Conventions
next:
  link: /learning-curve/learn/guides/project-collaboration/04-component-structure
  label: Component Structure
---

## Component / Page

```txt
component-name
├── helpers.ts               // Contains the helper functions and all the other functions needed by the component
├── index.ts                 // Exports the component (`export * from './component-name'`)
├── component-name.tsx       // Contains the actual component
├── styles.ts                // Contains the styled components
├── constants.ts             // Contains the constants used for the component
├── types.ts                 // Contains the types (props ans others) used for the component
├── hooks.ts                 // Contains the hooks used for the component
└── component-name.tests.ts  // Contains the unit tests for the component (can also be located into a separate "__tests__" folder)
```

⚠️: `default export`s are used for lazy loading components (mainly pages and
very large components). This is to increase first load speed.In this case, we do
not use `index.ts` files.

> Like in the example above, in a perfect world, we would be using a
> **kebab-case** naming convention for all folders and files, because PascalCase
> named folders/files are handled differently in the diversity of operating
> systems which may lead to bugs when working with teams using different OSs.
> ~ [Robin Wieruch](https://www.robinwieruch.de/react-folder-structure/)
