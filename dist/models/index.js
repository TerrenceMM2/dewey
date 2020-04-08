"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _sequelize = _interopRequireDefault(require("sequelize"));

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var env = process.env.NODE_ENV || 'development';
console.log(env);

var config = require(_path["default"].join(__dirname, '..', 'config', 'config.js'))[env];

var sequelize = new _sequelize["default"](config.database, config.username, config.password, config);
var Book = sequelize["import"](__dirname + '/Book.js');
var User = sequelize["import"](__dirname + '/User.js');
var models = {
  Book: Book.init(),
  User: User.init()
};
Object.values(models).filter(function (model) {
  return typeof model.associate === 'function';
}).forEach(function (model) {
  return model.associate(models);
});

var db = _objectSpread({}, models, {
  sequelize: sequelize
});

var _default = db;
exports["default"] = _default;