let val = 1;
let pola = [1, 2, 3];
let idx = 0;
let hasil = "";

for (let i = 0; i < 13; i++) {
    hasil += val + " ";
    val += pola[idx];
    idx = (idx + 1) % 3;
}

console.log(hasil.trim());