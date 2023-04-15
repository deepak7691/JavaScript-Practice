//        >>>>In JavaScript, functions are first class objects<<<

// 1) Just like an object, a function can be passed as an argument to a function

// 2) A function can also be returned as values from other functions

// Example >>
                    // function greet(name) {
                    //     console.log(`Hello ${name}`)
                    // }
                    
                    // function greetDeepak(greetFn) {
                    //     const name = 'Deepak'                    
                    //     greetFn(name)
                    
                    // }
                    
                    // greetDeepak(greet)

// >>>Any function that is passed as an argument to another function is called a callback function in JavaScript
// >>>The function which accepts a function as an argument or returns a function is called a higher order function

                    // function greet(name) {
                    //     console.log(`Hello ${name}`)
                    // }
                    
                    // function HigherOrderFunction(callbackFunction) {
                    //     const name = 'Deepak'                    
                    //     callbackFunction(name)
                    
                    // }
                    
                    // HigherOrderFunction(greet)

// ********************************************************************************************************************

// 1>>>       Synchronous callbacks:>

//                        A callback which is executed immediately is called a synchronous callback

//                        function greet(name) {
//                         console.log(`Hello ${name}`)
//                     }
                    
//                     function HigherOrderFunction(callbackFunction) {
//                         const name = 'Deepak'                    
//                         callbackFunction(name)
                    
//                     }
                    
//                     HigherOrderFunction(greet)

//  More Examples>>>                   

//  let numbers = [1, 2, 4]

//  numbers.sort((a, b) => a - b)     
//  numbers.map(n => n*2)              These are Synchronous callbacks and also a higherOrderFunctions
//  numbers.filter(n => n%2===0)


// >> 2).  Asynchronous callbacks:>

                   //Example >>
                                 //  setTimeout(()=>{
                                 //     console.log("Hello")      
                                 // },5000)
                                 
                        //here arrow fn is a callback function which only runs after 5 secs


                    //Example >>
                                //   function callback() {
                                //      document.getElementById("demo").innerHTML = "Hello World"
                                //   }
                                //     document.getElementById("btn").addEventListener("click", callback)    
                                
// ******************************************************************************************************************


// Problem with the callbacks pattern:>>
//                                       If you have multiple callback functions where each level depends on the 
//                callbackhell            result obtained from the previous level, the nesting of functions becomes
//                                        so deep that the code becomes difficult to read and maintain.



// >>>Callbacks summary for interview:

// 1).  Callbacks are functions passed as arguments to other functions

// 2).  They can be synchronous if they execute immediately or they can be asynchronous where they get exected after 
//      some time has passed, some event has occured or some data has been fetched

// 3).  Callbacks were the go to pattern for asynchronously running code after fetching some data

// 4), As more and more requests had to be made based on the data obtained from the previous requests, developers
//     started to encounter what is known as the callback hell

// 5). Callback hell makes the code difficult to reason about

// 6).  An alternative and the recommend approach now is to use Promises