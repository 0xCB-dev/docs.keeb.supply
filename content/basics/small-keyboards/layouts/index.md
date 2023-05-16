---
title: "Layout Optimization"
description: "How to analyze and optimize your keyboard layout."
lead: "How to analyze and optimize your keyboard layout."
date: 2022-05-09T22:24:00+01:00
lastmod: 2022-05-09T22:24:00+01:00
draft: false
images: []
menu:
  basics:
    parent: "small-keyboards"
weight: 20
---

## Overview
> If there is anything we should be able to agree on in keyboard layouts, it's that what is "good" is entirely subjective. People have different hands. They have different ideas of what is comfortable, and different physical limits.
> [...]
> Be skeptical of anyone who claims their layout to be "objectively" better than other layouts.
> [...]
> What matters is not how well the layout fits the metrics, it's how well the metrics fit you.

-- *semi* in [the blog post "200 wpm - final reflection on Semimak"](https://semilin.github.io/posts/200-wpm---final-reflection-on-Semimak.html):

Let's rip off the bandaid quickly: the Qwerty layout is usually not considered a good layout.
In fact, it's said to be a rather bad one.
While -- contrary to popular believe -- it was not designed to slow-down the typist, it wasn't designed for touch-typing either (which was, in fact, invented after the Qwerty layout).
Actually there doesn't seem to be any discernible reason for why keys on Qwerty are arranged the way they are.
Qwerty achieves notoriously bad results in all common metrics used to analyze keyboard layouts.
It has one very noteworthy quality, though: It is the standard layout used on almost every modern keyboard.

If you are interested in some optimization, we can usually do much better!

A general recommendation for everyone who wants to try an alternative layout (and types in English a lot) is the Colemak layout.
It performs very well in many common metrics, and there's a decent amount of compatible keycap sets.
The benefit of further optimization is sometimes said to be negligible compared to what Colemak offers over Qwerty, so if you just want a quick solution without going into the depths, our recommendation is Colemak.
(It actually works quite well for German, too.)

If you're up for the fun part, this page introduces some common ideas and metrics used for optimizing keyboard layouts.
While we will just quickly go over common optimizations here, [this Google doc](https://docs.google.com/document/d/1_a5Nzbkwyk1o0bvTctZrtgsee9jSP-6I0q3A0_9Mzm0/edit#) contains *a lot* of further information, including analyses of lots of example layouts.

## Optimization Goals
This section is an introduction to common optimization goals.
Keep in mind that everyone's hands are different and not everyone will want to prioritize the same goals.

### Home Row Utilization
One of the most obvious optimizations, putting often used letters on the positions your fingers are resting on.
This will allow for less overall finger movement and easier typing.
### Balancing Hand Usage
Optimizing the ratio between the work both hands do is another potential goal.
Some typists may actually prefer that one hand (e.g. their dominant one) do more work than the other.
Others will like a balanced load more.
### Balancing Finger Usage
Often, certain fingers are less strong and/or mobile than others.
Which fingers those are can be very individual, but often people try to reduce pinky usage especially.
Others prefer usage of the inner index column to be reduced as much as possible.
#### Thumb Usage
Something many people don't realize is that two thumbs can also press more than one large key in total.
While thumbs are not commonly used to input letters, putting a common one such as E opposite of the Space Key is a possible approach to balance thumb usage and take some load off the other fingers.
See also [this article on pressing `E` with the thumb](https://precondition.github.io/pressing-e-with-the-thumb).
### Introducing Comfortable Patterns
#### Rolls
A roll is like the motion when drumming your fingers on a table.
Both outwards (index to pinky) and inwards (pinky to index) rolls exist.
Which of these are more comfortable is rather individual.
For the QWERTY layout, the word "we" is a roll, as is "as," "oi," and the "res" part of "rest."
#### Alternation
Alternation is when a word or letter sequence is typed with alternating hands.
Optimizing alternation is not possible while optimizing rolls and vice versa.
Examples on QWERTY: "duck," "keltic," "psi," etc.
### Avoiding Uncomfortable Patterns
There is a number of uncomfortable motions people have identified in the past. Most of these are agreed to be uncomfortable in general, but individual typists will have individually differing experiences with how uncomfortable any of these is.
#### Same Finger Bigrams
Same finger bigrams (SFB) and trigrams (SFT) are sequences of keys pressed by the same finger.
The QWERTY layout boasts a rather high number of common SFBs, such as "ed," "rt," "ay," "ki," etc.
#### Lateral-Stretch Bigrams
A lateral-stretch bigram (LSB) is a key sequence where one finger has to stretch laterally followed by a finger of the same hand having to press a key.
Examples on QWERTY include "te," "hi," "no," etc.
#### Redirects
A redirect is a sequence of at least three keys pressed with the same hand where the direction of travel changes (opposite to a roll).
Examples on the QWERTY layout include "sad," "ion," and "eat" (which is also LSB)
#### One-Hands
One-hands are words that are typed entirely with one hand.
While they are not necessarily uncomfortable, some typists don't like them and they are said to slow down typing speed.
