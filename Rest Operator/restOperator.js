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