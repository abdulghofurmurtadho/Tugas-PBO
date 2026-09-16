let hasil = "";

for (let i = 6; i >= 1; i--) {
    if (i % 2 === 0) {
        for (let j = 0; j < i; j++) {
            hasil += i;
        }
    } else {
        for (let j = 1; j <= i; j++) {
            hasil += j;
        }
    }
}

console.log(hasil);