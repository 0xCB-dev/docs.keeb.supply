---
title: "ProMicro Controllers"
description: "How to solder ProMicro style controllers."
lead: "How to solder ProMicro style controllers."
date: 2020-10-13T15:21:01+02:00
lastmod: 2020-10-13T15:21:01+02:00
draft: false
images: []
menu:
  basics:
    parent: "soldering"
weight: 60
toc: true
---

## Header Pins

For every ProMicro controller you will need header pins. So we'll start with those.

You can use IC-hotswap sockets or the solder variant that most likely came with your micro controller.
![socketsalone](socketsalone.jpg)

<br>Place the header pins inside the through holes on the PCB.
![pcbsockets](pcbsockets.jpg)

<br>For solder headers you need to place the short side in the PCB.
![solderheader](solderheader.jpg)

<br>Turn around the PCB. Pay close attention to the straightness of the headers.
![socketpins](socketpins.jpg)

<br>First solder only one pin per header.
![1pinsoldered](1pinsoldered.jpg)

<br>Then check if they are straight and a controller can fit on them. If they are not straight, heat up the one pin and realign them.
![sideview](sideview.jpg)

<br>You can go ahead and solder the rest if they are straight.
![allpinssoldered](allpinssoldered.jpg)

<br> Some PCBs might need a smaller header at the bottom. You can follow the same procedure here.
![headerbottom](headerbottom.jpg)

## ProMicro

When you have your header pins soldered, you can go ahead and solder in your controller. Depending on the header pins used, you will need to use two different techniques.

### Solder Sockets

Soldering these sockets is pretty easy and straight forward. Start by placing the controller in the pins. Be aware of the pinout and the orientation of the controller!
![thtcontroller-notsoldered](thtcontroller-notsoldered.jpg)

<br>After that just solder all the pins.
![thtcontroller-soldered](thtcontroller-soldered.jpg)

<br>You will probably want to clip of the long pins on top of the controller
![clipped](clipped.jpg)

### IC Hotswap Sockets

Soldering Hotswap sockets takes a bit more work. Start by just placing your controller ontop of the headers. Be aware of the pinout and the orientation of the controller!
![controller-notsoldered](controller-notsoldered.jpg)

<br>After that stick a diode leg into one of the holes of the controller. You can also use [these](https://www.mouser.de/ProductDetail/575-3320000150000030) MillMax pins that.
![diode](diode.jpg)

<br>Clip off that diode flush with the top of the controller.
![diode-clipped](diode-clipped.jpg)

<br>Repeat that for all of the pins that you need.
![diode-clippedall](diode-clippedall.jpg)

<br>Now add solder to all of the pins. Be careful to not add too much solder so that it doesn't come out of the other side.
![all-soldered](all-soldered.jpg)

### PCB mount

You can solder some controllers directly to the PCB. Take a look if your controller has castellated holes at the sides. This makes it easy to mount it directly to the PCB. Your controller also needs to have a USB port that is not sticking out of the bottom, so that the controller can lay flat on the PCB.
![seeed](seeed.jpg)

<br>Start by adding a good amount of solder to one pad of the footprint. On this picture you can see a footprint that is specially designed for PCB mounting. The pads are larger and stick out of the sides of the controller.
![pcbmount-1](pcbmount-1.jpg)

<br>After that slide the controller onto the pad while heating up the solder with your soldering iron. If the controller does not sit straight afterwords, you can always heat up the solder again and align it.
![pcbmount-2](pcbmount-2.jpg)

<br>Once you are happy with the alignement of your controller, you can solder all the other pads.
![pcbmount-3](pcbmount-3.jpg)