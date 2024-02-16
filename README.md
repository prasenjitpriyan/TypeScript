<h1>TypeScript</h1>

```diff
+ sudo npm install -g typescript
```

## Introduction

- TypeScript being a "Syntactic Superset" means that it shares the same base syntax as JavaScript, but adds something to it.
- TypeScript adds additional syntax to JavaScript to support a tighter integration with your editor. Catch errors early in your editor.
- TypeScript code converts to JavaScript, which runs anywhere JavaScript runs: In a browser, on Node.js or Deno and in your apps.
- TypeScript understands JavaScript and used type inference to give you great tooling without additional code.

## Type Assignment

- When creating a variable, there are two main ways TypeScript assigns a type:

```
1. Explicit
2. Implicit
```

> In both examples below firstName is of type 'string'

```
1. Explicit => let firstName: string = "Prasenjit";
2. Implicit => let firstName = "Prasenjit";
```

## Declare Type TypeScript

<p align="justify"> To declare a type in TypeScript, you can use the type keyword followed by the type name and then an assignment to a {} block with the type properties. This syntax resembles an object literal, where the key is the name of the property and the value is the type this property should have.</p>

For example, the following code defines a type Programmer that must be an object with the name key that holds a string value and a knownFor key that holds an array of strings:

```js
let name: string;
let age: number;
let isStudent: boolean;
let hobbies: string[];
type Programmer = {
  name: string
  knownFor: string[]
};
```

You can use custom types in TypeScript just like you would use any of the basic types. To use the Programmer type, you can add a double colon (::) followed by the type name:

```js
const ada: Programmer = {
  name: "Ada Lovelace",
  knownFor: ["analytical engine", "computer programming"],
};
```

The TypeScript type checker will ensure that the ada constant has the expected shape and types. If you try to assign a value with a different type to any of the properties, TypeScript will throw an error.

When declaring custom types, you can use the object property shorthand to define properties with the same shape as a previously defined type. For example, you can use the Person type to define the manager property of the Company type:

```js
type Person = {
  name: string
  age: number
};

type Company = {
  name: string
  manager: Person
};

const company: Company = {
  name: 'BraveCode',
  manager: {
    name: 'Brave CodeLLM',
    age: 30
  }
};
```

TypeScript will not raise an error when you use an object with the same shape as the one expected by the type of the manager property, even if it is not set explicitly to have the Person type.

To learn more about how to write your own declaration files, you can consult the TypeScript documentation on type declarations: https://www.typescriptlang.org/docs/handbook/2/type-declarations.html. The DefinitelyTyped repository is also a centralized repository that stores declaration files for thousands of libraries.

## Union type in TypeScript

A union type in TypeScript describes a value that can be one of several types. You can use the vertical bar (|) to separate each type, for example, number | string | boolean is the type of a value that can be a number, a string, or a boolean.

TypeScript provides a feature called ‘discriminating unions’ to work with union types effectively. When using discriminating unions, you include a common field in all the union types that enables TypeScript to narrow down the possible current type.

Let’s consider the following example:

```js
interface Bird {
  fly(): void;
  layEggs(): void;
}

interface Fish {
  swim(): void;
  layEggs(): void;
}

declare function getSmallPet(): Fish | Bird;

let pet = getSmallPet();
pet.layEggs(); // Only available in one of the two possible types

if (pet.swim) {
  // Here, TypeScript understands that pet must be of type Fish
  pet.swim();
}
```

In the example above, although TypeScript cannot determine the type of pet directly, it can narrow it down through the swim field later in the code. Once pet.swim is evaluated as “truthy,” TypeScript can safely assume that pet is of type Fish.

You can also narrow down the possible current type using a literal type comparison, as mentioned in TypeScript: Handbook - Unions and Intersection Types:

```js
interface Bird { state: 'flying'; fly(): void; }
interface Fish { state: 'swimming'; swim(): void; }

declare function swimOrFly(pet: Bird | Fish): void {
    if (pet.state === 'swimming') {
        pet.swim();
    }
    else {
        pet.fly(); // TypeScript knows that pet must be of type Bird now
    }
}
```

In the code above, TypeScript can narrow down the type based on the state field’s value, making it safe to call pet.fly().

For your reference, here are important guidelines when working with union types:

- If a value has the type A | B, you only know for sure that it has members that both A and B have.
- Discriminating unions help you use common fields and values to let TypeScript narrow down the possible current type.
- Use conditional statements to perform type-narrowing and let TypeScript better understand the type based on the logic.

## Tuple type

Tuples in TypeScript are a type of array with a fixed number of elements, where each element has a specific type. The types of the elements do not have to be the same. You can think of a tuple as a predefined, fixed-size list.

Here’s an example of a tuple type in TypeScript:

```js
let user: [string, number];
user = ["David", 27];
```

In the example above, user is a tuple with 2 elements: the first element is a string, and the second one is a number. The length of the tuple is fixed, and the types of the elements cannot be changed once they are defined.

Accessing an element with a known index returns the correct type:

```js
console.log(user[0].toLowerCase()); // 'david'
console.log(user[1].toString()); // '27'
```

However, if you try to access an element outside the set of known indices, you will get an error:

```js
console.log(user[3]); // Index out of bounds
```

This error occurs because the tuple has only two elements, and trying to access a third element is not allowed.

It’s important to note that TypeScript’s type system can enforce the types of a tuple’s elements when you declare and initialize a tuple. However, when working with tuples, you should be mindful of their fixed size and specific types, as TypeScript will not prevent you from accessing an undefined element or attempting to assign the wrong type to a tuple element. This is why checking for undefined or using type guards is important in TypeScript:

```js
let user: [string, number];
user = ["David", 27];

// Accessing an element outside the set of known indices fails with an error
if (user[3] !== undefined) {
  console.log(user[3]);
}

// TypeScript will not prevent you from assigning the wrong type to a tuple element
user[0] = 42;
// Type 'number' is not assignable to type 'string'
```

In summary, tuples in TypeScript are a way to create fixed-size arrays with elements of specific types. While TypeScript’s type system enforces the types of a tuple’s elements, it is still up to the developer to be mindful of a tuple’s fixed size and specific types when working with them.

## Object type

Based on the provided search results, an object type in TypeScript is a type that represents all values that are not in primitive types. Primitive types in TypeScript include string, number, boolean, symbol, null, and undefined.

To declare a variable that holds an object, you can use the object type, like so:

```js
let employee: object;

employee = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  jobTitle: "Web Developer",
};

console.log(employee);
```

However, using the object type has some limitations. It only ensures that the variable can hold any object value, but it does not provide any information about the structure or properties of the object.

To define the shape of an object, you can use TypeScript’s object type declarations, which are similar to interfaces. Here’s an example:

```js
interface User {
  name: string;
  age: number;
  email: string;
}

function printUser(user: User) {
  console.log(`Name: ${user.name}`);
  console.log(`Age: ${user.age}`);
  console.log(`Email: ${user.email}`);
}

let user = {
  name: "Alice",
  age: 30,
  email: "alice@example.com",
};

printUser(user);
```

In this example, the User interface defines the shape of a User object with three properties: name, age, and email. The printUser function accepts a User object and prints its properties. Finally, a User object is created and passed to the printUser function.

TypeScript provides three main ways to declare object types:

- Using the interface keyword, like in the previous example.
- Using the type keyword, like so:

```js
type User = {
  name: string,
  age: number,
  email: string,
};

function printUser(user: User) {
  console.log(`Name: ${user.name}`);
  console.log(`Age: ${user.age}`);
  console.log(`Email: ${user.email}`);
}

let user = {
  name: "Alice",
  age: 30,
  email: "alice@example.com",
};

printUser(user);
```

- Defining an object type inline, like so:

```js
function printUser(user: { name: string, age: number, email: string }) {
  console.log(`Name: ${user.name}`);
  console.log(`Age: ${user.age}`);
  console.log(`Email: ${user.email}`);
}

let user = {
  name: "Alice",
  age: 30,
  email: "alice@example.com",
};

printUser(user);
```

By using object type declarations, you can define the shape of an object and ensure that it has the correct properties. This provides a few different kinds of safety, such as preventing incorrectly typed or missing properties.

> if optional put "?" symbol

## Difference between type aliases and interface

The primary differences between type and interface in TypeScript include:

- Terminology: Correctly, a type defined with the type keyword is called a type alias. In this response, I’ll use the terms type and type alias interchangeably.
- Re-opening a type: One significant difference between type aliases and interfaces is the ability to re-open a type. A type alias cannot be re-opened to add new properties or methods once it has been defined, whereas an interface is extendable.

Here is an example demonstrating the extendability of interfaces:

```js
interface User {
  id: number;
  name: string;
}

interface User extends User {
  email: string;
}
```

The above example would result in an error when using a type alias, but since the interface is extendable, the code compiles successfully.

- Implements keyword usage: Classes and other types can implement an interface, while they can only be assigned to a type alias.

```js
interface Describable {
  describe: () => string;
}

type Shape = {
  getArea: () => number;
};

class Square implements Describable {
  constructor(private sideLength: number) {}

  describe() {
    return 'A square with side ' + this.sideLength;
  }

  getArea() {
    return Math.pow(this.sideLength, 2);
  }
}

const square = new Square(10); // square is of type Square and Describable
const describable: Describable = square;
const shape: Shape = square;
```

- Error messages and open/closed types: TypeScript provides better error messages for interfaces in certain situations due to their open or closed nature. However, for the most common use cases, both type aliases and interfaces work similarly.

Generally, either type or interface can be used in most cases. The main differences arise when extending or re-opening types, using the implements keyword, or receiving specific TypeScript error messages. While type and type alias are used interchangeably and are more common, the correct term for a type defined with the type keyword is type alias. When in doubt, the TypeScript documentation on types vs interfaces can help with determining the best usage.

## Type: any in typescript

The any type in TypeScript is a powerful feature that allows you to opt out of type checking and assign a value of any type to a variable. This can be particularly useful when working with existing JavaScript codebase or migrating a JavaScript project to TypeScript. However, overuse of the any type can make your TypeScript project similar to a regular JavaScript project, which can lead to potential issues and make it harder to maintain.

Here are some key points to keep in mind when using the any type in TypeScript:

- The any type allows you to store a value of any type and instructs the compiler to skip type-checking.
- It is recommended to use the any type sparingly and only when you truly don’t know the type of a value or are working with dynamic values.
- If you declare a variable without specifying a type, TypeScript assumes that you are using the any type, which is known as type inference.
- When using the any type, you lose the benefits of type checking and can potentially introduce errors or make your code harder to maintain.
- The any type is particularly useful when migrating a JavaScript project to TypeScript, as it allows you to gradually opt in and opt out of type-checking during compilation.

Here are some code examples to illustrate the use of the any type in TypeScript:

> Using the any type for implicit typing:

```js
// Implicit typing with the any type
let currentLocation = JSON.parse('{ "latitude": 10.11, "longitude": 12.12 }');
console.log(currentLocation.latitude); // No type checking errors
```

> Using the any type for dynamic values:

```js
// Using the any type for dynamic values
let dynamicValue: any;
dynamicValue = 10;
dynamicValue = "Hello, World!";
dynamicValue = true;
console.log(dynamicValue); // No type checking errors
```

It’s worth noting that while the any type can be useful in certain situations, it’s generally recommended to use more specific types whenever possible. This can help to catch potential errors earlier in the development process and make your code easier to maintain in the long run.

## Type: unknown in typescript

In TypeScript, the unknown type is similar to the any type, but it offers stricter type checking. When a variable is of type unknown, you cannot perform most operations on it without first asserting or narrowing its type. This adds an additional layer of safety compared to the any type.

Here’s a simple example that demonstrates the usage of the unknown type:

```js
let userInput: unknown;

userInput = 42; // It's fine to assign a number.
userInput = "Hello, World!"; // It's also fine to assign a string.

// The following check is required, otherwise TypeScript will throw an error.
if (typeof userInput === "string") {
  console.log(userInput.length); // Now TypeScript knows it's a string, so length is accessible.
}

// Using 'userInput' as-is without asserting or narrowing its type will result in an error.
// For example, the following line will cause an error:
// console.log(userInput.length);
```

In this example, userInput is assigned both a number and a string, showcasing that it can accept any value, which is the key characteristic of the unknown type. However, to access properties or methods like length, you need to first make sure that the value is of the correct type either by using a type assertion or a type guard.

## Type: never in typescript

In TypeScript, the never type represents the type of values that never occur. This type is used in the following scenarios:

- For a function expression or an arrow function expression that always throws an exception or one that never returns. For example:

```js
function error(message: string): never {
  throw new Error(message);
}

const fail = (): never => {
  return error("Something failed");
};

function infiniteLoop(): never {
  while (true) {}
}
```

- When a variable is narrowed by any type guards that can never be true. For instance, when using the never type, no type is a subtype of, or assignable to, never (except never itself), not even any.

'never' is a subtype of every type, which means that you can assign a never value to any type, but you cannot assign any value of any type to never.

Here’s an example demonstrating the usage of the never type with a function that never returns:

```js
function error(message: string): never {
  throw new Error(message);
}

const fail = (): never => {
  return error("Something failed");
};

// Using the 'never' type with type guards
type Foo = {
  type: "foo",
  data: string,
};

type Bar = {
  type: "bar",
  id: number,
};

const checkType = (input: Foo | Bar): never => {
  if (input.type === "foo") {
    console.log(input.data.toLowerCase());
  } else if (input.type === "bar") {
    console.log(input.id);
  } else {
    throw new Error("Unexpected input type");
  }
};

checkType({ type: "foo", data: "FOO" });
checkType({ type: "bar", id: 123 });

try {
  checkType({});
} catch (error) {
  console.error(error);
}
```

In the example above, the checkType function checks the input object type and performs a different action based on its type. If the type does not match the expected types "foo" or "bar", an error is thrown, and the TypeScript compiler will infer the function as returning the never type. By throwing an error when receiving an unexpected type, the checkType function effectively communicates its constraint to the TypeScript compiler, ensuring that invalid types are caught during the compilation process rather than at runtime.

## Type: undefined & null in typescript

In TypeScript, null and undefined are special types that have the values null and undefined, respectively. Before TypeScript 2.0, it wasn’t possible to explicitly name these types, but now null and undefined can be used as type names.

When strictNullChecks is enabled, TypeScript requires values to be set, unless undefined is explicitly added to the type. This feature helps prevent common issues where variables are used before being initialized.

TypeScript 2.0 introduced control flow-based type analysis for local variables and parameters. In strict null checking mode, nullable types are represented using union types. For example, a variable of type Entity | null will be treated as a union of Entity and null. To access properties of potentially nullable variables, you can use optional chaining, which returns undefined if the property does not exist or if the variable is null or undefined.

Here is a simple example that demonstrates how to use null and undefined in TypeScript:

```js
interface Entity {
  name: string;
}

let x: Entity | null;

// Using optional chaining
let s = x?.name; // s is of type string | undefined

// Using nullish coalescing operator
let y = x ?? { name: "test" }; // y is of type Entity
```

In the above example, s is of type string | undefined because we used optional chaining to access the name property of x. If x is null or undefined, the s variable will be assigned the value undefined. The ?? operator is called the nullish coalescing operator, which returns the right operand if the left operand is null or undefined. In this case, it returns a new Entity object with the name property set to “test”.

Note that in strict null checking mode, the null and undefined types are not widened to any. In regular type checking mode, the inferred type of variables that can be null or undefined is often any. However, in strict null checking mode, the inferred type of such variables is null or undefined, depending on their value. This feature helps prevent common issues where variables are used before being initialized.

To assert that a value is not null or undefined, you can use the non-null assertion operator !. For example, x!.name asserts that x is not null or undefined, and the TypeScript compiler does not report an error. However, you should use the non-null assertion operator with caution, as it can mask potential bugs in your code.

In summary, TypeScript has a powerful system to deal with null or undefined values. By using strictNullChecks and control flow-based type analysis, you can write safer and more reliable code. To access properties of potentially nullable variables, you can use optional chaining and nullish coalescing operators. Finally, you can use the non-null assertion operator to assert that a value is not null or undefined.

## Arrays in typescript

TypeScript arrays are used to store multiple values of the same data type in a single variable, similar to other programming languages. Arrays in TypeScript are fixed-length and homogeneous collections of values. There are two ways to declare an array in TypeScript:

> Using square brackets

> Using a generic array type

Here’s an example of declaring an array using both methods:

```js
// Using square brackets
let arr1: string[] = ["apple", "banana", "orange"];

// Using a generic array type
let arr2: Array<string> = ["apple", "banana", "orange"];
```

You can also use the let keyword to declare and initialize an array:

```js
let arr: number[] = [1, 2, 3, 4];
```

TypeScript arrays can contain elements of different data types, but it is not recommended for type safety. To initialize an array with elements, you can use the array literal syntax:

```js
let arr: (string | number)[] = ["one", 2, "three", 4];
```

You can also use the spread operator to initialize arrays and objects from another array or object:

```js
let arr1: number[] = [1, 2, 3];
let arr2: number[] = [...arr1, 4, 5, 6];
```

To access individual elements in an array, you can use their index. Array indexes in TypeScript are zero-based:

```js
let arr: string[] = ["apple", "banana", "orange"];
console.log(arr[0]); // outputs 'apple'
console.log(arr[arr.length - 1]); // outputs 'orange'
```

To pass an array to a function, you can specify the array name without an index:

```js
function sum(arr: number[]): number {
  return arr.reduce((acc, val) => acc + val, 0);
}

let nums: number[] = [1, 2, 3, 4];
console.log(sum(nums)); // outputs 10
```

You can also use the Array constructor to create an array, but it’s less commonly used:

```js
let arr: number[] = new Array(1, 2, 3, 4);
let arr2: number[] = new Array(5); // creates an empty array with 5 elements
```

TypeScript also supports multidimensional arrays:

```js
let multiDimensionalArray: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
```

Finally, you can use the forEach, map, and filter methods to iterate through arrays. These methods are part of the Array prototype and are available in TypeScript:

```js
let arr: number[] = [1, 2, 3, 4];
arr.forEach((val) => {
  console.log(val);
});

let doubledArr: number[] = arr.map((val) => val * 2);

let filteredArr: number[] = arr.filter((val) => val % 2 == 0);
```

For more information on array methods in TypeScript, you can refer to the TypeScript documentation: Array Methods.

## Readonly

> The readonly keyword can prevent arrays from being changed.

```js
const names: readonly string[] = ["Dylan"];

names.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'.

// try removing the readonly modifier and see if it works?
console.log(names);
```

## TypeScript Enums

Hello! I will help you understand TypeScript Enums. Based on the provided search results, here’s a step-by-step explanation:

1. What are TypeScript Enums?

- Enums, short for enumerations, are a new data type available in TypeScript similar to languages like Java and C#.
- Enums allow you to declare a set of named constants, which can be numeric or string values.
- To define enums, you use the enum keyword.

2. Example of a simple Enum:

- Let’s say we want to store a set of print media types. The corresponding enum in TypeScript would be:

```diff
+ enum PrintMedia {
  Newspaper,
  Newsletter,
  Magazine,
  Book
}
```

- In this example, PrintMedia is an enum with four values.
- By default, the first value is assigned a numeric value of 0, and each subsequent value increments by 1, unless explicitly set.

3. Retrieving enum values and names:

- You can retrieve enum named constants using their values via inverse mapping. TypeScript supports reverse mapping (value -> name). This is possible because, during compilation, TypeScript generates a JavaScript object for enums that include both value and name as properties:

```js
enum PrintMedia {
  Newspaper = 'A',
  Newsletter = 'B',
  Magazine = 'C',
  Book = 'D'
}

let mediaType: PrintMedia;

// Using name to retrieve a value.
mediaType = PrintMedia.Newspaper;
console.log(mediaType); // A

// Using value to retrieve a name via reverse mapping.
console.log(PrintMedia[mediaType]); // Newspaper
```

As you can see, enums can be useful for creating related named constant sets and can be used in switch statements for easy readability. I hope this explanation helps! Let me know if you have questions on any specific aspects.

## Function return type in typescript

In TypeScript, a function’s return type is the value that the function returns. You can specify the return type of a function by adding a colon and the desired type after the function’s parameter list. For example:

```js
function add(val1: number, val2: number): number {
  return val1 + val2;
}
```

In this example, the add function takes two number parameters and returns a number.

You can also use the special void type to indicate that a function does not return a value:

```js
function log(message: string): void {
  console.log(message);
}
```

Here, the log function takes a string parameter and outputs it to the console. It does not return a value, so the return type is specified as void.

If you don’t specify the return type of a function, TypeScript will infer the return type based on the function’s implementation. However, it’s good practice to explicitly specify the return type for clarity and to help avoid bugs.

Keep in mind that if you specify a return type, you should make sure that the function always returns a value of the specified type if it is expected to return a value. If the function may not return a value, you can specify the return type as void or omit the return type altogether.

In summary, TypeScript allows you to specify the return type of a function. This can help make the code clearer and reduce bugs by providing more information about the function’s behavior. You can specify the return type as any valid TypeScript type, including void to indicate that the function does not return a value. If you don’t specify the return type, TypeScript will infer the return type based on the function’s implementation.

## Void Return Type in typescript

In TypeScript, the void keyword indicates that a function does not return a value. However, there is a specific behavior in TypeScript that might seem surprising at first: a function with a non-void return type can be assigned to a variable or parameter of a void-returning function type.

Here’s a step-by-step explanation:

1. When a function has a non-void return type, such as number, it means that the function will return a value of that type.
2. However, in some cases, you might not be interested in the returned value. For example, when using the forEach method in an array, the return value is often ignored.
3. TypeScript has a flexible type system that allows assigning a function with a non-void return type to a void-returning function type in such cases. This means you can pass a function with a non-void return type, like number, as an argument to a function expecting a void-returning function type.
4. This assignability enables better type compatibility and enables you to write more concise and readable code. However, it is important to note that TypeScript will still enforce that you cannot return a value within a function explicitly annotated as returning void.

Here’s an example illustrating this behavior:

```js
function returnNumber(): number {
  return 42;
}

let returnNothing: void = returnNumber(); // This will produce a type error

// However, you can use returnNumber with forEach method, which has a void return type
[1, 2, 3].forEach(returnNumber); // No type error, as the returned value is ignored
```

In the example above, the returnNumber function returns a number. When trying to assign the return value directly to a variable of type void, TypeScript produces a type error. But, when passing returnNumber to the forEach method, which expects a void-returning function type, TypeScript does not produce a type error, as the returned value is ignored.

## Parameters in typescript

The Parameters<Type> utility type in TypeScript is used to extract the parameter types of a function type as a tuple. This can be helpful when you want to create a type that matches a function’s signature or manipulate the types of a function’s parameters.

Here’s an example of how to use the Parameters<Type> utility type:

```js
function myFunction(a: string, b: number, c: boolean) {
  // function implementation
}

type MyFunctionParams = Parameters<typeof myFunction>; // [string, number, boolean]
```

In the example above, MyFunctionParams is a tuple containing the parameter types of myFunction. Note that the typeof operator is used to get the function’s type, and the Parameters<Type> utility type extracts the parameter types of that type.

Additionally, you can create a new function type from the extracted parameter types:

```js
type MyNewFunction = (...args: MyFunctionParams) => void;

const myNewFunction: MyNewFunction = (a, b, c) => {
  // function implementation
};
```

In the example above, MyNewFunction is a new function type that accepts the same parameter types as myFunction.

When working with TypeScript, it’s helpful to remember that type inference is a powerful feature that can help simplify your type annotations. For instance, when creating a tuple type from an array literal, TypeScript can infer the tuple element types based on the array elements:

```js
const tupleValue = ['hello', 42] as const; // tupleValue has type ['hello', 42]

type TupleType = typeof tupleValue; // TupleType is type ['hello', 42]
```

In the example above, TypeScript infers the tuple type ['hello', 42] based on the array literal’s values. This feature can be helpful when working with variable-length tuples, as type inference can help avoid hardcoding the tuple element types.

## Optional Parameters in typescript

<p align="justify">
Optional parameters in TypeScript are used when passing a value to a parameter of a function is optional. You can create an optional parameter by appending a ? after the parameter name. If you do not pass any value to an optional parameter, its value is set to undefined. That is why you need to check the value of an optional parameter before using it to avoid errors.

Here’s a step-by-step breakdown with examples:

1. Declare an optional parameter: In the following example, c is optional as we have appended ? after it:

```js
function addNumber(a: number, b: number, c?: number): number {
  return a + b + c;
}
```

2. Check for undefined: Before using an optional parameter, you should check if it is undefined. Here’s how you can modify the previous example to handle undefined values:

```js
function addNumber(a: number, b: number, c?: number): number {
  if (c === undefined) {
    return a + b;
  } else {
    return a + b + c;
  }
}
```

3. Default value: You can also provide a default value for an optional parameter. If the parameter is not provided when calling the function, TypeScript will use the default value:

```js
function addNumber(a: number, b: number, c: number = 0): number {
  return a + b + c;
}
```

4. Order of optional parameters: You must declare the optional parameters after the required parameters in the parameter list.
5. Strict Null Checks: If the “Settings of Strict Null Checks” is set to true, TypeScript converts the type of optional parameter to a union type (e.g., number | undefined).

For more information and examples, you can refer to TypeScript’s documentation.

## Casting with as in typescript

Type casting in TypeScript is the process of converting a variable from one type to another type. This is useful when you know more about a value than what the type system can infer. In TypeScript, you can use two syntaxes for type casting: the angle-bracket syntax (<type>value) and the as syntax (value as type).

Using the angle-bracket syntax, you can type-cast a variable as follows:

```js
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
```

Alternatively, you can use the as syntax:

```js
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
```

< align="justify">
Both syntaxes are equivalent and can be used interchangeably. However, when using TypeScript with React, you can only use the as-style type-casting.

Type casting is useful when you want to perform operations that are not allowed by the current type of a variable. For example, if you have a variable of type any that contains a string, and you want to calculate its length, you can type-cast it to the string type:

</p>

```js
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
```

<p align="justify">Type casting can also be used to convert between different numeric types, such as number and string. However, keep in mind that not all types can be type-casted to other types. For example, you cannot type-cast a number to a string:</p>

```js
let someValue: number = 46;
let strLength: string = (someValue as string); // This will produce a compiler error
```

The TypeScript compiler will throw an error because the number type cannot be type-casted to the string type. </p>

In summary, type casting in TypeScript is a powerful feature that allows you to convert variables from one type to another. By using the angle-bracket or as syntax, you can let TypeScript know that you are explicitly type-casting a variable for a certain operation. This can be useful when performing operations that are not allowed by the current type of a variable, but keep in mind that not all types can be type-casted to other types. </p>

## Casting with <> in typescript

Type casting in TypeScript is the process of converting a variable from one type to another type. This is useful when working with dynamic data or when the type of a value is not correctly inferred by TypeScript’s type inference system.

Type casting can be done using two different syntaxes: the angle-bracket syntax (<type>value) and the as keyword (value as type). Prior to the introduction of the as keyword, the angle-bracket syntax was the traditional method of type casting in TypeScript. However, the angle-bracket syntax can sometimes clash with JSX.

The as keyword is now the recommended and modern approach to casting in TypeScript. It is simple to understand and compatible with JSX. Here’s an example of type casting using the as keyword:

```js
let value: any = "TypeScript";
let strValue: string = value as string;
```

In this example, we have a variable value of type any. We use the as keyword to convert value to a string, resulting in a new variable strValue with a type of string.

It is important to note that type casting can be risky, as it does not perform a runtime type check. This means that if the value being cast is not of the correct type, it will not result in a runtime error. Instead, it is up to the developer to ensure that the value being cast is of the correct type.

When working with third-party libraries without type definitions, or when you have more knowledge about the data structure than TypeScript’s type inference, type casting can be used effectively. However, it is important to use type casting with caution and to use validation and type guards to maintain TypeScript’s benefits in catching errors and writing predictable code.

In addition to type casting, TypeScript also has other type manipulation mechanisms such as type guards, intersection types, and union types. These can be used to further refine and manipulate types in TypeScript.

For example, type guards are a way to narrow down the type of a value based on a runtime check. Here’s an example of using a type guard to narrow down the type of a value:

```js
function isNumber(value: any): value is number {
  return typeof value === 'number';
}

let input: any = "5";

if (isNumber(input)) {
  // input is now narrowed down to a number type
  console.log(input + 2); // output: 7
} else {
  console.log('input is not a number');
}
```

In this example, we define a type guard function isNumber that checks if a value is of type number. We then use this type guard in an if statement to narrow down the type of input to a number if the type guard returns true.

Intersection types allow you to combine the properties of multiple types into a single type. Here’s an example of using an intersection type:

```js
interface Person {
  name: string;
  age: number;
}

interface Developer {
  language: string;
}

type DeveloperPerson = Person & Developer;

const person: DeveloperPerson = {
  name: "John Doe",
  age: 25,
  language: "TypeScript",
};
```

In this example, we define two interfaces Person and Developer. We then use the & operator to create a new type DeveloperPerson that combines the properties of both interfaces.

Union types allow you to declare a value that might be of several different types. Here’s an example of using a union type:

```js
let value: string | number;

value = "Hello";
console.log(value.length); // output: 5

value = 5;
console.log;
```

## Force casting in typescript

Type assertions in TypeScript are used to tell the compiler that the developer has more information about a variable’s type than the compiler does. This is not the same as type casting in other languages, as TypeScript does not perform any runtime type checking or type conversion.

There are two ways to perform type assertions in TypeScript: the as keyword and the angle-bracket syntax. Here are examples of both:

```js
let inputElement: Element = document.querySelector('input');
let inputValue = (inputElement as HTMLInputElement).value;

// or

let inputValue2 = (<HTMLInputElement>inputElement).value;
```

Note that if you use the angle-bracket syntax and are also using JSX, you will need to wrap the angle-bracket syntax in parentheses to disambiguate it from JSX syntax.

It is important to note that type assertions should be used sparingly and with caution. They can be useful in certain cases, such as when working with dynamic content that cannot be fully typed, or when working with third-party libraries that have not been written in TypeScript. However, overusing type assertions can make your code brittle and difficult to maintain.

Additionally, it is worth noting that TypeScript has a feature called “non-null assertion” that can be used in certain cases to assert that a nullable value is not null or undefined. This is done using the ! postfix operator. Here is an example:

```js
let inputValue3 = document.querySelector('input')!.value;
```

This can be useful in cases where you are certain that a value is not null or undefined, but the compiler is not able to determine that. However, it should be used sparingly and with caution, as it can cause runtime errors if the assertion is incorrect.

Finally, it is worth noting that TypeScript also has a feature called “type guards” that can be used to narrow the type of a value within a conditional block of code. This can be useful in cases where you need to perform type-checking at runtime, but do not want to use type assertions. Here is an example:

```js
if (inputElement instanceof HTMLInputElement) {
  let inputValue4 = inputElement.value;
}
```

In this example, the instanceof operator is used as a type guard to narrow the type of inputElement to HTMLInputElement within the conditional block of code. This allows the value property to be accessed without using a type assertion.
