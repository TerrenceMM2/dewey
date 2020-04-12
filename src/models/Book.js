module.exports = function (sequelize, Sequelize) {
    const Book = sequelize.define('book', {});

    return Book;
};
