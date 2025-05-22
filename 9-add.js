#!/usr/bin/node

function add(a, b) {
    return a + b;
}

// Convert command-line arguments to integers
const firstArg = parseInt(process.argv[2]);
const secondArg = parseInt(process.argv[3]);

// Print the result of the addition
console.log(add(firstArg, secondArg));




