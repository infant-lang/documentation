---
sidebar_position: 2
---

# Infant Script File

Files ending in `.infant` are Infant scripts.

Get started by **creating a new file ending with `.infant`**.

Or **try Infant Lang immediately** with **[the Playground](https://infant-lang-playground.netlify.app)**.

## Create a new file

Open your favorite text editor and in the file name, type **`hello.infant`**.

Or use the PowerShell to create a new file:

```shell
New-Item -Path 'C:\Users\user\Desktop\hello.infant' - ItemType File
```

:::tip

Install the Visual Studio Code editor and install the Infant Lang Extension to edit **Infant Scripts** files more easily with syntax highlighting and code completion.

:::

## Print `MEOW` with Infant Lang

In the `hello.infant` file, paste the following code:

```infant title="hello.infant"
# Moving Pointer to 77
for 77 move pointer right

# Setting Memory as Pointer + 2
memory = pointer + 2

print char pointer # Will Print M

# Moving pointer left 8 to Point 69
move pointer left 8

print char pointer # Will Print E
print char memory # Will Print O

# Setting Memory to 87
memory = 87
if memory == 87 print char memory
```

Save the file and it is ready to run.


## Run the file

:::caution

The Windows default console host (`conhost.exe`) 👎 does not support printing Unicode characters 💀.  However, the new Windows Terminal does 🥳. Use Windows Terminal or the Integrated Terminal of Visual Studio Code which has full Unicode support to run the Infant Script 👶😊

:::

To run the file, type the following command:
```shell
infant hello.infant
```


## Check the output
```shell
MEOW
```

## Congratulations! 🎉 
You successfully created a new file 🤖, wrote an Infant script 🥇, and executed it 🏃‍♀️.

Let's learn more about Infant Lang!