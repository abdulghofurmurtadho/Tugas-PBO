const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let angkaList = [];
let count = 0;

console.log("Masukkan 10 angka (tekan Enter setelah tiap angka):");

function inputAngka() {
    rl.question(`Angka ke-${count + 1}: `, function (input) {
        angkaList.push(parseFloat(input));
        count++;

        if (count < 10) {
            inputAngka();
        } else {
            let terkecil = Math.min(...angkaList);
            console.log("Bilangan terkecil: " + terkecil);
            rl.close();
        }
    });
}

inputAngka();