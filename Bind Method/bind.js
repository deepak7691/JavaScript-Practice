let name = {
    firstName : "Deepak",
    lastName : "Kawliya"
}

function print(greeting){
    console.log(`${greeting}  ${this.firstName}  ${this.lastName}`);
}

let display = print.bind(name,"Hello");
display();