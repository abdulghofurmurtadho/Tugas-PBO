for (let i = 0; i < 6; i++) {

    let kiri = 6 - i;
    let kanan = 6 - i;
    let spasi = 1 + (i * 2);

    if (i === 0) {
        console.log("*".repeat(13));
    } else {
        console.log(
            "*".repeat(kiri) +
            " ".repeat(spasi) +
            "*".repeat(kanan)
        );
    }
}