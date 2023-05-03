// Q1)   Which function is used to parse the string to int in js....?
// Ans >>  The parseInt() function , it takes two arguments: the string to be parsed and the radix (optional). The radix specifies the base of the number system to be used (e.g., 2 for binary, 8 for octal, 10 for decimal, 16 for hexadecimal). If the radix is not specified, parseInt() assumes a decimal (base 10) number system.

// const str = "123";
// const num = parseInt(str); // convert string to integer
// console.log(num); // output: 123

// const binaryString = "101011"; // binary string
// const octalString = "52"; // octal string
// const hexString = "1A"; // hexadecimal string

// const binaryNum = parseInt(binaryString, 2); // radix 2 for binary
// const octalNum = parseInt(octalString, 8); // radix 8 for octal
// const hexNum = parseInt(hexString, 16); // radix 16 for hexadecimal

// console.log(binaryNum); // output: 43
// console.log(octalNum); // output: 42
// console.log(hexNum); // output: 26


// Note > we can use Number() also to do the same task

// const str1 = "123";
// const num1 = Number(str1); // convert string to number
// console.log(num1); // output: 123


// Note that parseInt() and Number() functions have some differences in their behavior when it comes to parsing strings that contain non-numeric characters. parseInt() function will attempt to convert a string to a number until it encounters a non-numeric character, whereas Number() function will return NaN if the string contains non-numeric characters.

// const str3 = "1A"
// const num2 = Number(str3)
// console.log(num2)  // NaN


//*************************************************************************************************************************


// // Q2 ) 
// var a = "Newton SChool"
// var res = a.substring(2, 4);
// console.log(res) // wt


//*************************************************************************************************************************


// Q3 )

// (function () {
//     setTimeout(() => console.log(1), 2000);
//     console.log(2);                              //Output > 2 4 3 1
//     setTimeout(() => console.log(3), 0);
//     console.log(4);
// })()



//*************************************************************************************************************************


// Q4 )

// var x = 3;

// var foo = {
//     x: 2,
//     baz: {
//         x: 1,
//         bar: function () {
//             return this.x;
//         }
//     }
// }

// var go = foo.baz.bar;

// alert(go());               // alert 3
// alert(foo.baz.bar());      // alert 1


//*************************************************************************************************************************


// Q5 )

// var myArr = ['foo', 'bar', 'baz'];
// myArr.length = 0;
// myArr.push('bin');               // Output ["bin"]
// console.log(myArr); 


//*************************************************************************************************************************


// Q6 )

// const obj1 = {Name: "Hello", Age: 16};
// const obj2 = {Name: "Hello", Age: 16};

// console.log(obj1 === obj2);         // Output False

// Reason >>  In JavaScript, objects are compared by reference, not by value. That means that when two objects are compared with 
// the === operator, they are only considered equal if they refer to the same object in memory.

// In the code snippet, obj1 and obj2 are two different objects that happen to have the same properties and values. Even though the two objects look identical, they are two separate objects in memory, and therefore they have different reference addresses. As a result,   the comparison obj1 === obj2 returns false. 

//If you want to compare the values of the two objects instead of their reference addresses, you can write a custom comparison function that iterates over the properties of the objects and compares their values. Here's an example of how you can do that:

// function objectsEqual(obj3, obj4) {
//     const keys1 = Object.keys(obj1);
//     const keys2 = Object.keys(obj2);

//     if (keys1.length !== keys2.length) {
//       return false;
//     }

//     for (let key of keys1) {
//       if (obj1[key] !== obj2[key]) {
//         return false;
//       }
//     }

//     return true;
//   }

//   const obj3 ={Name: "Hello", Age: 16};
//   const obj4 = {Name: "Hello", Age: 16};

//   console.log(objectsEqual(obj3, obj4)); // output: true


//   how objects are compared by reference in JavaScript:

// const obj5 = {a: 1};
// const obj6 = {a: 1};
// const obj7 = obj5;

// console.log(obj5 === obj6); // output: false
// console.log(obj5 === obj7); // output: true


//*************************************************************************************************************************


// Q7 ) 

// function test(...args) {
//     console.log(typeof args);
//   }
// test(12);

// Reason >  The typeof operator in JavaScript returns a string indicating the type of the operand. The rest parameter syntax allows you to represent an indefinite number of arguments as an array. In other words, the args parameter is an array containing all the arguments that were passed to the test() function.

// Therefore, when the typeof operator is applied to args, it returns "object", because args is an array, which is an object in JavaScript.


//*************************************************************************************************************************


// Q8 )

function sayHi() {
    console.log(name);
    console.log(age);    // Hoisting Concet
    var name = "Ayush"
    let age = 21;
}

sayHi();



//*************************************************************************************************************************

// Q9 )

// 'use strict';

// function getAge() {
//     age = 21;               
//     console.log(age);          // ReferenceError: age is not defined
// }

// getAge();


//*************************************************************************************************************************


// Q10 )

function sayHi() {
    return (() => 0)();
  }

console.log(typeof sayHi());  // number bcoz type of 0 is number


//*************************************************************************************************************************


// Q11 ) 

console.log(1 == '1');        // true
console.log(false == '0');    // true
console.log(true == '1');     // true
console.log('1' == '01');     // false
console.log(10 == 5 + 5);     // true


//*************************************************************************************************************************

// Q12 )

function checkAge(data) {
    if (data === { age: 18 }) {
        console.log('You are an adult!');
    } else if (data == { age: 18 }) {
        console.log('You are still an adult. ');
    } else {
        console.log(`Hmm.. You don't have an age I guess`)
    }
}

checkAge({ age: 18 });  // Hmm.. You don't have an age I guess bcoz obj comparison is only possible through reference not by value


//*************************************************************************************************************************


// Q13 ) Will both functions return the same output...??

function foo1() {
    return {
        bar: "hello"
    }
}


function foo2() {
    return
    {
        bar: "hello"
    }
}

console.log(foo1())    //  { bar: 'hello' }
console.log(foo2())    //  undefined

// Reason >>>   No, the two functions will not return the same output.

// In foo1(), the object { bar: "hello" } is returned explicitly as the return value of the function.

// In foo2(), the return statement is followed by a line break and then an object literal. In JavaScript, a line break after return is automatically converted into a semicolon, which means that the return statement is terminated immediately and the function returns undefined. The object literal on the next line is never reached, so it is effectively ignored.

// So, foo1() will return { bar: "hello" } and foo2() will return undefined.