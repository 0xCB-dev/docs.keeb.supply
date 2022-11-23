---
title: "Soldering advice"
description: "Here's some general soldering advice for you to get started!"
lead: "Here's some general soldering advice for you to get started!"
date: 2020-10-13T15:21:01+02:00
lastmod: 2020-10-13T15:21:01+02:00
draft: false
images: []
menu:
  basics:
    parent: "soldering"
weight: 10
toc: true
---

If you are completly new to soldering you might also like this [awesome guide by adafruit](https://learn.adafruit.com/adafruit-guide-excellent-soldering).

## Safety first

- wear eye protection when soldering
  - flux sometimes sputters and you don't want 350°C acid in you eye.
  - When using flush cutters the waste is nearly accelerated to earth escape velocity
    {{< alert icon="💡" text="keep the diode legs for hotswapping microcontrollers" />}}
- extract the solderfume (its really, really bad for your health)
- use lead free solder (lead...)

## It's easier with the right tools

Try to avoid cheap solder and flux as most of the time they will make your life harder.

Use some fine tipped soldering iron and not a gutter soldering iron

{{< alert icon="💡" text="If you are willing to invest / need a new soldering iron anyway, we can recommend the Pinecil V2 (We use them all the time and couldn't be happier)" />}}

Flushcutters are dope!

## Use the right temperature

You might be inclined to set your soldering iron way too hot to avoid cold joints and make it easier to solder bigger joints, but don't overdo it, as you can easily damage the PCB with too much heat.

![hot](toomuchheat.jpg)

## Flux, Flux, and more Flux

Flux is your friend!

It allows the solder to flow nicely and removes+prevents oxidation at the joint.

![chart](temperature.jpg)

## Use the right amount of solder

If you don't use enough solder it's hard to verify if your joint made a good connection. Likewise, is you use too much it's hard to verify that the solder has flown into the pad.

![joint](solderjoint.png)
