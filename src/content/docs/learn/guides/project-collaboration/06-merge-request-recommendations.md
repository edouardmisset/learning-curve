---
date: 2025-10-02
title: 'Merge Request Recommendations'
description: 'Best practices for creating and reviewing merge requests.'
tags: [merge-requests, git, collaboration]
prev:
  link: /learning-curve/learn/guides/project-collaboration/05-conventional-commits
  label: Conventional Commits
next:
  link: /learning-curve/learn/guides/project-collaboration/07-git-workflow
  label: Git Workflow
---

## Creating the perfect MR

There is no such thing as a perfect MR, but there are some things you can do to
make it easier to review your MR. This will not only help reviewers but also you
as a contributor to having your change merged quicker, and the end-user getting
your improvement faster.

1. **Make your MRs as small as possible**. A MR should only refactor one thing,
   fix one thing, add one feature, or adjust a single subject in the
   documentation. If you want to change multiple things, please create multiple
   MRs. Smaller MRs have a smaller scope, need less time to review, conflict
   less often, and generally need fewer review iterations.

2. **Only change one thing at a time**. This is the same as the previous point
   but a bit more specific. It is tempting to improve those one or two lines
   you've noticed nearby, but please don't. Put those in a separate MR.
   Unrelated changes in your MR are distracting and often lead to questions. In
   contrast, in an independent MR, it would be a quick and simple review and
   merge.

3. **Test your changes before creating a MR**. This sounds obvious, but we often
   see MRs that contain impossible code that could never have worked or
   documentation changes that aren't visible on the resulting page. Of course, a
   waste of energy for both you and the reviewer; it adds an unneeded review
   iteration. Make sure you at least run and physically test your changes.
   Ensure they work (or, in the case of documentation: look) as intended.

4. **Ensure your MR is based on the latest version of the main upstream
   branch**. Make sure to pull in the latest upstream changes before creating
   your MR. While you wrote your changes, upstream may have changed. This can
   lead to merge conflicts, failing tests, or your changes not working as
   expected.

5. **Create a (feature) branch**. When you create a MR, it is based on a branch
   (usually the main branch). You must create a new feature branch for each MR
   you create. This makes it easier to keep your main branch up to date with the
   upstream branch, and it makes it easier to delete the branch after the MR has
   been merged.

6. **Motivate your MR by adding a clear title & extensive description**. When
   you open up a MR, you will be provided a MR template. Use the template, fill
   out as many fields as possible, take your time to write a good, clear, and
   concise title, and add an extensive description of your change. Be sure to
   add a motivation (or use case) to your MR, so the reviewer can understand why
   you are making this change (or why you make certain decisions).

## Receiving review comments

When your MR is open, someone will look at your code at some point. The reviewer
likely has some comments on your code or even some requests for changes to your
code.

**Be very aware these review comments are not personal**. The reviewer is not
trying to insult you or make you feel bad. They are trying to help you improve
your MR, so it can be merged.

No matter how experienced you are, there is always something to learn from
others, so don't hate it, embrace it. 😄 Don't be afraid to ask questions, or
ask for clarification. If you don't understand something, ask!

## Writing review comments using "[_Conventional Comments_](https://conventionalcomments.org/)"

### Abstract

Conventional Comments is a standardized approach for formatting comments in
various review and feedback processes, such as code reviews, peer reviews, and
editing. The goal is to create comments that are easy to understand and search.
Labeling comments with specific tags helps communicate the intention clearly,
encourages collaboration, and facilitates machine parsing.  
To sum up, this system encourages clear communication, collaboration, and
efficient review processes.

### Format

Comments adhere to a consistent format:

```markdown
<label> [decorations]: <subject>

[discussion]
```

- **label**: Signifies the type of comment.
- **subject**: The main message of the comment.
- **decorations (optional)**: Extra labels for the comment, comma-separated.
- **discussion (optional)**: Supporting statements, context, reasoning, and next
  steps.

**Example**:

```markdown
question (non-blocking): At this point, does it matter which thread has won?

Maybe to prevent a race condition we should keep looping until they've all won?
```

Can be parsed into:

```json
{
  "label": "question",
  "subject": "At this point, does it matter which thread has won?",
  "decorations": ["non-blocking"],
  "discussion": "Maybe to prevent a race condition we should keep looping until they've all won?"
}
```

### Labels

Recommended labels for comments:

| Label      | Description                                         |
| ---------- | --------------------------------------------------- |
| praise     | Highlight positive aspects.                         |
| nitpick    | Trivial, preference-based requests.                 |
| suggestion | Propose improvements, be explicit.                  |
| issue      | Highlight specific problems, pair with suggestions. |
| todo       | Small, necessary changes before acceptance.         |
| question   | Seek clarification or investigation.                |
| thought    | Share valuable ideas.                               |
| chore      | Simple tasks for official acceptance.               |
| note       | Non-blocking, highlights something for the reader.  |

**Example**:

```markdown
issue (ux,non-blocking): These buttons should be red, but let's handle this in a follow-up.
```

### Decorations

Decorations provide additional context for comments:

| Decoration     | Description                                   |
| -------------- | --------------------------------------------- |
| (non-blocking) | Should not prevent acceptance.                |
| (blocking)     | Should prevent acceptance until resolved.     |
| (if-minor)     | Resolve only if changes are minor or trivial. |

**Example**:

```markdown
suggestion (security): I'm concerned about implementing our own DOM purifying function here…

Could we consider using the framework instead?
```

### Best Practices

- Mentoring pays off exponentially
- Leave actionable comments
- Combine similar comments
- Replace “you” with “we”
- Replace “should” with “could”

**Example**:

```markdown
nitpick: little star => little bat

Can we update the other references as well?
```
