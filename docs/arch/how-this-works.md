---
sidebar_position: 1
---

# How Infant lang works?

Infant Lang is a programming language that is designed to be **easy to learn** and **easy to use**.

It depends on four main concepts: (Inspired by BrainF**k 🧠)
- **Memory** 📦
- **Pointer** 🖇
- **Print** 🖊
- **Control flow** (Conditions, Loops)

## How Interpreter Works? tldr;
The Interpreter is written in **Go** 🐹. 

- The Interpreter gets a file name.
- Reads the line content line by line.
- Sends the line content to the parser.
- The parser will send the line to the lexer which tokenizes the line and returns as a slice of tokens.
- The parser will then check for all possible grammar for the given tokens and if found will execute it.
- It keeps two states in the interpreter:
  - **Memory** 📦
  - **Pointer** 🖇
- And if all the lines are executed successfully, the interpreter will exit.

**Now let's learn more about how things actually work 😉**

## Token
Every token of Infant Lang is deduced by the Lexer as a `token` struct defined as a data type.
```go
type token struct {
	tokenType string // The type of the token or CATEGORY
	tokenValue  string // The value of the token or VALUE
}
```

The Token can hold these possible values with its category type
```
POSSIBLE VALUES:
- + ARITHMETIC		|	- ARITHMETIC
- * ARITHMETIC		| 	/ ARITHMETIC
- = ASSIGNMENT		|	== COMPARISON
- < COMPARISON		|	<= COMPARISON
- > COMPARISON		|	>= COMPARISON
- || COMPARISON		|	&& COMPARISON
- != COMPARISON

- char CHAR			| 	for LOOP
- if CONDITION		|	left DIRECTION
- move ACTION		|	memory MEMORY
- new SPECIAL		| 	print PRINT
- pointer POINTER	| 	right DIRECTION
- tab SPECIAL		|	0-9 NUMBER
```

## Lexer
The Lexer reads the file and converts it into tokens.

It makes sure that the tokens are valid and makes sure that the code is syntactically correct.

It throws the Tokenization Error if it encounters an unexpected character.

### The Lex Function

```go title="lexer.go"
func lex(line string, lineNumber int) []token
```

A function which takes in a string
- and returns a slice of strings.
- The lex can identify the following tokens:
- char, for, if, left, memory, move, new, pointer, print, right, tab
- and the following operators: +, -, *, /, =, <, >, <=, >=, ==, !=, &&, ||
- and integers

**Parameters:**
- `line`: The line of code to be tokenized.
- `lineNumber`: The line number of the line of code.

**Return Value:**
- A slice of tokens.


## Parser
Usually the Parser is the one that gets the tokens and executes the code by constructing the AST.
But Infant Lang has a special parser which does things differently. It checks the grammer with brute force for all possible execution type and if found will call the appropriate function to execute the code. It has a bunch of functions that are designed to parse and execute for a given grammar. It may not be the fastest parser or the correct way to parse the code but it gets the job done ✅

The Parse function is defined in the `parser.go` file.
```go
func parse(line string, lineNumber int, p int, m int) (int, int)
```
A Function which parses a line of code and returns the new position of the pointer and the new memory value
- It also executes the actions of the line of code like printing, moving the pointer, conditionals, loops, etc.
- The Function gets a slice of tokens from the lexer by passing the line to it. It works with the tokens to execute the actions of the line.

**Function Parameters:**
- `line`: string - the line of code that is being parsed
- `lineNumber`: int - the line number of the line of code that is being parsed
- `p`: int - the current position of the pointer from the main function
- `m`: int - the current memory value from the main function

**Return Values:**
- `p`: int - the new position of the pointer
- `m`: int - the new memory value


:::info

The Parse function depends on the `parser` function which actually finds what to execute and calls other functions to execute the actions.

:::

### The Parser Function
Parse Function defined in `parser.go`
```go title="parser.go"
func parser(tokens []token, line string, lineNumber int, p int, m int) (int, int)
```

Function that gets the tokens of the line that is currently being parsed.
For Conditionals and Looping, the function will call itself recursively until it
reaches the end of the line finding the statement in the current condition.

**Parameters:**
- `tokens: []token` - the tokens of the line currently being parsed
- `line`: string - the line currently being parsed
- `lineNumber`: int - the line number of the line currently being parsed
- `p`: int - the current position of the pointer
- `m`: int - the current memory value

**Return Values:**
- `p`: int - the new position of the pointer
- `m`: int - the new memory value

## Grammar Checking
These functions are called by the `parser` function and returns true or false depending on whether the grammar is correct or not.

```go title="functions.go"
// Function which checks if the line is a valid arithmetic expression to perform
func checkArithmetic(tokens []token, line string, lineNumber int) []token

// Function which checks if the line is a valid assignment
func checkAssignment(tokens []token, line string, lineNumber int) []token

// Function which checks if the line is a valid Print statement
func checkPrint(tokens []token, line string, lineNumber int) []token

// Function which checks if the line is a valid Move statement for the pointer
func checkAction(tokens []token, line string, lineNumber int) []token

// Function which checks if the line is a valid `if` condition statement
func checkCondition(tokens []token, line string, lineNumber int) []token

// Function which checks if the line is a valid `for` loop statement
func checkLoop(tokens []token, line string, lineNumber int) []token
```

## Execution Functions
These functions are called by the `parser` function and execute the actions of the line of code if they pass the grammar check. 

```go title="functions.go"
// Function which executes the Pointer Movements
func pointerMovements(actionTokens []token, line string, lineNumber int, p int, m int) (int, int)

// Function which executes the Print statement
func printStuff(printTokens []token, p int, m int) (int, int)

// This function is called by the printStuff function if it needs to use the `char` function
func returnASCII(num int) string 

// Function which executes arithmetic expressions and assigns the result to the memory
func doArithmetic(arithmeticTokens []token, line string, lineNumber int, p int, m int) (int, int)

/* Function which checks whether the number is an integer with a decimal zero. 
Used for checking if the number is a valid integer by the `doArithmetic` function
*/
func isIntegral(val float32) bool

// Function which executes the assignment statement
func assignMemory(assignmentTokens []token, p int) (int, int)

/* Function which checks if it needs to execute the `if` statement based on the condition
If it needs to execute the `if` statement based on the condition, will call the parser function recursively to parse the statement //and execute the actions.
*/
func doConditionalCheck(tokens []token, conditionTokens []token, line string, lineNumber int, p int, m int) (int, int)

/* Function which executes the `for` loop statement
Similar to the `if` statement, it will call the parser function recursively to parse the statement 
And execute the actions for the specified number of times
*/
func doLoops (tokens []token, loopTokens []token, line string, lineNumber int, p int, m int ) (int, int)
```

All the above functions are responsible for executing the actions of the line of code. It is easy to understand what they do. Learn more about it on GitHub.

On the Next page, we will see the errors that the Interpreter throws.