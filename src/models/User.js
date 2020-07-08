module.exports = function (sequelize, Sequelize) {
    const User = sequelize.define('user', {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4
        },
        firstName: {
            type: Sequelize.STRING
        },
        lastName: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        securityQuestion1: {
            type: Sequelize.STRING,
            allowNull: false
        },
        securityAnswer1: {
            type: Sequelize.STRING,
            allowNull: false
        },
        securityQuestion2: {
            type: Sequelize.STRING,
            allowNull: false
        },
        securityAnswer2: {
            type: Sequelize.STRING,
            allowNull: false
        },
        securityQuestion3: {
            type: Sequelize.STRING,
            allowNull: false
        },
        securityAnswer3: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        resetPasswordToken: {
            type: Sequelize.STRING
        },
        resetPasswordExpires: {
            type: Sequelize.STRING
        }
    });

    User.associate = function (models) {
        User.belongsToMany(models.book, { through: 'ownership' });
    };

    return User;
};
