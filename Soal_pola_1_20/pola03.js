for (let i = 1; i <= 3; i++) {
    let pola = "";

    for (let j = 1; j <= i; j++) {
        pola += "*";
    }

    console.log(pola);
}
for (let i = 1; i <= 3; i++) {
    let pola = "";

    // membuat spasi
    for (let j = 1; j <= 3 - i; j++) {
        pola += " ";
    }

    // membuat bintang
    for (let j = 1; j <= i; j++) {
        pola += "*";
    }

    console.log(pola);
}