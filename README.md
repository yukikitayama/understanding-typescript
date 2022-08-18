# Understanding TypeScript

Udemy https://www.udemy.com/course/understanding-typescript/

JavaScript is **dynamically typed**, which means that we can have a variable initially holding a number but later assigned string to it. `typeof` allows us to check the **current** type of data at runtime. **JavaScript uses dynamic types (resolved at runtime)**.

TypeScript is **statically typed**, which means that we define the type of a variable during development, and the type doesn't change at runtime. **TypeScript uses static types (set during development)**.

## Topic I don't understand

- Generic

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

### Singleton

Put `private` in front of `constructor()`. Cannot use `new` to instantiate a class.

### Interface

Allow us to implement in a class. Share functionalities or structures among classes. Interface doesn't have implementation details. Abstract class has concrete implementations and overwriting parts.

#### Interface vs. class

Interface can inherit multipled interfaces, but class can inherit only one interface.

## Optional parameter and property

- To create optional parameter, add `?` behind a parameter in a function argument definition.
- To create optional property, add `?` behind a property name like `parameter?` in a interface or class
- Optional method syntax is `methodName?()` by adding `?` between name and parenthesis.

## Type guard

- For **union type**

## Type casting

2 ways exist; `<TYPE>TYPESCRIP_CODE` or `TYPESCRIPT_CODE as TYPE`. Use the 2nd way if type casting is used in React, otherwise starting code with `<` will crash with JSX code.

## Generic

**Generic type** always comes with angle brackets `<>`

**Promise type**

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

## Modular code

Modular code means splitting our code into multiple files so that each file stays manageable and maintainable, and import and export those files to be connected.

### Namespace

Grouping code. Bundle files to have less imports.

### ES6 modules

Use ES6 import/export syntax, which is supported in TypeScript. 

Need ***Webpack* to bundle.

Use `import { something } from "./something.js"` syntax. This is a recommended approach because it's safer and warned in IDE before compiling.

## Webpack

A bundling and build orchestration tool. It helps us reduce the amount of HTTP requests for JavaScript files by bundling code together.

When you have multiple TypeScript file in a project, and they imports functions and constants from each other, every time HTTP requests occurr, which slows down user experience. Unoptimized code, which can be done by Webpack.

`$ npm install --save-dev webpack webpack-cli webpack-dev-server typescript ts-loader`

Webpack uses NodeJS to execute files.

## JavaScript third-party libraries

The libraries which are only built for JavaScript so get errors if we use in TypeScript files

`@types/something` has translation from plain JavaScript to TypeScript, which doesn't contain any logics, but defines types.

`npm install --save-dev @types/something`.

As soon as installing the `@types/something`, errors will be gone.

https://github.com/typestack/class-transformer

https://github.com/typestack/class-validator

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

## Decorator

- A function applied to something like class
- Decorator typically starts with a capital letter.
- Decorator runs when a class is defined, not when instantiated.

## React

Forward a function with an argument through `props`, and use `props.FUNCTION.bind(null, argument)`

```
// In one component
const func = (arg: string) => {
  do something with arg.
};

return (
  <Component onFunc={func}>
);

// In the other component
const OtherComponent: React.FC<{onFunc: (arg: string) => void}}> = (props) => {
  return (
    <SomeComponent onClick={props.onFunc.bind(null, ARGUMENT)}>
  );
}
```

## React Router

`npm install --save react-router-dom`

`npm install --save-dev @types/react-router-dom`