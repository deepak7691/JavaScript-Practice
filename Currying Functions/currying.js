function abc (a){
    return function(b){
        return a + b
    }
}

const ans = abc(10);
console.log(ans(50))
console.log(ans(60))
console.log(ans(70))
console.log(ans(80))

// ************************************************************************************************************

function add(a,b){
    return a+b
}

function mul(a,b){
    return a*b;
}

function operation(op){
    return function(a){
        return function(b){
            return op(a,b)
        }
    }
}

console.log(operation(add)(10)(20))
console.log(operation(mul)(6)(10))

const x100 = operation(mul)(100);
console.log(x100(5))

const plus100 = operation(add)(100);
console.log(plus100(200))


// *****************************************************************************************************************

// Normal Function

function add(x, y) {
    return x + y;
  }

//   We can curry this function using a technique called closure, by defining a new function curriedAdd that takes the first argument x and returns a function that takes the second argument y

function curryingFunctionAdd(x) {
    return function(y) {
      return x + y;
    }
  }
  

//  Now we can use curriedAdd to create a new function that adds a fixed number to any given number. For example, to create a function that adds 10 to a number, we can call curriedAdd with the argument 10:

const addTen = curryingFunctionAdd(10);

// The resulting function addTen takes a single argument y and returns the sum of 10 and y. We can call addTen with different values of y to get different results

console.log(addTen(5));  // prints 15
console.log(addTen(10)); // prints 20
console.log(addTen(20)); // prints 30

// By currying the add function, we've created a new function that has a fixed value for one of its arguments, making it more flexible and reusable.
