---
title : "ASSEMBLY"
description: ""
lead: ""
date: 2020-10-06T08:48:45+00:00
lastmod: 2020-10-06T08:48:45+00:00
draft: false
images: []
menu:
  totem:
    parent: "totem"
weight: 40
toc: true
---

## SOLDERING

Here is an overview of where and on which side each component needs to be soldered.<br />
![overview](overview.png)

### GENERAL

#### DIODES

The diodes needs to be soldered on the top of the PCB. Pay attention to their orientation: They have a small line on one side, which should be on the side the arrow on the PCB is facing to.<br />
![diodes](diodes.png)

<br />Apply a small amount of solder on one pad.
![diode_01](diode_01.jpg)

<br />Then use tweezers to place the diode on the pads and reheat the solder to secure the diode.
![diode_02](diode_02.jpg)

Now you can add solder to the second pad.

{{< alert icon="💡" text="There is one diode that isn't located in the grid. Take a look at the two outermost switches. There you will find one extra diode. Don't forget that one!" />}}

#### HOTSWAP SOCKETS

Here you can apply the same technique as used for the diodes: Apply some solder on one of the pads first.
![hotswap_01](hotswap_01.jpg)

<br />Then place the switch socket in the silk screen markings. The orientation matters here too. Especially if you plan on using the case.
![socket_dark](socket_dark.svg)
![hotswap_02](hotswap_02.jpg)

<br />Than reheat the solder. Apply some pressure with a pair of tweezers to make sure the socket is fully seated.
![hotswap_03](hotswap_03.jpg)

Now you can add solder to the second pad.

#### RESET BUTTON

Insert the button into the top of the PCB.
![reset_01](reset_01.jpg)

<br />We placed the fooprint a bit more towards the edge, than it's meant to be, to integrate it better into the case. Therefore the tiny stabilizer on the bottom of the switch doesn't touch the PCB anymore. Make sure it aligns with the PCB vertically, so it's oriented correctly.
![reset_02](reset_02.jpg)

<br />Then solder the four pins on the bottom to the PCB.
![reset_03](reset_03.jpg)
![]()

{{< alert icon="💡" text="Please clip off the legs of the button as short as possible. The case is designed to be as low profile as we can get so the tolerances are pretty tight." />}}

#### MICROCONTROLLER

{{< alert icon="💡" text="When you buy the kit through KeebSupply you will get preflashed controllers." />}}

<br />Place the microcontroller in it's place.
Apply some flux and try to hold the iron in an angle where you touch the pads of the microcontroller and the PCB, while adding solder.
![MCU_01](MCU_01.jpg)

<br />The pads on the back are a bit fiddly to solder, so you should add a lot of flux to the pads on the microcontroller first. Then apply the same technique as on the front: Try to touch the pads on the microcontroller and the PCB before adding solder.
![MCU_02](MCU_02.jpg)

{{< alert icon="💡" text="When you buy the bluetooth version of the kit, don't forget to solder the BT- and BT+ connections!." />}}

### WIRED

You will only need to solder these parts, when building the wired version of the TOTEM.

#### TRRS JACKS

Install the TRRS jack on the bottom side of the PCB. The place where you should insert it is marked with a white line.
![trrs_01](trrs_01.jpg)

<br />You may want to use some masking or kapton tape to hold it in place, since you need to solder it on the bottom.
![trrs_02](trrs_02.jpg)

<br />Then solder the pins on the bottom to the PCB.
![trrs_03](trrs_03.jpg)

{{< alert icon="💡" text="Please clip off the legs of the TRRS jack as short as possible. The case is designed to be as low profile as we can get so the tolerances are pretty tight." />}}

<br />Once you are done with the parts for the wired version you can skip to [here]({{< ref "/totem/assembly#cleaning" >}}) to continue.

### BLUETOOTH

You will only need to solder these parts, when building the wired version of the TOTEM.

#### POWER SWITCH

Apply a tiny bit of solder on the bigger, outer pads on top of the PCB.
![power_01](power_01.jpg)

<br />The power switch has some tiny knobs on its bottom, which fits into the PCB holes. Hold it in place with tweezers and than reheat the solder on the pad. After this you can solder the other pad and the three pins.
![power_02](power_02.jpg)

#### BATTERY

{{< alert icon="💡" text="Be incredibly careful when working with batteries! Don't let the leads touch each other!" />}}

<br />You probably need to shorten the cables and tin them, since the length needs to be pretty short, to fit.
![battery_01](battery_01.jpg)

{{< alert icon="💡" text="Before attaching the battery in any way to the PCB set the the power switch to off (right on both sides)." />}}

<br />You can see which cable needs to go in which eye by the silkscreen below the eyes. Red is + / Black is -.
![batt_face](batt_face.jpg)

<br />Attach the wires of the battery to the pads and solder them in.
![it_stings](it_stings.jpg)

<br />Once you are done with the parts for the bluetooth version you can skip to [here]({{< ref "/totem/assembly#cleaning" >}}) to continue.

### CLEANING

When you are done soldering, you should clean your PCB with isopropanol or PCB cleaner to make it look nice again.

{{< alert icon="💡" text="After you have cleaned the PCB it is good practice to check if your keyboard is working. Please do that now." />}}

## CASE

{{< alert icon="💡" text="We're using the transparent version of the case, so it's easier to see where everything goes, but it's identical to the black/white case." />}}

<br />First install the standoffs from below into the top of the case.
![case_top_standoffs](case_top_standoffs.jpg)

<br />Next screw them in from above.
![case_top_screws](case_top_screws.jpg)

<br />Now insert the board into the top and put in your switches. Be sure to support the hotswap sockets from below!
![switches](switches.jpg)

<br />Put in your rubber feet into the designated spots in the bottom piece.
![case_bottom_bump](case_bottom_bump.jpg)

<br />You can than attach the bottom to the case and screw it in.
![case_bottom_screws](case_bottom_screws.jpg)

## FINAL BUILD

This is how the final keyboard will probably look like.
![final](final.jpg)
