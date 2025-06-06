---
title: "Assembly"
description: ""
lead: ""
date: 2020-10-06T08:48:45+00:00
lastmod: 2020-10-06T08:48:45+00:00
draft: false
images: []
menu:
  hexapoda:
    parent: "hexapoda"
weight: 40
toc: true
---

## Soldering

If you do not have experience with soldering, please refer to this [quick start guide]({{< ref "/basics/soldering/solder-advice" >}}).

### HotSwap Sockets

The only part that you need to solder for the Hexapoda are the HotSwap sockets. You can find instructions for that [here]({{< ref "/basics/soldering/hotswap#choc-low-profile" >}}).
![hs-sockets](hexapoda-hs.png)

<br>This is everything you need to solder!

## Software

When you buy the Hexapoda kit through KeebSupply you will receive an almost fully soldered PCB. The PCB features a controller that is running [FAK](https://github.com/semickolon/fak-config). Since the Hexapoda has such a unique layout, we decided to not preflash the controllers with any firmware and layout. You will have to do that yourself. Instructions on that can be found [here]({{< ref "/basics/firmware/flashing#wch" >}}). An example for a keymap can be found [here](https://github.com/ThePurox/fak-config/tree/main/keyboards/hexapoda).
![hexapoda-controller](hexapoda-controller.png)

<br>When you have your keyboard flashed, it is good practice to do a matrix test with a [keytester](https://www.keyboardtester.com/tester.html). Use tweezers or other metallic objects for this and short the pads of each key.
![matrix](hexapoda-matrix.png)

If all of the keys are working properly, you can go ahead and continue with the assembly!

## Final Assembly

<br>If you have decided to get the 3D printed case, place the board into the case from the top and screw in the screws through the holes above the heat set inserts.
![screw-in-case](hexapoda-screw.png)

Place the rubber feet onto your PCB or if you use a case onto your 3D-Printed case.
You can customize how bouncy you want your Hexapoda to be. There are three stages of bounciness, set by how many rubber feet you install. It is the most bouncy, when you only install the feet on the bottom row and the outer feet on the top row of the board. If you feel your keyboard tilting to the side when pressing the outermost key, you should install the rubber feet in the outer most places. If you now fell your board tilting away from you when you hit the top row of keys, install the final two rubber feet.
![feet](hexapoda-feet.png)

<br>After that push in the switches.
![switches](hexapoda-switches.png)

<br>Then put on your keycaps.
![caps](hexapoda-caps.png)

<br>After that your Hexaopda is done!
