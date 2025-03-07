/*
	Strings
*/
let a = "I can't change"
const b = "I can change"

console.log( typeof a) // Returns "string"

// String concatenation
console.log(a + ", " + b + ".")

// String interpolation
console.log(`${a}, ${b}.`)

// String methods
let c = "  Hello  "
console.log( c.length ) // Returns integer
console.log( c.toUpperCase() )
console.log( c.toLowerCase() )
console.log( c.startsWith("H") ) // Returns bool

console.log( c.trim() ) // Remove whitespace both sides
console.log( c.trimStart() )
console.log( c.trimEnd() )

console.log( c.replace("e", "3") ) // Replace e with 3