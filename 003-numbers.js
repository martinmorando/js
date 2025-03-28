/*
    Numbers
*/

// [Declare and assign numeric variables]
let a = 1;
let b = 2;
let c = 3.33;
let d;          // undefined

// Prior to ES6 (2015), 'var' was the standard way to declare variables in JS
var w = 3;


// [Basic math operations]
a + b;
a - b;
a * b;
a / b;
a % b;
b ** 2;


// [Augmented assignment operators]
a += 5;
a -= 2;
a *= 7;
a /= 3;
a %= 3;
a **= 3;


// [Increment, decrement operators]
a--;
a++;


// [Check data type of variable]
typeof a;               // number


// [Number (built-in object)]
Number.isInteger(b);    // true
Number.isInteger(c);    // false


// [Math (built-in object)]
Math.pow(3,2);          // 9
Math.sqrt(25);          // 5
Math.abs(-1.11);        // 1.11
Math.round(1.11);       // 1
Math.floor(1.11);       // 1
Math.ceil(1.11);        // 2

Math.min(1,2,3,4,5);    // 1
Math.max(1,2,3,4,5);    // 5

Math.PI;                // 3.141592...
Math.E;                 // 2.718281...


// [Math.random()]: NOT useful for a cryptographically secure pseudorandom number generator (CSPRNG)
// - Return a random float between 0 (inclusive) and 1 (not inclusive)
Math.random();                          // 0.579664807986406 (example)

// - Return random float between 0 (inclusive) and 1000 (not inclusive)
Math.random() * 1000;                   // 959.8285383602398 (example)

// - Return random integer between 1 (inclusive) and 500 (inclusive)
Math.floor((Math.random() * 500) + 1);  // 461 (example)