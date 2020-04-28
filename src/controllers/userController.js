import UserService from '../services/userService';

exports.getUserBooks = async (req, res, next) => {
    try {
        const response = await UserService.getUserBooks(req);
        return res.status(response.statusCode).json(response);
    } catch (error) {
        return res.status(error.statusCode).json(error);
    }
};

exports.deleteUserBook = async (req, res, next) => {
    try {
        const response = await UserService.deleteUserBook(req);
        return res.status(response.statusCode).json(response);
    } catch (error) {
        return res.status(error.statusCode).json(error);
    }
};
