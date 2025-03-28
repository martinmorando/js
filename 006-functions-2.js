/*
    Functions: Part 2
    - Functions are "first-class" objects, meaning 
      they have properties and methods.
*/

function discipline() {
    console.log("Keep the f*ck going!");
}

// Variable "gooo" holds a reference to the function
const gooo = discipline;   // No ()!

// Invoke the function using the reference to the function
gooo();                         // 'Keep the f*ck going!'



// [PROPERTIES]
// - .name: returns the name of the function
console.log(gooo.name);         // 'discipline'

// - .length: returns the number of parameters it expects
console.log(gooo.length);       // 0



// [METHODS]
// - .toString(): returns the source of the object as a string
console.log(gooo.toString());



// [HIGH ORDER FUNCTIONS]
const sum = (n1, n2) => {
    return n1 + n2;
}

const analyzeRequest = (func, val1, val2) => {
    return func(val1, val2);
}

console.log( analyzeRequest(sum, 5, 6) )    // 11