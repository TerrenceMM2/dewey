import Sequelize from 'sequelize';
import path from 'path';
import fs from 'fs';

const env = process.env.NODE_ENV || 'development';
console.log(env)
const config = require(path.join(__dirname, '..', 'config', 'config.js'))[env];
const sequelize = new Sequelize(config.database, config.username, config.password, config);

const Book = sequelize.import(__dirname + '/Book.js');
const User = sequelize.import(__dirname + '/User.js');

const models = {
  Book: Book.init(),
  User: User.init(),
};

Object.values(models)
  .filter((model) => typeof model.associate === 'function')
  .forEach((model) => model.associate(models));

const db = {
  ...models,
  sequelize,
};

export default db;
