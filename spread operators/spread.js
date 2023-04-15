const data = ["Deepak" , "Rahul", "Rohit", "Sapna"]

const getname =(a,b,c,d) =>{
  console.log(a,b,c,d)
}

getname(...data) //>> we pass argument usings spread operator


//***************************************************************************************************************

//>> Spread syntax in JavaScript allows you to spread the elements of an array or the properties of an object into another array or object. It is denoted by the ellipsis (...) followed by the array or object you want to spread.

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combinedArray = [...arr1, ...arr2]; // Spread elements of arr1 and arr2 into combinedArray
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const combinedObject = {...obj1, ...obj2}; // Spread properties of obj1 and obj2 into combinedObject
console.log(combinedObject); // Output: { a: 1, b: 2, c: 3, d: 4 }


//********************************************************************************************************************

//also use to create copy
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray]; // Spread elements of originalArray into copiedArray
console.log(copiedArray); // Output: [1, 2, 3]
copiedArray[0]=5
console.log('5 aayega',copiedArray); 
console.log("wahi rhega",originalArray); 

const originalObject = { a: 1, b: 2, c: 3 };
const copiedObject = { ...originalObject }; // Spread properties of originalObject into copiedObject
console.log(copiedObject); // Output: { a: 1, b: 2, c: 3 }
