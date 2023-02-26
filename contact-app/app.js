const { command, describe } = require("yargs");
const contact = require("./contacts");
const yargs = require("yargs");

// mengambil argument dari command line
yargs.command({
    command: "add",
    describe: "Menambahkan contact baru",
    builder: {
      nama: {
        describe: "Nama Lengkap",
        demandOption: true,
        type: "string",
      },
      email: {
        describe: "Email",
        demandOption: false,
        type: "string",
      },
      noHP: {
        describe: "No HP",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      contact.saveContact(argv.nama, argv.noHP, argv.email);
    },
  })
  .demandCommand();

// menampilkan daftar semua nama & no HP contact
yargs.command({
  command: "list",
  describe: "Menampilkan semua nama & no HP contact",
  handler() {
    contact.listContact();
  },
});

// menampilkan detail contact berdasarkan nama
yargs.command({
  command: "detail",
  describe: "Menampilkan detail contact berdasarkan nama",
  builder: {
    nama: {
      describe: "Nama Lengkap",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    contact.detailContact(argv.nama);
  },
});

// menghapus contact berdasarkan nama
yargs.command({
  command: "delete",
  describe: "Menghapus contact berdasarkan nama",
  builder: {
    nama: {
      describe: "Nama Lengkap",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    contact.deleteContact(argv.nama);
  },
});

yargs.parse();

// const main = async () => {
//   const nama = await contact.pertanyaan("Masukkan nama anda : ");
//   const hp = await contact.pertanyaan("Masukkan no HP anda : ");
//   const email = await contact.pertanyaan("Masukkan email anda : ");

//   contact.saveContact(nama, hp, email);
// };

// main();
