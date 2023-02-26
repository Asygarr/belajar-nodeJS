const fs = require("fs");
const chalk = require("chalk");
const validator = require("validator");
// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// membuat folder data jika belum ada <==
// if (!fs.existsSync("./data")) {
//   fs.mkdirSync("./data");
// }

// membuat file contact.json jika belum ada <==
// if (!fs.existsSync("./data/contact.json")) {
//   fs.writeFileSync("./data/contact.json", "[]", "utf-8");
// }

// inputtan pertanyaan <==
// const pertanyaan = (pertanyaan) => {
//   return new Promise((resolve, reject) => {
//     rl.question(pertanyaan, (value) => {
//       resolve(value);
//     });
//   });
// };

const loadContact = () => {
  const file = fs.readFileSync("data/contact.json", "utf-8");
  const contacts = JSON.parse(file);
  return contacts;
};

const saveContact = (nama, hp, email) => {
  const save = {
    nama,
    hp,
    email,
  };
  const contacts = loadContact();

  // cek duplikat
  const duplikat = contacts.find((contact) => contact.nama === nama);
  if (duplikat) {
    console.log(
      chalk.red.inverse.bold("Contact sudah terdaftar, gunakan nama lain!")
    );
    return false;
  }

  // cek email
  if (email) {
    if (!validator.isEmail(email)) {
      console.log(chalk.red.inverse.bold("Email tidak valid!"));
      return false;
    }
  }

  // cek no hp
  if (!validator.isMobilePhone(hp, "id-ID")) {
    console.log(chalk.red.inverse.bold("Nmor HP tidak valid!"));
    return false;
  }

  contacts.push(save);

  try {
    fs.writeFileSync("data/contact.json", JSON.stringify(contacts));
  } catch (e) {
    console.log(e);
  }

  console.log(chalk.green.inverse.bold("Terimakasih sudah memasukkan data!"));
};

// menampilkan daftar semua nama & no HP contact
const listContact = () => {
  const contacts = loadContact();
  console.log(chalk.cyan.inverse.bold("Daftar Kontak: "));
  contacts.forEach((contact, i) => {
    console.log(`${i + 1}. ${contact.nama} - ${contact.hp}`);
  });
};

// menampilkan detail contact berdasarkan nama
const detailContact = (nama) => {
  const contacts = loadContact();
  const contact = contacts.find(
    (contact) => contact.nama.toLowerCase() === nama.toLowerCase()
  );
  if (!contact) {
    console.log(chalk.red.inverse.bold(`${nama} tidak ditemukan!`));
    return false;
  }

  console.log(chalk.cyan.inverse.bold(contact.nama));
  console.log(contact.hp);
  if (contact.email) {
    console.log(contact.email);
  }
};

// menghapus contact berdasarkan nama
const deleteContact = (nama) => {
  const contacts = loadContact();
  const newContacts = contacts.filter(
    (contact) => contact.nama.toLowerCase() !== nama.toLowerCase()
  );

  if (contacts.length === newContacts.length) {
    console.log(chalk.red.inverse.bold(`${nama} tidak ditemukan!`));
    return false;
  }

  fs.writeFileSync("data/contact.json", JSON.stringify(newContacts));
  console.log(chalk.green.inverse.bold(`data contact ${nama} berhasil dihapus!`));
};

module.exports = {
  deleteContact,
  detailContact,
  listContact,
  saveContact,
};
