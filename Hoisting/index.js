

// Hoisting in JavaScript is a mechanism where variable and function declarations are moved to the top of their respective scopes(either global or local) before the execution of the code.This means that regardless of where a variable or function is declared, it will be treated as if it was declared at the beginning of the scope.

// Variable hoisting refers to the process where variable declarations are moved to the top of their respective scope, but their assignments are not.This means that variables declared with the var keyword will be initialized with a value of undefined, while variables declared with the let or const keywords will not be initialized until their declaration is reached in the code.

// For example, consider the following code:

console.log(x); // Output: undefined
 var x = 5;

// In this code, the variable x is declared with the var keyword after it is referenced in the console.log() statement.However, since variable hoisting moves the declaration to the top of the scope, the code is effectively executed as follows:


var x;
console.log(x); // Output: undefined
x = 5;

// Function hoisting works similarly, where function declarations are moved to the top of their respective scope, allowing them to be called before they are defined.However, function expressions are not hoisted, and cannot be called before they are defined.

    // It's important to understand hoisting in JavaScript, as it can lead to unexpected behavior if not used carefully. To avoid any confusion, it is recommended to always declare variables and functions at the top of their respective scopes, and to use the let and const keywords instead of var.






// what  if we use let and const ::>>

    // When using let and const instead of var, hoisting works differently.Unlike var, let and const are not initialized with a value of undefined when they are hoisted.Instead, they remain in the temporal dead zone until their declaration is reached in the code.

// For example, consider the following code:

console.log(x); // Throws a ReferenceError: x is not defined
let x = 5;

// In this code, the variable x is declared with the let keyword after it is referenced in the console.log() statement.However, since let variables are not initialized during hoisting, and remain in the temporal dead zone, the code throws a ReferenceError.

    // Similarly, the const keyword also behaves the same way as let when it comes to hoisting.The only difference is that const variables cannot be reassigned after they have been initialized.

        // In general, it is recommended to use let and const instead of var when declaring variables, as it leads to better code quality and avoids issues related to hoisting.It is also a good practice to always declare variables and functions before they are used, to avoid confusion and ensure consistent behavior.