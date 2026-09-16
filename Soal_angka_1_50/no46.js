const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan n_awal: ", function (inputAwal) {
    rl.question("Masukkan n_akhir: ", function (inputAkhir) {
        let awal = parseInt(inputAwal);
        let akhir = parseInt(inputAkhir);
        let total = 0;

        for (let i = awal; i <= akhir; i++) {
            if (i > 0) {
                total += i;
            }
        }

        console.log("Total bilangan bulat positif: " + total);
        rl.close();
    });
});