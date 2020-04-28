import db from '../models';

exports.getUserBooks = async (req, res, next) => {
    const userId = req.user.dataValues.id;

    try {
        const books = await db.ownership.findAll({
            where: {
                userId
            }
        });

        return {
            error: false,
            statusCode: 200,
            data: books
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
