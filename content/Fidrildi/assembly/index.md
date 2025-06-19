---
title: "Assembly"
description: ""
lead: ""
date: 2020-10-06T08:48:45+00:00
lastmod: 2020-10-06T08:48:45+00:00
draft: false
images: []
menu:
  firildi:
    parent: "firildi"
weight: 40
toc: true
---

## Soldering

There are only a few components that need to be soldered for this kit since it comes preassembled with LEDs, a reset button and diodes.

### Controller

Before soldering the controller onto the PCB you should check if the correct firmware is on there.

You can find the firmware <a href="https://files.keeb.supply/firmware/fidrildi/" >here<a>. And instructions on how to flash a controller [here]({{< ref "/basics/firmware/flashing" >}}).

Plug in your controller now and see if it pops up in [VIAL]({{< ref "/basics/firmware/viaandvial#VIAL" >}}).
![fidrildi-vial](fidrildi-vial.png)

<br>If your controller is working, you can solder it in. Instructions on how to do that can be found [here]({{< ref "/basics/soldering/promicro#promicro" >}}). When you have the PCB in front of you, the controller should go to the top of the PCB. You should see the components of the controller, when it is sitting on the PCB. You should not see any electronic components of the PCB itself.
{{< alert icon="💡" text="For the LEDs to work you need to solder in the extra pin 25 on the Helios! Please make sure the one inside pin on the bottom left of the controller is soldered as well." />}}
![helios-pcb](helios-pcb.png)

<br>When you have your controller soldered in, it is good practice to do a [matrix test]({{< ref "/basics/firmware/viaandvial#matrix-testing" >}}) with some tweezers.
![fidrildi-matrix](fidrildi-matrix.png)

### HotSwap Sockets

You should solder in the HotSwap sockets next. You can find instructions for that [here]({{< ref "/basics/soldering/hotswap#mx" >}}).
![hs-sockets](hs-sockets-pcb.png)

## Final Assembly

Start by putting on the rubber feet. We provide 6 feet which you should place in the marked areas on the pcb.
![feet](feet-pcb.png)

<br>After that push the switches into the switch plate.
![switches](plate-switch-stack.png)

<br>Put the acrylic middle layer onto the plate from the bottom.
![caps](acryl-stack.png)

<br>After that push the PCB onto the switch and acrylic stack. Make sure the PCB is lying against the acrylic with the side the controller is on.
![caps](final-stack.png)

<br>Put on your preferred keycaps and your Fiðrildi is done!
![final-board](final-board.png)
