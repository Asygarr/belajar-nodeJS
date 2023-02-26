// console.log("Hello World");

// const fs = require("fs"); //core modlue
// const setNama = require("./coba"); //import local module
// const moment = require("moment"); //third moduls / node moduls

// const nama = (nama) => `Hi nama saya ${nama}`;
// console.log(nama("Asygar"));

const coba = require("./coba");

const setNama = coba.setNama("Asygar");
const PI = coba.PI();
const mahasiswa = coba.mahasiswa.getMahasiswa();
const orang = new coba.Orang();

console.log(setNama, PI);
console.log(mahasiswa);
console.log(orang);
