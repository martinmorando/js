/*
    Strings
*/

// Declare and assign a string variable
let a = "I can't change"

// Declare and assign a string constant
const b = "I can change"

// Get data type
console.log(typeof a)               // "string"

// String concatenation
console.log(a + ", " + b + ".")     // "I can't change, I can change."

// String interpolation
console.log(`${a}, ${b}.`)          // "I can't change, I can change."

// Access 4th character
a[3]                // a

// String methods
let c = "  Hello  ";
c.length;           // 9 (counts whitespace)
c.toUpperCase();    //   HELLO (includes whitespace)
c.toLowerCase();    //   hello (includes whitespace) 
c.trim()            // Removes whitespace both sides
c.trimStart()       // Removes whitespace to the left
c.trimEnd()         // Removes whitespace to the right

// Search, replace
c.substring(3,5)    // "el" (starting index, last index (not included))
c.replace("e", "3") // H3llo (replaces "e" with "3")

// Return boolean
c.startsWith("H");  // false
c.includes("lo")    // true (is "lo" contained in c?)