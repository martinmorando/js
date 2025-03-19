/*
    Arrays
    - 0-indexed
    - accept mutiple data types
*/

// Create an array
let arrStrings = ["A", "B", "C"];
let arrIntegers = [1, 2, 3, 4, 14];
let arrBooleans = [true, true, false];
let arrMixed = ["A", 2, "z", true];

// Access elements by index
arrStrings[2];                      // "C"

// Update elements by index
arrMixed[3] = "B";                  // arrMixed: ['A', 2, 'z', 'B']
                                    
// Add element to the end
arrMixed.push("XX");                // arrMixed: ['A', 2, 'z', 'B', 'XX']

// Remove last element (returns element removed)
arrMixed.pop();                     // arrMixed: ['A', 2, 'z', 'B']
