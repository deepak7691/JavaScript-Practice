// 1)  Named Function
 
function namedFunction(a,b){
   console.log(a+b) 
}

namedFunction(2,8)


// 2)  Anonymous Function

let sum = function(a,b){
    console.log(a+b)
}

sum(10,15)


// 3) Arrow Functions 

let addition = (a,b) => console.log(a+b)
addition(20,30)

// 4) IIFE  

// (function(a,b){
//     console.log(a+b)
// })(1,2)



// 5) Higher Order Function  >> Higher-order functions in JavaScript are functions that can accept other functions as arguments or      return functions as results. They enable a functional programming style and allow for more flexible and reusable code.

// Higher-order function that accepts a function as an argument
function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();
  }
  
  // Callback function passed as an argument
  function sayGoodbye() {
    console.log('Goodbye!');
  }
  
  // Calling the higher-order function
  greet('John', sayGoodbye);
  
  

  // 6) Constructor Function >> Constructor functions in JavaScript are used to create objects with a specific structure and behavior. They are typically used as blueprints for creating multiple instances of objects with similar properties and methods. 

  // Constructor function for creating a Person object

  function Person(name, age) {
    this.name = name;
    this.age = age;
  }


   class Persons {
    constructor(name, age) {           // Alternate of Constructor Function ie > Class
        this.name = name            
        this.age = age
    }
}
  
  // Creating instances of Person using the 'new' keyword
  const person1 = new Person('Deepak', 25);
  const person2 = new Persons('Kawliya', 30);
  
  // Accessing properties of the Person objects
  console.log(person1.name); // Output: Deepak
  console.log(person2.age); // Output: 30
  


  
