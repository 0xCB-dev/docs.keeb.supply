---
title : "Assembly"
description: ""
lead: ""
date: 2020-10-06T08:48:45+00:00
lastmod: 2020-10-06T08:48:45+00:00
draft: false
images: []
menu:
  0xcb-tutel-pad:
    parent: "0xcb-tutel-pad"
weight: 40
toc: true
---

[test]({{< ref "optional-supplies" >}})

<br>Let's start the assembly with the PCB.
![pcb](pcb.jpg)

<br>Start by soldering in the header-pins for the micro controller. You can use IC-hotswap sockets or the solder variant that most likely came with your micro controller.
![socketsalone](socketsalone.jpg)

<br>On the PCB you will see text, indicating on which side which component is supposed to go.
![text](text.jpg)

<br>Place the header pins inside the through holes on the PCB.
![pcbsockets](pcbsockets.jpg)

<br>Turn around the PCB. Pay close attention to the straightness of the headers.
![socketpins](socketpins.jpg)

<br>First solder only one pin per header.
![1pinsoldered](1pinsoldered.jpg)

<br>Then check if they are straight and a controller can fit on them. If they are not straight, heat up the one pin and realign them.
![sideview](sideview.jpg)

<br>You can go ahead and solder the rest if they are straight.
![allpinssoldered](allpinssoldered.jpg)

<br>Now solder in the reset button. Again, please pay attention on which side of the PCB you have to solder it on.
![button](button.jpg)

<br>Now is also a good time to solder in Mill-Max sockets if you want to.
![switchmillmax](switchmillmax.jpg)

<br>Next solder in the OLED. This goes on the opposite side of the controller. The OLED should sit straight in the cutout in the switch plate afterwards, so solder only one pin at first.
![oled1soldered](oled1soldered.jpg)

<br>Align the OLED before soldering the rest. Heat up the one pin and make the OLED straight.
![oledstraight](oledstraight.jpg)

<br>Now you can solder in the other 3 pins.
![oled4soldered](oled4soldered.jpg)

<br>Clip off the pins of the OLED on the other side. Otherwise the controller will not fit.
![oledclipped](oledclipped.jpg)

<br>You have to flash the controller. You can find the firmware <a href="https://github.com/0xCB-dev/0xCB-TutelPad/releases/tag/v1.0" >here<a>.
![git](git.webp)

<br>It is good practice to confirm the PCB working after you flashed the controller. So plug it in the computer and see if you can get it to show up in VIAL.
![VIAL](VIAL.webp)

<br>If your controller is working, you can solder it in. When you have the PCB in front of you so that you can read the text on it, the USB port should go to the top of the PCB. You should not see the components of the micro controller, when it is sitting in the PCB.
![controller](controller.jpg)

<br>Insert the Switches into the switch plate. You can use the switch plate both ways around either with or without the TUTEL writing.
![switchplate](switchplate.jpg)

<br>And put the PCB onto the switches.
![plateandpcb](plateandpcb.jpg)

<br>When you are not using Mill-Max sockets you will have to solder in the switches now.
![switschessoldered](switchessoldered.jpg)

<br>Screw in the 4 standoffs into the switch plate.
![standoffscrew](standoffscrew.jpg)

<br>Then place the bottom plate on them and screw them in from the bottom. You can reverse the bottom plate so you can use it with or without the TUTEL writing on there.
![bottomscrew](bottomscrew.jpg)

<br>Now add the rubber feet.
![bottomfeet](bottomfeet.jpg)

<br>The only thing left to do is to add Keycaps to your MacroPad.
![keycaps](keycaps.jpg)

<br><br>And you are done with your TutelPad!
![cover](cover.jpg)