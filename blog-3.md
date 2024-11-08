### Que : Why are Type Guards Necessary? Discuss Various Types of Type Guards and Their Use Cases.


TypeScript is a powerful tool for developers, allowing JavaScript to be typed. Type guards are mainly used to making code more readable and maintainable. However, even with TypeScript’s robust type-checking, there are scenarios where we need to verify the actual runtime type of a variable or value—this is where Type Guards come into play.

### Using Type Guards provides several benefits:

**Enhanced Type Safety**: Type Guards ensure the correct type is used, preventing runtime errors.
**Improved Code Readability**: They help indicate what type of data is being worked with at a given point.
**Better IntelliSense Support**: Type Guards inform TypeScript, enhancing IDE support by showing appropriate suggestions for methods and properties.

## Different Types of Type Guards in TypeScript

TypeScript provides several built-in ways to create type guards. Let’s explore the most commonly used ones and see examples of each.

### 1. typeof Type Guard

The typeof operator is one of the simplest type guards. It can check basic types like string, number, boolean, and symbol.

#### Use Case:
Use typeof when you need to differentiate between primitive types in a union type.

```typescript
function greet(person: string | number) {
  if (typeof person === 'string') {
    console.log(`Hello, ${person}!`);
  } else {
    console.log(`Your age is ${person}`);
  }
}
```

### 2. `instanceof` Type Guard

The `instanceof` operator checks if an object is an instance of a specific class. This is useful for distinguishing between instances of different classes in object-oriented programming.

#### Use Case:
Use `instanceof` to distinguish between different classes, particularly when working with complex object-oriented structures.

```typescript
class Dog {
  bark() {
    console.log('Woof!');
  }
}

class Cat {
  meow() {
    console.log('Meow!');
  }
}

function animalSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}
```

### 3. Custom Type Guards (User-Defined Type Guards)

For complex cases, you may need to define your own type guards using type predicates. This is done by creating a function that returns a boolean value and uses the `is` keyword to specify the type condition.

#### Use Case:
Use custom type guards when working with interfaces or types where built-in type guards are insufficient.

```typescript
interface Car {
  drive(): void;
}

interface Boat {
  sail(): void;
}

function isCar(vehicle: Car | Boat): vehicle is Car {
  return (vehicle as Car).drive !== undefined;
}

function operate(vehicle: Car | Boat) {
  if (isCar(vehicle)) {
    vehicle.drive();
  } else {
    vehicle.sail();
  }
}
```

### 4. `in` Operator Type Guard

The `in` operator checks if a property exists in an object. This is especially helpful for differentiating between objects that have unique properties.

#### Use Case:
Use the `in` operator for objects with unique properties in a union, especially when working with simpler, property-based checks.

```typescript
interface Bird {
  fly(): void;
}

interface Fish {
  swim(): void;
}

function moveAnimal(animal: Bird | Fish) {
  if ('fly' in animal) {
    animal.fly();
  } else {
    animal.swim();
  }
}
```
