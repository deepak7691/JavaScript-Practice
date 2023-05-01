// Implicit Binding is a way of binding this to an object using dot notation when calling a method. 
// When a function is invoked with dot notation, this is automatically bound to the object to the left of the dot.

const person = {
    name: 'Deepak',
    age: 25,
    print : function() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
    }
  };
  
  person.print(); // Output: Hello, my name is Deepak and I am 25 years old.
  