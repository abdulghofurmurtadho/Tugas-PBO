const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function animasi() {
    let teks = "1234567890";
    for (let i = 0; i < 20; i++) {
        console.clear();
        console.log(teks);
        teks = teks.slice(1) + teks[0]; // geser karakter pertama ke belakang
        await sleep(300); // jeda 300 milidetik
    }
}

animasi();