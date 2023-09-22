const http = require("http");

//the http module is a server
//the createServer() takes two objects as parameters, request and response.

const server = http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.end("Welcome to our home page");
    } else if (req.url === "/about") {
      res.end("Here is our short history");
    } else {
      res.end(`
      <h1>Ooops!</h1>
      <p>We can't see to find the page you are looking for.</p>
      <a href="/">back home</a>
      `);
    }
  })
  .listen(5000);
