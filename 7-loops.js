/*
    Loops
*/

// For loop
for (let i = 1; i <= 10; i++) {
    console.log(`For loop: ${i}`);
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