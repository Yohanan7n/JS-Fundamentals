const firstArg = process.argv[2]; // Get the first argument
const num = parseInt(firstArg, 10); // Convert to integer

if (!isNaN(num)) {
    console.log(`My number: ${num}`);
} else {
    console.log("Not a number");
}
