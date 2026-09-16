for (let i = 1; i <= 6; i++) {
    let pola = "";

    for (let j = 1; j <= 7; j++) {
        if (i == 1 || i == 4) {
            pola += "O";
        } else if (i == 2 || i == 5) {
            pola += "*";
        } else {
            pola += "=";
        }
    }

    console.log(pola);
}