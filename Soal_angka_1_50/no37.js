const lebar = 20;
const tinggi = 10;
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

async function main() {
    // Kiri bawah ke kanan bawah
    for (let i = 0; i < lebar; i++) {
        console.clear();
        console.log("\n".repeat(tinggi) + " ".repeat(i) + "0");
        await delay(100);
    }
    // Kanan bawah ke kiri bawah
    for (let i = lebar - 1; i >= 0; i--) {
        console.clear();
        console.log("\n".repeat(tinggi) + " ".repeat(i) + "0");
        await delay(100);
    }
}
main();