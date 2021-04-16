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
        res.status(200);
        res.format({
            'text/plain': function () {
              res.send("ERROR: No name was passed!")
            },
          
            'text/html': function () {
              res.send("<p>ERROR: No name was passed!</p>")
            },
          
            'application/json': function () {
              res.send({ "error": "No name was passed!" })
            },
          
            default: function () {
              // respond with 406
              res.status(406).send('Not Acceptable')
            }
        });
    } else {
        let message = `Hello, ${name}!`;
        res.status(200);
        res.format({
            'text/plain': function () {
              res.send(message)
            },
          
            'text/html': function () {
              res.send(`<p>${message}</p>`)
            },
          
            'application/json': function () {
              res.send({ "message": message })
            },
          
            default: function () {
              // respond with 406
              res.status(406).send('Not Acceptable')
            }
        });
    }
});

module.exports = router