---
title: Typer
description: The 10-second typing game
updatedAt: 2021-12-27

icon: typer
linkedPages:
  - icon: github
    url: https://github.com/ninest/typer
    title: GitHub
  - icon: web
    url:  https://typer.now.sh
    title: Website
---

Typer is a simple typing game to test out your typing speed and compete with friends.


import start from './mini-project/typer/images/start.png'
import game from './mini-project/typer/images/game.png'

<div className="flex space-x-base">
  <Image src={start} height={591} width={450} />
  <Image src={game} height={591} width={450} />
</div>

The game is quite simple. You start with 10 seconds, and for every word you type correctly, you get one second more, or two if you're lucky. There is also a chance of the text field becoming a password field to further increase the difficulty!

The website is a **progressive web app**, so it works offline and can be added to your home screen as an app.