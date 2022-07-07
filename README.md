# Understanding TypeScript

Udemy https://www.udemy.com/course/understanding-typescript/

JavaScript is **dynamically typed**, which means that we can have a variable initially holding a number but later assigned string to it. `typeof` allows us to check the **current** type of data at runtime. **JavaScript uses dynamic types (resolved at runtime)**.

TypeScript is **statically typed**, which means that we define the type of a variable during development, and the type doesn't change at runtime. **TypeScript uses static types (set during development)**.

## Benefit

- As being a developer, you can expect what data type you want to use in your code. But when the app is used by users, or your code is maintained by the team, unexpected use of data type occurs and break the app.
- When ignoring error in TypeScript, the compiler of TypeScript into JavaScript throws an error, so we can debug.
- TypeScript helps us during development.

## Core types

- number
  - `5` and `5.0` are the same in TypeScript
- string
- boolean

## Type inference

- TypeScript makes the best guess of the type that we assigned to a variable.

## Type assignment

- Set type for function arguments
- But it's not a good practice to set type every time making a variable, because it's redundant since TypeScript can do type inference.
- But it's a good practice to assign a type if a variable initialized without a value.

```
let number1: number;
number1 = 2;
```



