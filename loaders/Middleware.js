const { morganConfig } = require('../config/morganConfig');
const compression = require('compression');
const cors = require('cors');

class Middleware {
  constructor(app, express) {
    this.app = app;
    this.express = express;
  }

  init() {
    this.app.use(compression());
    this.app.use(cors());
    this.app.use(this.express.urlencoded({ extended: true }));
    this.app.use(this.express.json());
    this.app.use(morganConfig);
  }
}

module.exports = {
  Middleware
};
