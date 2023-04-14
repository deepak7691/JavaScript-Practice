const oldObject = { prop1: "old value" };

// Assign the object to a new variable, yaha naya object nhi bna hai bs ek varaible me store kiya hai old wale ko
const newObject = oldObject;

// Modify a property of the new object
newObject.prop1 = "new value";

// Access the property of the old object
console.log(oldObject.prop1); // Output: "new value"


// In the example above, oldObject is an object with a property prop1 set to the value "old value". When oldObject is assigned to newObject, both variables now reference the same object in memory. So, when prop1 of newObject is updated to "new value", the same change is reflected in oldObject as well.

// **********************************************************************************************************************************

// To create a true copy of an object that is independent of the original object, you can use techniques such as object cloning, shallow copying, or deep copying. These techniques create a new object with a new memory reference, so changes to the new object won't affect the original object.

//Here are examples of different ways to create a copy of an object in JavaScript:
// 1). >>>   Object.assign(): This method performs a shallow copy of an object, creating a new object with a new memory reference, but only for the top-level properties of the object. Nested objects will still maintain the same memory reference.

const originalObject = { prop1: "value1", prop2: "value2" };

// Using Object.assign to create a shallow copy
const shallowCopy = Object.assign({}, originalObject);

// Modifying the shallow copy
shallowCopy.prop1 = "new value1";

console.log(originalObject.prop1); // Output: "value1"
console.log(shallowCopy.prop1); // Output: "new value1"


//  It takes multiple arguments, with the first argument being the target object to which the properties will be copied, and subsequent arguments being the source objects from which the properties will be copied.

// In this case, {} is used as an empty object literal, which serves as the target object for the Object.assign() method. The originalObject is used as the source object, from which the properties will be copied to the shallowCopy.

// The Object.assign() method performs a shallow copy, which means that only the top-level properties of the originalObject are copied to the shallowCopy. If the originalObject has any nested objects, the references to those objects will be copied to the shallowCopy, rather than creating new objects. This is why it's called a shallow copy, as the new object created by Object.assign() shares the same references to nested objects with the original object.


// 2). >>> Spread operator (...): The spread operator can also be used to perform a shallow copy of an object in a similar way as Object.assign(). It creates a new object with a new memory reference for the top-level properties, but not for nested objects.

const originalObject = { prop1: "value1", prop2: "value2" };

// Using spread operator to create a shallow copy
const shallowCopy = { ...originalObject };

// Modifying the shallow copy
shallowCopy.prop1 = "new value1";

console.log(originalObject.prop1); // Output: "value1"
console.log(shallowCopy.prop1); // Output: "new value1"

// In this case, {...originalObject} is used to create a new object literal, and the properties of the originalObject are spread into this new object. The result is a new object with the same properties as the originalObject, but with a new memory reference. Any changes made to the shallowCopy will not affect the originalObject, as they will be made on a separate object in memory.


// 3). >>> JSON.parse() and JSON.stringify(): This approach involves converting the object to a JSON string using JSON.stringify(), and then parsing the JSON string back into a new object using JSON.parse(). This creates a new object with a new memory reference, and it also creates new memory references for any nested objects, resulting in a deep copy.

const originalObject = { prop1: "value1", prop2: "value2" };

// Using JSON.parse() and JSON.stringify() to create a deep copy
const deepCopy = JSON.parse(JSON.stringify(originalObject));

// Modifying the deep copy
deepCopy.prop1 = "new value1";

console.log(originalObject.prop1); // Output: "value1"
console.log(deepCopy.prop1); // Output: "new value1"


// The JSON.stringify() method is a built-in method in JavaScript that converts a JavaScript object into a JSON string. The JSON.parse() method is a built-in method that parses a JSON string and returns a new JavaScript object.

// By using JSON.stringify() followed by JSON.parse(), we can effectively create a deep copy of an object, including all of its nested objects and their properties.

Note >>  It's important to note that deep copying can be slower and less efficient compared to shallow copying, especially for large objects with nested objects. So, choose the appropriate method based on your specific use case and performance requirements.