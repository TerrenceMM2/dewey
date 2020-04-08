"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Middleware = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _morganConfig = require("../config/morganConfig");

var _compression = _interopRequireDefault(require("compression"));

var _cors = _interopRequireDefault(require("cors"));

var Middleware = /*#__PURE__*/function () {
  // constructor brings in app and express
  function Middleware(app, express) {
    (0, _classCallCheck2["default"])(this, Middleware);
    this.app = app;
    this.express = express;
  }

  (0, _createClass2["default"])(Middleware, [{
    key: "init",
    value: function init() {
      // gzips the node server
      this.app.use((0, _compression["default"])()); // enables cors

      this.app.use((0, _cors["default"])()); // express parsing

      this.app.use(this.express.urlencoded({
        extended: true
      }));
      this.app.use(this.express.json()); // morgan logging activation

      this.app.use(_morganConfig.morganConfig);
    }
  }]);
  return Middleware;
}();

exports.Middleware = Middleware;