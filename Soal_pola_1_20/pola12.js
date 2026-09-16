for (let i = 1; i <= 6; i++) {
    let pola = "";

    if (i == 6) {
        for (let j = 1; j <= 11; j++) {
            pola += "0";
        }
    } else {
        for (let j = 1; j <= 10; j++) {
            pola += "*";
        }

        pola += "0";
    }

    console.log(pola);
}