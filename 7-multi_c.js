const x = process.argv[2];
let count = parseInt(x);

if (isNaN(count)) {
    console.log("Missing number of occurrences");
} else {
    let output = '';
    for (let i = 0; i < count; i++) {
        output += "C is fun\n";
    }
    console.log(output.trim());
}
