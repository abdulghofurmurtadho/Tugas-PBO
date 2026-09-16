const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let countGenap = 0;
let count = 0;

console.log("Masukkan 10 angka (tekan Enter setelah tiap angka):");

function inputAngka() {
    rl.question(`Angka ke-${count + 1}: `, function (input) {
        let num = parseInt(input);
        if (num % 2 === 0) {
            countGenap++;
        }
        count++;

        if (count < 10) {
            inputAngka();
        } else {
            console.log("Jumlah bilangan genap: " + countGenap);
            rl.close();
        }
    });
}

inputAngka();