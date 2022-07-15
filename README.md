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

## Class

`protected` keyword to property of a class is used to make property accessible from inside the class or any other classes which extend the base class.

**Getter** needs to `return` something. Put `get` in front of a method. When executing the getter, **no parenthesis** as a property.

**Setter**. Put `set` in front of a method. When executing the setter, no need to execute like a method with parenthesis. Access it like a property, no parenthesis, use `=` to assign a value.

**Static** methods and properties allow us to use the methods and properties without making the instance of a class, useful for utility functions. Put `static` in front of a method. In practice, if you make an instance of the class, static property or static method are not available. You cannot even use it within a class method. If you wanna access, put class name in front of the static property or method.

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

## JavaScript

`let` and `const` are **block scope** in `{ }`. These are available only in the block we define or the lower blocks.

When a function body has only one expression, `const add = (a: number, b: number) => a + b;` You can omit curly braces, and result of the expression is automatically returned. Always with implicit return statement.

Adding types to one line arrow function

`const printOutput: (a: number | string) => void = output => console.log(output);`

**Spread operator** pulls out all the elements of array and object

```
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking', ...hobbies];
```

```
const person = {
  name: "Yuki",
  age: 33
};

// perfect copy, not sharing same memory 
const copiedPerson = { ...person };
```

**Rest parameter** unlimited amount of parameters for function

```typescript
// 0 is starting value
const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0)
};
const addedNumbers = add(5, 10, 2, 3.7);
```

**Array desctructuring** below `hobby1` is string, but `remainingHobbie` is array. Desctructuring doesn't change the original array. Below `hobbies` array still hold values after destructuring.

```
const hobbies = ['tennis', 'cooking', 'coding', 'camping'];
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
```

**Object destructuing** pulls out the key value pair and store in the **same key name** constant and value are saved in them. But you can overwrite the original key name with a new name by `:` when object destructuring. `old_name: new_name`

```typescript
const person = {
  firstName: 'Yuki',
  age: 33
}
const {firstName: userName, age} = person; 
console.log(userName, age); 
```

## Visual studio code

`Ctrl + Space` to get auto completion.

