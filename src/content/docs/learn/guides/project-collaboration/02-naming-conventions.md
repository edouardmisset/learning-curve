---
date: 2025-10-02
title: 'Naming Conventions'
description: 'Guidelines for consistent and readable naming conventions in the project.'
tags: [naming, conventions, readability]
prev:
  link: /learning-curve/learn/guides/project-collaboration/01-development-checklist
  label: Development Checklist
next:
  link: /learning-curve/learn/guides/project-collaboration/03-folder-structure
  label: Folder Structure
---

Naming conventions, while more rigid, provide the following advantages:

1. **Code Readability:** Consistent naming conventions enhance code readability,
   making it easier for developers to understand the purpose and usage of
   variables, functions, and components within the codebase.

2. **Maintainability:** Following naming conventions provides a standardized
   structure, facilitating code maintenance. Developers can quickly locate and
   update specific elements, reducing the likelihood of introducing errors
   during modifications.

3. **Collaboration:** When multiple developers work on a project, adhering to
   naming conventions promotes a shared understanding of the code. Consistency
   in naming fosters collaboration and helps team members navigate and
   contribute to the codebase seamlessly.

## Context

In the javascript world, the convention is to use `camelCase`
([wiki](https://en.wikipedia.org/wiki/Camel_case)).

In the React world, Components are written using `PascalCase`
([wiki](https://en.wikipedia.org/wiki/Camel_case)).

## Constants values

The naming convention for constants (like environment variables) is to write
them using `UPPER_SNAKE_CASE` (capital letter words separated by underscored).

For example: `API_TIMEOUT`

## Boolean values

Boolean try to read as a question using `is` (most of the time) or `has` (less
frequent).

For example: `isOpen`

## Styled Components

In this project, we use the following for naming our [`styled
components`](https://styled-components.com/docs/basics#getting-started):
`Styled<ComponentName>`

For example: `StyledCenterCell`

## Function Declaration vs Arrow Function

In Javascript (TypeScript), there are multiple ways, to declare functions.
Here are two:

```ts
// Function declaration
function add(a, b) {
  return a + b
}

// Arrow Function
const add = (a, b) => a + b
```

Arrow functions, introduced in ES6, have become widely popular due to their
**concise syntax** and lexical scoping of the `this` keyword.

In this project, we mostly use **arrow functions**.

The **exception to this is for React Components** which are Function Declaration as
seen [above](#props-vs-params)

## Handler functions

In this project, we use the following for naming our event handlers functions:
`handle<EventName>` **OR** `on<EventName>`.

For example: `handleClick`

## Props vs Params

When defining a function, we use `params` for its parameters.

For example:

```ts
export const clampValueInRange = (params: ValueAndRange): number => {
  const { maximum, minimum, value } = params
  return Math.max(Math.min(value, maximum), minimum)
}
```

When defining a React Component, we use `props` for its "properties".

For example:

```ts
export function BooleanStateGridCell(
  props: BooleanStateCellProps,
): React.JSX.Element {
  const { checked } = props
  return (
    <StyledCenterCell>
      <StyledBooleanStateCell checked={checked} />
    </StyledCenterCell>
  )
}
```

## Custom React Hooks

The naming convention for React's `hooks` is to start the name with
[`use`](https://react.dev/learn/reusing-logic-with-custom-hooks#hook-names-always-start-with-use).

For example: `useFetch`
