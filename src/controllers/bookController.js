import BookService from '../services/bookService';

exports.test = async (req, res, next) => {
    try {
        const response = await BookService.test();
        return res.status(response.statusCode).json(response);
    } catch (error) {
        return res.status(error.statusCode).json(error);
    }
};

exports.getAll = async (req, res, next) => {
    try {
        const response = await BookService.getAll();
        return res.status(response.statusCode).json(response);
    } catch (error) {
        return res.status(error.statusCode).json(error);
    }
};

exports.getBookIsbn = async (req, res, next) => {
    try {
        const response = await BookService.getBookIsbn(req);
        return res.status(response.statusCode).json(response);
    } catch (error) {
        return res.status(error.statusCode).json(error);
    }
};

exports.addBook = async (req, res, next) => {
    try {
        const response = await BookService.addBook(req);
        return res.status(response.statusCode).json(response);
    } catch (error) {
        return res.status(error.statusCode).json(error);
    }
};
