---
sidebar_position: 1
---

# Pointer

The most important concept in Infant Lang is the **pointer** 👆

The pointer is a number that points to the position of the arrow in the number line 📊

The pointer always holds `0` or a positive number.

It can move `left` or `right` but cannot go beyond the limits of the `whole number line`

## More about the pointer

- One dimensional array of size 35000 is available all initialized from 0 to 35000.
- The Pointer is initialized to point the 0 box 📦
- The pointer can be moved with the `move` 🚗 keyword.
- The pointer can be moved left or right with the `left` 👈 and `right` 👉 keywords.

## The `move` keyword

The pointer can be moved left or right with the `left` and `right` keywords. Let's see how it works:

In the `hello.infant` file, we have the following code:
```infant
move pointer left 8
```

### What does this code do?
The `move pointer left 8` moves the pointer left 8 boxes 📦. Which in reality will increase the pointer by 8 👈. We can also move the pointer right with the `right` keyword.

:::danger

Moving Pointer value to a negative number will cause the pointer to go beyond the limits of the `whole number line` 📊. It will throw an error.

:::

## Move pointer for more than one box
The pointer can be moved for more than one box with the `move` keyword. This is called the `movement number`. The `movement number` defaults to `0`. Let's see how it works:

```infant
# This line will move the pointer to the right by one box
move pointer right

# This line will move the pointer to the right by 12 boxes
move pointer right 12
```

:::info

We can also move pointer conditionally with the `if` keyword or move insanely fast with the `for` keyword which will be explained in the upcoming sections.

:::