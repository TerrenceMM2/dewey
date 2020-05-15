import db from '../models';
import { isbnValidation } from '../helpers/validationHelper';
import axios from 'axios';
import Sequelize from 'sequelize';
import createBooks from '../lib/createBooks';

const { Op } = Sequelize;

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

exports.getBookIsbn = async isbn => {
    const { error } = await isbnValidation({ isbn });

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

exports.getBookAuthor = async author => {
    try {
        // Finds book in local DB by ISBN first
        const existingBooks = await db.book.findAll({
            where: {
                bookAuthor: {
                    [Op.like]: `%${author}%`
                }
            }
        });

        // If 0 results are return, calls the Google Books API
        if (existingBooks.length === 0) {
            const gbData = await axios.get(
                `https://www.googleapis.com/books/v1/volumes?q=inauthor:${author}`
            );

            const books = [];
            const { items } = gbData.data;

            for (let i = 0; i < items.length; i++) {
                const { title, authors, description } = items[i].volumeInfo;
                const { thumbnail } = items[i].volumeInfo.imageLinks;
                let isbn;

                for (let j = 0; j < items[i].volumeInfo.industryIdentifiers.length; j++) {
                    isbn = items[i].volumeInfo.industryIdentifiers[0].identifier;
                }

                const book = {
                    isbn,
                    bookName: title,
                    bookAuthor: JSON.stringify(authors),
                    bookImg: thumbnail,
                    bookDesc: description
                };

                books.push(book);
            }

            // grabs all books returned by gb and adds them to the database for later use
            const newBooks = await createBooks(books);

            return {
                error: false,
                statusCode: 201,
                items: books.length,
                data: newBooks
            };
        }

        return {
            error: false,
            statusCode: 200,
            data: existingBooks
        };
    } catch (error) {
        return {
            error: true,
            statusCode: 500,
            error
        };
    }
};

exports.getBookTitle = async title => {
    try {
        // Finds book in local DB by ISBN first
        const existingBooks = await db.book.findAll({
            where: {
                bookName: {
                    [Op.like]: `%${title}%`
                }
            }
        });

        // If 0 results are return, calls the Google Books API
        if (existingBooks.length === 0) {
            const gbData = await axios.get(
                `https://www.googleapis.com/books/v1/volumes?q=intitle:${title}`
            );

            const books = [];
            const { items } = gbData.data;

            for (let i = 0; i < items.length; i++) {
                const { title, authors, description } = items[i].volumeInfo;
                const { thumbnail } = items[i].volumeInfo.imageLinks;
                let isbn;

                for (let j = 0; j < items[i].volumeInfo.industryIdentifiers.length; j++) {
                    isbn = items[i].volumeInfo.industryIdentifiers[0].identifier;
                }

                const book = {
                    isbn,
                    bookName: title,
                    bookAuthor: JSON.stringify(authors),
                    bookImg: thumbnail,
                    bookDesc: description
                };

                books.push(book);
            }

            // grabs all books returned by gb and adds them to the database for later use
            const newBooks = await createBooks(books);

            return {
                error: false,
                statusCode: 201,
                items: books.length,
                data: newBooks
            };
        }

        return {
            error: false,
            statusCode: 200,
            data: existingBooks
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
