//core moduls
//file system

const fs = require("fs");

// // menuliskan string ke file secara sync
// try {
//   fs.writeFileSync("test.txt", "Asslamualaikum Pak jokowi");
// } catch (e) {
//   console.log(e);
// }

// // menuliskan string ke file secara async
// fs.writeFile("test.txt", "Hello World", (err) => {
//   console.log(err);
// });

// // membaca file sync
// const baca = fs.readFileSync("test.txt", "utf-8");
// console.log(baca);

// // membaca file async
// fs.readFile("test.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// readline
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// rl.question("Masukkan ... x ? : ", (params) => {
//   rl.question(`Masukkan ${params} x ... : `, (kali) => {
//     const hasil = params * kali;
//     console.log(`${params} x ${kali} : ${hasil}`);
//     rl.close();
//   });
// });

// latihan
rl.question("Masukkan nama anda : ", (nama) => {
  rl.question("Masukkan no HP anda : ", (hp) => {
    const save = {
      nama,
      hp,
    };
    const file = fs.readFileSync("test.json", "utf-8");
    const contacts = JSON.parse(file);

    contacts.push(save);

    try {
      fs.writeFileSync("test.json", JSON.stringify(contacts));
    } catch (e) {
      console.log(e);
    }

    rl.close();
  })
});

