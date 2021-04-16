"use strict";
let express = require("express");

let greetings = require("./routes/greetings");

let app = express();

let port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/greetings", greetings);

// 404 - runs if path isn't in routes
app.use(function(req, res, next) {
    res.status(404);
    res.send('404: Not Found');
});

// Don't call listen when testing
if (process.env.NODE_ENV !== 'test') {
    app.listen(port)
}

module.exports = app