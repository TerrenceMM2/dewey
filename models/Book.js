import Sequelize from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class Book extends Sequelize.Model {
    static init() {
      return super.init(
        {
          // columns go here
        },
        {
          sequelize,
          tableName: 'books',
        }
      );
    }
  }

  return Book;
};
