---
sidebar_position: 2
---

# Memory

The next concept in Infant Lang is the **memory** 📦

Unlike the pointer, the memory can be initialized with any number. We can do crazy things with the memory 📦

:::danger

Assigning memory to a negative number with assignment or any other operation will throw an error and will stop the execution of the program.

:::

## More about the memory
- A single memory block 📦 is available to store 🏪 an integer initialized to zero.
- Store a number into memory for later use ⌚
- Memory is always initialized to zero for null safety. It can store only integers. No decimals. 💀

## Assigning memory to a number
Assigning a number to the memory is pretty straight forward. Let's see how it works:
```infant
memory = 5
```

In the above code, the memory is assigned to the number `5`. We can also assign the value of the pointer to the memory. Here's how its done:

```infant
memory = pointer
```