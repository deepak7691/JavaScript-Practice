// let arr = [4, 8, 7, 6, 3, 1, 4, 5, 9];

// Array.prototype.myArr = function (callback) {
//     let result = [];
//     for (let i = 0; i < this.length; i++) {
//         result.push(callback(this[i], i, this))
//     }
//     return result

// }


// let ans = arr.myArr((x) => x * 10)
// console.log(ans)



let arr = [4, 8, 7, 6, 3, 1, 4, 5, 9];

Array.prototype.myfilter = function (callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], this)) {
            result.push(this[i])
        }

    }
    return result

}

let ans = arr.myfilter((x) => x > 5)
console.log(ans)