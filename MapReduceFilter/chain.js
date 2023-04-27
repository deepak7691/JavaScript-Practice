// 1) Map :

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]


// 2) Reduce :

const number = [1, 2, 3, 4, 5];
const sum = number.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum); // Output: 15

// 3) Filter : 

const nums = [1, 2, 3, 4, 5];
const evenNumbers = nums.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]



// Chaining on Simple array

let arr = [1,2,3,4,5,6,7,8,9];

let result = arr
.map(x => x*2)                         // sbko double kiya                   [ 2, 4, 6, 8, 10, 12, 14, 16, 18]
 .filter(x => x <= 10)                 // 10 ya 10 se km wale ko alg kiya   [ 2, 4, 6, 8, 10 ]
.reduce((acc, cur) => acc + cur, 0)    // jo alg kiye unko add kiya          30

console.log(result)



// ****************************************************************************************************************************

