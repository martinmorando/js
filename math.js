/*
Math is a built-in object in JS. Math.random() returns a random float between
0 (inclusive) and 1 (not inclusive). It's NOT useful for a cryptographically 
secure pseudorandom number generator (CSPRNG).

1) Install Node.js
2) Execute: `nodejs math.js`

*/
a = Math.random();
console.log(a);

// Return random number between 0 (inclusive) and 1000 (not inclusive)
b = Math.random() * 1000;
console.log(b);

// Return random integer between 1 (inclusive) and 500 (inclusive)
c = Math.floor((Math.random() * 500) + 1);
console.log(c);

// Return PI
console.log(Math.PI);