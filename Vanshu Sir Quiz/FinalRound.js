// Q1)

const a = {};
const b = { key: 'b' };
const c = { key: 'c' };

a[b] = 123;         // a[obj obj] = 123
a[c] = 456;         // a[obj obj] = 456  override 

console.log(a[b]);  // Output - 456

// This concept is known as object property keys 
// In JavaScript, object keys can be strings, numbers, or symbols. When a non-string key, such as a number, is used, it is automatically converted to a string before being used as an object property key.

// b and c objects have the same string representation of "[object Object]". This is because the default toString() method of an object returns the string "[object Object]".

//Since both b and c have the same string representation, the second assignment to a[c] overwrites the first assignment to a[b]. So, when you log the a[b], you get last assignment ie 456





//**********************************************************************************************************************************

// Q2)

function job() {
    return new Promise(function (resolve, reject) {
        reject();
    })
}

let promise = job();

promise

    .then(function () {
        console.log('Success 1');
    })

    .then(function () {
        console.log('Success 2');
    })

    .then(function () {
        console.log('Success 3');
    })

    .catch(function () {
        console.log('Error 1');       //  Output - Error 1
    })

    .then(function () {
        console.log('Success 4');     // Output - Success 4
    })

// jab bhi resolve hota hai , sare .then execute hote hai
// jab bhi reject hota hai , 1st catch execute hone k bad sb execute hoga (.then bhi or .catch bhi )




//**********************************************************************************************************************************



// Q3) 

// var list = readHugeList()
// var nextListItem = function () {
//     var item = list.pop();
//     if (item) {
//         nextListItem()
//     }
// }

// In the given code, nextListItem function calls itself recursively until the list is empty. This can cause the call stack to overflow, especially if list is very large.

// To prevent the stack from overflowing, we can modify the nextListItem function to use a setTimeout, which allows the event loop to process other events and prevents the call stack from getting too large.

// How to do :

// var list = readHugeList();
// var nextListItem = function () {
//     var item = list.pop();
//     if (item) {
//         setTimeout(nextListItem, 0);
//     }
// };
// nextListItem();

// This will schedule the nextListItem function to be executed in the next iteration of the event loop, allowing other events to be processed before the nextListItem call is made.





//**********************************************************************************************************************************


// Q4)

let obj = {
    x: 2,
    getX: function () {
        setTimeout(() => console.log("a"), 0)                   // callback queue
        new Promise(res => res(1)).then(v => console.log(v))    // micro task queue  -->  executes first 
        setTimeout(() => console.log("b"), 0)                   // callback queue
    }
}

obj.getX();               // Output - 1 a b 






