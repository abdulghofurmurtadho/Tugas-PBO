const tinggi = 10;
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

async function main() {
    // Atas ke bawah (siklus 1)
    for (let i = 0; i < tinggi; i++) {
        console.clear();
        console.log("\n".repeat(i) + "0");
        await delay(100);
    }
    // Atas ke bawah lagi (siklus 2)
    for (let i = 0; i < tinggi; i++) {
        console.clear();
        console.log("\n".repeat(i) + "0");
        await delay(100);
    }
}
main();