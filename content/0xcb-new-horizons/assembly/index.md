---
title : "Assembly"
description: ""
lead: ""
date: 2020-10-06T08:48:45+00:00
lastmod: 2020-10-06T08:48:45+00:00
draft: false
images: []
menu:
  0xcb-new-horizons:
    parent: "0xcb-new-horizons"
weight: 40
toc: true
---

## PCB

Let's start the assembly with the PCB.

### Controller

Before soldering anything on the PCB we should get your controller ready.
![pluto](pluto.jpg)

<br>You have to flash the controller. You can find the firmware <a href="https://files.keeb.supply/firmware/" >here<a>. And instructions on how to flash a controller [here]({{< ref "/basics/firmware/flashing" >}}).<br>
![qmk](qmk.jpg)

<br> Plug in your controller now and see if it pops up in [VIAL]({{< ref "/basics/firmware/viaandvial#VIAL" >}}).
![vial](vial.jpg)

<br>If it does you have successfully flashed your controller and can move on.
![]()

### Soldering

There are a few things you absolutely need to solder and a few which are optional. The PCB comes with presoldered SMD components, so the amount of soldering is kept to a minimum

#### required

Please solder in the headers for the controller. You can find instructions for that [here]({{< ref "/basics/soldering/promicro" >}}). The headers go on the front. That is the side without a graphic.
![headerbottom](headerbottom.jpg)

<br>If your controller is working, you can solder it in. Instructions on how to do that can be found [here]({{< ref "/basics/soldering/promicro#promicro" >}}). When you have the PCB in front of you, the USB port should go to the top of the PCB. You should not see the components of the micro controller, when it is sitting in the PCB.
![all-soldered](all-soldered.jpg)

<br>When you have your controller soldered in, it is good practice to do a [matrix test]({{< ref "/basics/firmware/viaandvial#matrix-testing" >}}).
![matrix](matrix.jpg)

<br>You also need to solder in switches, but we will go over those once we get to the point later in the assembly process.

#### optional

{{< alert icon="💡" text="There are a few features of New Horizons, which you can only use if you soldered in the bottom header with 5 pins. These include the rotary encoder, speaker and LEDs. You need an Elite-C, Pluto, Nice-Nano, Helios, or other similar controllers to utilize these." />}}

<br>You can solder in MillMax-Sockets. You can find instructions for that [here]({{< ref "/basics/soldering/mill-max" >}}).
![millmax](millmax.jpg)

<br>You can solder in a rotary encoder. You can find instructions for that [here]({{< ref "/basics/soldering/ec11" >}}). The encoder goes on the top right of the PCB where your delete key would be located.
![rotary](rotary.jpg)

<br>The PCB also supports a speaker. You can find information on speakers [here]({{< ref "/basics/hardware/speakers" >}}). The speaker is located on the back of the PCB around the controller area.
![speaker](speaker.jpg)

<br>This is everything you need to solder for now!

## Assembly

### Bottom Plate

Let's start assembling the bottom plate with the acrylic feet. Place the feet on the side with the graphic. Use the M2x12mm screws for these and sandwich one big and one small foot together.
![feet](feet.jpg)

<br>From the other side of the bottom plate take the M2 nuts and screw them in.
![nut](nut.jpg)

<br>Do this for both sides of the bottom plate.
![feetboth](feetboth.jpg)

<br>Now just add the rubber feet onto the acryl feet and at the bottom onto the PCB and you are done.
![rubberfeet](rubberfeetplaced.jpg)

If you don't want a typing angel you can also just leave the acryl feet so that you have a 0 degree typing angle.

### PCB assembly

If you are beginning this step we expect you have a fully working PCB in front of you.

<br>For the next steps it's probably useful to open the KLE so you can check where you want everything layout wise. You can find ther here. PLS INSERT LINK

<br>You should start with the stabilisers. Depending on the layout you will need to put them in at different spots and in differenty quantities.
![stabiliser](stabiliser.jpg)

<br>After your stabilisers, you can screw in the M2x10 standoffs for the acryl cover.
![acrylstandoffs](acrylstandoffs.jpg)

<br>Now please screw in the M2x5 standoffs into the bottom side of the PCB.
![pcbstandoffs](pcbstandoffs.jpg)

<br>You need to install 6 of these standoffs. One in each corner of the PCB and two in the middle.
![standoffsall](standoffsall.jpg)

<br>Next you can install your switches. Start by just placing a few of them around the PCB to align the switch plate with it.
![switchesfew](switchesfew.jpg)

<br>After that you can put all of them in.
![switchesall](switchesall.jpg)

<br>If you MillMaxed your PCB you are done with the installation otherwise you will need to solder in the switches now.
![millmax](millmax.jpg)

<br>Put on the acrylic cover with the M2x4mm screws now.
![acrylcover](acrylcover.jpg)

<br>Now it is also a good time to test your PCB again. Do a matrix test and test out your encoder and LEDs. After that you can screw on the bottom plate.
![bottomscrew](bottomscrew.jpg)

<br>As a last step you can put on your keycaps and you are done!
![done](done.jpg)