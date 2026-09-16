let hasil = "";

for (let i = 6; i >= 1; i--) {
    if (i % 2 === 0) {
        // Baris genap (6, 4, 2): cetak angka mundur dari i sampai 1
        for (let j = i; j >= 1; j--) {
            hasil += j;
        }
    } else {
        // Baris ganjil (5, 3, 1): cetak angka i sebanyak i kali
        for (let j = 0; j < i; j++) {
            hasil += i;
        }
    }
}

console.log(hasil);