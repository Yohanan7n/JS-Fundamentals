const x = process.argv[2];
let count = parseInt(x);
let output = '';

if (isNaN(count)) {
    console.log("Missing number of occurrences");
} else {
    for (let i = 0; i < count; i++) {
        output += "C is fun\n";
    }
    console.log(output.trim());
}
