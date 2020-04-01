const { morganConfig } = require('../config/morganConfig');
const compression = require('compression');
const cors = require('cors');

class Middleware {
  // constructor brings in app and express
  constructor(app, express) {
    this.app = app;
    this.express = express;
  }

  init() {
    // gzips the node server
    this.app.use(compression());

    // enables cors
    this.app.use(cors());

    // express parsing
    this.app.use(this.express.urlencoded({ extended: true }));
    this.app.use(this.express.json());

    // morgan logging activation
    this.app.use(morganConfig);
  }
}

module.exports = {
  Middleware
};
