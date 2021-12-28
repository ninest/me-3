---
title: Git Shortlog
description: View a breakdown of the commits per user
seoDescription: View a breakdown of the commits per user; summarize the commit count of users and authors

icon: git

updatedAt: 2021-05-30
createdAt: 2021-05-30

linkedResources:
  - type: website
    url: https://git-scm.com/docs/git-shortlog
    title: Git shortlog
  - type: website
    url: https://stackoverflow.com/a/9839491/8677167
    title: Number of commits per author on all branches
---

<Alert primary title="Summary" open>

To view a list of users and their commit count:

```bash
git shortlog -s -n --all --no-merges
```

</Alert>

`git shortlog` summarizes the output from `git log`, grouping each commit by user:

<ExpandableCode title="git shortlog">

```shell
anotheruser (1):
  Fix bug

ninest (5):
  First commit
  Second commit
  Update README
  Add contributors
  Publish
```

</ExpandableCode>

## Options

### `--numbered`, `-n`

Sort by number of commits per user:

<ExpandableCode title="git shortlog -n">
```shell 
ninest (5):
  First commit
  Second commit
  Update README
  Add contributors
  Publish

anotheruser (1):
  Fix bug
```
</ExpandableCode>

### `--summary` `-s`

Only provide the commit count of each user.

<ExpandableCode title="git shortlog -s">
```bash
  1 anotheruser
  5 ninest
```
</ExpandableCode>

View more options on the [documentation for git shortlog](https://git-scm.com/docs/git-shortlog).

## Breakdown of commits per user

Use the command

<ExpandableCode>
```bash
git shortlog -s -n --all --no-merges
```
</ExpandableCode>

`--no-merges` ensures that merge commits are not counted.

The output of the command looks like

<ExpandableCode title="git shortlog -s -n --all --no-merges">
```bash 
  5 ninest
  1 anotheruser
```
</ExpandableCode>