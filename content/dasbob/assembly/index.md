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

There are a few things you absolutely need to solder and a few which are optional. If you do not have experience with soldering, please refer to this [Quick Start guide]({{< ref "/basics/soldering/solder-advice" >}}).

### Required

All of the steps below need to be done on the right and left half of the board.

{{< alert icon="💡" text="The reset buttons, trrs jacks and controllers all go on the top side of the keyboard. That is the side, where the HotSwap sockets are NOT on." />}}

#### Reset Buttons

Solder on the reset buttons.
![reset buttons](reset-pcb.png)

#### TRRS Jacks

Solder on the TRRS Jacks.
![reset buttons](trrs.png)

#### Jumper

There is a jumper located below the controller. You will have to solder the wired or bluetooth jumper depending if you use a wired or wireless microcontroller.
![jumper](jumper.png)

#### Controller

Before soldering the controllers onto the PCB we should get your controller flashed.
![pluto](pluto.jpg)

<br>You can find the firmware <a href="https://files.keeb.supply/firmware/DASBOB/" >here<a>. And instructions on how to flash a controller [here]({{< ref "/basics/firmware/flashing" >}}).<br>
![qmk](qmk.jpg)

<br> Plug in your controller now and see if it pops up in [VIAL]({{< ref "/basics/firmware/viaandvial#VIAL" >}}).
![vial](vial.png)

If it does you have successfully flashed your controller.

<br>If your controller is working, you can solder it in. Instructions on how to do that can be found [here]({{< ref "/basics/soldering/promicro#promicro" >}}). When you have the PCB in front of you, the USB port should go to the top of the PCB. You should not see the components of the micro controller, when it is sitting in the PCB.
{{< alert icon="💡" text="The top two through holes, labelled + and -, are for batteries. If you are using your DASBOB with a wired connection, please do not solder these to the controller." />}}
![controller](helios.png)

<br>When you have your controller soldered in, it is good practice to do a [matrix test]({{< ref "/basics/firmware/viaandvial#matrix-testing" >}}). Since DASBOB is a split keyboard, you need to plug in the two halves together using the TRRS Cable.
{{< alert icon="💡" text="Do not hotplug the TRRS Cable, when your controllers are plugged into your PC. This can and will damage the board. Always unplug the keyboard from the PC, before plugging the TRRS Cable in." />}}
![matrix](matrix.png)

### Optional

#### HotSwap Sockets

You can solder in HotSwap Sockets. You can find instructions for that [here]({{< ref "/basics/soldering/hotswap#choc-low-profile" >}}).
{{< alert icon="💡" text="If you decide to not solder in the hot swap sockets, you will need to solder in the switches later!" />}}
![kailh](dasbob-hs.png)

#### Buzzer

The PCB also supports a buzzer. You can find information on speakers [here]({{< ref "/basics/hardware/speakers" >}}). The speaker is located underneath the controllers. There are two buzzer footprints, but only one buzzer will work at a time.
{{< alert icon="💡" text="With the default firmware that we provide, you need to solder the buzzer onto the left side!" />}}
![buzzer](buzzer.png)

<br>This is everything you need to solder for now!

## Final Assembly

Start by putting on the rubber feet. We provide 4 feet per side which you can place wherever you want.
![feet](dasbob-feet)

<br>After that push or solder in the switches.
![switches](dasbob-switches.png)

<br>As a last step put on your keycaps.
![caps](dasbob-caps.png)

<br>And your DASBOB keyboard is done!
![dasbob-full-board](dasbob-full-board.png)
