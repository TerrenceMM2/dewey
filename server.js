const express = require('express');
require('dotenv').config();
const path = require("path");
const morganConfig = require('./config/morganConfig');
const app = express();
const PORT = 5000;
const compression = require('compression')

// Server compression
app.use(compression());

// Middleware Parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client', 'build')));

// Morgan logging
app.use(morganConfig);

app.get('/test', (req, res) => {
    res.json({ msg: 'Hello from the back on AWS!' });
});

app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}.`);
});