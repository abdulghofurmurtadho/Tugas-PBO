const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isPrima(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

rl.question("Masukkan n_awal: ", function (inputAwal) {
    rl.question("Masukkan n_akhir: ", function (inputAkhir) {
        let awal = parseInt(inputAwal);
        let akhir = parseInt(inputAkhir);
        let hasil = "";

        for (let i = awal; i <= akhir; i++) {
            if (isPrima(i)) {
                hasil += i + " ";
            }
        }

        console.log("Bilangan Prima: " + (hasil ? hasil.trim() : "Tidak ada"));
        rl.close();
    });
});