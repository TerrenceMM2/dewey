"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.morganConfig = void 0;

var _morgan = _interopRequireDefault(require("morgan"));

var _chalk = _interopRequireDefault(require("chalk"));

var morganConfig = (0, _morgan["default"])(function (tokens, req, res) {
  return [_chalk["default"].green.bold(tokens.method(req, res)), _chalk["default"].red.bold(tokens.status(req, res)), _chalk["default"].white(tokens.url(req, res)), _chalk["default"].yellow(tokens['response-time'](req, res) + ' ms')].join(' ');
});
exports.morganConfig = morganConfig;