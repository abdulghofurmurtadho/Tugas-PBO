for (let i = 1; i <= 6; i++) {
    let pola = "";

    if (i == 1) {
        for (let j = 1; j <= 11; j++) {
            pola += "0";
        }
    } else {
        pola += "0";

        for (let j = 1; j <= 10; j++) {
            pola += "*";
        }
    }

    console.log(pola);
}