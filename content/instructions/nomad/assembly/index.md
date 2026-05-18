---
title: "Assembly"
description: ""
summary: ""
date: 2020-10-06T08:48:45+00:00
lastmod: 2020-10-06T08:48:45+00:00
draft: false
weight: 40
toc: true

params:
  seo:
    title: ""
    description: ""
    canonical: ""
    robots: ""
---

## Soldering

If you do not have experience with soldering, please refer to this [Quick Start guide]({{< ref "/basics/soldering/solder-advice" >}}).
{{< callout context="note" title="Note" icon="outline/info-circle" >}}
All of the following steps need to be executed on both halves of the keyboard. This will not be pointed out every time again in the following instructions.
{{< /callout >}}
{{< callout context="note" title="Note" icon="outline/info-circle" >}}
Since the Nomad has a reversible PCB that is the same on both sides, we suggest having both PCBs next to each other with the top side also facing up. Make sure that you do not confuse them and to put all of the pieces on the correct side.
{{< /callout >}}

### Reset Buttons

Solder on the reset buttons to the top of the PCB.
![reset button](reset-pcb.png)

### TRRS Jacks

You will need to solder in the TRRS jacks on the same side as the reset button.
![trrs](trrs-pcb.png)

### Jumper

To make the reversible PCB work you need to connect jumpers on both halves. Connect all of the marked jumpers around the controller on the same side where the TRRS jack and reset button are located.
![jumper](jumper-pcb.png)

### Hotswap Sockets

{{< callout context="note" title="Note" icon="outline/info-circle" >}}
Turn around both PCBs now!
{{< /callout >}}
Solder the hotswap sockets onto the back of the PCB. You can find instructions for that [here]({{< ref "/basics/soldering/hotswap#choc-low-profile" >}}).
![hs-sockets](hotswap-pcb.png)

### Diodes

Solder the diodes to the same side as the hotswap sockets. Read through [here]({{< ref "/basics/soldering/smd#single-diodes" >}}) if you have not done that before.
![diodes](diodes-pcb.png)

### Controller Standoffs

{{< callout context="note" title="Note" icon="outline/info-circle" >}}
Turn around both PCBs now!
{{< /callout >}}
Next solder the standoffs for your controller. They go on the same side as the TRRS jack and reset button. Read through [here]({{< ref "/basics/soldering/promicro#ic-hotswap-sockets" >}}) if you have not done that before.
![standoffs](standoffs-pcb.png)

### Controller

Before soldering the controllers onto the PCB we should get your controller flashed.
![helios](helios.png)

You can find the firmware <a href="https://files.keeb.supply/firmware/Nomad/" >here<a>. And instructions on how to flash a controller [here]({{< ref "/basics/firmware/flashing" >}}).<br>

Plug in your controller now and see if it pops up in [VIAL]({{< ref "/basics/firmware/viaandvial#VIAL" >}}).
![vial](vial.png)

If it does you have successfully flashed your controller.

If your controller is working, you can solder it in. Instructions on how to do that can be found [here]({{< ref "/basics/soldering/promicro#promicro" >}}). When you have the PCB in front of you, the USB port should go to the top of the PCB. You should not see the components of the controller, when it is sitting on the PCB.
![controller](controller-pcb.png)

When you have your controller soldered in, it is good practice to do a [matrix test]({{< ref "/basics/firmware/viaandvial#matrix-testing" >}}). Since the Nomad is a split keyboard, you need to plug in the two halves together using the TRRS cable.
{{< callout context="note" title="Note" icon="outline/info-circle" >}}
Do not hotplug the TRRS cable, when your controllers are plugged into your PC. This can and will damage the board. Always unplug the keyboard from the PC, before plugging the TRRS cable in/out.
{{< /callout >}}
![matrix](matrix.png)

## Final Assembly

Start by putting on the rubber feet. We provide 4 feet per side which you can place wherever you want.
![feet](feet-pcb.png)

After that put the PCB inside the case.
![case](case-pcb.png)

Insert the switches through the case into the PCB.
![switches](switches-pcb.png)

Screw the standoffs into the PCB.
![standoffs](standoffs-2-pcb.png)

Remove the protective film from the acryl, lay it ontop of the standoffs and put screws into them.
![accrlic](acrylic-pcb.png)

Put on keycaps.
![caps](keycaps-pcb.png)

And your Nomad keyboard is done!
![nomad-full-board](cover.png)
