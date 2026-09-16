let hasil = "";

for (let i = 1; i <= 9; i++) {
    if (i % 5 === 0) {
        for (let j = 1; j <= i; j++) {
            hasil += j;
        }
    } else {
        for (let j = 0; j < i; j++) {
            hasil += i;
        }
    }
}

console.log(hasil);