//core module
const path = require('path');

const express = require('express');
const hostRouter = express.Router();

//local modules
const rootDir = require("../utils/pathUtil");

hostRouter.get("/add-home", (req, res) => {
  res.sendFile(path.join(rootDir, '../views/addHome.html'));
});

hostRouter.post("/add-home", (req, res) => {
  res.sendFile(path.join(rootDir, '../views/HomeAdded.html'));
  res.send(`<h1>Home registered successfully</h1>
      <a href="/">Go to Home</a>`);
});

module.exports = hostRouter;
