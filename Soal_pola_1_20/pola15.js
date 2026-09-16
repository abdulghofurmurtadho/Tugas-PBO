for (let i = 1; i <= 6; i++) {
    let pola = "";

    for (let j = 1; j <= 7; j++) {
        if (j <= 7 - i) {
            pola += "O";
        } else {
            pola += "*";
        }
    }

    console.log(pola);
}