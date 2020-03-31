const express = require('express');
const path = require("path");
const app = express();
var port = process.env.PORT || 3000;

// Middleware Parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "client/build")));

var server = app.listen(port, function () {
    console.log('Server running at http://127.0.0.1:' + port + '/');
});

module.exports = app;