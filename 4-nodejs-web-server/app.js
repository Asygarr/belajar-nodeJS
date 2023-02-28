const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  console.log(url);

  if (url === "/") {
    fs.readFileSync("index.html", (err, data) => {
      if(err) {
        res.writeHead(404);
        res.write("<h1>404 Page</h1>");
      } else {
        res.write(data);
      }
      res.end();
    });
  } else if (url === "/about") {
    res.write("<h1>About Page</h1>");
    res.end();
  } else if (url === "/contact") {
    res.write("<h1>Contact Page</h1>");
    res.end();
  } else {
    res.write("<h1>404 Page</h1>");
    res.end();
  }

  res.writeHead(200, {
    "Content-Type": "text/html",
  });
});

server.listen(3000, () => {
  console.log("Server is up on port 3000.");
});
