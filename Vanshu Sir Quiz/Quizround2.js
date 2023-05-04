// Q1 )   What all variables can inner function access?   Ans - All
//        Will function inner form a closure ?            Ans - Yes

// function outest(a) {
//     function outer(b) {
//         function inner(c) {
//             console.log(a, b, c)    //  Hii Mr Deepak
//         }
//         return inner;
//     }
//     return outer;
// }

// const out = outest("Hii")
// const inner = out("Mr")
// inner("Deepak")


//**************************************************************************************************************************


// Q2 ) Hoisting Concept

// console.log('bar:', bar);
// bar = 15;
// var foo = 1;
// console.log("foo:", foo, "bar:", bar);  // Output - bar: undefined
// var bar;                                //          foo: 1 bar: 15


//**************************************************************************************************************************


// Q3 ) 

// var fullname = "Amitabh Bachaan";

// var obj = {
//     fullname: "Shahrukh Khan",
//     prop: {
//         fullname: "Varun Dhawan",
//         getFullname: function () {
//             return this.fullname
//         },
//     },
//     getMyName: function () {
//         return this.fullname
//     },
//     getFirstname: function () {
//         return this.fullname.split(' ')[0]
//     },
//     getLastname: (function () {
//         return this.fullname.split(' ')[1]
//     })()

// }

// console.log(obj.prop.getFullname()) // Varun Dhawan
// console.log(obj.getFirstname())     // Shahrukh
// console.log(obj.getMyName());       // Shahrukh Khan
// console.log(obj.getLastname)        // Bachaan (iife this always pointing towards global/window)


//**************************************************************************************************************************


// Q4 )

// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 1, c: 2 };
// const obj3 = { c: 1, d: 2 };

// Object.assign(obj1, obj2, obj3); // obj 1 me obj2 obj3 daldo or same key hoto value override krdo
// const { a, b, c, d } = obj1;            // Object.assign used to craete copy, 1st argu is the target obj in which we have to copy. other are what to copy
// console.log(a + b + c + d)             // 1+1+1+2 = 5


//**************************************************************************************************************************


// Q5 )


// var myObject = {
//     foo: "bar",
//     func: function () {
//         var self = this;

//         console.log("outer func: this.foo = " + this.foo);         // outer func: this.foo = bar
//         console.log("outer func: self.foo = " + self.foo);         // outer func: self.foo = bar

//         (function () {
//             console.log("inner func: this.foo = " + this.foo);     // inner func: this.foo = undefined
//             console.log("inner func: self foo = " + self.foo);     // inner func: self foo = bar
//         })();
//     }
// }
// myObject.func();

//Explanation >  The third and fourth console.log statements are inside an immediately invoked function expression (IIFE) that is nested inside func. When the IIFE is invoked, the this keyword inside the IIFE refers to the global object (in a browser, it would be window; in Node.js, it would be global), not to the myObject object. Therefore, this.foo inside the IIFE is undefined, and the third console.log statement outputs "inner func: this.foo = undefined". However, since self was assigned the value of this inside func,   self.foo still refers to the foo property of the myObject object, and the fourth console.log statement outputs "inner func: self foo = bar"



//**************************************************************************************************************************



// Q6 )

// (function () {
//     console.log(1);
//     setTimeout(function () { console.log(2) }, 1000);   // output - 1 4 3 2
//     setTimeout(function () { console.log(3) }, 0);
//     console.log(4);
// })()


//**************************************************************************************************************************


// Q7 ) What will be printed when button 4 is clicked ?  


// for (var i = 0; i < 5; i++){
//  var btn = document.createElement('button'); 
//  btn.appendChild(document.createTextNode("Button" + i));
//  btn.addEventListener('click', function(){ console.log(i); });
//   document.body.appendChild(btn)
// }

// Answer - 5

//The code will create five buttons with text "Button0", "Button1", "Button2", "Button3", and "Button4". However, when any of these buttons are clicked, it will always log the value of i as 5 to the console. This is because the event listener function function() { console.log(i); } is not executed immediately when the button is created, but only when the button is clicked. At that point, the for loop has already finished running, and the value of i is 5.


// To fix this issue , we have to use let instead of var in for loop. Now when we click on any button respective index will be printed
// Or we can use clousure also to fix this issue 

// Using Clousure : 

// for (var i = 0; i < 5; i++) {
//     var btn = document.createElement('button');
//     btn.appendChild(document.createTextNode("Button" + i));
//     btn.addEventListener('click', createButtonClickListener(i));
//     document.body.appendChild(btn);
//   }

//   function createButtonClickListener(index) {
//     return function() {
//       console.log(index);
//     }
//   }


//**************************************************************************************************************************


// Q8 )

// let arr = [1, 2,"a", 3]
// const myarr = arr.map(num => {
//     if (typeof num === 'number') return;
//     return num * 2
// })

// console.log(myarr)       // Output - [ undefined, undefined, undefined ]

//In this case, the function passed to map() checks if the type of the current element in the iteration is 'number'. If it is, the function returns undefined (since there is no return value specified after the return keyword). If the type is not 'number', the function multiplies the number by 2 and returns the result.


//**************************************************************************************************************************


// Q9 )

console.log([..."Deepak"])  // Output - [ 'D', 'e', 'e', 'p', 'a', 'k' ]

//  This is because the spread syntax splits the string into individual characters and places them into an array.










