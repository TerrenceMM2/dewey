import db from '../models';
const axios = require('axios');

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
    try {
        const book = await db.book.findAll({
            where: {
                isbn: isbn
            }
        });

        console.log('book1: ', book);

        if (book.length === 0) {
            const gbData = await axios.get(
                `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`
            );

            const { title, authors, description } = gbData.data.volumeInfo;
            const { thumbnail } = gbData.data.volumeInfo.imageLinks;

            const data = {
                isbn,
                bookName: title,
                bookAuthor: JSON.stringify(authors),
                bookImg: thumbnail,
                bookDesc: description
            };

            const book = await db.book.create(data);

            console.log('book2: ', book);

            return {
                error: false,
                statusCode: 200,
                data: gbData.data.items
            };
        }

        return {
            error: false,
            statusCode: 200,
            book
        };
    } catch (error) {
        return {
            error: true,
            statusCode: 500,
            error
        };
    }
};
