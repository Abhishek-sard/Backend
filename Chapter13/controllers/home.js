//External Module
const express = require("express");
const hostRouter = express.Router();

//local modules
const homesController = require("../controllers/home");

hostRouter.get("/add-home", homesController.getAddHome);
hostRouter.post("/add-home", homesController.postAddHome);

exports.getAddHome = (req, res, next) => {
  res.render("add-home", {
    pageTitle: "Add Home",
    currentPage: "Add Home",
  });
};

exports.getHome = (req, res, next) => {
  console.log(registeredHomes);
  res.render("home", {
    registeredHomes: registeredHomes,
    pageTitle: "airbnb Home",
    currentPage: "Home",
  })
};

exports.postAddHome = (req, res, next) => {
  console.log("Home Registration successful for:", req.body);
  registeredHomes.push(req.body);
  res.render("homeAdded", {
    pageTitle: "Home Added Successfully",
    currentPage: "homeAdded",
  });
};


