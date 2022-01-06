---
sidebar_position: 2
---

# Infant Lang Errors

:::note

Some errors are likely to be changed in the future versions of Infant Lang.

:::

## Tokenization Error

Tokenization error gets thrown when the tokenizer encounters an unexpected character.

The Interpreter will also show the line number and the character which caused the error.

Let's see why this error is thrown:

```infant title="token.infant"
moce pointer right 15
```

In the above code, instead of the `move` keyword, we misspelled the `move` keyword as `moce`. Infant Lang sees that the `moce` keyword is not a valid keyword and throws a Tokenization Error.

```shell
💀 Tokenization Error:
Unknown token: "c" at line 1
moce pointer right 15
  👆
```

## Expected Token Error

Expected Token error gets thrown when the parser expects a token to execute but it couldn't find it. 

The Interpreter will also show the line number and the character which caused the error.

Let's see why this error is thrown:

```infant title="expected.infant"
memory = 
```

In the above code, we did not assign a value to the memory. Infant Lang sees that we did not assign a value to the memory and throws an Expected Token Error. It expects a number or a pointer.

```shell
💀 Token was Expected
Expected 'pointer or memory or number' at line number '1'
👉 memory =
```

## Unexpected String Error

UnExpected String error gets thrown when the parser finds a legal token but it expects a different token. 

The Interpreter will also show the line number and the character which caused the error.

Let's see why this error is thrown:

```infant title="unexpected.infant"
memory pointer pointer
```

In the above code, we have two pointers. Infant Lang sees that we have two pointers and throws an Unexpected String Error. It expects an assignment operator.

```shell
💀 Unexpected String Literal
Unexpected String Literal 'pointer' at line number '1'
👉 memory pointer pointer
```

## Runtime Error

Runtime error gets thrown when the interpreter encounters an error during the execution of the program. It's usually thrown if the interpreter finds a logical error in the program.

Let's look at an example:
```infant title="runtime.infant"
memory = 1 / 0
```

In the above code, we divide the memory by zero. Infant Lang sees that we are trying to divide the memory by zero and throws a Runtime Error.

```shell
💀 Runtime Error
Cannot Divide Entity by Zero at line number '1'
👉 memory = 1 / 0
```

### Other Runtime Errors:
There are other runtime errors that can be thrown by the interpreter. These errors often stop the execution of the program.

- ### Pointer can't point to a negative box
When the interpreter tries to point to a negative box, it throws a Pointer can't point to a negative box error.

- ### Negative number. Memory Cannot Hold Negative Numbers
When the interpreter tries to store a negative number in the memory, it throws this error. It is often thrown when the memory is initialized with a negative number or initialized by an arithmetic operation that results in a negative number.

- ### Memory Cannot Have Decimal Values
When the interpreter tries to store a decimal number in the memory, it throws a Memory Cannot Have Decimal Values error. Often thrown when the memory is initialized with a decimal value or initialized by an arithmetic operation that results in a decimal value.

## File Access Error
File Access Error gets thrown when the interpreter tries to access a file that does not exist.
Possible Solutions: 
- Check if the file exists.
- Check if the file is a valid file. (It's not a directory or a binary file)

Example:
```shell
infant no.infant

💀 Unable to Access File: no.infant
Error: open no.infant: The system cannot find the file specified.
```

## No Arguments Error
No Arguments Error gets thrown when the interpreter tries to execute a command without any arguments.
Possible Solutions: 
- Check if the command has arguments.
- Check if the command has a file name.
- Check if the command has a valid flag. For eg. `infant -v`

Example:
```shell
infant
💀 No file name provided. Please provide a file name.
Usage: infant <filename>.infant

💀 Exiting...
```

:::info

The **No Arguments Error** will be removed in the future builds, for Infant Lang has plans for an Interpreter Mode.

:::