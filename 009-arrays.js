/*
    Arrays
    - Are 0-indexed
    - Are mutable
    - Can accept mixed data types
*/

// [CREATE]
// Create an array
let arrStrings = ["A", "B", "C"];
let arrIntegers = [1, 2, 3, 4, 14];
let arrBooleans = [true, true, false];
let arrMixed = ["A", 2, "z", true];

// About using "const" with array
const arrConst = [1, 2, 3];
// - This is valid. Can still modify, add, remove elements
arrConst[1] = 0;                    // [1, 0, 3]
// - This is NOT ok. Can't be reassigned
// arrConst = [1, 2];               // TypeError: Assignment to constant variable



// [ACCESS & UPDATE]
// - Access elements by positive indexes
arrStrings[2];                      // "C"

// - Access the last element (to use negative indexes, see the ".at" method)
arrStrings[arrStrings.length - 1];  // "C"

// - Update elements by index
arrMixed[3] = "B";                  // arrMixed: ['A', 2, 'z', 'B']



// [PROPERTIES]
// Length
arrStrings.length;                  // 3



// [METHODS]
// +[MUTATING METHODS]: they alter the original array
// - Add element to the start and shift indexes up one place
arrMixed.unshift("1A");             // arrMixed: ['1A', 'A', 2, 'z', 'B']

// - Add element to the end
arrMixed.push("Z");                 // arrMixed: ['1A', 'A', 2, 'z', 'B', 'Z']

// - Remove first element and shift indexes down one place
arrMixed.shift();                   // arrMixed: ['A', 2, 'z', 'B', 'Z']

// - Remove last element (returns element removed)
arrMixed.pop();                     // arrMixed: ['A', 2, 'z', 'B']

// - Replace 2 elements starting from index 1 + new elements
arrMixed.splice(1, 2, "Y", "T");    // arrMixed: ['A', 'Y', 'T', 'B']

// - Sort
arrMixed.sort();                    // arrMixed: ['A', 'B', 'T', 'Y']



// +[NON-MUTATING METHODS]: return values without modifying the array
// - Get index from value
arrMixed.indexOf("Y");              // 3

// - Get element by indexes, including negative indexes
arrMixed.at(1);                     // 'B'
arrMixed.at(-1);                    // 'T'

// - Combine all elements of an array into one string
arrMixed.join();                    // 'A,B,T,Y'
arrMixed.join(", ");                // 'A, B, T, Y'

// - Combine 2 or more arrays
let new_array = [45, 50];           
arrMixed.concat(new_array);         // ['A', 'B', 'T', 'Y', 45, 50]



// [NESTED ARRAYS]
const arrNested = [[1, 2, 3], [4, 5], [6], [7, 8, 9, 10, 11]]
arrNested[3][3];                    // 10