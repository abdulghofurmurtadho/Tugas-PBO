let val = 3;
let hasil = "";

for (let i = 0; i < 10; i++) {
    hasil += val + " ";
    if (i % 2 === 0) {
        val *= 3;
    } else {
        val -= 5;
    }
}

console.log(hasil.trim());