const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan nilai n: ", function (inputN) {
    let n = parseInt(inputN);
    let hasil = 1;
    let proses = `${n}! = `;

    for (let i = n; i >= 1; i--) {
        hasil *= i;
        proses += i + (i > 1 ? " x " : "");
    }

    console.log(proses + " = " + hasil);
    rl.close();
});