let hasil = "";

for (let i = 8; i >= 1; i--) {
    if (i === 8 || i === 7 || i === 4 || i === 3) {
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