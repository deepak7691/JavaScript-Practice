// 1)  charAt(): Returns the character at the specified index in a string.

// const str = 'Hello';
// console.log(str.charAt(0)); // Output: "H"


// **********************************************************************************************************


// 2)  charCodeAt(): Returns the Unicode value of the character at the specified index in a string.

// const str = 'Hello';
// console.log(str.charCodeAt(0)); // Output: 72


// ***********************************************************************************************************

// 3)  concat(): Joins two or more strings and returns a new string.

// const str1 = 'Hello';
// const str2 = 'World';
// console.log(str1.concat(' ', str2)); // Output: "Hello World"


// ***********************************************************************************************************


// 4)  endsWith(): Determines whether a string ends with the characters of a specified string, returning true or false.

// const str = 'Hello World';
// console.log(str.endsWith('rld')); // Output: true


//***********************************************************************************************************


// 5)  fromCharCode(): Converts Unicode values to characters.

// console.log(String.fromCharCode(72, 101, 108, 108, 111)); // Output: "Hello"


//***********************************************************************************************************

// 6)  includes(): Determines whether a string contains the characters of a specified string, returning true or false.

// const str = 'Hello World';
// console.log(str.includes('World')); // Output: true

//***********************************************************************************************************

// 7)  indexOf(): Returns the position of the first occurrence of a specified value in a string.

// const str = 'Hello World';
// console.log(str.indexOf('World')); // Output: 6

//***********************************************************************************************************

// 8)  lastIndexOf(): Returns the position of the last occurrence of a specified value in a string.

// const str = 'Hello World';
// console.log(str.lastIndexOf('o')); // Output: 7

//***********************************************************************************************************


// 9)  repeat(): Returns a new string with a specified number of copies of an existing string.
// const str1 = 'hello';
// const str2 = str1.repeat(3); // Output: 'hellohellohello'
// console.log(str2);

// // 10)  replace(): Searches a string for a specified value or regular expression, and returns a new string 
//       //where the first match is replaced with a specified replacement string.
// const str3 = 'The quick brown fox jumps over the lazy dog';
// const str4 = str3.replace('brown', 'red'); // Output: 'The quick red fox jumps over the lazy dog'
// console.log(str4);

// // 11)  search(): Searches a string for a specified value or regular expression, and returns the position of the match.
// const str5 = 'The quick brown fox jumps over the lazy dog';
// const pos = str5.search('fox'); // Output: 16
// console.log(pos);

// //  12)  slice(): Extracts a section of a string and returns a new string.
// const str6 = 'The quick brown fox jumps over the lazy dog';
// const str7 = str6.slice(4, 15); // Output: 'quick brown'
// console.log(str7);

// // 13)  split(): Splits a string into an array of substrings.
// const str8 = 'apple,banana,orange';
// const arr1 = str8.split(','); // Output: ['apple', 'banana', 'orange']
// console.log(arr1);

// // 14)  startsWith(): Determines whether a string begins with the characters of a specified string, returning true or false.
// const str9 = 'The quick brown fox jumps over the lazy dog';
// const startsWithQuick = str9.startsWith('quick'); // Output: false
// console.log(startsWithQuick);



// // 15)  substring(): Extracts the characters of a string between two specified indices, and returns a new string.
// const str11 = 'The quick brown fox jumps over the lazy dog';
// const substring1 = str11.substring(4, 9); // Output: 'quick'
// console.log(substring1);

// // 16)  toLocaleLowerCase(): Converts a string to lowercase letters, according to the host's locale.
// const str12 = 'HELLO';
// const str13 = str12.toLocaleLowerCase(); // Output: 'hello'
// console.log(str13);

// // 17)  toLocaleUpperCase(): Converts a string to uppercase letters, according to the host's locale.
// const str14 = 'hello';
// const str15 = str14.toLocaleUpperCase(); // Output: 'HELLO'
// console.log(str15);

// // 18)  toLowerCase(): Converts a string to lowercase letters.
// const str16 = 'HELLO';
// const str17 = str16.toLowerCase(); // Output: 'hello'
// console.log(str17);

// // 19)  toString(): Returns a string representing the object.
// const num1 = 123;
// const str18 = num1.toString(); // Output: '123'
// console.log(str18);

// // 20)  toUpperCase(): Converts a string to uppercase letters.
// const str19 = 'hello';
// const str20 = str19.toUpperCase(); // Output: 'HELLO'
// console.log(str20);

// // 21)  trim(): Removes whitespace from both ends of a string.
// const str21 = '   hello   ';
// const str22 = str21.trim(); // Output: 'hello'
// console.log(str22);

// // 22)  valueOf(): Returns the primitive value of a String object.
// const str23 = new String('hello');
// const str24 = str23.valueOf(); // Output: 'hello


// *********************************************************************************************************

// Note >>>  In JavaScript, there are only two string methods that modify the original string:

// replace(): Searches a string for a specified value or regular expression, and replaces the first match with a specified replacement string. The modified string is returned.

// substr(): Extracts a specified number of characters from a string, starting at a specified index position, and replaces the original string with the extracted characters.

// All other string methods in JavaScript return a new string without modifying the original string