module.exports = function (sequelize, Sequelize) {
    const Book = sequelize.define('book', {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4
        },
        isbn: {
            type: Sequelize.STRING,
            allowNull: false
        },
        bookName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        bookAuthor: {
            type: Sequelize.STRING,
            allowNull: false
        },
        bookImg: {
            type: Sequelize.STRING
        },
        bookDesc: {
            type: Sequelize.TEXT
        }
    });

    Book.associate = function (models) {
        Book.belongsToMany(models.user, { through: 'ownership' });
    };

    return Book;
};
