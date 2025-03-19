/*
    Functions
*/

// ["Function declaration"]
function sum(x, y) {                         // x and y are parameters
    return x + y;
}
console.log( sum(1, 2) );                    // 3 (1 and 2 are arguments)


// ["Function expression"]
const sum2 = function(x, y) {
    return x + y;
}
console.log( sum2(1, 2) );                   // 3


// ["Arrow function"]: shorter way to write functions, since ES6
const arrowExample = (n) => {
    return n * 2;
}
console.log( arrowExample(4) );             // 8


// ["Concise arrow functions"]
// Implicit return: single-line block don't require curly braces ({}) and "return" keyword
// - 0 arguments? Parentheses are required
const arrowExampleConcise0 = () => 0;
console.log(arrowExampleConcise0());        // 0

// - 1 argument? No parentheses are required
const arrowExampleConcise1 = n => n * 2;
console.log( arrowExampleConcise1(3) );     // 6

// - 2 or more arguments? Parentheses are required
const arrowExampleConcise2 = (n1, n2) => n1 * n2;
console.log( arrowExampleConcise2(5, 6) );  // 30


// [More examples]
// - Implicit return can also be used with multiple params
const example = (a, b) => a * b;            // Implicit return
console.log( example(3, 4) );               // 12

// - It's always required (independently of the number of params) 
// to use "return" when using a block body "{}"
const example2 = n => {
    return n * 2;
};
console.log( example2(3) );                 // 6


// [Before ES6]: useful to know in order to read others' code
var preES6 = function() {
    console.log("Before ES6.");
};
preES6();                                   // "Before ES6."