import BookService from '../services/bookService';
import querystring from 'querystring';

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

exports.getBook = async (req, res, next) => {
    const { searchTerm } = req.params;
    const { searchType } = req.query;

    try {
        let response;

        switch (searchType) {
            case 'isbn':
                response = await BookService.getBookIsbn(searchTerm);
                break;
            case 'author':
                response = await BookService.getBookAuthor(searchTerm);
                break;
            case 'title':
                response = await BookService.getBookTitle(searchTerm);
                break;
        }

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
