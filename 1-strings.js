/*
    Strings
*/
let a = "I can't change"
const b = "I can change"

console.log( typeof a)             // Returns "string"

// String concatenation
console.log(a + ", " + b + ".")

// String interpolation
console.log(`${a}, ${b}.`)

// Access 4th character
console.log( a[3] )

// String methods
let c = "  Hello  "
console.log( c.length )            // Returns integer
console.log( c.toUpperCase() )
console.log( c.toLowerCase() )
console.log( c.startsWith("H") )   // Returns bool

console.log( c.trim() )            // Remove whitespace both sides
console.log( c.trimStart() )       // Remove whitespace to the left
console.log( c.trimEnd() )         // Remove whitespace to the right

console.log( c.replace("e", "3") ) // Replace e with 3
console.log( c.includes("lo") )    // Is "lo" contained in c? Returns boolean

let d = "JavaScript"
console.log( d.substring(3,5) )    // (starting index, last index (not included))