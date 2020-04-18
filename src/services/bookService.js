import db from '../models';
import { isbnValidation } from '../helpers/validationHelper';
import axios from 'axios';

exports.test = async query => {
    try {
        return {
            error: false,
            statusCode: 200,
            msg: 'Testing endpoint works correctly.'
        };
    } catch (errors) {
        return {
            error: true,
            statusCode: 500,
            errors
        };
    }
};

exports.getAll = async () => {
    try {
        const items = await db.book.findAll();
        const total = items.length;

        return {
            error: false,
            statusCode: 200,
            total,
            data: items
        };
    } catch (error) {
        return {
            error: true,
            statusCode: 500,
            error
        };
    }
};

exports.getBookIsbn = async req => {
    const { isbn } = req.params;

    const { error } = await isbnValidation(req.params);

    if (error)
        return {
            error: true,
            statusCode: 400,
            data: error.details[0].message
        };

    try {
        // Finds book in local DB by ISBN first
        const book = await db.book.findAll({
            where: {
                isbn: isbn
            }
        });

        // If 0 results are return, calls the Google Books API
        if (book.length === 0) {
            const gbData = await axios.get(
                `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`
            );

            const { title, authors, description } = gbData.data.items[0].volumeInfo;
            const { thumbnail } = gbData.data.items[0].volumeInfo.imageLinks;

            const data = {
                isbn,
                bookName: title,
                bookAuthor: JSON.stringify(authors),
                bookImg: thumbnail,
                bookDesc: description
            };

            // Creates local DB record
            const book = await db.book.create(data);

            return {
                error: false,
                statusCode: 201,
                data: book.dataValues
            };
        }

        return {
            error: false,
            statusCode: 200,
            book: book[0]
        };
    } catch (error) {
        return {
            error: true,
            statusCode: 500,
            error
        };
    }
};

exports.addBook = async req => {
    try {
        const userId = req.user.dataValues.id;
        const bookId = req.body.bookId;

        const data = await db.ownership.create({ userId, bookId });

        return {
            error: false,
            statusCode: 201,
            msg: 'Book added.',
            data
        };
    } catch (error) {
        return {
            error: true,
            statusCode: 500,
            error
        };
    }
};
