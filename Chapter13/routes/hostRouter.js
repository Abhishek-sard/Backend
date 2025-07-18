

// External Module
const express = require('express');
const hostRouter = express.Router();

// Local Module
const rootDir = require("../utils/pathUtil");
require("../controllers/home");
const homesController = require("../controllers/home");

hostRouter.get("/add-home", homesController.getAddHome);


const registeredHomes = [];

hostRouter.post("/add-home", (req, res, next) => {
  console.log('Home Registration successful for:', req.body);
  registeredHomes.push(req.body);
  res.render('homeAdded', {pageTitle: 'Home Added Successfully', currentPage: 'homeAdded'});
})

exports.hostRouter = hostRouter;
