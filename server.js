const express = require('express');
require('dotenv').config();
const { morganConfig } = require('./config/morganConfig');
const app = express();
const compression = require('compression');
const cors = require('cors');
const { Connection } = require('./loaders/Connection');

// Server compression
app.use(compression());

// Enable CORS
app.use(cors());

// Middleware Parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Morgan logging
app.use(morganConfig);

// Routes
app.get('/test', (req, res) => res.json({ msg: 'Hello from the back on AWS!' }));

// Authenticate database and launch server
const connection = new Connection(app, express);
connection.authenticate();
