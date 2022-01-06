---
sidebar_position: 1
---

# How Infant lang works?

Infant Lang is a programming language that is designed to be **easy to learn** and **easy to use**.

It depends on four main concepts: (Inspired by BrainFuck 🧠)
- **Memory** 📦
- **Pointer** 🖇
- **Print** 🖊
- **Control flow** (Conditions, Loops)

## How Interpreter Works?
The Interpreter is written in **Go** 🐹

The Interpreter gets a file name, reads the file and executes the code. It depends on two main functions

### Lexer
The Lexer reads the file and converts it into tokens.

It makes sure that the tokens are valid and makes sure that the code is syntactically correct.

It throws the Tokenization Error if it encounters an unexpected character.


### Parser
Usually the Parser is the one that gets the tokens and executes the code by constructing the AST.
But Infant Lang has a special parser that is designed to be used with the Interpreter. It has a bunch of functions that are designed to parse and execute for a given grammar. That is why it is not production ready.

On the Next page, we will see the errors that the Interpreter throws.