const lebar = 20;
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

async function main() {
    // Ke kanan
    for (let i = 0; i < lebar; i++) {
        console.clear();
        console.log(" ".repeat(i) + "0");
        await delay(100);
    }
    // Ke kiri
    for (let i = lebar - 1; i >= 0; i--) {
        console.clear();
        console.log(" ".repeat(i) + "0");
        await delay(100);
    }
}
main();