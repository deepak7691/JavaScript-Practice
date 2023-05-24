const data = { name: 'Deepak', age: 26 };

// Convert the object to a string using JSON.stringify
const dataString = JSON.stringify(data);


// Store the string representation in local storage
localStorage.setItem('userData', dataString);



// Retrieve the string from local storage
const storedDataString = localStorage.getItem('userData');

// Convert the string back to an object using JSON.parse
const storedData = JSON.parse(storedDataString);


// Use the retrieved object
// console.log(storedData.name); // Output: Deepak
// console.log(storedData.age); // Output: 26



// Accessing Local Storage: Local storage can be accessed using the localStorage object in JavaScript, which provides methods for setting, getting, and removing data.

// localStorage.setItem(key, value): This method sets a value in local storage associated with the specified key.
// localStorage.getItem(key): This method retrieves the value from local storage associated with the specified key.
// localStorage.removeItem(key): This method removes the key-value pair from local storage associated with the specified key.
// localStorage.clear(): This method clears all key-value pairs from local storage.



// Important >>  Data Format: Local storage can only store string values. If you want to store objects or other complex data types, you need to convert them to strings using techniques like JSON serialization (e.g., using JSON.stringify) before storing and then parse them back into their original format (e.g., using JSON.parse) when retrieving the data.

// Remember to use JSON.stringify to convert the data to a string before storing, and JSON.parse to convert it back to the original format when retrieving it.