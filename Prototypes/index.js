// Define a constructor function
function Animal(name) {
    this.name = name;
  }
  
  // Add a method to the prototype of the Animal constructor
  Animal.prototype.speak = function() {
    console.log(`My name is ${this.name}`);
  };
  
  // Create new objects using the Animal constructor
  const cat = new Animal("Fluffy");
  const dog = new Animal("Fido");
  
  // Call methods on the objects
  cat.speak(); // Output: "My name is Fluffy"
  dog.speak(); // Output: "My name is Fido"

  
//   In this example, we define a constructor function called Animal that takes a name parameter and sets it as a property on the object using this.name = name. We then add a new method called speak() to the prototype of the Animal constructor using Animal.prototype.speak.

// We can then create new objects using the Animal constructor, and when we call the speak() method on each object, it outputs the name of the object. This is because each object created using the Animal constructor inherits the speak() method from the Animal.prototype object.





// Define a prototype object
const animalPrototype = {
    type: 'Unknown',
    sound: 'Unknown',
    speak() {
      console.log(`The ${this.type} makes a ${this.sound} sound.`);
    }
  };
  
  // Create a new object that inherits from the prototype
  const dog = Object.create(animalPrototype);
  dog.type = 'Dog';
  dog.sound = 'Woof!';
  
  // Call a method on the object, which is inherited from the prototype
  dog.speak(); // Output: "The Dog makes a Woof! sound."
  
  // Create another object that also inherits from the same prototype
  const cat = Object.create(animalPrototype);
  cat.type = 'Cat';
  cat.sound = 'Meow!';
  
  // Call a method on the second object, which is also inherited from the prototype
  cat.speak(); // Output: "The Cat makes a Meow! sound."

  
  


const arr = [ 1,5,4,6]

Array.prototype.con= function(){
  console.log("I am from proto")
}

arr.con() // I am from proto