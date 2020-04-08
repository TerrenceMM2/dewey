"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.production = exports.staging = exports.development = void 0;
var development = {
  username: process.env.DB_DEV_USERNAME,
  password: process.env.DB_DEV_PASSWORD,
  database: process.env.DB_DEV_DATABASE,
  host: process.env.DB_DEV_HOST,
  dialect: 'mysql',
  logging: false
};
exports.development = development;
var staging = {
  username: process.env.DB_TEST_USERNAME,
  password: process.env.DB_TEST_PASSWORD,
  database: process.env.DB_TEST_DATABASE,
  host: process.env.DB_TEST_HOST,
  dialect: 'mysql',
  logging: false
};
exports.staging = staging;
var production = {
  username: process.env.DB_PROD_USERNAME,
  password: process.env.DB_PROD_PASSWORD,
  database: process.env.DB_PROD_DATABASE,
  host: process.env.DB_PROD_HOST,
  dialect: 'mysql',
  logging: false
};
exports.production = production;