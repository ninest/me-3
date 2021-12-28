---
title: Remove Mac Screenshot Shadow
description: Enable and disable the shadow in cropped screenshots
icon: images
updatedAt: 2021-06-07
createdAt: 2021-06-07
---

<Alert variant="primary" title="Summary">

To **disable** the screenshot shadow, run

```bash
defaults write com.apple.screencapture disable-shadow -bool true; killall SystemUIServer
```

And to **enable** the screenshot shadow, run

```bash
defaults write com.apple.screencapture disable-shadow -bool false; killall SystemUIServer
```

</Alert>

By default, when you take a cropped screenshot of a window (with `command-shift-4`), the screenshot has a shadow:

import shadow from './mac/remove-screenshot-shadow/images/shadow.png'

<Image src={shadow} width={1032} height={548} />

To **disable** this shadow, run the following commands in Terminal:

```bash
defaults write com.apple.screencapture disable-shadow -bool true
killall SystemUIServer
```

Screenshots should not have the shadow anymore:

import noShadow from './mac/remove-screenshot-shadow/images/no-shadow.png'

<Image src={noShadow} width={920} height={436} />

To **re-enable** shadows on screenshots, run the following commands:

```bash
defaults write com.apple.screencapture disable-shadow -bool false
killall SystemUIServer
```
