for (let i = 1; i <= 6; i++) {
    
    for (let j = 1; j <= 6 - i; j++) {
        process.stdout.write(" ");
    }

    for (let j = 1; j <= (2 * i - 1); j++) {
        process.stdout.write("*");
    }

    console.log();
}