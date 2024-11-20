---
title: "Assembly"
description: ""
lead: ""
date: 2020-10-06T08:48:45+00:00
lastmod: 2020-10-06T08:48:45+00:00
draft: false
images: []
menu:
  hexatana:
    parent: "hexatana"
weight: 40
toc: true
---

## Soldering

If you do not have experience with soldering, please refer to this [quick start guide]({{< ref "/basics/soldering/solder-advice" >}}).

### Controller

When you buy the Hexatana kit through KeebSupply you will receive a preflashed 0xCB Gemini controller. If you want you can test your controller before soldering it in. Just plug it in to your computer and see if it pops up in [VIAL]({{< ref "/basics/firmware/viaandvial#VIAL" >}}).
![gemini](gemini.png)

<br>If your controller is working, you can solder it in. Instructions on how to do that can be found [here]({{< ref "/basics/soldering/promicro#pcb-mount" >}}). Place the PCB in front of you, with the side that the diodes are on facing upwards. Place the controller onto the PCB with the USB port also facing upwards.
![controller](hexatana-gemini-soldered.png)
{{< alert icon="💡" text="Make sure to also solder the one pin thats not on the outer edge. That pin is responsible for the RGB effects. Let solder flow through from the top until you see it coming out of the bottom." />}}

<br>When you have your controller soldered in, it is good practice to do a [matrix test]({{< ref "/basics/firmware/viaandvial#matrix-testing" >}}) in VIAL. Use tweezers or other metallic objects for this and short the pads of each key.
![matrix](hexatana-matrix.png)

If all of the keys are working properly, you can go ahead and continue with the assembly!

### HotSwap Sockets

You have to solder in HotSwap Sockets. You can find instructions for that [here]({{< ref "/basics/soldering/hotswap#choc-low-profile" >}}).
![hs-sockets](hexatana-hs.png)

<br>This is everything you need to solder!

## Final Assembly

<br>If you have decided to get the 3D printed case, place the board into the case from the top and screw in the screws through the holes above the heat set inserts.
![screw-in-case](hexatana-case-screw.png)

<br>Place the rubber feet onto your PCB or if you use a case onto your 3D-Printed case.
![hexatana-feet](hexatana-feet.png)

<br>After that push in the switches.
![switches](hexatana-switches.png)

<br>Then put on your keycaps.
![caps](hexatana-caps.png)

<br>After that your Hexatana is done!
