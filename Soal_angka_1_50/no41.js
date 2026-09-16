const lebar = 20;
const tinggi = 10;
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

async function main() {
    // Kanan atas ke kanan bawah
    for (let i = 0; i < tinggi; i++) {
        console.clear();
        console.log("\n".repeat(i) + " ".repeat(lebar) + "0");
        await delay(100);
    }
    // Kanan bawah ke kanan atas
    for (let i = tinggi - 1; i >= 0; i--) {
        console.clear();
        console.log("\n".repeat(i) + " ".repeat(lebar) + "0");
        await delay(100);
    }
}

main();