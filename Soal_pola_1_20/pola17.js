for (let i = 1; i <= 6; i++) {
    let pola = "";

    for (let j = 1; j <= 7; j++) {
        if (j == 7 - i + 1) {
            pola += "*";
        } else {
            pola += "O";
        }
    }

    console.log(pola);
}