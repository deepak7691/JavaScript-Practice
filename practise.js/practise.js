// console.log("line one");

// setTimeout(() => {
//     console.log("Hello Last me ")
// }, 0);

// for (let i = 1; i < 100; i++) {             // output >  line one   Hii 99 br   line last   Hello Last me

//     console.log("Hii");

// }

// console.log("line last");

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log("start");

// let id =setTimeout(() =>{
//     console.log("I am going to run after 2 secs");
// },2000)                                                     //Output > start  setTimeout Cleared  end
//                                                             // 0 m sec hoga to bhi  yahi output aayega
// clearTimeout(id);
// console.log("setTimeout Cleared");
// console.log("end")


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// console.log("start");

// let id =setInterval(() =>{
//     console.log("I am going to run after 2 secs");
// },2000)                                                     //Output > start  end  i am...  i am... i am... upto infinite
//                                                             // 
// console.log("end")

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log("start");

// let id = setInterval(() => {
//     console.log("I am going to run after 2 secs");
// }, 2000)                                                     //Output > start  end  i am...  i am... i am... iam...


// setTimeout(() => {
//     clearInterval(id)
// }, 10000)


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log('start'); 
// setTimeout(() => console.log("50"))
// setTimeout(() => console.log('1'), 0);
// Promise.resolve().then(() => console.log('2'));
// Promise.resolve().then(() => setTimeout(() => console.log('3')));
// Promise.resolve().then(() => console.log('4'));                     //   start  inP  6 end  2 4 7  50 1 5 3
// setTimeout(() => console.log('5'));
// const p = new Promise(resolve => {
//     console.log('inside promise');
//     console.log('6');
//     resolve('test value');                          
// });
// p.then(() => { console.log('7'); });
// console.log('end');



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const myString = "Hello, World!"; // The string to be reversed
// let reversedString = ""; // The variable to hold the reversed string

// // Loop through each character in the string starting from the end
// for (let i = myString.length - 1; i >= 0; i--) {
//   reversedString += myString[i]; // Add each character to the beginning of the reversed string
// }

// console.log(reversedString); // Output: "!dlroW ,olleH"


//**********************************
function say(){
    console.log(name);
  
    var name = "uoeb";
  
}
say();
