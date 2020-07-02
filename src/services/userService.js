import db from '../models';

exports.getUserBooks = async (req, res, next) => {
    const userId = req.user.dataValues.id;

    try {
        const profile = await db.user.findOne({
            where: {
                id: userId
            },
            include: {
                model: db.book,
                through: { attributes: [] }
            }
        });
        return {
            error: false,
            statusCode: 200,
            data: profile.books
        };
    } catch (error) {
        return {
            error: true,
            statusCode: 500,
            error
        };
    }
};

exports.deleteUserBook = async (req, res, next) => {
    const userId = req.user.dataValues.id;
    const bookId = req.body.bookId;

    try {
        await db.ownership.destroy({
            where: {
                userId,
                bookId
            }
        });

        return {
            error: false,
            statusCode: 200,
            msg: 'Book deleted.'
        };
    } catch (error) {
        return {
            error: true,
            statusCode: 500,
            error
        };
    }
};

exports.updateUser = async (req, res, next) => {
    const userId = req.user.dataValues.id;
    const { firstName, lastName, email } = req.body;
    try {
        const isUpdated = await db.user.update(
            { firstName, lastName, email },
            { where: { id: userId } }
        );

        if (isUpdated) {
            const user = await db.user.findOne({
                where: {
                    id: userId
                }
            });

            return {
                error: false,
                statusCode: 200,
                updatedUser: {
                    id: user.id,
                    email: user.email,
                    firstName: user.firstName,
                    lastName: user.lastName
                }
            };
        }
    } catch (error) {
        return {
            error: true,
            statusCode: 500,
            error
        };
    }
};
