const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan kalimat: ", function (kalimat) {
    rl.question("Masukkan huruf yang dicari: ", function (huruf) {

        let jumlah = 0;

        for (let i = 0; i < kalimat.length; i++) {
            if (kalimat[i] === huruf) {
                jumlah++;
            }
        }

        console.log("Jumlah huruf:", jumlah);

        rl.close();
    });
});