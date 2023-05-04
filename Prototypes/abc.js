const data = [
    { id: 1, name: "Deepak", age: 20 },
    { id: 2, name: "akshay", age: 25 },
    { id: 3, name: "ghhgh", age: 30 }

];


const filteredData = data.filter((item) => item.age >= 30).map(item =>  console.log(item.name))


// filteredData.forEach((item) => console.log(item.name));
