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
![]()

<br>If you want to solder in MillMax-Sockets you should do that now! You can find instructions for that [here]({{< ref "/basics/soldering/mill-max" >}}).
![]()

<br>Please solder in the headers for the controller now. You can find instructions for that [here]({{< ref "/basics/soldering/promicro" >}}).
![]()

<br>If you want to install a rotary encoder into your PCB you can also do this now. You can find instructions for that [here]({{< ref "/basics/soldering/ec11" >}}).
![]()

<br>The PCB also supports a speaker. If you want you can also solder one in now. You can find information on speakers [here]({{< ref "/basics/hardware/speakers" >}}).
![]()

<br>This is everything you need to solder for now!

### Controller

Let's get your controller ready!
![]()

<br>You have to flash the controller. You can find the firmware <a href="https://github.com/0xCB-dev/0xCB-NewHorizons/releases" >here<a>. And instructions on how to flash a controller [here]({{< ref "/basics/firmware/flashing" >}}).<br>
![git](git.webp)

<br> Plug in your controller now and see if it pops up in [VIAL]({{< ref "/basics/firmware/viaandvial#VIAL" >}}).

<br>If your controller is working, you can solder it in. Instructions on how to do that can be found [here]({{< ref "/basics/soldering/promicro#promicro" >}}). When you have the PCB in front of you so that you can read the text on it, the USB port should go to the top of the PCB. You should not see the components of the micro controller, when it is sitting in the PCB.
![]()

<br>When you have your controller soldered in, it is good practice to do a [matrix test]({{< ref "/basics/firmware/viaandvial#matrix-testing" >}}).
![]()

<br>If all keys are working your PCB assembly is finised for now.
![]()







<br><br>And you are done with your 0xCB New Horizons!
![cover](cover.jpg)