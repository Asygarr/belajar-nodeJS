// console.log("Hello Semua");

function setNama(nama) {
  return `Assalamualaikum pak ${nama}`;
}

// let nama = setNama("Asygar");

// console.log(nama);

const PI = () => 3.14;

const mahasiswa = {
  nama: "Muhammad Asygar Faeruddin",
  jurusan: "Teknik Informatika",
  nim: "105841104721",
  getMahasiswa() {
    return `Halo, nama saya ${this.nama} dari jurusan ${this.jurusan} dengan nim ${this.nim}`;
  },
};

class Orang {
    constructor() {
        console.log('Objek orang telah dibuat');
    }
}

// module.exports.setNama = setNama;
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang;

module.exports = {
    setNama,
    PI,
    mahasiswa,
    Orang
};
