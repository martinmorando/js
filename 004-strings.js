/*
    Strings
*/

// [DECLARE & ASSIGN A STRING...]
let a = "I can't change";    // ...Variable (can be modified)
const b = "I can change";    // ...Constant (can't be modified)

// [CHECK DATA TYPE]
typeof a;                            // "string"

// [STRING CONCATENATION]
console.log(a + ", " + b + ".");     // "I can't change, I can change."

// [STRING INTERPOLATION]: since ES6
console.log(`${a}, ${b}.`);          // "I can't change, I can change."

// [ACCESS BY INDEX]
// - Access 4th character
a[3];                // a


// ------------------------------------------------------
// [STRING PROPERTIES]: access with dot operator (.)
// - Returns number of characters, including whitespace
let c = "  Hello  ";
c.length;            // 9


// ------------------------------------------------------
// [STRING METHODS]
// +[UPPERCASE & LOWERCASE]
// - Returns upper case (includes whitespace)
c.toUpperCase();     //   HELLO
// - Returns lower case (includes whitespace)
c.toLowerCase();     //   hello


// +[REMOVE WHITESPACE]
// - Removes whitespace both sides
c.trim();
// - Removes whitespace to the left
c.trimStart();
// - Removes whitespace to the right
c.trimEnd();


// +[GET CHARACTER & INDEX]
// - Returns character at specified index
c.charAt(2);         // H
// - Returns the first index of a substring in string
c.indexOf("e");      // 3


// +[SEARCH & REPLACE]
c.substring(3, 5);    // "el" (starting index, last index (not included))
c.replace("e", "3"); // H3llo (replaces "e" with "3")


// +[SPLIT]: divide a string into array of substrings
const message = "All tyrants will be shot";
const result = message.split(" ");
console.log(result);    // Output: [ 'All', 'tyrants', 'will', 'be', 'shot' ]
console.log(result[4]); // Output: shot


// +[RETURN BOOLEAN]
c.startsWith("H");   // false
c.includes("lo");    // true (is "lo" contained in c?)