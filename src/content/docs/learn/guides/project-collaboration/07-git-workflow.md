---
date: 2025-10-02
title: 'Git Workflow'
description: 'Overview of branching strategies and workflows for Git.'
tags: [git, workflow, branching]
prev:
  link: /learning-curve/learn/guides/project-collaboration/06-merge-request-recommendations
  label: Merge Request Recommendations
next:
  link: /learning-curve/learn/guides/project-collaboration/08-tech-stack
  label: Tech Stack
---

## Git branch strategies

### Part 1

#### New feature / Known bug workflow

- From an issue in gitlab, find the `Create merge request` button. This creates
  a branch with the name of the issue
- In you editor, `fetch` the repos with this new branch `git fetch --all`
- Switch to this branch `git checkout <name-of your-branch>`

#### Degraded workflow (quick fix)

- Switch to a new branch `git checkout -b <name-of-the-new-branch>`
- Push this new branch to the server
  `git push --set-upstream origin $(git_current_branch)`

### Part 2

- Make your changes
- Add them to the staging area

```sh
# Add each file
git add <name-of-the-file-to-commit> <name-of-the-file-to-commit-2>
#  or add every file that changed
git add --all
```

- Commit them `git commit --message "fix: fix the slider"` (please follow
  the [conventional commit](/learning-curve/learn/guides/project-collaboration/05-conventional-commits) convention when writing
  your commit message)
- Go to github / gitlab's interface and merge from there.
  - **Feature / bug**: everything is already in place
  - **Quick Fix**: you'll see a `Create merge request` button (related to your branch name).
    Alternatively, go the to branches section of gitlab, find your branch and
    click the `New` (merge request).
- Ensure that all the checks of the CI pipeline pass
- Merge the content of your branch into `main`
- In you editor switch to the `main` branch `git checkout main`
- Pull `git pull`

## Changing git workflow

The following strategies are the most popular strategies used.
In order of complexity, they are:

- [GitHub Flow Guide](https://guides.github.com/introduction/flow/) & [GitHub
  Flow](https://githubflow.github.io/)
- [GitLab Flow Guide](https://about.gitlab.com/blog/2023/07/27/gitlab-flow-duo/)
- [GitFlow](https://nvie.com/posts/a-successful-git-branching-model/) by
  Vincent Driessen (Original blog post) & [GitFlow on GitHub](https://github.com/nvie/gitflow)

### GitFlow Branch Strategy

1. **Overview:** GitFlow is a branching model that defines a strict branching structure.
2. **Branches:**
   - **main:** Represents production-ready code.
   - **develop:** Integration branch for ongoing development.
   - **feature:** Individual features developed in separate branches.
   - **release:** Prepares for a new production release.
   - **hotfix:** Addresses critical issues in the production code.
3. **Workflow:** Features merge into develop, releases merge into main and
   develop, hotfixes merge into main and develop.
4. **Pros:** Well-defined structure, suitable for larger projects.
5. **Cons:** Can be complex for smaller projects, and feature branches may lead
   to longer development cycles.

[GitFlow cheatsheet & **tool** (_avh_)](https://danielkummer.github.io/git-flow-cheatsheet/)

![GitFlow Diagram](./assets/git-branching-model.png)

### GitHub Flow Branch Strategy

1. **Overview:** GitHub Flow is a lightweight, simplified branching model.
2. **Branches:**
   - **main:** Represents the main development line.
   - **feature:** Features developed in individual branches.
3. **Workflow:** Developers create feature branches, open pull requests for
   discussion, and merge directly into the main branch after review.
4. **Pros:** Simple and streamlined, encourages continuous delivery.
5. **Cons:** May not be suitable for complex release management.

### GitLab Flow Branch Strategy

1. **Overview:** GitLab Flow is similar to GitHub Flow with a focus on CI/CD and
   collaboration.
2. **Branches:**
   - **main:** Represents the main development line.
   - **feature:** Features developed in individual branches.
   - **Production:** Represents the production-ready code.
3. **Workflow:** Developers create feature branches, open merge requests for
   discussion, and merge into the main and production branches after review.
4. **Pros:** Emphasizes CI/CD, seamless collaboration, and production tracking.
5. **Cons:** May require additional setup for CI/CD pipelines.

## Resources

- Comparing
  workflows by
  [Atlassian](https://www.atlassian.com/git/tutorials/comparing-workflows) and [GitKraken](https://www.gitkraken.com/learn/git/best-practices/git-branch-strategy)
- GitFlow
  by
  [Atlassian](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)
  and by [GitKraken](https://www.gitkraken.com/learn/git/git-flow)
