/*
    Strings
*/

// [Declare and assign a string...]
let a = "I can't change"    // ...Variable (can be modified)
const b = "I can change"    // ...Constant (can't be modified)


// [Check data type of variable]
typeof a                    // "string"


// [String concatenation]
console.log(a + ", " + b + ".")     // "I can't change, I can change."


// [String interpolation]: since ES6
console.log(`${a}, ${b}.`)          // "I can't change, I can change."


// [Access 4th character by index]
a[3]                // a


// [String properties]: access with dot operator (.)
let c = "  Hello  ";
c.length;           // 9 (includes whitespace)


// [String methods]
c.toUpperCase();    //   HELLO (includes whitespace)
c.toLowerCase();    //   hello (includes whitespace) 
c.trim()            // Removes whitespace both sides
c.trimStart()       // Removes whitespace to the left
c.trimEnd()         // Removes whitespace to the right


// [Search, replace]
c.substring(3,5)    // "el" (starting index, last index (not included))
c.replace("e", "3") // H3llo (replaces "e" with "3")


// [Return boolean]
c.startsWith("H");  // false
c.includes("lo")    // true (is "lo" contained in c?)