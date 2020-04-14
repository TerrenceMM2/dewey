module.exports = function (sequelize, Sequelize) {
    const Ownership = sequelize.define('ownership', {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4
        },
        userId: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });

    return Ownership;
};
