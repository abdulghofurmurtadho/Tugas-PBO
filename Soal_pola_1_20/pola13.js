for (let i = 1; i <= 6; i++) {
    let pola = "";

    // Membuat angka 0
    for (let j = 1; j <= i; j++) {
        pola += "0";
    }

    // Membuat bintang
    for (let j = 1; j <= 8 - i; j++) {
        pola += "*";
    }

    console.log(pola);
}