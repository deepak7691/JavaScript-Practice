const students = ["Ayush", "Deepak", "Sapna", "Kavita", "Garima", "Muskan", "Kuldeep"]

const [r1, r2, r3, r4, r5, r6, r7] = students

console.log(r1, r2, r3, r4, r5, r6, r7)

//------------------------------------------------------------------------------------------------------------------------------

const numbers = [1, 2, 3, 4, 5];

// Extracting the first element and rest of the elements into a new array
const [first, ...rest] = numbers;

console.log(first); // Output: 1
console.log(rest); // Output: [2, 3, 4, 5] 


//------------------------------------------------------------------------------------------------------------------------------


//In objects>>>

const person = {
    firstName: 'Deepak',
    lastName: 'kawliya',
    age: 25,
    city: 'Badnawar'
};

// Extracting properties from the object
const { firstName, lastName, age, city } = person;

console.log(firstName); // Output: 'John'
console.log(lastName); // Output: 'Doe'
console.log(age); // Output: 30
console.log(city); // Output: 'New York'

//-----------------------------------------------------------------------------------------------------------------------------


const person2 = {
    firstName: 'Deepak',
    lastName: 'kawliya',
    age: 25,
    city: 'Badnawar'
};

// Extracting properties from the object with new variable names
const { firstName: fName, lastName: lName, age: personAge, city: personCity } = person2;

console.log(fName); // Output: 'John'
console.log(lName); // Output: 'Doe'
console.log(personAge); // Output: 30
console.log(personCity); // Output: 'New York'


  //In this example, the properties firstName, lastName, age, and city from the person object are extracted and assigned to variables with new names fName, lName, personAge, and personCity respectively using object destructuring syntax.

//Object destructuring is a powerful and convenient feature in JavaScript that allows you to extract properties or values from objects in a concise and readable way, making your code more efficient and expressive.