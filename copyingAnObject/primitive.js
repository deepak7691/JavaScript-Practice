// The concepts of shallow copy and deep copy do not apply to primitive data types in JavaScript, as primitive data types are immutable, meaning their values cannot be changed once they are assigned.

// No, the concepts of shallow copy and deep copy do not apply to primitive data types in JavaScript, as primitive data types are immutable, meaning their values cannot be changed once they are assigned.

// In JavaScript, primitive data types include:

// Number: Represents numeric values, such as integers and floating-point numbers.
// String: Represents sequences of characters.
// Boolean: Represents true or false values.
// Null: Represents the absence of value.
// Undefined: Represents the absence of a value, typically uninitialized variables.
// Symbol: Represents unique and immutable values.

// Since primitive data types are immutable, creating a copy of a primitive value simply involves creating a new variable and assigning the value to it. Changes made to the copied value will not affect the original value, as they are separate entities with their own memory references.

const originalNumber = 42;
const shallowCopy = originalNumber; // Creating a shallow copy of the originalNumber
const deepCopy = originalNumber; // Creating a deep copy of the originalNumber

console.log(shallowCopy); // 42
console.log(deepCopy); // 42

shallowCopy = 50; // Modifying the shallowCopy
console.log(shallowCopy); // 50
console.log(originalNumber); // 42 (originalNumber remains unchanged)

deepCopy = 60; // Modifying the deepCopy
console.log(deepCopy); // 60
console.log(originalNumber); // 42 (originalNumber remains unchanged)
