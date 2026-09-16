// Pola pertama
for (let i = 5; i >= 1; i--) {
    let pola = "";

    for (let j = 1; j <= 5 - i; j++) {
        pola += " ";
    }

    for (let j = 1; j <= i; j++) {
        pola += "*";
    }

    console.log(pola);
}

// Pola kedua
for (let i = 2; i <= 5; i++) {
    let pola = "";

    for (let j = 1; j <= 5 - i; j++) {
        pola += " ";
    }

    for (let j = 1; j <= i; j++) {
        pola += "*";
    }

    console.log(pola);
}