const path = require("path");

const express = require("express");
const userRouter = express.Router();


const rootDir = require("../utils/pathUtil");
const { registeredHomes } = require("./hostRouter");

userRouter.get("/homes", (req, res, next) => {
  console.log(registeredHomes);
  res.sendFile(path.join(rootDir, "views", "homes.html"));
});


module.exports = userRouter;
