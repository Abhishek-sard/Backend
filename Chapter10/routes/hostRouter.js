const express = require('express');
const hostRouter = express.Router();

hostRouter.get("/add-home", (req, res) => {
  res.send(`<h1>Register Your Home Now</h1>
      <form action="/host/add-home" method="POST">
          <input type="text" name="homeName" placeholder="Home Name" required>
          <button type="submit">Add Home</button>
      </form>`);
});

hostRouter.post("/add-home", (req, res) => {
  console.log(req.body);
  res.send(`<h1>Home registered successfully</h1>
      <a href="/">Go to Home</a>`);
});

module.exports = hostRouter;
