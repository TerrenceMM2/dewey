"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

require("dotenv/config");

var _Connection = require("./loaders/Connection");

var _Middleware = require("./loaders/Middleware");

var app = (0, _express["default"])(); // Middleware initialization

var middleware = new _Middleware.Middleware(app, _express["default"]);
middleware.init(); // Routes

app.get('/test', function (req, res) {
  return res.json({
    msg: 'Hello from AWS! This application was last updated on Wednesday, April 8th, 2020'
  });
}); // Authenticate database and launch server

var connection = new _Connection.Connection(app, _express["default"]);
connection.authenticate();