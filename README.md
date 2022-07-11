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

## Function type

Use arrow function syntax.

## never type

Use with error throwing function's return type, because once throwing error, application crashes, nothing should be returned.

## Compiler

User`tsc FILE_NAME.ts -w` or `tsc FILE_NAME.ts --watch`. Once saving the file, compiling TS file into JS file starts.

Run `tsc --init` once in a project folder to create `tsconfig.json` file to tell that this project is managed by TypeScript.

With `tsconfig.json`, running `$ tsc` will compile all the TypeScript files, and `$ tsc -w` will compile any TypeScript files once they are saved with new changes.

## tsconfig.json

It makes sense to add the following, because we don't wanna touch third party TypeScript code and it also slows down our compilation. But this is default. It's just making explicit.

```
  "exclude": [
    "node_modules"
  ]
```

If we use `"include"`, we need to include ALL the files that we want to compile.

Complied `include` - `exclude` (minus) files.

`lib`

```
"lib": [
  "dom",
  "es6",
  "dom.iterable",
  "scripthost"
],  
```

`"sourceMap": true` allows us to debug TypeScript code in browser.

## Visual studio code

`Ctrl + Space` to get auto completion.


