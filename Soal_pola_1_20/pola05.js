for (let i = 6; i >= 1; i--) {
    for (let j = 1; j <= 6 - i; j++) {
        process.stdout.write(" ");
    }

    for (let j = 1; j <= (i * 2) - 1; j++) {
        process.stdout.write("*");
    }

    console.log();
}