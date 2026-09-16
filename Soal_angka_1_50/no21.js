let val = 1;
let hasil = "";

for (let i = 0; i < 10; i++) {
    hasil += val + " ";
    val *= 2;
}

console.log(hasil.trim());