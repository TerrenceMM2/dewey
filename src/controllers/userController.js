import UserService from '../services/userService';

exports.test = async (req, res, next) => {
    try {
        const response = await UserService.test();
        return res.status(response.statusCode).json(response);
    } catch (error) {
        return res.status(error.statusCode).json(error);
    }
};

exports.register = async (req, res, next) => {
    try {
        const response = await UserService.register(req, res, next);
        return res.status(response.statusCode).json(response);
    } catch (error) {
        return res.status(error.statusCode).json(error);
    }
};

exports.login = async (req, res, next) => {
    try {
        const response = await UserService.login(req, res, next);
        return res.status(response.statusCode).json(response);
    } catch (error) {
        return res.status(error.statusCode).json(error);
    }
};

exports.validate = async (req, res, next) => {
    try {
        const response = await UserService.validate();
        return res.status(response.statusCode).json(response);
    } catch (error) {
        return res.status(error.statusCode).json(error);
    }
};

exports.getUserBooks = async (req, res, next) => {
    try {
        const response = await UserService.getUserBooks(req);
        return res.status(response.statusCode).json(response);
    } catch (error) {
        return res.status(error.statusCode).json(error);
    }
};
