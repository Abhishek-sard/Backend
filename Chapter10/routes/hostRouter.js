//core module
const path = require('path');

const express = require('express');
const hostRouter = express.Router();

hostRouter.get("/add-home", (req, res) => {
  res.sendFile(path.join(__dirname, '../views/addhome.html'));
});

hostRouter.post("/add-home", (req, res) => {
res.sendFile(path.join(__dirname, '../views/Homeadded.html'));
  res.send(`<h1>Home registered successfully</h1>
      <a href="/">Go to Home</a>`);
});

module.exports = hostRouter;
