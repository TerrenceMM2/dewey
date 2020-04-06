import Sequelize from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class User extends Sequelize.Model {
    static init() {
      return super.init(
        {
          // columns go here
        },
        {
          sequelize,
          tableName: 'users',
        }
      );
    }
  }

  return User;
};
