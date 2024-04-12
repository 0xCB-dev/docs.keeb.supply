---
title: "Assembly"
description: ""
lead: ""
date: 2020-10-06T08:48:45+00:00
lastmod: 2020-10-06T08:48:45+00:00
draft: false
images: []
menu:
  dasbob:
    parent: "dasbob"
weight: 40
toc: true
---

## Soldering

There are a few things you absolutely need to solder and a few which are optional. If you do not have experience with soldering, please referr to this [Quick Start guide]({{< ref "/basics/soldering/solder-advice" >}}).

### Required

All of the steps below need to be done on the right and left half of the board.

{{< alert icon="💡" text="The reset buttons, trrs jacks and controllers all go on the top side of the keyboard. That is the site, where the HotSwap sockets are NOT on." />}}

#### Reset Buttons

Solder on the reset buttons.
![reset buttons](reset-pcb.png)

#### TRRS Jacks

Solder on the TRRS Jacks.
![reset buttons](trrs.png)

#### Controller

Before soldering the controllers onto the PCB we should get your controller ready.
![pluto](pluto.jpg)

<br>You have to flash the controller. You can find the firmware <a href="https://files.keeb.supply/firmware/dasbob/" >here<a>. And instructions on how to flash a controller [here]({{< ref "/basics/firmware/flashing" >}}).<br>
![qmk](qmk.jpg)

<br> Plug in your controller now and see if it pops up in [VIAL]({{< ref "/basics/firmware/viaandvial#VIAL" >}}).
![vial](vial.jpg)

<br>If it does you have successfully flashed your controller and can move on.
![]()

Please solder in the headers for the controller. You can find instructions for that [here]({{< ref "/basics/soldering/promicro" >}}).
![headers]()

<br>If your controller is working, you can solder it in. Instructions on how to do that can be found [here]({{< ref "/basics/soldering/promicro#promicro" >}}). When you have the PCB in front of you, the USB port should go to the top of the PCB. You should not see the components of the micro controller, when it is sitting in the PCB.
![controller](helios.png)

<br>When you have your controller soldered in, it is good practice to do a [matrix test]({{< ref "/basics/firmware/viaandvial#matrix-testing" >}}). Since DASBOB is a split keyboard, you need to plug in the two halves together using the TRRS Cable.
{{< alert icon="💡" text="Do not hotplug the TRRS Cable, when your controllers are plugged into your PC. This can and will damage the board. Always unplug the keyboard from the PC, before plugging the TRRS Cable in." />}}
![matrix]()

<br>You also need to solder in switches, but we will go over those once we get to the point later in the assembly process.

### Optional

#### HotSwap Sockets

You can solder in HotSwap Sockets. You can find instructions for that [here]({{< ref "/basics/soldering/hotswap#choc-low-profile" >}}).
![kailh]()

#### Buzzer

<br>The PCB also supports a buzzer. You can find information on speakers [here]({{< ref "/basics/hardware/speakers" >}}). The speaker is located underneath the controllers. There are two buzzer footprints, but only one buzzer will work at a time.
![buzzer](buzzer.png)

<br>This is everything you need to solder for now!
