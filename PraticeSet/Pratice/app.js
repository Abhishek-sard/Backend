const http = require("http");
const requestHandler = require('./handler');

const server = http.createServer(requestHandler);

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server is running on address http://localhost:${PORT}`);
});
