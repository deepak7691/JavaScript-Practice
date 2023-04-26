// 1) push() : The push() method adds one or more elements to the end of an array and returns the new length of the array. In this example, we have an array [1, 2, 3]. We add two elements 4 and 5 to the end of the array using push(). The myArray now becomes [1, 2, 3, 4, 5]. The newLength variable stores the new length of the array which is 5.

let myArray1 = [1, 2, 3];
let newLength = myArray1.push(4, 5);
console.log(myArray1); // [1, 2, 3, 4, 5]
console.log(newLength); // 5






//  2)  pop(): The pop() method removes the last element from an array and returns it. In this example, we have an array [1, 2, 3]. We remove the last element from the array using pop(). The myArray now becomes [1, 2]. The lastElement variable stores the removed element which is 3.

let myArray2 = [1, 2, 3];
let lastElement = myArray2.pop();
console.log(myArray2); // [1, 2]
console.log(lastElement); // 3






//  3)  shift(): The shift() method removes the first element from an array and returns it. In this example, we have an array        [1, 2, 3]. We remove the first element from the array using shift(). The myArray now becomes [2, 3]. The firstElement variable     stores the removed element which is 1.

let myArray3 = [1, 2, 3];
let firstElement = myArray3.shift();
console.log(myArray3); // [2, 3]
console.log(firstElement); // 1






//   4)  unshift(): The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array. In this example, we have an array [1, 2, 3]. We add two elements 0 and -1 to the beginning of the array using unshift(). The myArray now becomes [0, -1, 1, 2, 3]. The newLength variable stores the new length of the array which is 5.

let myArray4 = [1, 2, 3];
let newLen = myArray4.unshift(0, -1);
console.log(myArray4); // [0, -1, 1, 2, 3]
console.log(newLen); // 5






//  5)  splice(): The splice() method removes, replaces, or inserts elements into an array at a specified index. In this example, we have an array [1, 2, 3, 4, 5]. We remove one element at index 2 and insert three new elements 'a', 'b', and 'c'. The myArray now becomes [1, 2, "a", "b", "c", 4, 5].

let myArray5 = [1, 2, 3, 4, 5];
myArray5.splice(2, 1, 'a', 'b', 'c');
console.log(myArray5); // [1, 2, "a", "b", "c", 4, 5]






//  6)  slice(): The slice() method returns a new array that contains a portion of an existing array. In this example, we have an array [1, 2, 3, 4, 5]. We slice the array starting from index 1 and ending at index 4. The newArray variable stores the sliced portion of the array which is [2, 3, 4].

let myArray6 = [1, 2, 3, 4, 5];
let newArray = myArray6.slice(1, 4);
console.log(newArray); // [2, 3, 4]





//  7)  concat(): The concat() method returns a new array that combines two or more arrays. In this example, we have two arrays [1, 2, 3] and [4, 5, 6]. We combine these two arrays using concat() and store the result in newArray which is [1, 2, 3, 4, 5, 6].

let myArray7A = [1, 2, 3];
let myArray7B = [4, 5, 6];
let combineArr = myArray7A.concat(myArray7B);
console.log(combineArr); // [1, 2, 3, 4, 5, 6]






//  8)  indexOf(): The indexOf() method is used to find the index of the first occurrence of a specified element in an array. In the example, indexOf() is used to find the index of 3 in the myArray, which is 2.

let myArray8 = [1, 2, 3, 4, 5];
let index = myArray8.indexOf(3);
console.log(index); // 2






//  9)  lastIndexOf(): The lastIndexOf() method is used to find the index of the last occurrence of a specified element in an array. In the example, lastIndexOf() is used to find the index of the last occurrence of 3 in the myArray, which is 5.

let myArray9 = [1, 2, 3, 4, 5, 3];
let indexLast = myArray9.lastIndexOf(3);
console.log(indexLast); // 5






//  10)  join(): The join() method is used to create a string that contains all the elements of an array separated by a specified delimiter. The method accepts one optional argument, which is the delimiter to use between each element of the array in the resulting string. If no delimiter is specified, a comma (,) is used as the default delimiter.

const myArray10 = [1, 2, 3, 4, 5];
const delimiter = ', ';

const result = myArray10.join(delimiter);
console.log(result); // "1, 2, 3, 4, 5"









