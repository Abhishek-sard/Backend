const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log("First dummy middleware", req.url, req.method);
  next();
});

app.use((req, res, next) => {
  console.log("Second dummy middleware", req.url, req.method);
  next();
});

app.get('/', (req, res, next) => {
  console.log("Third middleware", req.url, req.method);
  res.send("<h1>Welcome to Node Express</h1>");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on address http://localhost:${PORT}`);
});
