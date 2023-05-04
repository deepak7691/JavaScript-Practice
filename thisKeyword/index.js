// In JavaScript, this is a keyword that refers to the current object in which the code is being executed. 
//The value of this depends on the context in which it is used, and it can change depending on how a function is called or how an object is accessed.

// Here are some common use cases for the this keyword in JavaScript:

// 1)   Within a method of an object, this refers to the object that the method belongs to. For example:

// const myObj = {
//   name: "John",
//   greet() {
//     console.log(`Hello, my name is ${this.name}`);
//   }
// };

// myObj.greet(); // Output: "Hello, my name is John"


// In this example, this refers to the myObj object, so this.name refers to the name property of the myObj object.




// 2)  Within a function that is not a method of an object, the value of this depends on how the function is called. For example:

// function sayHello() {
//   console.log(`Hello, my name is ${this.name}`);
// }

// const person1 = { name: "John" };
// const person2 = { name: "Sarah" };

// sayHello.call(person1); // Output: "Hello, my name is John"
// sayHello.call(person2); // Output: "Hello, my name is Sarah"


// In this example, the sayHello function is not a method of an object, so the value of this depends on how the function is called using the call method.
// When we call sayHello.call(person1), this refers to the person1 object, and when we call sayHello.call(person2), this refers to the person2 object.

// When used in global scope, this refers to the global object (window in a web browser or global in Node.js). For example:

// console.log(this === window); // Output: true

// function sayHello() {
//   console.log(`Hello, my name is ${this}`);
// }

// sayHello(); // Output: "Hello, my name is [object Window]" in a web browser, or "Hello, my name is [object global]" in Node.js


// In this example, when we call sayHello() in the global scope, this refers to the global object (window in a web browser or global in Node.js).




//**************************************************************************************************


// function Pname(){
//   console.log(this.name)
// }

// global.name = "Deepak"

// Pname()

//****************************************************************************************************


// var name = "Deepak"

// const obj = {
//   name : "Deepak Dhakad",
//   abc : function(){
//     console.log(this.name)
//   }
// }

// obj.abc()  // this pointing to the obj object
// const printname = obj.abc
// printname()  // in this case , this pointing to the global / window 


//****************************************************************************************************

// global.name = "Deepak Kawliya Dhakad";   // node me gllobal , browser me window

// function abc(){
//     console.log(this.name);
// }

// obj1 = {
//     name : "Deepak"
// }

// obj2 = {
//     name : "Kawliya"
// }

// obj3 = {
//     name : "Dhakad"
// }

// abc();  // >> Deepak Kawliya Dhakad
// abc.call(obj1); //  now this pointing towards obj1 >> Deepak
// abc.call(obj2); //  now this pointing towards obj2 >> Kawliya
// abc.call(obj3); //  now this pointing towards obj3 >> Dhakad



//****************************************************************************************************

function a(){
    function b(){
        console.log(this.name)
    }
    b()
}

global.name = "Deepak Kawliya"

a() // output > Deepak Kawliya

//****************************************************************************************************

function a(){
    // this is limited to function a only
    function b(){
        // this is lost here
        console.log(this.name)
    }
    b()
}

const obj4 = {
    name : "Deep"
}

a.call(obj4)    // output  >> undefined

//****************************************************************************************************


function ab(){
    // this is limited to function a only
    const  bc = () => {
        // Arrow fn preserve the this reference of the enclosing scope
        console.log(this.name)
    }
    bc()
}

const obj5 = {
    name : "Deep Kawliya"
}

ab.call(obj5) // output >> Deep Kawliya



//****************************************************************************************************


function xyz(){
    function pqr(){
        console.log(this.name)
    }
    pqr.bind(this)() // binding this to pqr
}

const obj6 = {
    name : "Deep kawliya Dhakad"
}

xyz.call(obj6) // output: Deep kawliya Dhakad
