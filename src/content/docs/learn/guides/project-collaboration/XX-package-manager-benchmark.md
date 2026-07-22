---
date: 2024-01-23
title: 'Package Manager Benchmark'
description: 'Comparison of package managers to optimize CI performance.'
tags: [package-managers, benchmark, CI-performance]
prev:
  link: /learning-curve/learn/guides/project-collaboration/11-writing-guidelines
  label: Writing Guidelines
---

Comparing package manager (PM) to improve CI performances

## Procedure

The following PM are considered:

- `bun` (1.0.23) [bun install link](https://bun.sh/docs/installation)
- **`pnpm`** (8.14.0) [pnpm install link](https://pnpm.io/installation)
- `yarn` (1.22.21) [yarn install link](https://classic.yarnpkg.com/en/docs/install)
- `npm` (10.2.5) [npm install link](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

Software used to test: `hyperfine`

```sh
hyperfine "bun install --backend=hardlink" "pnpm install --ignore-scripts" "yarn install --no-scripts" "npm install --force --no-scripts --ignore-scripts" --warmup=4 --prepare="rm -rf node_modules" --cleanup="rm -rf node_modules" --export-markdown="package-manager-benchmark.md"
```

## Results

| Command                                             |       Mean [s] | Min [s] | Max [s] |     Relative |
| :-------------------------------------------------- | -------------: | ------: | ------: | -----------: |
| `bun install --backend=hardlink`                    |  1.014 ± 0.066 |   0.923 |   1.131 |         1.00 |
| `pnpm install --ignore-scripts`                     |  2.060 ± 0.095 |   1.955 |   2.244 |  2.03 ± 0.16 |
| `yarn install --no-scripts`                         |  7.883 ± 0.234 |   7.594 |   8.299 |  7.77 ± 0.56 |
| `npm install --force --no-scripts --ignore-scripts` | 10.155 ± 0.324 |   9.711 |  10.860 | 10.01 ± 0.73 |

Date: 2024-01-23

### Configuration

- CPUs: 16
- CPU Name: 11th Gen Intel(R) Core(TM) i7-11800H @ 2.30GHz
- Architecture: x86_64
- Software: Ubuntu 22.04.3 LTS (Jammy)

### Conclusion

The fastest tested package manager is `bun` but when using on the Windows
platform, it lacks stability at the moment.
Therefore, we can try `pnpm`.

To install:

```sh
# On MacOS and Linux
curl -fsSL https://get.pnpm.io/install.sh | sh -

# On Windows (using PowerShell)
iwr https://get.pnpm.io/install.ps1 -useb | iex
```
