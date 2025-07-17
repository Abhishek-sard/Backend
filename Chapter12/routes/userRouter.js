const path = require("path");
const express = require("express");
const userRouter = express.Router();
const rootDir = require("../utils/pathUtil");
const { registeredHomes } = require("./hostRouter");

// GET / - Show home page
userRouter.get("/", (req, res) => {
  try {
    console.log('Currently registered homes:', registeredHomes);
    res.sendFile(path.join(rootDir, "views", "home.html"));
  } catch (error) {
    console.error('Error serving home page:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = userRouter;
module.exports = registeredHomes;