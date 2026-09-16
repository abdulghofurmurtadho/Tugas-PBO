const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan nilai maksimum Fibonacci: ", function (inputMax) {
    let max = parseInt(inputMax);
    let a = 0, b = 1;
    let hasil = "";

    while (a <= max) {
        hasil += a + " ";
        let next = a + b;
        a = b;
        b = next;
    }

    console.log("Deret Fibonacci: " + hasil.trim());
    rl.close();
});