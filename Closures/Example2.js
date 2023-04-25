function num(power){
    function cube(x){
        return x**power;
    }
    return cube
}

const cube = num(3);
console.log(cube(5)); 