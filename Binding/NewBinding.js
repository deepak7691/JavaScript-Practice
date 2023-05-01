 function Person(name, age) {
    this.name = name;
    this.age = age;
    this.print = function() {
      console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    };
  }
  
  const deepak = new Person('Deepak', 25);
  
  deepak.print(); // Output: Hi, my name is Deepak and I am 25 years old.
  

//***********************************************************************************************************



  class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.print1 = function () {
            console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
        };
    }
}
  
  const kawliya = new Human('Kawliya', 25);
  
  kawliya.print1(); // Output: Hi, my name is Kawliya and I am 25 years old.
  



//   New Binding is used when we create a new object using a constructor function with the new keyword. The this keyword inside the constructor function refers to the newly created object, which can then have properties and methods assigned to it.