const express = require("express");
const app = express();
const port = 3000;

// gunakan ejs
app.set("view engine", "ejs");

// application level middleware
app.use((req, res, next) => {
  console.log("Time : ", Date.now());
  next();
});

app.get("/", (req, res) => {
  const mahasiswa = [
    {
      nama: "John Doe",
      email: "johnD@gmail.com",
    },
    {
      nama: "Sukma",
      email: "sukma17@gmail.com",
    },
    {
      nama: "AliJhon",
      email: "johnLI@gmail.com",
    },
  ];
  res.render("index", {
    nama: "John", 
    title: "Halaman Home",
    mahasiswa,
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/products/:id", (req, res) => {
  res.send(`<h1>Product ID : ${req.params.id} <br> Category ID : ${req.query.category} </h1>`);
});

// error page
app.use("/", (req, res) => {
  res.status(404).send("<h1>Page not found</h1>");
});

// listener app
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
