---
title: NextBus SG
description: Bus timings in a simplified manner
updatedAt: 2021-12-27

icon: nextbus
linkedPages:
  - icon: github
    url: https://github.com/ninest/nextbussg
    title: GitHub
  - icon: appstore
    url: https://apps.apple.com/my/app/nextbus-sg/id1509167028
    title: App Store
  - icon: playstore
    url: https://play.google.com/store/apps/details?id=com.themindstorm.nextbussg
    title: Play Store
  - icon: web
    url: https://nextbus.now.sh
    title: Website
---

import mainView from './project/nextbussg/images/main-view.png'
import favorites from './project/nextbussg/images/favorites.png'

<div className="flex space-x-base">
  <Image src={mainView} height={2688} width={1242} />
  <Image src={favorites} height={2688} width={1242} />
</div>

I was never happy with the bus apps I used. All I needed was a list of bus timings in a simple interface. Since none of the existing solutions filled my needs, I decided to work on my own.

All other solutions required too many interactions, and it always used to take me a minute or more to find what I was looking for. It was quite frustrating to me that there was nothing that could get you the information you want at your fingertips.

<Alert title="Achievements" variant="primary" open>

My code received rave reviews by the [Learn Flutter Code](https://www.youtube.com/watch?v=IoueVJmXvsc) YouTube channel for the UI design and backend.

The project has 80+ stars on GitHub.

</Alert>

## Problems solved by NextBus SG

My app provides the key functionalities of a public transport app in a simplified yet powerful manner. While it looks simple, it comes with features no other bus app currently has.

1. **View timings and crowd of the next three buses**

   Each bus timing is color-coded based on the crowd.

2. **Rename bus stops**

   Sometimes bus stop names don’t make much sense to us humans. For instance, what’s the difference between _Bedok Station Exit A_ and _Bedok Station Exit B_? We don’t have to remember, because they can be changed to _Opposite Bedok Mall_ and _Bedok Mall_.

3. **Dark MRT map**

   While all apps have the MRT map, none have a dark map.

4. **Minimalist, clutter-free interface**

   NextBus SG shows you only the information you need – nothing more, nothing less.

import search from './project/nextbussg/images/search.png'
import dark from './project/nextbussg/images/dark.png'

<div className="flex space-x-base">
  <Image src={search} height={2688} width={1242} />
  <Image src={dark} height={2688} width={1242} />
</div>

## Technologies

I chose **Flutter** for its ease of use, great developer experience, and platform-agnostic development. I was able to release the app for iOS and Android rapidly.

**DataMall** and **Gov.SG** provide free APIs for public transport, bus timings, and other related data in Singapore.

The app is easily extensible to other countries because of the mini-backend it works off of.

## Next steps

I’m currently awaiting more feedback in order to improve the app further.
