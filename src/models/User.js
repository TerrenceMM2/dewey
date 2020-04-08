module.exports = function (sequelize, Sequelize) {
  const User = sequelize.define('user', {});

  return User;
};
