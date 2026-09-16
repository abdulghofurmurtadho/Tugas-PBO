const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan n_awal: ", function (inputAwal) {
    rl.question("Masukkan n_akhir: ", function (inputAkhir) {
        let awal = parseInt(inputAwal);
        let akhir = parseInt(inputAkhir);
        let hasil = "";

        for (let i = awal; i <= akhir; i++) {
            if (i % 4 === 0) {
                hasil += i + " ";
            }
        }

        console.log("Bilangan habis dibagi 4: " + hasil.trim());
        rl.close();
    });
});