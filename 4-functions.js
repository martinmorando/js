/*
    Functions
*/

// Definition
function sum(x,y) {
    return x + y;
}

// Call
sum(1,2);



// ES6
// - Before ES6
var x = function() {
    console.log("I'm function x.");
};
x();

// - From ES6: define an "arrow function". Notice the shorter syntax
const y = () => console.log("I'm function y.")
y();