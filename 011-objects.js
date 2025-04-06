/*
    Objects
    - Contain unordered data, organized in key-value pairs.
*/

// [CREATE]
// - Create an empty object literal using {}
let car = {}

// - Create an object literal with 3 key-value pairs and a method
let company = {    
    name: 'M Inc.',
    year: 2025,
    contact: {                              // Nested object
        email: 'ghostaddress@notf0und.c000m',
        address: 'Void 0, Mars'
    },
    printCEO () {
        console.log('Martin is the CEO');
    }
};



// [ACCESS PROPERTIES]
// - Using dot operator
console.log(company.year);                  // 2025

// - Using bracket notation
console.log(company['year']);               // 2025

// - Bracket notation also allows passing variables
let y = 'year';
console.log(company[y]);                    // 2025

// - Accessing properties of the nested object
console.log(company.contact.address);       // Void 0, Mars
console.log(company["contact"].address);    // Void 0, Mars
console.log(company["contact"]["address"]); // Void 0, Mars



// [CREATE PROPERTIES]
company["stocksInCirculation"] = 21000000;


// [DELETE PROPERTIES]
delete company.stocksInCirculation;
console.log(company.stocksInCirculation);   // Output: undefined


// [CALLING THE METHODS]
company.printCEO();                         // Output: Martin is the CEO


// [OBJECTS ARE PASSED BY REFERENCE]
// Any change to the variable mutates the object (even when using "const")
const my_car = {
    plate: "FR33"
};

let swapA = obj => {
    obj.plate = "XX22"
};

let swapB = obj => {
    obj["plate"] = "XX33"  // Similar to swapA() but using bracket notation
};

console.log(my_car.plate);                  // Output: FR33
swapA(my_car);
console.log(my_car.plate);                  // Output: XX22
swapB(my_car);
console.log(my_car.plate);                  // Output: XX33