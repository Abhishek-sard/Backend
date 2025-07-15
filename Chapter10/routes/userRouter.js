const express = require('express');
const router = express.Router();  // create router instance

router.get("/", (req, res) => {
    res.send(`
        <h1>Welcome to Airbnb</h1>
        <a href="/host/add-home">Add Home</a>
    `);
});

module.exports = router;  // export router instance
