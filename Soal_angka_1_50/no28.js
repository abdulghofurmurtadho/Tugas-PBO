const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan tahun awal: ", function (inputAwal) {
    rl.question("Masukkan tahun akhir: ", function (inputAkhir) {
        let awal = parseInt(inputAwal);
        let akhir = parseInt(inputAkhir);
        let hasil = "";

        for (let y = awal; y <= akhir; y++) {
            let isKabisat = (y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0);
            if (isKabisat && y % 10 === 8) {
                hasil += y + " ";
            }
        }

        console.log("Tahun kabisat berakhiran 8: " + (hasil ? hasil.trim() : "Tidak ada"));
        rl.close();
    });
});