---
title: Unique Code
description: Fancy fonts with plain text
updatedAt: 2021-12-27

icon: uniquecode
linkedPages:
  - icon: github
    url: https://github.com/ninest/unique-code
    title: GitHub
  - icon: web
    url: https://uniquecode.vercel.app/
    title: Website
---

Unique Code lets you copy and paste 𝗿𝗶𝗰𝗵 𝒕𝒆𝒙𝒕 into fields that only support plain text.


import one from './mini-project/uniquecode/images/1.png'
import two from './mini-project/uniquecode/images/2.png'

<div className="flex space-x-base">
  <Image src={one} height={826} width={450} />
  <Image src={two} height={826} width={450} />
</div>

For example,

- Bold sans-serif: 𝗧𝗵𝗶𝘀 𝘁𝗲𝘅𝘁 𝗶𝘀 𝗳𝗮𝗻𝗰𝘆
- Italics serif: 𝑻𝒉𝒊𝒔 𝒕𝒆𝒙𝒕 𝒊𝒔 𝒇𝒂𝒏𝒄𝒚
- Light cirlces: ⓉⒽⒾⓈ ⓉⒺⓍⓉ ⒾⓈ ⒻⒶⓃⒸⓎ
- Dark squares: 🆃🅷🅸🆂 🆃🅴🆇🆃 🅸🆂 🅵🅰🅽🅲🆈

However, the use of these "unicode fonts" may impede accessibility. Screen readers can read "𝗛" as "mathematical character bold H" rather than "H". 

To make this website, I took reference from the following websites:

- [victoria.dev/blog/a-unicode-substitution-cipher-algorithm/](https://victoria.dev/blog/a-unicode-substitution-cipher-algorithm/)
- [mothereff.in/html-entities](https://mothereff.in/html-entities)
- [www.rapidtables.com/convert/number/hex-to-decimal.html](https://www.rapidtables.com/convert/number/hex-to-decimal.html)
- [boldtext.io/](https://boldtext.io)

