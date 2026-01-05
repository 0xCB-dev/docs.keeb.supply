---
title: "Assembly"
description: ""
lead: ""
date: 2020-10-06T08:48:45+00:00
lastmod: 2020-10-06T08:48:45+00:00
draft: false
images: []
menu:
  forager:
    parent: "forager"
weight: 40
toc: true
---

## Soldering

{{< alert icon="💡" text="All components for the Forager are located on the same side." />}}

### HotSwap-Sockets

Solder on the hotswap sockets. You can find instructions for that [here]({{< ref "/basics/soldering/hotswap#choc-low-profile" >}}).
![hotswap](pcb-hs.png)

### Microcontroller

{{< alert icon="💡" text="When you buy the kit through KeebSupply you will get preflashed controllers. The controller with the yellow dot on the top is the controller for the left side!!! Orientation is very important here!" />}}

<br>After that you just have to solder on your controller. You can lay the Seeed XIAO directly onto the PCB and solder it on there. You can find instructions on how to solder a controller directly onto the PCB [here]({{< ref "basics/soldering/promicro#pcb-mount" >}}).
![microcontroller](pcb-controller.png)

{{< alert icon="💡" text="Don't forget to solder the circled BT+ connection on the underside of the Xiao!." />}}
![backpins](pcb-controller-bat.png)

### Battery

{{< alert icon="💡" text="Be incredibly careful when working with batteries! Don't let the leads touch each other!" />}}

For the Forager you can either use the ez mate push connector to easily connect the battery without soldering, or solder the battery to the two pads right next to it.

<br />You probably need to shorten the cables of the 401230 lithium polymer battery and tin them if you decide to solder it, since the length needs to be pretty short, to fit.
![battery_01](battery.png)

<br />You can see which cable needs to go onto which pad by the silkscreen. Red is + / black is -.
![batt_face](pcb-battery-pins.png)

<br />Attach the wires of the battery to the pads and solder them in.
![it_stings](pcb-battery.png)

### Testing

Once you have soldered everything it is good practice to do a matrix test. You can do that [here](https://www.keyboardtester.com/tester.html).
![tester](keyboard-tester.png)

## Case

First place the switch plate on top of the side of the PCB without components. Make sure that the countersunk screw holes are at the top.
![case_top_plate](case-pcb-plate.png)

<br />Next push in the switches and screw in the switch plate.
![case_top_switches](case-switches.png)

<br />Now put on the bottom piece of the case and screw it in.
![case_bottom](case-bottom.png)

<br />Put in your rubber feet onto the bottom piece. Make sure to leave space for the tenting feet, if you want to use those.
![case_bottom_feet](case-bottom-rubber-feet.png)

<br />Push on the keycaps you want to use.
![case_top_caps](case-caps.png)

<br />Attach the 4 tenting feet if you want to use those.
![case_bottom_tenting](case-tenting.png)

<br />And you are done with your forager!
![final](case-done.png)
