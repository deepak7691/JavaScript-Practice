// A Promise is simply an object in JavaScript

// A promise is always in one of the three states >>:

// 1> pending: which is initial state, neither fulfilled nor rejected

// 2> fulfilled: meaning that the operation completed successfully

// 3> rejected: meaning that the operation failed




// Why Promises :>>
//                   Promises help us deal with asynchronous code in a far more simpler way comapred to callbacks.
//                   Callback hell can be avoided with Promises.



//How to create a Promise?
//                          const promise = new Promise()

// Example: >

//   const promise1 = new Promise((resolve, rejected) =>{
//     setTimeout(() =>{
//         resolve("Succesfull")
//     },2000)

//   })

//   const promise2 = new Promise((resolve, rejected) =>{
//     setTimeout(() =>{
//        rejected("Failed")
//     },2000)

//   })

//   const fulfilled = (Succesfull) =>{
//     console.log(Succesfull)                     //yaha success me resolve ki value aati hai
//     console.log("Wow...! Promise completed")
//   }
//                                                 //dono case me humko parameter pass krna hai bs
//   const failed = (error) =>{
//     console.log(error)                         // yaha error me reject ki value aati hai
//     console.log("Ooops...! Promise failed")
//   }

//   promise1.then(fulfilled)
//   promise2.catch(failed)

// 

//                       Summary for interview

//  1) Begin by explaining what is a Promise

//  2) Don't have to give the technical definition from MDN 

//  3) Explain in your own words

//  4) How Promises are used for async operations in JavaScript

//  5) Give an analogy to a real world scenario and connect it back to JavaScript

//  6) Talk about the three states that a Promise can be in namely pending, fulfilled and rejected

//  7) Talk about the function that is passed into the Promise constructor function

//  8) Talk about the resolve and reject functions and how they change the state of the Promise from 
//     pending to fulfilled or pending to rejected

//  9) Finally, talk about the onFulfillment and onRejection callback functions which let you decide
//     what to run when a Promise is fulfilled or rejected



// Note : Both then and catch methods return promises. hence, both .then() and .catch() methods can be chained in JavaScript.
//        hence , we can do chaining over here.

//      like this>>>  promise.then(onFulfillment).catch(onRejection)    

// we can do chaining as many times we want and this will solve the problem of CallbackHell as well



// ***********************************************************************************************************************

//                                      Promise static Methods

// 1) Promise.all() >>
//                     Query multiple APIs and perform some actions but only after all the APIs have finished loading

//     Example >>
//   const promisel = Promise.resolve(3);
//   const promise2 = 42;
//   const promise3 = new Promise((resolve, reject) => { 
//     setTimeout(resolve, 108, 'foo');
//  }); 

//   Promise.all([promisel, promise2, promise3]).then((values) => {
//     console.log(values);
//  });
//  output:[3, 42, "foo"]  //Array

// Promise.all()
// The Promise.all() method takes an iterable of promises as an input and returns a single Promise that
// resolves to an array of the results of the input promises.

// Returned promise will resolve when all of the input's promises have resolved, or if the input
// iterable contains no promises

// It rejects immediately if any of the input promises reject or the non-promises throw an error, and
// will reject with this first rejection message/error    


// Promise.allSettled()

// Promise.allSettled() waits for all input promises to complete regardless of whether or not one of them is rejected 


// Promise.race()

// The Promise.race() method returns a promise that fulfills or rejects as soon as one of the input promises 
//   fulfills or rejects, with the value or reason from that promise

//    Example>>  
//    const promisel = new Promise((resolve, reject) => { 
//         setTimeout(resolve, 500, 'one');
//     });

//    const promise2 = new Promise((resolve, reject) => { 
//         setTimeout(resolve, 100, 'two');
//     });

//     Promise.race([promisel, promise2]).then((value) => {
//          console.log(value);
//     });

// Both resolve, but promise2 is faster
// So output will be: "two"


// best example of promise >>>

const myPromise = new Promise((resolve, reject) => {
    // Perform an asynchronous operation here, for example:
    setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 10);
        if (randomNumber % 2 === 0) {
            resolve(randomNumber); // Return the random number if it's even
        } else {
            reject(new Error('Odd number')); // Reject with an error if the random number is odd
        }
    }, 1000);
});

myPromise.then(result => {
    console.log(`The promise resolved with the value ${result}`);
}).catch(error => {
    console.error(`The promise was rejected with the error: ${error}`);
});
