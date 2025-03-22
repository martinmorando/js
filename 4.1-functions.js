/*
    Functions: Part B
    - Functions are a type of object; they have properties and methods
*/

function discipline() {
    console.log("Keep the f*ck going!");
}

// Variable "gooo" holds a reference to the function
const gooo = discipline;

// Invoke the function using the reference
gooo();                         // 'Keep the f*ck going!'


// [PROPERTIES]
// - .name: returns the name of the function
console.log(gooo.name);         // 'discipline'

// - .length: returns the number of parameters it expects
console.log(gooo.length);       // 0


// [METHODS]
// - .toString(): returns the source of the object as a string
console.log(gooo.toString());