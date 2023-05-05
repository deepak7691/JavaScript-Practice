// Q1 ) What will be the no of passengers in combined object ?

// const carOne = {
//     color: 'blue',
//     status: {
//         running: true,
//         passengers: 4,
//         wiperFluid: 'empty'
//     },
//     age: 5,
//     miles: 50000,
//     value: '8000'
// }

// const carTwo = {
//     color: 'green',
//     status: {
//         running: 'yes',
//         passengers: 2,
//         fuelTank: 'empty'
//     },
//     value: 9000
// }

// const combinedCar = {
//     ...carOne,
//     ...carTwo
// }

// console.log(combinedCar)
// console.log("Ans is " ,combinedCar.status.passengers)  // output - Ans is  2 bcoz of overriding


//*****************************************************************************************************************************


// Q2 ) What will be the output ?

// console.log(1 && (0 === 1) || 0)  // Output - 0


//*****************************************************************************************************************************



// Q3 ) 

// console.log(10 > 9 > 8 === true)    // Output - false

// Why - The expression 10 > 9 evaluates to true, which means the expression becomes true > 8 === true.
//  In JavaScript, the boolean value true can be implicitly converted to the number 1, and false to 0 when used in arithmetic     operations. So, true > 8 evaluates to 1 > 8, which is false.
//  Then, we have false === true, which evaluates to false.



//*****************************************************************************************************************************


// Q4 )

// console.log(1 + +"2" + "2")    // 32
// console.log("A" - "B" + 2)      //NaN

// The +"2" part uses the unary plus operator to convert the string "2" to a number. The resulting expression becomes 1 + 2 + "2"
// The - operator is used with two strings "A" and "B", which cannot be subtracted from each other, resulting in NaN
// When NaN is used in an arithmetic expression, the result is always NaN.


//*****************************************************************************************************************************



// Q5 )

// function sayHi() {
//     console.log(name);              // undefined
//     console.log(age);               // nnot access 'age' before initialization
//     var name = "Aayush";
//     let age = 21;
// }
// sayHi();



//*****************************************************************************************************************************


// Q6 )

const call = {
 caller: "mom",
    says: () => { 
        console.log(`Hey, ${this.caller} just called`);
    }
}
    
    call.says();

// Reason - The reason for this is that arrow functions do not have their own this binding, so the value of this inside the arrow function refers to the this value of the enclosing lexical scope. In this case, the enclosing lexical scope is the global scope, which means this.caller refers to the caller property of the global object (or undefined in strict mode).










