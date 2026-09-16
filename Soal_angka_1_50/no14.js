let hasil = "";

for (let i = 8; i >= 1; i--) {
    if (i === 6 || i === 5 || i === 2) {
        for (let j = i; j >= 1; j--) {
            hasil += j;
        }
    } else {
        for (let j = 0; j < i; j++) {
            hasil += i;
        }
    }
}

console.log(hasil);