---
title: "Flashing Controllers"
description: "How to flash different types of controllers."
lead: "How to flash different types of controllers."
date: 2020-10-13T15:21:01+02:00
lastmod: 2020-10-13T15:21:01+02:00
draft: false
images: []
menu:
  basics:
    parent: "firmware"
weight: 2020
toc: true
---

## RP2040

The RP2040 has a u2f bootloader in ROM (etched into the die) meaning it can't be bricked or overwritten which is great news.

### Enter bootloader mode

To get RP2040 boards into bootloader mode you have to disable the flash on startup. You can accomplish this on [Helios](https://keeb.supply/products/0xcb-helios) by using the reset button / reset pin and pushing it / pulling it to GND for over 500ms (while it's plugged into a PC of course).

The method varies for other boards, but on the [Pi Pico](https://www.raspberrypi.com/products/raspberry-pi-pico/) for example you can hold the BOOTSEL button while plugging it in and it should also enter the bootloader.

The controller should reboot and enter the bootloader mode automatically - you will see a flash drive pop up on you PC called **RPI-RP2**

### Copy firmware

You can take your `keyboardfirmware.u2f` file and copy it to the mounted drive. It will unmount and reboot itself. If the firmware flashing process succeeded, you will have a working keyboard. If not, please repeat the procedure. Since the bootloader is edged into ROM, it can't be bricked. You are very unlikely to break something.

## WCH

WCH chips are low-cost integrated circuits (ICs) that use [FAK firmware](https://github.com/semickolon/fak-config). Getting your firmware onto your board consists of two different steps. You will use GitHub Codespaces to create your firmware, and after that WCHISP to flash said firmware onto your controller.

### Setting up WCHISP

Download the latest WCHISP release from [here](https://github.com/ch32-rs/wchisp). You can also find great instructions on what the tool does and how it works over there.

### Setting up Codespaces

Afterwards you will have to use [GitHub Codespaces](https://github.com/features/codespaces) to compile and download your `.ihx` firmware file. You can find instructions on how to set up a Codespace [here](https://github.com/semickolon/fak-config?tab=readme-ov-file#github-codespace).

### Flashing Firmware

1. Extract the archive and move the firmware `.ihx` file into the same folder as WCHISP.
2. Enter the bootloader mode. Most WCH boards have a _boot_ and a _reset_ button. Hold the _boot_ button while plugging in the board, then run `wchisp info` to see your chip information.
3. Run `wchisp flash ./firmware.ihx` (adjust for your firmware file name). Once complete, unplug and replug the board.

## AVR (Atmega)

### Using QMK Toolbox

![QMK Toolbox](toolbox.png)
Download and install [QMK Toolbox](https://github.com/qmk/qmk_toolbox).
When you open it you can select your keyboardfirmware.hex in the local file dialog (1).
Then select the MCU (2).

Now this part differs per keyboard (different bootloaders, different bootmagic configs), but in general you can hold escape while plugging the board in or press reset while the board is plugged in to enter DFU mode.

You will see a yellow message in the toolbox console stating that a DFU device connected (pink frame).

Now you can press Flash (3) and wait for "Validating... Success"

Your keyboard was flashed succesfully and you are good to go

Consult your keyboard manu for other methods.

### using make

run this command in the qmk code directory and edit the command to relect you keboard and keymap
`make 0xcb/1337:default:flash`

## ARM

Please refer to the [RP2040]({{< relref "#RP2040" >}}) guide for u2f (bootloader not in rom) and to the [AVR]({{< relref "#avr-atmega" >}}) guide for dfu-util (you dont have to select the mcu for arm).
