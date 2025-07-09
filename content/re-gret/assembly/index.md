---
title: "Assembly"
description: ""
lead: ""
date: 2020-10-06T08:48:45+00:00
lastmod: 2020-10-06T08:48:45+00:00
draft: false
images: []
menu:
  re-gret:
    parent: "re-gret"
weight: 40
toc: true
---

## Soldering

Depending on if you bought a wireless or wired version there will be different things that you need to solder. We'll start with what's the same between the versions and end with the differences.

### Both versions

#### Shift Register

The first component to solder is the shift register. This component has tiny pins and is quite difficult to get right. The dot on the shift register should align with the long line and R on the PCB. If you have not soldered this kind of component before we recommend looking up drag soldering and learning how to do that.
![shift register](pcb-shift-register.png)

#### Reset Button

Solder on the reset button next.
![reset button](pcb-reset.png)

#### HotSwap Sockets

Solder the HotSwap sockets next. You can find instructions for that [here]({{< ref "/basics/soldering/hotswap#choc-low-profile" >}}).
![reset button](pcb-hs-sockets.png)

{{< alert icon="💡" text="Turn over the PCB now!" />}}

#### Diodes

Solder the diodes next. Read through [here]({{< ref "/basics/soldering/smd#single-diodes" >}}) if you have not done that before.
![reset button](pcb-diodes.png)

#### Pogo Pin

Solder the top pogo pin that is marked as RST on the back next. Stick it through the PCB and add solder to it. You can add solder onto both sides of the PCB, choose whichever works best for you. Just make sure that the top part can still move.
![pogo pin](pcb-pogo.png)

#### Controller Standoffs

Next solder on the standoffs for your controller. You need to use IC sockets with MillMax pins for this board. Read through [here]({{< ref "/basics/soldering/promicro#header-pins" >}}) if you have not done that before.
![standoffs](pcb-ic-sockets.png)

Please skip to [this part]({{< ref "/re-gret/assembly#wireless" >}}) now if you are building a wireless Re-gret.
<br>Please skip to [this part]({{< ref "/re-gret/assembly#wired" >}}) now if you are building a wired Re-gret.

### Wired

All of the steps in this paragraph need to be done when assembling the wired variant of the Re-gret.

#### Controller

Before soldering the controller onto the PCB you should check if the correct firmware is on there.

You can find the VIAL firmware <a href="https://files.keeb.supply/firmware/Re-gret/" >here<a>. And instructions on how to flash a controller [here]({{< ref "/basics/firmware/flashing" >}}).

Plug in your controller now and see if it pops up in [VIAL]({{< ref "/basics/firmware/viaandvial#VIAL" >}}).
![re-gret-vial](re-gret-vial.png)

<br>If your controller is working, you can solder it in. Instructions on how to do that can be found [here]({{< ref "/basics/soldering/promicro#ic-hotswap-sockets" >}}).
![seeed-pcb](pcb-rp2040.png)

<br>When you have your controller soldered in, it is good practice to do a [matrix test]({{< ref "/basics/firmware/viaandvial#matrix-testing" >}}) with some tweezers.
![re-gret-matrix](re-gret-matrix.png)

You can now skip to the [final assembly]({{< ref "/re-gret/assembly#final-assembly" >}}) to continue.

### Wireless

All of the steps in this paragraph need to be done when assembling the wireless variant of the Re-gret.

#### Slide Switch

You will need to solder in the slide switch to be able to power the keyboard on or off. The switch is located on the back of the PCB.
![slide switch](pcb-slide.png)

#### Pogo Pin

To get power to the controller you need to solder the other pogo pin as well.
![pogo pin 2](pcb-pogo2.png)

#### Battery connector

{{< alert icon="💡" text="Make sure the polarity of the 401015 battery matches: the '+' contact on the PCB has to connect to the red lead. Be incredibly careful when working with batteries! Don't let the contacts touch each other when switching the connector polarity!" />}}

Solder the battery connector to the front of the PCB. After you have soldered the connector you can plug in the battery and tug it into the space underneath the controller.
{{< alert icon="💡" text="Please double check the polarity of the battery and PCB. If the polarities are not the same, change them accordingly." />}}
![battery connector](pcb-battery.png)

#### Controller

Before soldering the controller onto the PCB you should check if the correct firmware is on there.

The board comes with a precompiled zmk firmware found <a href="https://files.keeb.supply/firmware/Re-gret/" >here<a> based on the official Re-Gret ZMK module. You'll have to set up a ZMK user repo to modify your keymap. Intructions on how to do that are available <a href="https://zmk.dev/docs/user-setup" >here<a>. After that configure the Re-gret ZMK module following <a href="https://github.com/rschenk/zmk-keyboard-re-gret" >this<a>. And instructions on how to flash a controller are available [here]({{< ref "/basics/firmware/flashing" >}}).<br>

Solder the controller to the headers now using the MillMax pins. Instructions on how to do that can be found [here]({{< ref "/basics/soldering/promicro#ic-hotswap-sockets" >}}). When you have the PCB in front of you, the USB port should go to the top of the PCB. You should see the metal shield of the controller, when it is sitting on the PCB.
![seeed-ble-pcb](pcb-nrf.png)

You can now continue reading the final assembly to proceed.

## Final Assembly

Start by placing the 3D printed spacer on the PCB and then the FR4 plate.
![spacer and plate](pcb-stack.png)

Insert the switches that you want to use into the cutouts.
![switches](pcb-stack-switches.png)

Screw the 4 standoffs into the stack from the bottom.
![standoffs-pcb](pcb-stack-standoffs.png)

Remove the protective film of the acrylic cover, put it on the standoffs and screw it in from the top.
![acrylic-cover-pcb](pcb-stack-acryl.png)

Place the stack into the 3D printed case and screw it in using 8 screws.
![stack-in-case](pcb-stack-case.png)

Put the rubber feet onto the 3d printed case. We provide 6 feet which you can place wherever you want on the bottom side.
![feet](case-feet.png)

<br>Put on your preferred keycaps and your Re-gret is done!
![final-board](re-gret-done.png)
