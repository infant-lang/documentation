---
sidebar_position: 1
---

# Pointer

The most important concept in Infant Lang is the **pointer** 👆

The pointer is a number that points to the position of the arrow in the number line 📊

The pointer is initialized to point the box 0. It can point only to whole numbers.

It can move `left` or `right` but cannot go beyond the limits of the `whole number line`

## tldr;

- The Pointer is initialized to point the 0 box 📦
- The Pointer can hold only whole numbers 📊
- The pointer can be moved with the `move` 🚗 keyword.
- The pointer can be moved left or right with the `left` 👈 and `right` 👉 keywords.

## The `move` keyword

The pointer can be moved left or right with the `left` and `right` keywords. Let's see how it works:

Have a look at the following snippet:
```infant
move pointer right 
```

## What does this code do?
The `move pointer right` moves the pointer right 1 box 📦. Which in reality will increase the pointer by 1 👈. We can also move the pointer right with the `left` keyword.

:::danger

Moving Pointer value to a negative number will cause the pointer to go beyond the limits of the **whole number line** 📊. It will throw an error and stops the execution of the script.

:::

## Move pointer for more than one box
The pointer can be moved for more than one box with the `movement number` associated with the `move` keyword. The `movement number` defaults to `1`. Let's see how it works:

```infant
# This line will move the pointer to the right by one box
move pointer right

# This line will move the pointer to the right by 12 boxes
move pointer right 12
```

:::info

We can also move pointer conditionally with the `if` keyword or move insanely fast with the `for` keyword which will be explained in the upcoming sections.

:::