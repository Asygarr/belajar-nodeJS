const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  // res.send("<h1>Hello World</h1>");
  res.sendFile("./index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.send("<h1>About Page</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Page</h1>");
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
