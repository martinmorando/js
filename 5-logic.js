/*
    Logic
    - Comparison operators: ===, !===, >, >=, <, <=
    - Logical operators: &&, ||, !
    - Falsy values: 0, '', "", NaN, null, undefined
*/

let x = true
let y = false
let z = 2


// Conditional
if (x === true && y === false) {
    console.log("x is true and y is false")
} else if (x === true && y === true ) {
    console.log("x and y are true")
}


// Ternary operator
x === true ? console.log("x is true") : console.log("x is false")


// Switch
switch (z) {
    case 0:
        console.log("z is 0")
        break;
    case 1:
        console.log("z is 1")
        break;
    case 2:
        console.log("z is 2")
        break;
    default:
        console.log("z is not 0, 1 nor 2")
        break;
}