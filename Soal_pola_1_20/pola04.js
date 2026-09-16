for (let i = 1; i <= 5; i++) {
    let bintang = i;
    let spasi = 11 - (i * 2);

    console.log(
        "*".repeat(bintang) +
        " ".repeat(spasi) +
        "*".repeat(bintang)
    );
}

console.log("*".repeat(11));