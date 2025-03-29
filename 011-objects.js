/*
    Objects
    - Contain unordered data, organized in key-value pairs.
*/

// [CREATE]
// - Empty object
let car = {}

// - Keys: name, year. Values: SpaceExploration Inc., year
// - Methods: printCEO
let company = {    
    name: 'SpaceExploration Inc.',
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

// - Accessing properties of nested object
console.log(company.contact.address);       // Void 0, Mars
console.log(company["contact"].address);    // Void 0, Mars
console.log(company["contact"]["address"]); // Void 0, Mars



// [CREATE PROPERTIES]
company["stocksInCirculation"] = 21000000;



// [CALL METHODS]
company.printCEO();                     // Martin is the CEO