const http = require("http");
// const testingSyntax = require("./testingSyntax");
const runtime = require("./runtime");


const Server = http.createServer((req, res) => {
  console.log(req.url, req.method);
    console.log(req);
    // testingSyntax();
    runtime();
});

const PORT = 3000;
Server.listen(PORT, () => {
  console.log(`Server is running on address http://localhost:${PORT}`);
});
