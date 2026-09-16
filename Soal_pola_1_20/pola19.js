for (let i = 1; i <= 6; i++) {
    let pola = "";

    for (let j = 1; j <= 6; j++) {
        if (i == 1 || i == 6) {
            pola += "O";
        } else if (j == 1 || j == 6) {
            pola += "O";
        } else {
            pola += "*";
        }
    }

    console.log(pola);
}