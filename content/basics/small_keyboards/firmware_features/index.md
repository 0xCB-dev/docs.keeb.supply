---
title: "Firmware Features"
description: "Firmware Features That Help With Small Keyboards."
lead: "Firmware Features That Help With Small Keyboards."
date: 2022-05-09T22:24:00+01:00
lastmod: 2022-05-09T22:24:00+01:00
draft: false
images: []
menu:
  basics:
    parent: "small_keyboards"
weight: 10
---


## How to use less keys?
All of the different features here aim at one goal:
Making the keys we have more powerful.

For this, each key will serve multiple purposes.
How exactly this is achieved best is very much a matter of personal preference.
We show some well-liked options below.

### Layers
Most small keyboard users work with layers.
A layer is a set of behaviors for all keys of a keyboard.
Typically, the default layer contains (most of) the letters, a bit of common punctuation, and some special keys like modifiers (such as shift, control, etc).
Additional layers might be used for numbers, symbols, function keys, navigation, etc.
A well-known layer-like behavior from normal keyboards is the shift function.
When the shift button is held (or with caps lock activated), each key of the keyboard will produce different output.

Layer documentations in common firmwares:
- [QMK](TODO)
- [ZMK](TODO)
- [KMK](TODO)

#### Example

### Hold-Taps
Hold-tap refers to a behavior where a keypress results in different things depending on how long the key is pressed.
Usually this is used to differentiate between *taps* (short presses with immediate release) and *holds* (holding the key down for some time before releasing).
Common use cases include home-row mods (see section below) and layer-taps, where a given layer is activated while the key is pressed, but when tapped quickly, the key produces some other output.

Hold-tap documentations in common firmwares:
- [QMK](TODO)
- [ZMK](TODO)
- [KMK](TODO)

#### Example

### Combos
Combos produce special results when pressing two (or more) keys at the same time.
Combos are often used to offload less-often used keys from the base layer, but still have some quickly available.

Combo documentations in common firmwares:
- [QMK](TODO)
- [ZMK](TODO)
- [KMK](TODO)

#### Example

### Sequences
Sequences are like tap dances but allow for arbitrary sequences of keys to result in special behavior.

Sequence documentations in common firmwares:
- [QMK](TODO)
- [ZMK](TODO)
- [KMK](TODO)

#### Example

### One-Shot Mods & Layers
One-shot mods work like normal modifiers but only for the next keypress after having been activated.
For example, this allows shifting letters without holding shift down at the same time.

One-shot mod documentations in common firmwares:
- [QMK](TODO)
- [ZMK](TODO)
- [KMK](TODO)

#### Example

### Mod-Morph
Mod-morph refers to changing what a key does depending on which modifiers are active.
A common example is making Shift+Backspace result in Delete.

Mod-morph documentations in common firmwares:
- [QMK](TODO)
- [ZMK](TODO)
- [KMK](TODO)

#### Example

### Tap Dance
Tap Dance refers to enabling special behavior when a key is pressed a given number of times.
You could for example make triple pressing E write out your email address, or double pressing Space result in ". " as many mobile keyboards do.

Tap dance documentations in common firmwares:
- [QMK](TODO)
- [ZMK](TODO)
- [KMK](TODO)

#### Example

