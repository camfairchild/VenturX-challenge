"use strict";
var express = require('express')
var router = express.Router()

router.route("/")
    // Should return error, no name
    .get (async function(req, res) {
        res.status(200);
        res.send("ERROR: No name was passed!");
});

router.route("/:name")
    // Should return "Hello, {name}!"
    .get (async function(req, res) {
    res.status(200);

    let name = req.params.name;

    if (!req.params || !req.params.name) {
        res.send("ERROR: No name was passed!")
    } else {
        let message = `Hello, ${name}!`;
        res.send(message);
    }
});

module.exports = router