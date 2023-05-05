// Q1 )

// const person = {
//     age: 20,
//     name: 'Ben'
// }

// const peopleArray = [person, person, person];
// peopleArray[1].name = 'Joe';
// console.log(peopleArray[0].name);   // Joe 

// Reason - Array peopleArray is created and populated with three references to the person object. So, peopleArray[0], peopleArray[1], and peopleArray[2] all reference the same object in memory.


//********************************************************************************************************************************


// Q2 )

// const person1 = {
//     name: 'Vanshu',
//     address: {
//         city: 'Patiala',
//         state: 'Punjab'

//     }
// }

// const person2 = { ...person1 };
// person2.name = "Vanshu Hassija";
// person2.address.city = 'Ludhiana';
// console.log(person1.address.city);   //   'Ludhiana'

// Reason - This is because person2 is a shallow copy of person1. When we use the spread operator (...) to create a new object from person1, it creates a new object with the same properties and values as person1, but the nested objects are still references to the original objects. Therefore, when we modify the address object of person2, it also changes the address object of person1.

// To create a deep copy of the person1 object, including all nested objects, you can use JSON.parse(JSON.stringify(person1)), but note that this method has limitations and may not work as expected with all types of objects.



//********************************************************************************************************************************


// Q3 ) 

// console.log((true + false) > 2 + true)  // false 

// Reason - true + false is 1 + 0, which equals 1. 2 + true is 2 + 1, which equals 3. Finally,  1 > 3, which is false.


//********************************************************************************************************************************


// Q4 )

// console.log(1 + "2" + "2")      // Output - 122
// console.log("A" - "B" + 2)      // Output - NaN


//********************************************************************************************************************************


// Q5 )

// console.log(typeof typeof 1)   // Output - String


//********************************************************************************************************************************



// Q6 )

// let lang = 'javascript';

// (function () {
//     let lang = 'java';    
// })()

// console.log(lang);         // Output - javascript


// (function () {
//     var lang2 = 'java';    // Cant use lang2 outside of this function
// })()

// console.log(lang2);        // Output - Uncaught ReferenceError: lang2 is not defined



//********************************************************************************************************************************



// Q7 )

const person = { name: 'Ayush' }

function sayHi(age) {
    return `${this.name} is ${age}`;

}

console.log(sayHi.call(person, 21));     // Output - Ayush is 21
console.log(sayHi.bind(person, 21));     // function sayHi  //  bind me store krna pdta hai kisi varaible me , fir call



//********************************************************************************************************************************


// Q8 )

var b = 1;
function outer() {
    var b = 2
    function inner() {
        b++;
        var b = 3;
        console.log(b)       // Output - 3
    }
    inner();
}
outer();



//********************************************************************************************************************************




