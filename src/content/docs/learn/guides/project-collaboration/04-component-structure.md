---
date: 2025-10-02
title: 'Component Structure'
description: 'Best practices for organizing and structuring React components.'
tags: [components, structure, best-practices]
prev:
  link: /learning-curve/learn/guides/project-collaboration/03-folder-structure
  label: Folder Structure
next:
  link: /learning-curve/learn/guides/project-collaboration/05-conventional-commits
  label: Conventional Commits
---

## **Import** Order

- Third Party Libraries
- Custom Components
- Utils Imports
- Constant imports
- Image Imports
- Create file specific Constants

Separate each import category by one empty line.

This should be handled automatically by the
[eslint-plugin-import](https://github.com/import-js/eslint-plugin-import) plugin

## Rules for **Components**

- Very first line — destructure Props (if any)
- Grab the translation function — `useTranslation` / `useT` (if used)
- Destructure redux state — `useAppSelector`
- Initialize State Variables — `useState`
- Create Refs — `useRef`
- Initialize hooks — `useAppDispatch`
- Write all side effects — `useEffect`s
- Create `const`/`let` specific to the Component
- Function definition — (if any)

Separate each section by one empty line

Resources:

**Source**: This is from this [medium article](https://rahuulmiishra.medium.com/react-worst-practices-bdf924efe470)
