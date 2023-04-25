const func1 = (fname) => {
    const func2 = (lname) => {
        console.log(`My name is ${fname} ${lname}`);
    }
    return func2
}

const fullNmae = func1("Deepak");    
fullNmae("Kawliya");   

