function addition(a,b, ...more){
    // console.log(more);  >>> returns an array of more arguments
    let sum = a + b;
    for(let num of more){
        sum += num
    }
    return sum;
}

const ans = addition(5,10,4,8,7,9,5,4,2,3,6);
console.log(ans);

//***********************************************************************************************************

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  
  console.log(sum(1, 2, 3, 4)); // Output: 10
  

// >> Rest syntax in JavaScript allows you to represent an indefinite number of arguments as an array. It is denoted by the ellipsis (...) followed by a variable name. Rest is used in function parameters to capture multiple arguments passed to a function into an array.

