// Explicit Binding is a way of binding this to a specific object using one of the following methods: call(), apply(), or bind().
// Explicit binding is useful when we want to specify which object should be used as this in a function call, regardless of how it is invoked.

// 1)  Using Call

function print1(greeting) {
    console.log(`${greeting}, my name is ${this.name} and I am ${this.age} years old.`);
  }
  
  const person1 = {
    name: 'Deepak',
    age: 25
  };
  
  print1.call(person1, 'Hello'); // Output: Hello, my name is Deepak and I am 25 years old.



// 2)  Using Apply

function print2(greeting, language) {
    console.log(`${greeting}, my name is ${this.name} and I speak ${language}.`);
  }
  
  const person2 = {
    name: 'Deepak Kawliya'
  };
  
  print2.apply(person2, ['Hello', 'English']); // Output: Hello, my name is Deepak kawliya and I speak English.
  
  
// 3)  Using Bind 

function print3(greeting) {
    console.log(`${greeting}, my name is ${this.name} and I am ${this.age} years old.`);
  }
  
  const person3 = {
    name: 'Deepak Dhakad',
    age: 25
  };
  
  const printresult = print3.bind(person3, 'Hello');
  
  printresult(); // Output: Hello, my name is Deepak Dhakad and I am 25 years old.
  