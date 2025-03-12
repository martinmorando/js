let a = 1
let b = 2
let c = 3.33

// Basic operations: + - * / %
console.log(a + b)

// Built-in methods
console.log( Number.isInteger(b) )   // true
console.log( Number.isInteger(c) )   // false



/*
	Math is a built-in object in JS
*/
console.log( Math.abs(-1.11) )       // 1.11
console.log( Math.round(1.11) )      // 1
console.log( Math.floor(1.11) )      // 1
console.log( Math.ceil(1.11) )       // 2
console.log( Math.PI );              // 3.141592...


/*
	Math.random() returns a random float between 0 (inclusive) and 1 (not inclusive).
	It's NOT useful for a cryptographically secure pseudorandom number generator (CSPRNG).
*/

a = Math.random();
console.log(a);

// Return random number between 0 (inclusive) and 1000 (not inclusive)
b = Math.random() * 1000;
console.log(b);

// Return random integer between 1 (inclusive) and 500 (inclusive)
c = Math.floor((Math.random() * 500) + 1);
console.log(c);