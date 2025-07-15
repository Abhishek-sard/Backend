//External Modules
const express = require("express");

const app = express();

app.get("/", (req, res, next) => {
  console.log(req.url, req.method);
  res.send(`<h1>Welcome to airbhub </h1> 
        <a href="/add-home">Add Home</a>`);
});
app.get("/add-home", (req, res, next) => {
  res.send(`<h1>Register Your Home Now</h1>
      <form action="/add-home" method="POST">
          <input type="text" name="homeName" placeholder="Home Name" required>
          <button type="submit">Add Home</button>
      </form>`);
});

app.post("/add-home", (req, res, next) => {
  res.send(`<h1>Home Register sucessfully</h1>
      <a href="/">Go to Home</a>`);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on address http://localhost:${PORT}`);
});
