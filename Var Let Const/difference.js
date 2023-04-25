// In JavaScript, var, let, and const are keywords used to declare variables, but they differ in their behavior and usage. Here are the main differences between them:

// Variable Scope:
// var has function-level scope, meaning that a variable declared with var is accessible throughout the entire function, regardless of block scope.

// let and const have block-level scope, which means that a variable declared with let or const is only accessible within the block of code (e.g., inside a loop or an if statement) where it is declared.



// Hoisting :
// var variables are hoisted to the top of their scope during the code execution, allowing them to be accessed before their declaration.
// let and const variables are hoisted as well, but unlike var, they are not initialized with a value of undefined during hoisting. Instead, they remain in the temporal dead zone until their declaration is reached in the code, and accessing them before their declaration will result in a ReferenceError.



// Reassignment:
// var and let variables can be reassigned multiple times.
// const variables, on the other hand, cannot be reassigned after they are initialized. However, const does not make objects or arrays immutable, meaning that their properties can still be modified.




// Initialization:
// var variables are initialized with a value of undefined during hoisting if not explicitly assigned a value.
// let and const variables are not automatically initialized during hoisting and must be explicitly assigned a value before they are accessed.




// Redeclaration:
// var allows for redeclaration of a variable within the same scope without throwing an error.
// let and const do not allow for redeclaration of a variable within the same scope. Redeclaring a variable with let or const in the same scope will result in a SyntaxError.


// Usage:
// var is an older keyword that was widely used in older JavaScript code and is still supported for backward compatibility. However, it is generally not recommended to use var in modern JavaScript code due to its less predictable scoping behavior.
// let is used when you need to declare a variable that can be reassigned or its value can change over time.
// const is used when you need to declare a variable that should not be reassigned after its initialization, and its value should remain constant.

// In general, it is recommended to use let and const in modern JavaScript code due to their block-level scoping, predictable behavior, and better code quality. Use let when you need to declare a variable that can be reassigned, and use const when you need to declare a variable that should not be reassigned. Use var only when you specifically require its unique scoping behavior or when working with legacy code.






// Example 1: Scope
function example1() {
    var x = 1;
    let y = 2;
    const z = 3;
  
    if (true) {
      var x = 10;
      let y = 20;
      const z = 30;
      console.log(x, y, z); // Output: 10 20 30
    }
  
    console.log(x, y, z); // Output: 10 2 3
  }
  
  example1();
  





  // Example 2: Hoisting
  function example2() {
    console.log(a); // Output: undefined
    var a = 1;
  
    console.log(b); // Output: ReferenceError: b is not defined
    let b = 2;
  }
  
  example2();





  
  // Example 3: Reassignment
  function example3() {
    var x = 1;
    let y = 2;
    const z = 3;
  
    x = 10;
    y = 20;
    // z = 30; // Output: TypeError: Assignment to constant variable.
  
    console.log(x, y, z); // Output: 10 20 3
  }
  
  example3();





  
  // Example 4: Initialization
  function example4() {
    var x;
    let y;
    const z;
  
    console.log(x, y, z); // Output: undefined undefined Uncaught SyntaxError: Missing initializer in const declaration
  }
  
  example4();



  
  
  // Example 5: Redeclaration
  function example5() {
    var x = 1;
    // var x = 2; // Output: No error
  
    let y = 3;
    // let y = 4; // Output: SyntaxError: Identifier 'y' has already been declared
  
    const z = 5;
    // const z = 6; // Output: SyntaxError: Identifier 'z' has already been declared
  }
  
  example5();