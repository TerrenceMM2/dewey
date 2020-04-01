const express = require('express');
require('dotenv').config();
const app = express();
const { Connection } = require('./loaders/Connection');
const { Middleware } = require('./loaders/Middleware');

const middleware = new Middleware(app, express);
middleware.init();

// Routes
app.get('/test', (req, res) => res.json({ msg: 'Hello from the back on AWS!' }));

// Authenticate database and launch server
const connection = new Connection(app, express);
connection.authenticate();
