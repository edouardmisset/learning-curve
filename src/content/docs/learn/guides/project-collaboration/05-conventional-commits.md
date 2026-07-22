---
date: 2025-10-02
title: 'Conventional Commits'
description: 'Guidelines for writing clear and structured commit messages.'
tags: [commits, conventions, git]
prev:
  link: /learning-curve/learn/guides/project-collaboration/04-component-structure
  label: Component Structure
next:
  link: /learning-curve/learn/guides/project-collaboration/06-merge-request-recommendations
  label: Merge Request Recommendations
---

[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary) 1.0.0

## Summary

The Conventional Commits specification is a lightweight convention on top of
commit messages. It provides an easy set of rules for creating an explicit
commit history; which makes it easier to write automated tools on top of. This
convention dovetails with [SemVer](http://semver.org/), by describing the
features, fixes, and breaking changes made in commit messages.

The commit message should be structured as follows:

```txt
type[optional scope]: description

[optional body]

[optional footer(s)]
```

The commit contains the following structural elements, to communicate intent to
the consumers of your library:

**fix**: a commit of the type `fix` patches a bug in your codebase (this
correlates with [**PATCH**](https://semver.org/#summary) in Semantic
Versioning).

**feat**: a commit of the type `feat` introduces a new feature to the codebase
(this correlates with [**MINOR**](https://semver.org/#summary) in Semantic
Versioning).

**BREAKING CHANGE**: a commit that has a footer `BREAKING CHANGE:`, or appends a
`!` after the type/scope, introduces a breaking API change (correlating with
[**MAJOR**](https://semver.org/#summary) in Semantic Versioning). A BREAKING
CHANGE can be part of commits of any type.

types other than fix: and feat: are allowed, @commitlint/config-conventional
recommends **build:, chore:, ci:, docs:, style:, refactor:, perf:, test:**, and
others.
footers other than BREAKING CHANGE: description may be provided and follow a
convention similar to git trailer
[format](https://git-scm.com/docs/git-interpret-trailers).

Additional types are not mandated by the Conventional Commits specification, and
have no implicit effect in Semantic Versioning (unless they include a BREAKING
CHANGE). A scope may be provided to a commit’s type, to provide additional
contextual information and is contained within parenthesis, e.g., `feat(parser):
add ability to parse arrays.`

## Examples

### Commit message with description and breaking change footer

```txt
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

### Commit message with ! to draw attention to breaking change

```txt
feat!: send an email to the customer when a product is shipped
```

Commit message with scope and ! to draw attention to breaking change

```txt
feat(api)!: send an email to the customer when a product is shipped
```

Commit message with both ! and BREAKING CHANGE footer

```txt
chore!: drop support for Node 6

BREAKING CHANGE: use JavaScript features not available in Node 6.
```

Commit message with no body

```txt
docs: correct spelling of CHANGELOG
```

Commit message with scope

```txt
feat(lang): add Polish language
```
