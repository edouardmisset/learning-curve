---
date: 2025-10-02
title: 'Testing'
description: 'Overview of unit and end-to-end testing strategies.'
tags: [testing, unit-tests, e2e-tests]
prev:
  link: /learning-curve/learn/guides/project-collaboration/08-tech-stack
  label: Tech Stack
next:
  link: /learning-curve/learn/guides/project-collaboration/10-style
  label: Style
---

## Unit Tests

Each component should be tested individually.

To achieve this, we use the library [Vitest](https://vitest.dev).
The choice of this library is based on its ease of integration with
our bundler (`Vite`) and its
API similarity to the previous one (`Jest`).

> A Vite-native testing framework. It's fast!

## End-to-End Tests (e2e)

End-to-end tests will be performed using [Cypress](https://www.cypress.io/).

End-to-end tests are located in the `cypress` directory at the root of the
project (as recommended by their documentation).
