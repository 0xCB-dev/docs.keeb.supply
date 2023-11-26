---
title : "Assembly"
description: ""
lead: ""
date: 2020-10-06T08:48:45+00:00
lastmod: 2020-10-06T08:48:45+00:00
draft: false
images: []
menu:
  ampersand:
    parent: "ampersand"
weight: 40
toc: true
---

## Install Daughterboard

Use M2 screws to attach daughterboard (components facing up).
![Daughterboard](2.jpg)

## JST Cable

Run JST cable from daughterboard along the channel in the weight and through the cutout into the case.
![JST](3.jpg)

## Attach Weight to Case

Use M3 screws to attach the weight to the case. Alignment posts ensure the weight cannot move as you are installing it.
![Case Screws](4.jpg)

## Install Feet

Attach adhesive feet in cutouts on the underside of the board.
{{< alert icon="💡" text="Production model uses smaller feet than shown." />}}
![Feet](5.jpg)

## Build PCB

Solder switches into any of the compatible layouts.
You can find Instructions on how to solder [here]({{< ref "basics/soldering/tht" >}}).
![Layouts](7.jpg)

Stabilizers should be PCB-mounted clip-ins (eg TX stabilizers). Once the PCB is built, the oring can be stretched around the perimeter of the assembly, fitting between the plate and PCB.
![PCB and oring assembly](6.jpg)

## Connect the PCB and Daughterboard

Connect the PCB to the daughterboard using the JST connector.
![Connect PCB](8.jpg)

## Insert PCB assembly into the case

To insert the PCB assembly into the case, pull the assembly towards you and downwards, putting pressure against the blockers. The oring should push up into the PCB/plate. Once the oring along bottom row is sitting on its posts, press the top row down into the case until the oring there is also sitting on its posts.
{{< alert icon="💡" text="To remove the PCB, pull the top row switches towards you, putting pressure against the blockers. The top row should pop out. Alternatively, use a keycap puller to pull the plate from around the backspace switch cutout." />}}
![Insert](9.jpg)

## Customise layout/keymap in Vial

Download/install/run Vial. Select the layout in which switches were soldered. Customise keymap/QMK settings to taste. See [here]({{< ref "basics/firmware/viaandvial#vial" >}}) for help on how to accomplish that.
{{< alert icon="💡" text="PCBs come preflashed with Vial compatible firmware." />}}
![Vial](10.png)
