/*
    Objects
*/

// [CREATE]
// - Keys: name, year. Values: SpaceExploration Inc., year
// - Methods: printCEO
let company = {    
    name: 'SpaceExploration Inc.',
    year: 2025,
    printCEO () {
        console.log('Martin is the CEO');
    }
};



// [ACCESS]
// - Using dot operator
console.log(company.year);              // 2025

// - Using bracket notation
console.log(company['year']);           // 2025

// - Bracket notation also allows passing variables
let y = 'year';
console.log(company[y]);                // 2025



// [CREATE PROPERTIES]
company["stocksInCirculation"] = 21000000;



// [CALL METHODS]
company.printCEO();                     // Martin is the CEO