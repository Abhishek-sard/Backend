const http = require("http");
const testingSyntax = require("./testingSyntax");
const runtime = require("./runtime");
const LogicalError = require("./Logical");

const Server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  testingSyntax();
    // testingSyntax();
    // runtime();
    LogicalError();
});

const PORT = 3000;
Server.listen(PORT, () => {
  console.log(`Server is running on address http://localhost:${PORT}`);
});
