"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Connection = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _models = _interopRequireDefault(require("../models"));

var _path = _interopRequireDefault(require("path"));

var _chalk = _interopRequireDefault(require("chalk"));

var _constants = require("../constants");

var Connection = /*#__PURE__*/function () {
  // brings in app and express
  function Connection(app, express) {
    (0, _classCallCheck2["default"])(this, Connection);
    this.app = app;
    this.express = express;
  } // authenticates the sequelize connection


  (0, _createClass2["default"])(Connection, [{
    key: "authenticate",
    value: function () {
      var _authenticate = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _models["default"].sequelize.authenticate();

              case 3:
                console.log('Connection to the database was successful.'); // if connection is successful to db, launch the app

                this.launch();
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                console.error('Cannot establish a database connection:\n', _context.t0);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 7]]);
      }));

      function authenticate() {
        return _authenticate.apply(this, arguments);
      }

      return authenticate;
    }()
  }, {
    key: "launch",
    value: function () {
      var _launch = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _models["default"].sequelize.sync({
                  alter: true
                });

              case 3:
                this.app.use(this.express["static"](_path["default"].join(__dirname, '../client', 'build'))); // launches the app

                this.app.listen(_constants.PORT, function () {
                  return console.log("Server running on port ".concat(_chalk["default"].green.bold(_constants.PORT), "!"));
                });
                _context2.next = 10;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                console.error(_context2.t0);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 7]]);
      }));

      function launch() {
        return _launch.apply(this, arguments);
      }

      return launch;
    }()
  }]);
  return Connection;
}();

exports.Connection = Connection;