/*
    Loops
*/

// For loop
for (let i = 1; i <= 10; i++) {    

    // Skip i=3
    if (i == 3) {
        continue;
    }

    console.log(`For loop: ${i}`);

    // Stop at i=8
    if (i == 8) {
        break;
    }
}


// While loop
let c = 1;
while (c <= 10) {
    console.log(`While loop: ${c}`);
    c++;
}


// Do while: runs at least once
let e = 1;
do {
    console.log(`Do while: ${e}`);
    e++;
} while (e <= 10);


// Iterate over an array
let arr = [2, 4, 6, 8, 10]
for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
}