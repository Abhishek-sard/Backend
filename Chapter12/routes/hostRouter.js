const path = require("path");
const express = require("express");
const {hostRouter} = express;



hostRouter.get("/add-home", (req, res) => {
  res.sendFile(path.join(rootDir, "views", 'addHome.html'));
});

const registeredHomes = [];

hostRouter.post("/add-home", (req, res) => {
  console.log('Home Registration successful for:',req.body,req.body.houseName);
  registeredHomes.push({houseName: req.body.houseName});
  res.sendFile(path.join(rootDir, "views", 'homeAdded.html'));
});


exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;