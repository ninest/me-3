---
title: Holt Soundboard
description: Brooklyn Nine-Nine characters soundboard
updatedAt: 2021-12-27

icon: ninenine
linkedPages:
  - icon: github
    url: https://github.com/ninest/holt-soundboard-web
    title: Website GitHub
  - icon: github
    url: https://github.com/ninest/holt-soundboard-mobile
    title: Mobile App GitHub
  # - icon: playstore
  #   url: https://play.google.com/store/apps/details?id=com.themindstorm.nextbussg
  #   title: Play Store
  - icon: web
    url: https://nine-nine.now.sh
    title: Website
---

import main from './project/ninenine/images/main.png'
import favorites from './project/ninenine/images/favorites.png'

<div className="flex space-x-base">
  <Image src={main} height={2143} width={1242} />
  <Image src={favorites} height={2143} width={1242} />
</div>

This was my first successful web and mobile app, that enabled me to learn all of what it takes to publish on the Play Store and App Store.

import desktop from './project/ninenine/images/desktop.png'

<Image src={desktop} height={2257} width={4458} />

<Alert title="Achievements" variant="primary" open>

The Android app garnered over **12,000** installs.

</Alert>

## Why I created it

**Brooklyn Nine-Nine** has always been my favorite show, and I was interested in an app one of the characters created. In Season 5, Gina Linetti created a soundboard app for Captain Raymond Holt.

I tried the existing "Holt Soundboard" apps, but all of them fell short of my expectations. I decided to learn web and app development to try and make my own. It indeed turned out quite well, garnering over 12,000 installs in the Play Store.

## Technologies

The web app was first written in plain HTML, CSS, and JavaScript, but as I grew as a developer, I realized that I could release new features faster and easier by transitioning to a frontend framework. I decided on **Vue** as my first framework for its ease of use, but I for this particular project, I used **Nuxt**, a framework on Vue, which provides more features out of the box including search-engine optimization.

I chose **Flutter** for the mobile app for its ease of use, great developer experience, and platform-agnostic development. I was able to release the app for iOS and Android with minimal effort.

## Current status

I realized later that the soundbites are copyrighted from the production studio of the show, NBC. After carrying out further research, I found out that using the sounds in my app does not come under fair use. I decided to un-publish the app until I am able to secure permissions.
