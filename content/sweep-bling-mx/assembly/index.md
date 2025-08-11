---
title: "Assembly"
description: ""
lead: ""
date: 2020-10-06T08:48:45+00:00
lastmod: 2020-10-06T08:48:45+00:00
draft: false
images: []
menu:
  sweep-bling-mx:
    parent: "sweep-bling-mx"
weight: 40
toc: true
---

## Soldering

If you do not have experience with soldering, please refer to this [Quick Start guide]({{< ref "/basics/soldering/solder-advice" >}}).
{{< alert icon="💡" text="Since the PCBs are reversible, make sure that you are soldering on different sides right from the beginning!" />}}
{{< alert icon="💡" text="All of the following steps need to be executed on both halves of the keyboard. This will not be pointed out every time again in the following instructions." />}}

### General Assembly

First we will solder the parts that are the same on both the wired and wireless variants.

#### Reset Buttons

Solder on the reset buttons.
![reset button](reset-pcb.png)

#### Hotswap Sockets

Turn over the PCB and solder on the hotswap sockets. You can find instructions for that [here]({{< ref "/basics/soldering/hotswap#choc-low-profile" >}}).
![hs-sockets](hs-sockets-pcb.png)

#### Solder Jumper

Solder the jumpers around the controller area on each half. make sure to solder the jumpers on the side the hotswap sockets are on.
![jumper](jumper-pcb.png)

Please skip to [this part]({{< ref "/sweep-bling-lp/assembly#wireless" >}}) now if you are building a wireless Sweep.
<br>Please skip to [this part]({{< ref "/sweep-bling-lp/assembly#wired" >}}) now if you are building a wired Sweep.

### Wireless

All of the steps in this paragraph need to be done when assembling the wireless variant of the Sweep.

#### Slide Switch

You will need to solder in the slide switch to be able to power the keyboard on or off. The switch is located on the back of the PCB.
![slide switch](slide-switch-pcb.png)

#### Controller Standoffs

Next solder on the standoffs for your controller. You need to use IC sockets with MillMax pins for this board. Read through [here]({{< ref "/basics/soldering/promicro#ic-hotswap-sockets" >}}) if you have not done that before.
![standoffs](wireless-sockets.png)

#### Batteries

If you bought the battery that we suggested, the fit will be quite tight. It's easiest if you slide it in from the top, since pushing it down will not work. Solder in the batteries on the marked pins at the top.
![batteries](battery-pcb.png)

#### Controller

Before soldering the controllers onto the PCB we should get your controller flashed.
![nice!nano](nice!nano.png)

Depending on which controller you use you will have to go about flashing them differently. You'll have to set up a ZMK user repo to build your firmware. Intructions on how to do that are available <a href="https://zmk.dev/docs/user-setup" >here<a>. During the <a href="https://zmk.dev/docs/user-setup#keyboard-selection" >keyboard selection step<a> select the Cradio/Sweep. And instructions on how to flash a controller are available [here]({{< ref "/basics/firmware/flashing" >}}).<br>

Solder the controller to the headers now. Instructions on how to do that can be found [here]({{< ref "/basics/soldering/promicro#promicro" >}}). When you have the PCB in front of you, the USB port should go to the top of the PCB. You should not see the components of the controller, when it is sitting on the PCB.
![nice!nano-pcb](nice!nano-pcb.png)

You can now skip to the [Final Assembly]({{< ref "/sweep-bling-lp/assembly#final-assembly" >}}) to continue.

### Wired

All of the steps in this paragraph need to be done when assembling the wired variant of the Sweep.

#### TRRS Jacks

You will need to solder in the TRRS jacks.
![trrs](trrs-pcb.png)

#### Controller Standoffs

Next solder on the standoffs for your controller. Read through [here]({{< ref "/basics/soldering/promicro" >}}) if you have not done that before.
![standoffs](wired-sockets.png)

#### Controller

Before soldering the controllers onto the PCB we should get your controller flashed.
![helios](helios.png)

You can find the firmware <a href="https://files.keeb.supply/firmware/sweep-bling/" >here<a>. And instructions on how to flash a controller [here]({{< ref "/basics/firmware/flashing" >}}).<br>

Plug in your controller now and see if it pops up in [VIAL]({{< ref "/basics/firmware/viaandvial#VIAL" >}}).
![vial](sweep-vial.png)

If it does you have successfully flashed your controller.

If your controller is working, you can solder it in. Instructions on how to do that can be found [here]({{< ref "/basics/soldering/promicro#promicro" >}}). When you have the PCB in front of you, the USB port should go to the top of the PCB. You should not see the components of the controller, when it is sitting on the PCB.
![controller](helios-pcb.png)

When you have your controller soldered in, it is good practice to do a [matrix test]({{< ref "/basics/firmware/viaandvial#matrix-testing" >}}). Since the Sweep is a split keyboard, you need to plug in the two halves together using the TRRS cable.
{{< alert icon="💡" text="Do not hotplug the TRRS cable, when your controllers are plugged into your PC. This can and will damage the board. Always unplug the keyboard from the PC, before plugging the TRRS cable in/out." />}}
![matrix](sweep-matrix.png)

You can now continue reading the Final Assembly to proceed.

## Final Assembly

Screw the standoffs into the switch plates.
![switch-plates](switch-plate-and-standoff.png)

After that push the switches through the switch plate into the PCB.
![switches](switch-assembly.png)

Place the bottom plates onto the standoffs and screw them in from the bottom.
![bottom](bottom-plate-screws.png)

After that push the switches through the switch plate into the PCB.
![feet](bottom-plate-feet.png)

As a last step put on your keycaps.
![caps](caps.png)

And your Sweep keyboard is done!
![sweep-full-board](cover.png)
