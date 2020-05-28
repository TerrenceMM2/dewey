import AuthService from '../services/authService';

exports.test = async (req, res, next) => {
    try {
        const response = await AuthService.test();
        return res.status(response.statusCode).json(response);
    } catch (error) {
        return res.status(error.statusCode).json(error);
    }
};

exports.register = async (req, res, next) => {
    try {
        const response = await AuthService.register(req, res, next);
        return res.status(response.statusCode).json(response);
    } catch (error) {
        return res.status(error.statusCode).json(error);
    }
};

exports.login = async (req, res, next) => {
    try {
        const response = await AuthService.login(req, res, next);
        return res.status(response.statusCode).json(response);
    } catch (error) {
        return res.status(error.statusCode).json(error);
    }
};

exports.checkEmail = async (req, res, next) => {
    try {
        const response = await AuthService.checkEmail(req, res, next);
        return res.status(response.statusCode).json(response);
    } catch (error) {
        return res.status(error.statusCode).json(error);
    }
};

exports.validate = async (req, res, next) => {
    try {
        const response = await AuthService.validate();
        return res.status(response.statusCode).json(response);
    } catch (error) {
        return res.status(error.statusCode).json(error);
    }
};

exports.updatePassword = async (req, res, next) => {
    try {
        const response = await AuthService.updatePassword(req, res, next);
        return res.status(response.statusCode).json(response);
    } catch (error) {
        return res.status(error.statusCode).json(error);
    }
};

exports.forgotPassword = async (req, res, next) => {
    try {
        const response = await AuthService.forgotPassword(req, res, next);
        return res.status(response.statusCode).json(response);
    } catch (error) {
        return res.status(error.statusCode).json(error);
    }
};
