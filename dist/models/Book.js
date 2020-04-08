"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _sequelize = _interopRequireDefault(require("sequelize"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

module.exports = function (sequelize, DataTypes) {
  var Book = /*#__PURE__*/function (_Sequelize$Model) {
    (0, _inherits2["default"])(Book, _Sequelize$Model);

    var _super = _createSuper(Book);

    function Book() {
      (0, _classCallCheck2["default"])(this, Book);
      return _super.apply(this, arguments);
    }

    (0, _createClass2["default"])(Book, null, [{
      key: "init",
      value: function init() {
        return (0, _get2["default"])((0, _getPrototypeOf2["default"])(Book), "init", this).call(this, {// columns go here
        }, {
          sequelize: sequelize,
          tableName: 'books'
        });
      }
    }]);
    return Book;
  }(_sequelize["default"].Model);

  return Book;
};