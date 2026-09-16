const tinggi = 10;
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

async function main() {
    // Ke bawah
    for (let i = 0; i < tinggi; i++) {
        console.clear();
        console.log("\n".repeat(i) + "0");
        await delay(100);
    }
    // Ke atas
    for (let i = tinggi - 1; i >= 0; i--) {
        console.clear();
        console.log("\n".repeat(i) + "0");
        await delay(100);
    }
}
main();