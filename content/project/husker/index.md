---
title: Husker
description: A portal for Northeastern University students
updatedAt: 2021-09-01

icon: husker
linkedPages:
  - icon: github
    url: https://github.com/ninest/huskinfo
    title: GitHub
  - icon: web
    url: https://husker.now.sh
    title: Website
---

import mainDark from './project/husker/images/main-dark.png'
import mainLight from './project/husker/images/main-light.png'
import mobileDark from './project/husker/images/mobile-dark.png'
import mobileLight from './project/husker/images/mobile-light.png'

Northeastern University has great websites, but at times I felt that they lacking in terms speed and the level of useful information provided. For instance, I often found myself relying on Reddit for useful information.

<div className="flex space-x-base">
  <Image src={mobileDark} height={1752} width={900} />
  <Image src={mobileLight} height={1752} width={900} />
</div>

Another issue was that it was often difficult to access important links, such as the course registration portal or housing information, at a glance. 

<Image src={mainLight} width={3024} height={1752} />

I decided to make a website similar to [National Service Resources website](/projects/national-service-resources), which aims to be a consolidated portal of links, resources, and for students of Northeastern University.

<Image src={mainDark} width={3024} height={1752} />
