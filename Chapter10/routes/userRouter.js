//core module imports
const path = require('path');

const express = require('express');
const router = express.Router();  // create router instance

//local modules
const rootDir = require("../utils/pathUtil");

router.get("/", (req, res) => {
    res.sendFile(path.join(rootDir, '../views/home.html'));
});

module.exports = router;  // export router instance
