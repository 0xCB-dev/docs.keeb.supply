---
title: "Assembly"
description: ""
lead: ""
date: 2020-10-06T08:48:45+00:00
lastmod: 2020-10-06T08:48:45+00:00
draft: false
images: []
menu:
  badwings-v2:
    parent: "badwings-v2"
weight: 40
toc: true
---

## Soldering

You only need to solder the hotswap sockets for this keyboard. If you do not have experience with soldering, please refer to this [quick start guide]({{< ref "/basics/soldering/solder-advice" >}}).

### Hotswap Sockets

Solder the hotswap sockets. You can find instructions for that [here]({{< ref "/basics/soldering/hotswap#choc-low-profile" >}}).
![kailh](pcb-hotswap.png)

## Final Assembly

Start by putting in the switches into the PCB and plate. Push the switches through the plate into the PCB. Make sure to orient the plate correctly. The rough surface of the plate should go on top.
![plate](pcb-switches.png)

<br>Before assembling the rest of the keyboard, it is good practice to do a [matrix test]({{< ref "/basics/firmware/viaandvial#matrix-testing" >}}). As the BadWings V2 is preflashed when you purchase the kit from KeebSupply, the correct firmware should already be on there.
![matrix](matrix.jpeg)

<br>Insert the FPC cable into the Cirque trackpad assembly. The connector on the Cirque is a push-in FPC connector. You can just push the cable into it.
{{< alert icon="💡" text="Make sure that the blue part of the cable faces to the text on the PCB." />}}
![trackpad](cirque-fpc.png)

<br>Push the FPC cable through the plate, and insert it into the connector on the PCB. You do not need to twist the cable to make it fit. Refer to the picture below to see how the cable should be routed.
{{< alert icon="💡" text="The connector on the PCB works a bit differently to the one on the Cirque. You need to lift the black bar, put the cable into the connector and push the black bar down again." />}}
![fpc cable](pcb-fpc.png)

<br>Place the PCB assembly into the bottom case.
![pcb-assembly](pcb-case.png)

<br>Screw the short screws in all of the marked holes.
![screws-1](pcb-screws-1-marked.png)

<br>Insert the two longer screws into the two leftover holes. Hold the Cirque trackpad assembly onto the plate while screwing. The screws go through the pcb, plate and then into the Cirque trackpad assembly.
![screws-2](pcb-screws-2-marked.png)

<br>Insert the rubber feet into the cutouts. The red circles indicate mandatory feet, the blue ones are optional.
![rubber-feet](pcb-feet-marked.png)

<br>Put on your keycaps of choice, and you are done!
![done](done.png)
