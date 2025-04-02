/*
    Arrays iterators
    - forEach
    - map
    - filter
    - reduce
    - every
    - some
*/

numbers = [3, 4, 5, 6, 7];


// [FOR EACH]
numbers.forEach(n => {
    console.log(n);                     // Log each item 
});


// [MAP]: similar to .forEach but creates a new array
// Helper function
function multiplyBy2(n) {
    return n * 2;
}

// Apply the helper function to each element in the array
const numbersMultiplied = numbers.map(multiplyBy2);

console.log(numbersMultiplied);         // [6, 8, 10, 12, 14]



// [FILTER]: similar to .map but the new array is a filtered version
// Must return true or false for each element
const numbersFiltered = numbers.filter(n => {
    return n % 2 == 0;
});

console.log(numbersFiltered);           // [4, 6]



// [REDUCE]: returns a single value
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});

console.log(sum);                       // Output: 25



// [EVERY]: check if all elements satisfy condition. Returns boolean
const areAllElementsEven = numbers.every(n => {
    return n % 2 == 0;
});

console.log(areAllElementsEven);        // false



// [SOME]: check if at least one element satisfies condition. Returns boolean
const isAnyElementBiggerThanFive = numbers.some(n => {
    return n > 5;
});

console.log(isAnyElementBiggerThanFive) // true
