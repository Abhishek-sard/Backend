const path = require("path");
const express = require("express");
const hostRouter = express.Router();
const rootDir = require("../utils/pathUtil");

// Store registered homes in memory (consider using a database in production)
const registeredHomes = [];

// GET /host/add-home - Show add home form
hostRouter.get("/add-home", (req, res) => {
  try {
    res.sendFile(path.join(rootDir, "views", "addHome.html"));
  } catch (error) {
    console.error('Error serving add-home form:', error);
    res.status(500).send('Internal Server Error');
  }
});

// POST /host/add-home - Process home addition
hostRouter.post("/add-home", express.urlencoded({ extended: true }), (req, res) => {
  try {
    const { homeName } = req.body;
    
    if (!homeName) {
      return res.status(400).send('Home name is required');
    }

    console.log('Home registration successful for:', homeName);
    registeredHomes.push({ homeName });
    
    // Redirect to success page
    res.sendFile(path.join(rootDir, "views", "homeAdded.html"));
  } catch (error) {
    console.error('Error processing home addition:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = {
  hostRouter,
  registeredHomes
};