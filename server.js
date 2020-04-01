const express = require('express');
require('dotenv').config();
const path = require('path');
const { morganConfig } = require('./config/morganConfig');
const app = express();
const PORT = 5000;
const compression = require('compression');
const chalk = require('chalk');
const cors = require('cors');

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

// Models
const db = require('./models');

db.sequelize.sync({ alter: true }).then(() => {
  app.use(express.static(path.join(__dirname, 'client', 'build')));
  app.listen(PORT, () => console.log(`Server running on port ${chalk.green.bold(PORT)}!`));
});
