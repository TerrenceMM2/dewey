const db = require('../models');
const path = require('path');
const chalk = require('chalk');
const { PORT } = require('../constants/');

class Connection {
  constructor(app, express) {
    this.app = app;
    this.express = express;
  }

  async authenticate() {
    try {
      await db.sequelize.authenticate();
      console.log('Connection to the database was successful.');
      this.connect();
    } catch (err) {
      console.error('Cannot establish a database connection:\n', err);
    }
  }

  async connect() {
    try {
      await db.sequelize.sync({ alter: true });
      this.app.use(this.express.static(path.join(__dirname, 'client', 'build')));
      this.app.listen(PORT, () => console.log(`Server running on port ${chalk.green.bold(PORT)}!`));
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = {
  Connection
};
