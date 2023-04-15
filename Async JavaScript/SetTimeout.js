    //                               >>>>>Timeouts & Intervals<<<<<

    //  The traditional methods JavaScript has available for running code asynchronously-

    //  1> setTimeout()

    //  2> setinterval()


//                                          setTimeout()

// >>> The setTimeout() function executes a particular block of code once after a specified time has elapsed

// example >>   setTimeout(function, duration, param1, param2, ...)

// • The first parameter is a function to run, or a reference to a function defined elsewhere

// • The second parameter is a number representing the duration in milliseconds to wait before executing the code 

// • After the second parameter, you can pass in zero or more values that represent any parameters you want to pass to the 
//   function when it is run

                                 // Code>>  
                                 //  setTimeout(()=>{
                                 //     console.log("Hello")
                                 // },5000)
                                 
                                 // using parameters
                                 //    setTimeout((param)=>{
                                 //     console.log(`Hello ${param}`)
                                 //    },3000,"Deepak Kawliya")

// **************************************************************************************************************      

//                                          >>>>>setInterval<<<<<

// same as setTimeout but runs after every interval
                   
            // Example 1  
                    //    setInterval((name) =>{
                    //     console.log(`Hello ${name}`)
                    //    },2000,"Deepak Kawliya")

                    // var timerId = setInterval((param1,param2) =>{
                    //     console.log(`Hello ${param1} ${param2}`)
                    // },1000,"Deepak","Kawliya")

            // Example 2
                    // setTimeout(() =>{
                    //     clearInterval(timerId)
                    //     console.log("setInterval cleared")
                    // },5100)




// Note>>>:

// 1. Timers and intervals are not part of JavaScript itself. They are implemented by the browser and 
//    setTimeout and setinterval are basically names given to that functionality in JavaScript.

// 2. duration parameter is the minimum delay, not guaranteed delay.