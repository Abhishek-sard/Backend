const http = require("http");
const userRequestHandler = require('./User');

const Server = http.createServer(userRequestHandler);

const PORT = 3000;
Server.listen(PORT, () => {
  console.log(`Server is running on address http://localhost:${PORT}`);
});
