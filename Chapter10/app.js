//External Modules
const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log(req.url, req.method);
    res.send("<h1>Welcome to airbhub </h1>")
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on address http://localhost:${PORT}`);
});