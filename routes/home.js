// Imports

const express = require('express');

// Configure Router

const router = express.Router();

// Set router routes

router.get('/', (req, res) => {
    res.render('../views/home');
});


module.exports = router;