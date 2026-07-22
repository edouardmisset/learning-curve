---
date: 2025-11-15
title: Pull Request / Merge Request Template
description: A standardized template for creating clear and comprehensive pull requests and merge requests.
tags: ['pull-request', 'merge-request', 'template', 'git', 'collaboration']
prev:
  link: /learning-curve/reference/templates/feature-request-template
  label: Feature Request Template
---

```markdown
## Description

<!-- Provide a clear and concise description of your changes -->

### What does this PR do?

<!-- Explain what changes you made and why -->

### Why is this change necessary?

<!-- Describe the problem you're solving or the feature you're adding -->

## Type of Change

<!-- Mark the relevant option(s) with an "x" -->

- [ ] 🐛 Bug fix (non-breaking change which fixes an issue)
- [ ] ✨ New feature (non-breaking change which adds functionality)
- [ ] 💥 Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] 📝 Documentation update
- [ ] 🎨 Style/UI update (non-functional change)
- [ ] ♻️ Code refactoring (no functional changes)
- [ ] ⚡ Performance improvement
- [ ] ✅ Test addition or update
- [ ] 🔧 Configuration change
- [ ] 🔨 Build/CI change

## Related Issues

<!-- Link to related issues using #issue_number -->

Fixes #
Closes #
Related to #

## Changes Made

<!-- List the specific changes you made -->

-
-
-

## Testing

<!-- Describe the tests you ran and how to reproduce them -->

### How Has This Been Tested?

- [ ] Unit tests
- [ ] Integration tests
- [ ] Manual testing
- [ ] No testing required (documentation, etc.)

### Test Configuration

<!-- Describe your test environment if relevant -->

- **OS**:
- **Browser** (if applicable):
- **Node version** (if applicable):

## Screenshots / Demo

<!-- If applicable, add screenshots or GIFs to demonstrate your changes -->

### Before

<!-- Screenshot or description of behavior before your changes -->

### After

<!-- Screenshot or description of behavior after your changes -->

## Checklist

<!-- Mark completed items with an "x" -->

- [ ] My code follows the project's style guidelines
- [ ] I have performed a self-review of my own code
- [ ] I have commented my code in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings or errors
- [ ] I have added tests that prove my fix is effective or that my feature works
- [ ] New and existing unit tests pass locally with my changes
- [ ] Any dependent changes have been merged and published

## Additional Notes

<!-- Add any other context about the PR here -->

## Reviewer Notes

<!-- Optional: Add specific things you want reviewers to focus on -->

---

**Remember**: Keep PRs small and focused. If you're changing multiple unrelated things, consider splitting them into separate PRs.
```
