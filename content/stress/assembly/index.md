---
title : "Assembly"
description: ""
lead: ""
date: 2020-10-06T08:48:45+00:00
lastmod: 2020-10-06T08:48:45+00:00
draft: false
images: []
menu:
  stress:
    parent: "stress"
weight: 40
toc: true
---

## PCB

Let's start the assembly with the PCB. It does not matter if you have the barebones or case variant here.
![pcb](pcb.jpg)

<br>You can start by soldering on your hotswap sockets. You can find Instructions on how to solder hotswap sockets [here]({{< ref "basics/soldering/hotswap#choc-low-profile" >}}).
![hotswap](hotswap.jpg)

<br>Now solder on the 6 through hole buttons. They have an orientation, so you can't put them in the wrong way. Now just add a little bit of solder onto the back side.
![buttons](buttons.jpg)
{{< alert icon="💡" text="The buttons in the two different versions are different! The ones in the barebones kit are shorter than the ones in the case version. On the pictures here you will only see the long ones, but yours might be short..." />}}

<br>After that you can solder on your Controller. You can lay the RP2040 Zero directly onto the PCB and solder it on there. You can find Instructions on how to solder a controller directly onto the PCB [here]({{< ref "basics/soldering/promicro#pcb-mount" >}}).
![controller](controller.jpg)

<br>You should test your PCB now if it is fully working. The controllers come preflashed with a version of GP2040, a firmware for fightpads. Please read through the docs [here](https://gp2040-ce.info/#/) to make yourself familiar with the software.

A good tester can be found [here](https://gamepad-tester.com/).

<br>Skip to the next section depening on the kit you have:
<br>[barebones version]({{< ref "stress/assembly#barebones-assembly" >}})
<br>[case version]({{< ref "stress/assembly#case-assembly" >}})


## barebones assembly

If you have the barebones kit, assembly is almost finished now. As a next step you can put in your switches.
![barebones-switches](barebones-switches.jpg)

<br>After that put on your keycaps.
![caps](caps.jpg)

<br>Now you just have to put on your Rubber feet and your are done!
![rubberfeet](rubberfeet.jpg)

## case assembly

<br>You can start by pushing on the small rubber keycaps for the tht buttons at the top.
![case-buttons](case-buttons.jpg)

<br>In the case version you will have to put the switch plate between the switches and PCB. So take your top half of the case, and push in the switches through the switch plate into the PCB.
![case-switches](case-switches.jpg)

<br>Now that your top half of the case is ready, you can just snap it onto the bottom half. Since the magnets come preinstalled, you don't have to do anything here.
![case-bottom](case-bottom.jpg)

<br>And your Stress is finished!
![case-caps](case-caps.jpg)