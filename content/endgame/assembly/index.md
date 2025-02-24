---
title: "Assembly"
description: ""
lead: ""
date: 2020-10-06T08:48:45+00:00
lastmod: 2020-10-06T08:48:45+00:00
draft: false
images: []
menu:
  endgame:
    parent: "endgame"
weight: 40
toc: true
---

## Soldering

There are a few things you absolutely need to solder and a few which are optional. If you do not have experience with soldering, please refer to this [quick start guide]({{< ref "/basics/soldering/solder-advice" >}}).

### Required

#### Diodes

Start with soldering all of the diodes in. If you have not soldered diodes before, you can find instructions [here]({{< ref "/basics/soldering/smd#diodes" >}}).
{{< alert icon="💡" text="The diodes in the instructions have 3 legs, the diodes for the Endgame only have 2. The pad that is shaped like an arrow corresponds with the small line on the diode itself." />}}
![pcb-diodes](pcb-diode.png)

#### Controller

If you have bought the kit through KeebSupply, you will receive one 0xCB Gemini controller which is preflashed with the default <a href="https://files.keeb.supply/firmware/ENDGAME/" >firmware<a>.
![gemini](gemini.png)

<br>You can now solder it in. Instructions on how to do that can be found [here]({{< ref "/basics/soldering/promicro#pcb-mount" >}}). When you have the PCB in front of you, the USB port should sit in the cutout and the side without the USB port should be on the same side as the HotSwap sockets.
![controller](pcb-controller.png)

<br>When you have your controller soldered in, it is good practice to do a [matrix test]({{< ref "/basics/firmware/viaandvial#matrix-testing" >}}) in VIAL. Use tweezers or other metallic objects for this and short the pads of each key.
![matrix](matrix-test.png)

If all of the keys are working properly, you can go ahead and continue with the assembly!

### Optional

#### HotSwap Sockets

You can solder in HotSwap Sockets. You can find instructions for that [here]({{< ref "/basics/soldering/hotswap#choc-low-profile" >}}).
{{< alert icon="💡" text="If you decide to not solder in the HotSwap sockets, you will need to solder in the switches later!" />}}
![hs-sockets](pcb-hs-socket.png)

#### Buzzer

The PCB also supports a buzzer. You can find information on speakers [here]({{< ref "/basics/hardware/speakers" >}}).
![buzzer](buzzer.png)

<br>This is everything you need to solder for now!

## Final Assembly

Start by inserting the rubber grommets into the PCB holes that have text around them. The longer end goes onto the side that also has all of the components like the hotswap sockets on there.
![grommets](pcb-grommet.png)

<br>After that push or solder in the switches.
![switches](board-with-switches.png)

<br>Then put on your keycaps.
![caps](board-with-caps.png)

<br>If you have decided to get the 3D printed case, place the board into the case from the bottom and screw in the 4 screws through the remaining holes.
![screw-in-case](screw-in-case.png)

<br>After that your Endgame is done!
![endgame-full-board](endgame-cover.png)
