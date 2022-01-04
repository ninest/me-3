---
title: Git Log
description: View a list of commits
seoDescription: Using git log

icon: git

updatedAt: 2022-01-04
createdAt: 2022-01-04

linkedResources:
  - type: website
    url: https://git-scm.com/docs/git-log
    title: Git log
  - type: website
    url: https://stackoverflow.com/q/13542213/8677167
    title: See a list of comments of my last N commits
---

<Alert primary title="Summary" open>

To see a summarized view of the previous commits, use

```bash
git log --oneline
```

</Alert>

`git log` Shoes a list of all commits including their hash, author, data, and message.

<ExpandableCode title="git log">

```shell
commit 2c6dceefade99a83198aceb3bb21eb85f43ffa71 (HEAD -> main, origin/main)
Author: ninest <parth.kabra@gmail.com>
Date:   Thu Dec 30 22:39:32 2021 +0800

    Fix type

commit 2e4f41bd5f3589b7c294f19604a8bb359b449920
Author: ninest <parth.kabra@gmail.com>
Date:   Thu Dec 30 22:23:00 2021 +0800

    Complete mini-projects section

commit e441503ceb30d5c1784e0b55ba62b945bd317fcf
Author: ninest <parth.kabra@gmail.com>
Date:   Thu Dec 30 22:10:00 2021 +0800

    Minor styling improvements
```

</ExpandableCode>

## Options

### `--oneline`

This will show a summarized view with the hash and commit message only

<ExpandableCode title="git log --oneline">
```shell 
d7163ec Fix themes
cff4bc8 Remove next-themes
e69a82c Add icons for previous posts
46ae287 Fix overscroll error
d342008 Add all blog posts
8eef0d2 Add some previous blog posts
6820037 Add /blog page
4fb9e8c Add README
46b0919 Add work experience and icons
```
</ExpandableCode>

### `-N`, where *N* is a number

Shows the last *N* commits. For example, `git log -5` will only show the last 5 commits, and `git log --oneline -5` will show a summarized view of the last 5 commits.

<ExpandableCode title="git log --oneline -5">
```bash
2c6dcee (HEAD -> main, origin/main) Fix type
2e4f41b Complete mini-projects section
e441503 Minor styling improvements
1ecd04c Add mini projects and section component
68b7d1f Add GA
```
</ExpandableCode>

View more options on the [documentation for git log](https://git-scm.com/docs/git-log).

