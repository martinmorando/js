/*
    Data types
    - Pending: 
        - Why typeof(null) returns object? (line 34)
        - Data type symbol?
*/

// String
let name = "Satoshi";
console.log(typeof(name));      // string


// Number
let x = 1;
let y = 1.23;
let z = -1.2;
console.log(typeof(x));         // number
console.log(typeof(y));         // number
console.log(typeof(z));         // number


// BigInt
let big = 1111111111111111111111111111111111111111111111111111n;
console.log(typeof(big));       // bigint


// Boolean
let keepsGoing = true;
console.log(typeof(keepsGoing));// boolean


// Null
let q = null;
console.log(typeof(q));         // object ????


// Undefined
let w;
console.log(typeof(w));         // undefined


// Object
let company = {    
    name: 'M Inc.',
    year: 2025,
    printCEO () {
        console.log('Martin is the CEO');
    }
};
    
console.log(typeof(company));   // object

// Symbol
