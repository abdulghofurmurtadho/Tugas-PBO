for (let i = 1; i <= 6; i++) {
    let pola = "";

    for (let j = 1; j <= 7; j++) {
        if (j == i) {
            pola += "*";
        } else {
            pola += "O";
        }
    }

    console.log(pola);
}