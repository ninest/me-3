---
title: Direct Contact
description: WhatsApp message someone without saving them as a contact

createdAt: 2021-01-21
updatedAt: 2021-01-21

icon: directcontact
linkedPages:
  - icon: github
    url: https://github.com/ninest/direct-contact
    title: GitHub
  - icon: web
    url: https://directcontact.vercel.app/
    title: Website
---

import empty from './mini-project/direct-contact/images/empty.png'
import filled from './mini-project/direct-contact/images/filled.png'

Direct Contact allows you start chats on WhatsApp without saving phone numbers.

<div className="flex space-x-base">
  <Image src={empty} height={1314} width={900} />
  <Image src={filled} height={1314} width={900} />
</div>

I created this mini web app for my dad, who often has to contact people as part of his job. To start chats on WhatsApp, we have to save the number as a contact, which in turn ends up cluttering our contacts list. The app enables enables messaging people on WhatsApp without having to create a contact for them.

This is a progressive web app, so it can be installed as a mobile app with the "Add to home screen feature" on Safari or Chrome.
