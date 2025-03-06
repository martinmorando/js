let a = "I can change"
const b = "I can't change"


// String concatenation
console.log("Hello" + " " + "everyone")


// String methods
let c = "  Hello  "
console.log( c.length ) // Returns integer
console.log( c.toUpperCase() )
console.log( c.toLowerCase() )
console.log( c.startsWith("H") ) // Returns bool

console.log( c.trim() ) // Remove whitespace both sides
console.log( c.trimStart() )
console.log( c.trimEnd() )

console.log( c.replace("e", "3") )