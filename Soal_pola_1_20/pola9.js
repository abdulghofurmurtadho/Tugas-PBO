for (let i = 1; i <= 5; i++) {
    let pola = "";

    // Membuat 10 bintang
    for (let j = 1; j <= 10; j++) {
        pola += "*";
    }

    // Membuat 0 di sebelah kanan
    pola += "0";

    console.log(pola);
}

// Baris terakhir
let pola = "";

for (let j = 1; j <= 11; j++) {
    pola += "0";
}

console.log(pola);