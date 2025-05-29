---
title: "Assembly"
description: ""
lead: ""
date: 2020-10-06T08:48:45+00:00
lastmod: 2020-10-06T08:48:45+00:00
draft: false
images: []
menu:
  nomad:
    parent: "nomad"
weight: 40
toc: true
---

## Soldering

If you do not have experience with soldering, please refer to this [Quick Start guide]({{< ref "/basics/soldering/solder-advice" >}}).
{{< alert icon="💡" text="All of the following steps need to be executed on both halves of the keyboard. This will not be pointed out every time again in the following instructions." />}}
{{< alert icon="💡" text="Since the Nomad has a reversible PCB that is the same on both sides, we would suggest having both PCBs next to each other with the top side also facing up. Make sure that you do not confuse them and to put all of the pieces on the correct side." />}}

### Reset Buttons

Solder on the reset buttons to the top of the PCB..
![reset button]()

### TRRS Jacks

You will need to solder in the TRRS jacks on the same side as the reset button.
![trrs]()

### Jumper

To make the reversible PCB work you need to connect jumpers on both halfes. Connect all of the marked jumpers around the controller on the same side as the TRRS jack and reset button are located.
![jumper]()

### Hotswap Sockets

{{< alert icon="💡" text="Turn around both PCBs now!" />}}
Solder on the hotswap sockets to the back of the PCB. You can find instructions for that [here]({{< ref "/basics/soldering/hotswap#choc-low-profile" >}}).
![hs-sockets]()

### Diodes

Solder on the diodes on the same side as the hotswap sockets. Read through [here]({{< ref "/basics/soldering/smd#diodes" >}}) if you have not done that before.
![standoffs]()

### Controller Standoffs

{{< alert icon="💡" text="Turn around both PCBs now!" />}}
Next solder on the standoffs for your controller. They go on the same side as the TRRS jack and reset button. Read through [here]({{< ref "/basics/soldering/promicro#ic-hotswap-sockets" >}}) if you have not done that before.
![standoffs]()

### Controller

Before soldering the controllers onto the PCB we should get your controller flashed.
![helios](helios.png)

You can find the firmware <a href="https://files.keeb.supply/firmware/nomad/" >here<a>. And instructions on how to flash a controller [here]({{< ref "/basics/firmware/flashing" >}}).<br>

Plug in your controller now and see if it pops up in [VIAL]({{< ref "/basics/firmware/viaandvial#VIAL" >}}).
![vial]()

If it does you have successfully flashed your controller.

If your controller is working, you can solder it in. Instructions on how to do that can be found [here]({{< ref "/basics/soldering/promicro#promicro" >}}). When you have the PCB in front of you, the USB port should go to the top of the PCB. You should not see the components of the controller, when it is sitting on the PCB.
![controller]()

When you have your controller soldered in, it is good practice to do a [matrix test]({{< ref "/basics/firmware/viaandvial#matrix-testing" >}}). Since the Sweep is a split keyboard, you need to plug in the two halves together using the TRRS cable.
{{< alert icon="💡" text="Do not hotplug the TRRS cable, when your controllers are plugged into your PC. This can and will damage the board. Always unplug the keyboard from the PC, before plugging the TRRS cable in/out." />}}
![matrix]()

## Final Assembly

Start by putting on the rubber feet. We provide 4 feet per side which you can place wherever you want.
![feet]()

After that put the PCB inside the case.
![switches]()

Insert the switches through the case into the PCB.
![caps]()

Screw the standoffs into the PCB.
![caps]()

Remove the protective film from the acryl, lay it ontop of the stanoffs and put screws into them.
![caps]()

Put on keycaps.
![caps]()

And your Sweep keyboard is done!
![sweep-full-board]()
